import express from "express"
import crimes from  './crimes.js'
const app = express()

app.get("/",(req,res)=>{
    res.send("Server is ready")
})

app.get('/api/crimes',(req,res)=>{
    res.send(crimes)
})

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
     
})