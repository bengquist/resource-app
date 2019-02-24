export default `
  type User {
    _id: String!
    name: String!
    email: String!
  }
  type UserToken {
    token: String!
  }
  type Query {
    user(_id: String!): User
    users: [User] 
  }
  type Mutation {
    loginUser(email: String!, password: String!): UserToken
    signupUser(email: String!, password: String!): User
    editUser(_id: String, name: String, email: String): User
    deleteUser(_id: String, name: String, email: String): User
  }
`;
