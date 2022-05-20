"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const Station_1 = require("./Queries/Station");
const Station_2 = require("./mutation/Station");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllStation: Station_1.GET_ALL_STATIONS,
        getoneStation: Station_1.GET_ONE_STATIONS
    },
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: Station_2.CREATE_USER,
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
