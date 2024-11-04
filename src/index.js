// require('dotenv').config({path: "./env"})
import dotenv from "dotenv";
import {connectDB} from './db/index.js'
import { app } from "./app.js"

dotenv.config({
        path: './env'
})


connectDB()
.then(
    app.listen( process.env.PORT || 8000, ()=>{
        console.log(`\n ⚙️  App is listening on port http://localhost:${process.env.PORT}`)
    })
)
.catch ((error) => {
    console.log("MONGODB connection FAILED : ", error);
})



