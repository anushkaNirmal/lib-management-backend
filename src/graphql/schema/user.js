const UserType = `
    type User {
        _id:ID!
        username:String!
        email:String!
        password:String!
        firstName:String!
        lastName:String!
        mobile:String!
    }
`;

const UserInputType = `
    input UserInput{
        username:String!
        email:String!
        password:String!
        firstName:String!
        lastName:String!
        mobile:String!
    }
`;

module.exports = { UserType, UserInputType };
