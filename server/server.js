const express = require("express")
const app = express()
const dbConnection = require("./DbConnection/connection")
const personRoutes = require("./routes/personRoutes")
const cors = require("cors")

app.use(cors())

app.use(express.json())

app.use("/person",personRoutes)

dbConnection()  

app.listen(4000,()=>{
   console.log("server is running");
})

