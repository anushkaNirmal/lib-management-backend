const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");

//rootvalues
const rooteResolver = require('./grapgql/resolvers/index')
const rootSchema = require('./grapgql/schema/index')

const app = express();

app.use(bodyParser.json());

const DB_USERNAME = process.env.MONGO_USER;
const DB_PASSWORD = process.env.MONGO_PASSWORD;
const DB_NAME = process.env.MONGO_DB;

app.use(
    "/graphql",
    graphqlHTTP({
        schema: rootSchema,
        rootValue:rooteResolver ,
        graphiql: true,
    })
);

mongoose
    .connect(
        `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@atlascluster.hwpjzo8.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("DB Successfully Connected");
        app.listen(3002);
    })
    .catch((err) => {
        console.error("DB Error :", err);
    });
