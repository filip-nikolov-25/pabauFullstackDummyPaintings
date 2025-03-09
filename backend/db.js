import { text } from "express";
import pg from "pg";

const dbClient = new pg.Client(
    {
        user:"",
        host:"",
        database:"",
        password:"",
        port:""
    }
)
dbClient.connect().then(() => console.log("DATABASE IS CONNECTED")).catch(error => console.error("DATABASE CONNECTION ERROR",error));
const query = (text,params) => dbClient.query(text,params);
export {query} 