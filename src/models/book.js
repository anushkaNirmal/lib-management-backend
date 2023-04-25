const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    publishedDate: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    synopsis: {
        type: String,
        required: true,
    },
    availability: {
        type: Boolean,
        required: false,
        default:true,
    },
    borrowedDate: {
        type: String,
        required: false,
        default:null,
    },
    borrowedUser: {
        type: String,
        required: false,
        default:null,
    },
    shouldReturnIn: {
        type: String,
        required: false,
        default:null,
    },
});

module.exports = mongoose.model("Book", bookSchema)