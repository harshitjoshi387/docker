import express from 'express';
import { log } from 'node:console';

const app = express();

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"hello from backend"
    })
    

})
app.get("/api/data",(req,res)=>{
    const data={
        id:1,
        username:"harsh",
        description:"this is a sample data response from the api "
    }
    res.status(200).json(data)
})
app.listen(3000,()=>{
    console.log('server is running')
})


