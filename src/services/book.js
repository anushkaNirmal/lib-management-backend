const Book = require("../models/book");


exports.getAll = async () => {
    try {
        const books = await Book.find();
        return books
    } catch (error) {
        console.log("get all book service error : ", error);
        throw new Error(error);
    }
}
exports.create = async (args) => {
    try {
        const book = new Book({
            title: args.bookInput.title,
            author: args.bookInput.author,
            isbn: args.bookInput.isbn,
            publisher: args.bookInput.publisher,
            publishedDate: args.bookInput.publishedDate,
            genre: args.bookInput.genre,
            language: args.bookInput.language,
            synopsis: args.bookInput.synopsis,
        });
        const result = await book.save();
        return result;
    } catch (error) {
        console.log("creeate book service error : ", error);
        throw new Error(error);
    }
};
