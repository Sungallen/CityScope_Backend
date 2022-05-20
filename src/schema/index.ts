import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_STATIONS, GET_ONE_STATIONS } from "./Queries/Station"
import { CREATE_USER } from "./mutation/Station"
const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllStation: GET_ALL_STATIONS,
        getoneStation: GET_ONE_STATIONS
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER,
    },
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});