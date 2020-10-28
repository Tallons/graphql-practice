const { ApolloError } = require("apollo-server-express")

module.exports = {
   Mutation: {
      // (parent, args, context, info )
      async signup(parent, { username, email, password }, { models }) {
         const userExists = await models.User.findOne({ where: { email } })

         if (userExists) throw new ApolloError("email already in use.")

         const user = await models.User.create({ username, email, password })
      }
   }
}