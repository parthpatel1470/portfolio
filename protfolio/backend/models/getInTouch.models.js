const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const getInTouchSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
    },
}, {
    timestamps: true,

});

const getInTouch = mongoose.model('getInTouch', getInTouchSchema);

module.exports = getInTouch;