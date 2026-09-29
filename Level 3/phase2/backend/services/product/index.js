import dotenv from "dotenv"
import express from "express"

dotenv.config()

const port=process.env.PORT || 5000

const app=express()

app.use(express.json())
app.get("/",(req,res)=>{
    return res.status(200).json({message:"hello from product services"})
})


app.listen(port,async()=>{
    console.log(`server started ${port}`)
})