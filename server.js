const express= require ("express")
const DB=require("./config/connection")
const routes=require("./routes")
const PORT=process.env.PORT||3002
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(routes)
DB.once("open",()=>{
    app.listen(PORT,()=>{
        console.log(`my server is running on port ${PORT}`)
    })
})