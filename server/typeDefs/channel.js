const { gql } = require("apollo-server-express");

module.exports = gpl`
   type channel {
      id: ID!
      name: String!
      slug: String!
      createdAt: String!
      updatedAt: String!

   }
`