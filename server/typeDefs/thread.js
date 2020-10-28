const { gql } = require("apollo-server-express");

module.exports = gpl`
   type Thread {
      id: ID!
      title: String!
      slug: String!
      content: String!
      creator: User!
      channel: Channel!
      status: ThreadStatus!
      isLocked: Boolean!
      lastRepliedAt: String!
      createdAt: String!
      updatedAt: Sting!
   }

   enum ThreadStatus {
      UNSOLVED
      SOLVED
   }
`