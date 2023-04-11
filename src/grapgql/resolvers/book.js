const bookService = require('../../services/book')

module.exports = {
    books : async () => {
        try {
            const results = await bookService.getAll();
            return results.map((result) => ({
                ...result._doc,
                _id: result.id,
            }));
        } catch (error) {
            console.log("get all book error : ", error);
            throw new Error(error);
        }
    },
    createBook: async (args) => {
        try {
            const result = await bookService.create(args);
            return { ...result._doc, _id: result.id };
        } catch (error) {
            console.log("create book error : ", error);
            throw new Error(error);
        }
    },
};
