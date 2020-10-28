const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress, ApolloServer, gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const app = express();

// Some fake data
const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

// The GraphQL schema in string form
const typeDefs = gql`
  type Query { books: [Book] }
  type Book { title: String, author: String }
`;

// The resolvers
const resolvers = {
  Query: { books: () => books },
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
	// disable playground
	// playground: false 
})

server.applyMiddleware({app, cors: true, })
// Start the server
app.listen(port = 4000, () => {
  console.log(`Server is listening on http://localhost:${port}${server.graphqlPath}`)
});