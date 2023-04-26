//resolvers
const sequenceResolvers = require("@src/graphql/resolvers/sequence_no");

//servies
const bookService = require("@src/services/book");
const sequenceService = require("@src/services/sequence_no");

//helpers
const { getUniqueIdForBook } = require("@src/helpers/books/getUniqueId");

exports.books = async () => {
    try {
        const results = await bookService.getAll();
        return results.map((result) => ({
            ...result._doc,
            _id: result.id,
        }));
    } catch (error) {
        console.log("get all book error : ", error);
        throw new Error(error);
    }
};

exports.createBook = async (parent, args, context) => {
    try {
        //current year
        const currentYear = parseInt(new Date().getFullYear());
        //get the sequence number for current year
        let newSequenceNumber = null;
        const cuurentSequenceNumber =
            await sequenceResolvers.getSequenceNoByYear(null, {
                year: currentYear,
            });

        //if cuurentSequenceNumber set it to one and create one in db
        if (cuurentSequenceNumber === null) {
            newSequenceNumber = 1;
            await sequenceService.findOneAndUpdate(
                { year: currentYear },
                { year: currentYear, sequenceNo: newSequenceNumber },
                { upsert: true }
            );
        } else {
            // if cuurentSequenceNumber update it bu adding 1
            newSequenceNumber = cuurentSequenceNumber.sequenceNo + 1;
            await sequenceResolvers.updateSequenceNo(null, {
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
        console.log("create book error : ", error);
        throw new Error(error);
    }
};
