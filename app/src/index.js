// 1. Require 'apollo-server'
const {ApolloServer} = require("apollo-server-express")
const express = require("express")
const http = require('http')
const expressPlayground = require('graphql-playground-middleware-express').default
const typeDefs = require("./typeDefs")
const {resolvers} = require("./mainResolver")

async function startApolloServer(typeDefs, resolvers) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        csrfPrevention: true,
    });
    // crucial step: You must `await server.start()` before calling `server.applyMiddleware`
    await server.start();
    server.applyMiddleware({app});

    app.get('/api', (req, res) => res.end('Welcome to the photoShare API'))
    app.get('/playground', expressPlayground({endpoint: "/graphql"}))

    await new Promise((resolve) => httpServer.listen({port: 4000}, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers).then(r => console.log)