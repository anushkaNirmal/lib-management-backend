const { buildSchema } = require("graphql");
const { UserType, UserInputType } = require('./user')
const { BookType, BookInputType } = require('./book')

const rootSchema = buildSchema(
    `
        ${UserType}
        ${UserInputType}
        ${BookType}
        ${BookInputType}

        type RootQuery {
            users:[User!]!
            books:[Book!]!
        }

        type RootMutation {
            createUser(userInput:UserInput!) : User
            createBook(bookInput:BookInput!) : Book
        }

        schema {
            query:RootQuery
            mutation:RootMutation
        }
    `
)

module.exports = rootSchema