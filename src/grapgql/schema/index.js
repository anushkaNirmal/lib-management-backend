const { gql } = require("apollo-server-express");
const { UserType, UserInputType } = require("./user");
const { BookType, BookInputType } = require("./book");

const typeDefs = gql`
    ${UserType}
    ${UserInputType}
    ${BookType}
    ${BookInputType}

    type Query {
        users: [User!]!
        books: [Book!]!
    }

    type Mutation {
        createUser(userInput: UserInput!): User
        createBook(bookInput: BookInput!): Book
    }
`;

module.exports = typeDefs;
