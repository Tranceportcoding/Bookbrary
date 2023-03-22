const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mybraryDB');


const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Author', authorSchema);