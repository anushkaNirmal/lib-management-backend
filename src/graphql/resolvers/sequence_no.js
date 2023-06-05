const sequenceNoControlers = require("@src/controlers/sequence_no");

exports.sequenceNos = async () => {
    try {
        const results = await sequenceNoControlers.getAll();
        return results;
    } catch (error) {
        console.log("get all sequence no error : ", error);
        throw new Error(error.message);
    }
};

exports.getSequenceNoById = async (parent, args) => {
    try {
        const result = await sequenceNoControlers.getById(args.id);
        return result;
    } catch (error) {
        console.log("get sequence no by id error : ", error);
        throw new Error(error.message);
    }
};

exports.getSequenceNoByYear = async (parent, args) => {
    try {
        const result = await sequenceNoControlers.getByYear(args.year);
        return result;
    } catch (error) {
        console.log("get sequence no by year error : ", error);
        throw new Error(error.message);
    }
};

exports.createSequenceNo = async (parent, args) => {
    try {
        const result = await sequenceNoControlers.create(args.sequenceInput);
        return result;
    } catch (error) {
        console.log("create sequence no error : ==============", error);
        throw new Error(error.message);
    }
};

exports.updateSequenceNo = async (parent, args) => {
    try {
        const result = await sequenceNoControlers.findByIdAndUpdate({id:args.id , ...args.sequenceInput});
        return result;
    } catch (error) {
        console.log("update sequence no error : ", error);
        throw new Error(error.message);
    }
};
