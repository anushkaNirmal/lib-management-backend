const sequenceNoService = require("../../services/sequence_no");

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

exports.createSequenceNo = async (parent , args) => {
    try {
        const result = await sequenceNoService.create(args);
        return { ...result._doc, _id: result.id };
    } catch (error) {
        console.log("create sequence no : ", error);
        throw new Error(error);
    }
};
