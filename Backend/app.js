import express from "express"
import mongoose from "mongoose"
import router from "./router/allTasks.js"
import cors from "cors"
const app=express()

const port=3000
app.use(cors())

app.use(express.json())
app.use('/notekeepers',router)

mongoose.connect("mongodb://127.0.0.1:27017/notekeeper").then(()=>{
    console.log("mongodb is successfully created ")
}).catch((err)=>{
    console.error(`something went wrong with mongodb====${err}`)
})

app.listen(port,()=>{
    console.log(`server is listening on the port of http://localhost:${port}`)
})