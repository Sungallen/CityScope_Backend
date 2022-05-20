"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ONE_STATIONS = exports.GET_ALL_STATIONS = void 0;
const graphql_1 = require("graphql");
const Stations_1 = require("../TypeDefs/Stations");
const Station_1 = require("../Entities/Station");
exports.GET_ALL_STATIONS = {
    type: new graphql_1.GraphQLList(Stations_1.StationType),
    resolve() {
        var temp = Station_1.mrtstation.find();
        return temp;
    }
};
exports.GET_ONE_STATIONS = {
    type: Stations_1.StationType,
    args: {
        station_name: { type: graphql_1.GraphQLString }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const station_name = args.station_name;
            const ans = yield Station_1.mrtstation.findOneBy({ station_name: station_name });
            // var newArray: any[] = [];
            // var result = newArray.map(function (ans?) {
            //     return {
            //         station_name: ans?.station_name,
            //         station_name_tw: ans?.station_name_tw
            //     }
            // });
            var result = [ans];
            return result;
        });
    }
};
