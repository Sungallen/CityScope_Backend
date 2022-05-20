"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationType = void 0;
const graphql_1 = require("graphql");
exports.StationType = new graphql_1.GraphQLObjectType({
    name: "Station",
    fields: () => ({
        station_name: { type: graphql_1.GraphQLString },
        station_code: { type: graphql_1.GraphQLString },
        construction_id: { type: graphql_1.GraphQLString },
        station_name_tw: { type: graphql_1.GraphQLString },
        line_code: { type: graphql_1.GraphQLString },
        line_name: { type: graphql_1.GraphQLString },
        address: { type: graphql_1.GraphQLString },
        coordinates: { type: graphql_1.GraphQLString }
    }),
});
