'use strict';
var mongo = require('./injector')();
describe('datastore.mongo', function () {
    // it should return a module
    it('it should return a module', function () {
        expect(mongo).not.toBe(undefined);
    });
});
