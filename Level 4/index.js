import express from "express"
import dotenv from "dotenv"
import { GoogleGenAI } from "@google/genai"
import fs from "fs"
dotenv.config()

const app=express()
const port=5000
app.use(express.json())
const ai=new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
})
const systemInstruction = fs.readFileSync("system-instruction.txt", "utf-8")

app.post("/ai",async (req,res)=>{
    const {input}=req.body
    const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: [
            {
                role: "user",
                parts: [{ text: input }]
            }
        ],
        config: {
            systemInstruction: systemInstruction
        }
    })
    return res.status(200).json({ai:response.text})
})


app.get("/",(req,res)=>{
    return res.json({message:"hello from Level 4"})
})

app.listen(port,()=>{
    console.log("server started")
})