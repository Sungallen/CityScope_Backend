import { groupEnd } from "console";
import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const StationType = new GraphQLObjectType({
    name: "Station",
    fields: () => ({
        station_name: { type: GraphQLString },
        station_code: { type: GraphQLString },
        construction_id: { type: GraphQLString },
        station_name_tw: { type: GraphQLString },
        line_code: { type: GraphQLString },
        line_name: { type: GraphQLString },
        address: { type: GraphQLString },
        coordinates: { type: GraphQLString }
    }),
});