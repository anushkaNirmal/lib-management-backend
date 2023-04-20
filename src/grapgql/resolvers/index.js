const { users, createUser } = require("./user");
const { books, createBook } = require("./book");

const rooteResolver = {
    Query: {
        books,
        users,
    },
    Mutation: {
        createBook,
        createUser
    }
};

module.exports = rooteResolver;
