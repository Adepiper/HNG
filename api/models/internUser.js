const mongoose = require('mongoose');
// Setup schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export User model
const IUser = module.exports = mongoose.model('user', userSchema);
module.exports.get = function (callback, limit) {
    IUser.find(callback).limit(limit);
}