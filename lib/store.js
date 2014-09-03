'use strict';
var specifications = require('base.specifications'),
    logger = require('base.logger')('components/datastore/mongo'),
    merge = require('merge'),
    q = require('q'),
    mongoose = require('mongoose'),
    Model;
module.exports = specifications.base.Class.extend({
    init: function (model) {
        Model = model;
    },
    create: function (data) {
        return new Model(data).asPromise('save');
    },
    read: function () {
        return;
    },
    update: function () {
        return;
    },
    remove: function () {
        return;
    }
});