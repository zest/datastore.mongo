'use strict';
var specifications = require('base.specifications'),
    logger = require('base.logger')('components/datastore/mongo'),
    merge = require('merge'),
    q = require('q'),
    mongoose = require('mongoose');
module.exports = specifications.base.Class.extend({
    init: function () {
        return;
    },
    create: function () {
        return;
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