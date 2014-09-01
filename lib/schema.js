'use strict';
var specifications = require('base.specifications'),
    logger = require('base.logger')('components/datastore/mongo'),
    merge = require('merge'),
    q = require('q'),
    mongoose = require('mongoose');
module.exports = specifications.components.DataStoreProvider.extend(
    /**
     * @lends components/datastore-mongo.prototype
     */
    {
        /**
         * @classDesc datastore-mongo
         * @exports components/datastore-mongo
         * @extends components/DataStoreProvider
         * @constructor
         * @abstract
         */
        init: function (settings, resolver) {
            logger.log('initializing...');
            var options = (settings.options || {}),
                connectionUrl = 'mongodb://' + settings.hosts.map(function (dbHost) {
                    return dbHost.host + (dbHost.port ? (':' + dbHost.port) : '');
                }).join(',');
            logger.info('connection url:', connectionUrl);
            // For long running applictions it is often prudent to enable keepAlive. Without it, after some period of 
            // time you may start to see "connection closed" errors for what seems like no reason
            // options.server.socketOptions = options.replset.socketOptions = { keepAlive: 1 };
            // Each connection, whether created with mongoose.connect or mongoose.createConnection are all backed by 
            // an internal configurable connection pool defaulting to a size of 5. Adjust the pool size using your 
            // connection options:
            // mongoose.createConnection(uri, { server: { poolSize: 4 }});
            options = merge({
                server: {
                    socketOptions: {
                        keepAlive: 1
                    },
                    poolSize: 4
                },
                replset: {
                    socketOptions: {
                        keepAlive: 1
                    }
                }
            }, options);
            this.connection = q.Promise(function (resolve, reject) {
                var conn = mongoose.createConnection(connectionUrl, options, function (error, value) {
                    logger.log('connected to database!');
                    logger.log(arguments);
                    if (error) {
                        logger.error('connection failed!');
                        logger.error(error);
                        reject(error);
                    } else {
                        resolve(conn);
                    }
                });
            });
        },
        /**
         * @function
         * @see base/Class.abstract
         * @description Serializes the module and exports it into a stream
         * @throws Function is un-implemented!
         */
        create: function (store) {
            return q.Promise(function (resolve, reject) {
                this.connection.then(function (db) {
                    var schema = db.schema(store.structure);
                    if (store.methods) {
                        Object.keys(store.methods).forEach(function (methodName) {
                            schema[methodName] = store.methods[methodName];
                        });
                    }
                    if (store.statics) {
                        Object.keys(store.statics).forEach(function (staticName) {
                            schema.statics[staticName] = store.statics[staticName];
                        });
                    }
                    // adding the queue method as an instance and static method
                    schema.methods.asPromise = schema.statics.asPromise = function (method) {
                        var deferred = q.defer(),
                            args = Array.prototype.slice.call(arguments, 1);
                        args.push(deferred.makeNodeResolver());
                        this[method].apply(this, args);
                        return deferred.promise;
                    };
                    // we add common plugins to the schema
                    schema.plugin(require('./plugins/created'));
                    schema.plugin(require('./plugins/modified'));
                    resolve(db.model(store.name, schema));
                }, function (error) {
                    reject(error);
                });
            });
        },
        /**
         * @function
         * @see base/Class.abstract
         * @description Serializes the module and exports it into a stream
         * @throws Function is un-implemented!
         */
        read: specifications.base.Class.abstract,
        /**
         * @function
         * @see base/Class.abstract
         * @description Serializes the module and exports it into a stream
         * @throws Function is un-implemented!
         */
        update: specifications.base.Class.abstract,
        /**
         * @function
         * @see base/Class.abstract
         * @description Serializes the module and exports it into a stream
         * @throws Function is un-implemented!
         */
        remove: specifications.base.Class.abstract,
        serialize: specifications.base.Class.abstract,
        deserialize: specifications.base.Class.abstract
    },
    {
        describe: function () {
            return {
                hosts: {
                    type: Array,
                    required: true,
                    value: {
                        host: {
                            required: true,
                            validator: /^[a-z0-9\/\-\.]+$/
                        },
                        port: {
                            required: false,
                            validator: /^[0-9]+$/
                        }
                    }
                },
                // db      - passed to the connection db instance
                // server  - passed to the connection server instance(s)
                // replset - passed to the connection ReplSet instance
                // user    - username for authentication (if not specified in uri)
                // pass    - password for authentication (if not specified in uri)
                // auth    - options for authentication
                // mongos  - Boolean - if true, enables High Availability support for mongos
                options: {
                    user: undefined,
                    pass: undefined
                }
            };
        }
    }
);