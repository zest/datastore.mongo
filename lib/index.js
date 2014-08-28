'use strict';
var specifications = require('base.specifications'),
    logger = require('base.logger')('components/datastore/mongo');
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
            logger.info('initializing...');
            return;
        },
        serialize: specifications.base.Class.abstract,
        deserialize: specifications.base.Class.abstract
    }
);
