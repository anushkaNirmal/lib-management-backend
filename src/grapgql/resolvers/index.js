const { users, createUser } = require("./user");
const { books, createBook } = require("./book");
const { sequenceNos, createSequenceNo } = require("./sequence_no");

const rooteResolver = {
    Query: {
        books,
        users,
        sequenceNos,
    },
    Mutation: {
        createBook,
        createUser,
        createSequenceNo,
    },
};

module.exports = rooteResolver;
