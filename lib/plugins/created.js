'use strict';
module.exports = function (schema, options) {
    schema.add({
        created: {
            by: String,
            date: Date
        }
    });
    schema.pre('save', function (next) {
        if (!this.created.by) {
            this.created = {
                by: 'admin',
                date: new Date()
            };
        }
        next();
    });
};