const mongoose = require("mongoose");

const sequenceNoSchema = new mongoose.Schema({
    year: {
        type: Number,
        required: true,
    },
    sequenceNo: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("SequenceNo", sequenceNoSchema);
