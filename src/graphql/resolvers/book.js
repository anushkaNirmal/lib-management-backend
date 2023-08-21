//controlers
const bookControler = require("@src/controlers/book");

exports.books = async () => {
    try {
        const results = await bookControler.getAll();
        return results;
    } catch (error) {
        console.log("get all book error : ", error);
        throw new Error(error.message);
    }
};

exports.createBook = async (parent, args) => {
    try {
        const result = await bookControler.create(args);
        return result
    } catch (error) {
        console.log("create book error : ", error);
        throw new Error(error.message);
    }
};
