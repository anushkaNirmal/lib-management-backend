const sequenceNoService = require("@src/services/sequence_no");

exports.getAll = async () => {
    try {
        const results = await sequenceNoService.getAll();
        return results.map((result) => ({
            ...result._doc,
            _id: result.id,
        }));
    } catch (error) {
        console.log("get all sequence no controler error : ", error);
        throw new Error(error.message);
    }
};

exports.getById = async (id) => {
    try {
        const result = await sequenceNoService.getById(id);
        return result === null
            ? result
            : {
                  ...result._doc,
                  _id: result.id,
              };
    } catch (error) {
        console.log("get sequence no by id controler error : ", error);
        throw new Error(error.message);
    }
};

exports.getByYear = async (year) => {
    try {
        const result = await sequenceNoService.getByYear(year);
        return result === null
            ? result
            : {
                  ...result._doc,
                  _id: result.id,
              };
    } catch (error) {
        console.log("get sequence no by year controler error : ", error);
        throw new Error(error.message);
    }
};

exports.create = async (sequenceInput) => {
    try {
        //before create check if there is already a sequence number for given the given year
        const existingSequenceNo = await sequenceNoService.getByYear(
            sequenceInput.year
        );
        if (existingSequenceNo) {
            throw new Error(
                `Sequence number already exists for year ${sequenceInput.year}`
            );
        }
        const result = await sequenceNoService.create(sequenceInput);
        return { ...result._doc, _id: result.id };
    } catch (error) {
        console.log("create sequence no controler error : ", error);
        throw new Error(error.message);
    }
};

exports.findByIdAndUpdate = async (sequenceInput) => {
    try {
        const result = await sequenceNoService.findByIdAndUpdate({
            ...sequenceInput,
        });
        // Check if result is null or undefined
        if (!result) {
            throw new Error(`No sequence number found for given ID: ${sequenceInput.id}`);
        }
        return { ...result._doc, _id: result.id };
    } catch (error) {
        console.log("update sequence no controler error : ", error);
        throw new Error(error.message);
    }
};

