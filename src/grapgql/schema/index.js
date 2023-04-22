const { gql } = require("apollo-server-express");
const { UserType, UserInputType } = require("./user");
const { BookType, BookInputType } = require("./book");
const { SequenceNoType, SequenceInputType } = require("./sequence_no");

const typeDefs = gql`
    ${UserType}
    ${UserInputType}
    ${BookType}
    ${BookInputType}
    ${SequenceNoType}
    ${SequenceInputType}

    type Query {
        users: [User!]!
        books: [Book!]!
        sequenceNos: [SequenceNo!]!
        getSequenceNoByYear(year:Int!) : SequenceNo
        getSequenceNoById(id: ID!) : SequenceNo
    }

    type Mutation {
        createUser(userInput: UserInput!): User
        createBook(bookInput: BookInput!): Book
        createSequenceNo(sequenceInput: SequenceInput!): SequenceNo
        updateSequenceNo(id:ID! , sequenceInput: SequenceInput!) : SequenceNo
    }
`;

module.exports = typeDefs;
