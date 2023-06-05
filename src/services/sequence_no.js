const SequenceNo = require("@src/models/sequence_no");

exports.getAll = async () => {
    try {
        const sequenceNos = await SequenceNo.find();
        return sequenceNos;
    } catch (error) {
        console.log("get all sequence no service error : ", error);
        throw new Error(error);
    }
};

exports.getById = async (id) => {
    try {
        const sequenceNo = await SequenceNo.findById(id);
        return sequenceNo;
    } catch (error) {
        console.log("get sequence no by id service error : ", error);
        throw new Error(error);
    }
};

exports.getByYear = async (year) => {
    try {
        const sequenceNos = await SequenceNo.findOne({ year: year });
        return sequenceNos;
    } catch (error) {
        console.log("get sequence no by year service error : ", error);
        throw new Error(error);
    }
};

exports.create = async (sequenceInput) => {
    try {
        const sequence_no = new SequenceNo({
            year: sequenceInput.year,
            sequenceNo: sequenceInput.sequenceNo,
        });
        const result = await sequence_no.save();
        return result;
    } catch (error) {
        console.log("create sequence no service error : ", error);
        throw new Error(error);
    }
};

exports.findByIdAndUpdate = async ({ id, ...rest }) => {
    try {
        const result = await SequenceNo.findByIdAndUpdate(
            id,
            { $set: { ...rest } },
            { new: true }
        );
        return result;
    } catch (error) {
        console.log("update sequence no service error : ", error);
        throw new Error(error);
    }
};

exports.findOneAndUpdate = async (conditions, update, options) => {
    try {
        const result = await SequenceNo.findOneAndUpdate(
            { ...conditions },
            { ...update },
            { ...options }
        );
        return result;
    } catch (error) {
        console.log("find one and update sequence no service error : ", error);
        throw new Error(error);
    }
};
