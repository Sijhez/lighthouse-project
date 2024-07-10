const express = require('express')
const app = express()

app.use(express.static(__dirname + "/public/"));

app.set("views", __dirname + "/views")
app.set("view engine", "hbs")
app.use(express.urlencoded({ extended: true }))

app.use("/" , require("./routes/index") )


app.listen(3000, ()=>{
    console.log(`Server conected in: http://localhost:3000`)
})
