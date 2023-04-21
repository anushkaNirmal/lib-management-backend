const SequenceNoType = `
    type SequenceNo {
        _id:ID!
        year:Int!
        sequenceNo:Int!

    }
`;

const SequenceInputType = `
    input SequenceInput{
        year:Int!
        sequenceNo:Int!
    }
`;

module.exports = { SequenceNoType, SequenceInputType };