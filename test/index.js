'use strict';
var datastore = require('../lib'),
    expect = require('chai').expect;
describe('datastore.mongo', function () {
    // it should return a module
    it('it should return a module', function () {
        expect(datastore).not.to.equal(undefined);
    });
});
