import express from "express";
const app = express()

app.use(express.urlencoded({ extended: true }))
//json repsonse
app.use(express.json())

app.use("/" , require("./routes/index") )
app.use("/lighthouseTest" , require("./routes/testLighthouse") )

app.listen(3000, ()=>{
    console.log(`Server conected in: http://localhost:3000`)
})