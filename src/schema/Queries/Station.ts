import { GraphQLList, GraphQLString } from "graphql";
import { StationType } from "../TypeDefs/Stations"
import { mrtstation } from "../Entities/Station"

export const GET_ALL_STATIONS = {
    type: new GraphQLList(StationType),
    resolve() {
        var temp = mrtstation.find();

        return temp;
    }
}

export const GET_ONE_STATIONS = {
    type: StationType,
    args: {
        station_name: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const station_name = args.station_name;
        const ans = await mrtstation.findOneBy({ station_name: station_name });
        // var newArray: any[] = [];
        // var result = newArray.map(function (ans?) {
        //     return {
        //         station_name: ans?.station_name,
        //         station_name_tw: ans?.station_name_tw
        //     }
        // });
        var result = [ans];
        return result;
    }
}