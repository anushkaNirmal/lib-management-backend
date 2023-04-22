const { users, createUser } = require("./user");
const { books, createBook } = require("./book");
const {
    sequenceNos,
    getSequenceNoByYear,
    getSequenceNoById,
    createSequenceNo,
    updateSequenceNo
} = require("./sequence_no");

const rooteResolver = {
    Query: {
        books,
        users,
        sequenceNos,
        getSequenceNoByYear,
        getSequenceNoById,
    },
    Mutation: {
        createBook,
        createUser,
        createSequenceNo,
        updateSequenceNo
    },
};

module.exports = rooteResolver;
