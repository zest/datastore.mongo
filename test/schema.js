'use strict';
// shut down the logger
// require('base.logger').configure([]);
var Schema = require('../lib/schema'),
    expect = require('chai').expect;
describe('datastore.mongo', function () {
    // it should return a module
    it('should return a module', function () {
        expect(Schema).not.to.equal(undefined);
    });
    // positive cases
    // it should be able to connect to a local database
    it('should be able to connect to a local database', function (done) {
        var db = new Schema({
            hosts: [{
                host: 'localhost/test'
            }]
        });
        db.connection.then(function (conn) {
            expect(conn).not.to.equal(undefined);
            done();
        }).catch(function (error) {
            done(error);
        });
    });
    // it should be able to create a store object
    it('should be able to create and read a store object', function (done) {
        var db = new Schema({
            hosts: [{
                host: 'localhost/test'
            }]
        });
        db.create({
            name: 'TestStore',
            structure: {
                name: String
            }
        }).then(function () {
            return db.read('TestStore');
        }).then(function (store) {
            expect(store).not.to.equal(undefined);
            done();
        }).catch(function (error) {
            done(error);
        });
    });
    // it should be able to update a store object
    it('should be able to update a store object', function () {
        expect(true).to.equal(true);
    });
    // it should be able to remove a store object
    it('should be able to remove a store object', function () {
        expect(true).to.equal(true);
    });
    // negative cases
    // it should not be able to create an already existing store object
    it('should not be able to create an already existing store object', function () {
        expect(true).to.equal(true);
    });
    // it should be able to read a store object that is not defined
    it('should be able to read a store object that is not defined', function () {
        expect(true).to.equal(true);
    });
    // it should not be able to update a store object that is not defined
    it('should not be able to update a store object that is not defined', function () {
        expect(true).to.equal(true);
    });
    // it should not be able to remove a store object that is not defined
    it('should not be able to remove a store object that is not defined', function () {
        expect(true).to.equal(true);
    });
});
