const User = require("../../models/users");

exports.users = async () => {
    try {
        const users = await User.find();
        return users.map((user) => ({
            ...user._doc,
            _id: user.id,
        }));
    } catch (error) {
        console.log("get user error : ", error);
        throw new Error(error);
    }
};

exports.createUser = async (args) => {
    try {
        const user = new User({
            username: args.userInput.username,
            email: args.userInput.email,
            password: args.userInput.password,
            firstName: args.userInput.firstName,
            lastName: args.userInput.lastName,
            mobile: args.userInput.mobile,
        });

        const result = await user.save();
        return { ...result._doc, _id: result.id };
    } catch (error) {
        console.log("create user error : ", error);
        throw new Error(error);
    }
};
