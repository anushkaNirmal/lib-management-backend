//controler
const sequenceNoControlers = require("@src/controlers/sequence_no");

//servies
const bookService = require("@src/services/book");

//helpers
const { getUniqueIdForBook } = require("@src/helpers/books/getUniqueId");

exports.getAll = async () => {
    try {
        const results = await bookService.getAll();
        return results.map((result) => ({
            ...result._doc,
            _id: result.id,
        }));
    } catch (error) {
        console.log("get all book controler error : ", error);
        throw new Error(error.message);
    }
};

exports.create = async (args) => {
    try {
        //current year
        const currentYear = parseInt(new Date().getFullYear());
        //get the sequence number for current year
        let newSequenceNumber = null;
        const cuurentSequenceNumber =
            await sequenceNoControlers.getByYear(null, {
                year: currentYear,
            });

        //if cuurentSequenceNumber === null set it to one and create one in db
        if (cuurentSequenceNumber === null) {
            newSequenceNumber = 1;
            await sequenceNoControlers.create(
                { year: currentYear, sequenceNo: newSequenceNumber },
                { upsert: true }
            );
        } else {
            // if cuurentSequenceNumber update it by adding 1
            newSequenceNumber = cuurentSequenceNumber.sequenceNo + 1;
            await sequenceNoControlers.findByIdAndUpdate(null, {
                id: cuurentSequenceNumber._id,
                sequenceInput: {
                    year: currentYear,
                    sequenceNo: newSequenceNumber,
                },
            });
        }

        const bookId = getUniqueIdForBook(
            args.bookInput.title,
            args.bookInput.author,
            newSequenceNumber
        );

        const result = await bookService.create({
            bookInput: {
                ...args.bookInput,
                bookId: bookId,
            },
        });
        return { ...result._doc, _id: result.id };
    } catch (error) {
        console.log("create book controler error : ", error);
        throw new Error(error).message;
    }
};
