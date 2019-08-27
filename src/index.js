/**
 * @author Moisés Maldaner de Lima
 */

import { ApolloServer, gql } from 'apollo-server-express'
import express from 'express'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

//Carregando env
require('dotenv').config()
const { PORT, NODE_ENV } = process.env
const IN_PROD = NODE_ENV === 'production'

//Configurando APP com express
const app = express()

//Configurando Apolo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: !IN_PROD
})
server.applyMiddleware({ app })

//Definindo porta conforme prod e Homolog
app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
