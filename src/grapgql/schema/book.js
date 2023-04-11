const BookType = `
    type Book {
        _id:ID!
        title:String!
        author:String!
        isbn:String!
        publisher:String!
        publishedDate:String!
        genre:String!
        language:String!
        synopsis:String!
    }
`;

const BookInputType = `
    input BookInput{
        title:String!
        author:String!
        isbn:String!
        publisher:String!
        publishedDate:String!
        genre:String!
        language:String!
        synopsis:String!
    }
`;

module.exports = { BookType, BookInputType };

// const BookType = `
//     type book {
//         _id:ID!
//         bookId:String!
//         title:String!
//         author:String!
//         isbn:String!
//         publisher:String!
//         publishedDate:String!
//         genre:String!
//         language:String!
//         synopsis:String!
//         availabiluty:Boolean!
//         borrowedDate:String!
//         borrowedUser:String!
//         shouldReturnIn:String!
//     }
// `;
