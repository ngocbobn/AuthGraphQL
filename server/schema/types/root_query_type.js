const graphql = require('graphql');
const mongoose = require('mongoose');
const UserType = require('./user_type')
const User = mongoose.model('user')

const { GraphQLObjectType, GraphQLID, GraphQLList } = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    user: {
      type: UserType,
      resolve(parrentValue, args, req) {
        return req.user;
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      }
    },
    dummyField: {
      type: GraphQLID
    }
  })
});

module.exports = RootQuery;
