const sequenceNoService = require("@src/services/sequence_no");

exports.sequenceNos = async () => {
    try {
        const results = await sequenceNoService.getAll();
        return results.map((result) => ({
            ...result._doc,
            _id: result.id,
        }));
    } catch (error) {
        console.log("get all sequence no error : ", error);
        throw new Error(error);
    }
};

exports.getSequenceNoById = async (parent, args) => {
    try {
        const result = await sequenceNoService.getById(args.id);
        return result === null
            ? result
            : {
                  ...result._doc,
                  _id: result.id,
              };
    } catch (error) {
        console.log("get sequence no by id error : ", error);
        throw new Error(error);
    }
};

exports.getSequenceNoByYear = async (parent, args) => {
    try {
        const result = await sequenceNoService.getByYear(args.year);
        return result === null
            ? result
            : {
                  ...result._doc,
                  _id: result.id,
              };
    } catch (error) {
        console.log("get sequence no by year error : ", error);
        throw new Error(error);
    }
};

exports.createSequenceNo = async (parent, args) => {
    try {

        console.log(parent , "parent")
        //before create check if there is already a sequence number for given the given year
        const existingSequenceNo = await sequenceNoService.getByYear(args.sequenceInput.year);
        if (existingSequenceNo) {
            throw new Error(`Sequence number already exists for year ${args.sequenceInput.year}`);
        }
        const result = await sequenceNoService.create(args);
        return { ...result._doc, _id: result.id };
    } catch (error) {
        console.log("create sequence no : ", error);
        throw new Error(error);
    }
};

exports.updateSequenceNo = async (parent, args) => {
    try {
        const result = await sequenceNoService.findByIdAndUpdate({id:args.id , ...args.sequenceInput});
        return { ...result._doc, _id: result.id };
    } catch (error) {
        console.log("update sequence no : ", error);
        throw new Error(error);
    }
};
