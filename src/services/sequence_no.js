const SequenceNo = require('../models/sequence_no')

exports.getAll = async () => {
    try {
        const sequenceNos = await SequenceNo.find();
        return sequenceNos;
    } catch (error) {
        console.log("get all sequence no service error : ", error);
        throw new Error(error);
    }
};
exports.create = async (args) => {
    try {
        const sequence_no = new SequenceNo({
            year: args.sequenceInput.year,
            sequenceNo: args.sequenceInput.sequenceNo,
        });
        const result = await sequence_no.save();
        return result;
    } catch (error) {
        console.log("creeate sequence no service error : ", error);
        throw new Error(error);
    }
};
