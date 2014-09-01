'use strict';
module.exports = function (schema, options) {
    schema.add({
        modified: {
            by: String,
            date: Date
        }
    });
    schema.pre('save', function (next) {
        this.modified = {
            by: 'admin',
            date: new Date()
        };
        next();
    });
};