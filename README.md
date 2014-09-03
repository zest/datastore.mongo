[![Quality](https://codeclimate.com/github/soul-infra/datastore.mongo/badges/gpa.svg)](https://codeclimate.com/github/soul-infra/datastore.mongo)
[![Dependencies](https://david-dm.org/soul-infra/datastore.mongo.svg)](https://david-dm.org/soul-infra/datastore.mongo)
[![Build Status](https://secure.travis-ci.org/soul-infra/datastore.mongo.svg)](https://travis-ci.org/soul-infra/datastore.mongo)
[![Coverage Status](https://img.shields.io/coveralls/soul-infra/datastore.mongo.svg)](https://coveralls.io/r/soul-infra/datastore.mongo)

# soul-infra / datastore.mongo
> datastore.mongo is a mongoDB datastore component for soul

    var Datastore = require('datastore.mongo');
    var User = DataStore.createSchema('User', {
        username: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            encrypted: true
        },
        status: String
    });
    
    var me = User.create({
        username: 'foo',
        password: 'bar',
        status: 'x'
    });
    
    var me = new User({username: 'foo'});
    
    me.