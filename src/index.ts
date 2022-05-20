import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema"
import cors from "cors";
import { createConnection, ConnectionOptions } from "typeorm";
import { mrtstation } from "./schema/Entities/Station";

let dbOptions: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    database: "mrt",
    username: "root",
    password: "admin",
    entities: [mrtstation],
    logging: true
}

const main = async () => {
    createConnection(dbOptions).then(async connection => {
        console.log("Connected to DB");
    }).catch(error => console.log("TypeORM connection error: ", error));

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }));

    app.listen(4000, () => {
        console.log("Server running on port 4000")
    });
};

main().catch((err) => {
    console.log(err)
});