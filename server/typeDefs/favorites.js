const { gql } = require("apollo-server-express");

module.exports = gpl`
   type Favorite {
      user: User!
      reply: Reply!
   }`