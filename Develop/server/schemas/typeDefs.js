const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # like models. check lecture 1 36:00
  type Book {
    _id: String!
    authors: String
    description: String!
    image: String
    link: String
    title: String!

  }

  type User {
    username: String!
    email: String!
    password: String!
    savedBooks: [String]
  }

  type Query {
    books: [Book]
    users: [User]
  }

  type Mutation {

  }
`;

module.exports = typeDefs;
