require('module-alias/register')
const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const {
    ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");
const cors = require("cors");
const { json } = require("body-parser");
const http = require("http");
const mongoose = require("mongoose");

//rootvalues
const resolvers = require("@src/graphql/resolvers/index");
const typeDefs = require("@src/graphql/schema/index");

const DB_USERNAME = process.env.MONGO_USER;
const DB_PASSWORD = process.env.MONGO_PASSWORD;
const DB_NAME = process.env.MONGO_DB;

// Connect to MongoDB
mongoose
    .connect(
        `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@atlascluster.hwpjzo8.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Failed to connect to MongoDB" , err));

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: async () => {
        const db = mongoose.connection;
        return { db };
    },
});

(async () => {
    await server.start();
    app.use("/graphql", cors(), json(), expressMiddleware(server));
    await new Promise((resolve) => httpServer.listen({ port: 3002 }, resolve));
    console.log(`🚀 Server ready at http://localhost:3002/graphql`);
})();
