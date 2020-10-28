const { gql } = require("apollo-server-express");

module.exports = gpl`
   type Reply {
      id: ID!
      content: String!
      user: User!
      bestAnswer: Boolean!
      createdAt: String!
      updatedAt: String!
   }
`