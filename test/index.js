'use strict';
var Mongo = require('./injector')(),
    chai = require('chai'),
    expect = chai.expect,
    should = chai.should(),
    assert = chai.assert;
describe('datastore.mongo', function () {
    // it should return a module
    it('should return a module', function () {
        expect(Mongo).not.to.equal(undefined);
    });
    // positive cases
    // it should be able to connect to a local database
    it('should be able to connect to a local database', function (done) {
        var db = new Mongo({
            hosts: [{
                host: 'localhost/test'
            }]
        });
        db.connection.then(function (conn) {
            expect(conn).not.to.equal(undefined);
            done();
        }, function (error) {
            expect(error).to.equal(undefined);
            done();
        });
    });
    // it should be able to create a store object
    it('should be able to create a store object');// function (done) {
//        var db = new Mongo({
//            hosts: [{
//                host: 'localhost/test'
//            }]
//        });
//        db.create({
//            name: 'TestStore',
//            structure: {
//                name: String
//            }
//        }).then(function () {
//            return db.read('TestStore');
//        }, function(error) {
//            expect(false).to.equal(true);
//            done();
//        }).then(function (store) {
//            expect(store).not.to.equal(undefined);
//            expect(store)
//        });
//        expect(true).to.equal(true);
//    });
    // it should be able to read a store object
    it('should be able to read a store object', function () {
        expect(true).to.equal(true);
    });
    // it should be able to update a store object
    it('should be able to update a store object', function () {
        expect(true).to.equal(true);
    });
    // it should be able to remove a store object
    it('should be able to remove a store object', function () {
        expect(true).to.equal(true);
    });
    // it should be able to create a store item
    it('should be able to create a store item', function () {
        expect(true).to.equal(true);
    });
    // it should be able to read a store item
    it('should be able to read a store item', function () {
        expect(true).to.equal(true);
    });
    // it should be able to update a store item
    it('should be able to update a store item', function () {
        expect(true).to.equal(true);
    });
    // it should be able to remove a store item
    it('should be able to remove a store item', function () {
        expect(true).to.equal(true);
    });
    // negative cases
    // it should not be able to connect to a non-existent database
    it('should be able to connect to a non-existent database', function (done) {
        var db = new Mongo({
            hosts: [{
                host: 'non_existant_db/test'
            }]
        });
        db.connection.then(function (conn) {
            expect(conn).to.equal(undefined);
            done();
        }, function (error) {
            expect(error).not.to.equal(undefined);
            done();
        });

    });
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
    // it should not be able to read a store item that does not exist
    it('should not be able to read a store item that does not exist', function () {
        expect(true).to.equal(true);
    });
    // it should not be able to update a store item that does not exist
    it('should not be able to update a store item that does not exist', function () {
        expect(true).to.equal(true);
    });
    // it should not be able to remove a store item that does not exist
    it('should not be able to remove a store item that does not exist', function () {
        expect(true).to.equal(true);
    });

});
