require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileupload = require('express-fileupload')
//const Router = require("./routes")


const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileupload({
    useTempFiles: true
}))


// Routes
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/upload'))

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/EssentialsDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err => {
    if(err) throw err;
    console.log("Connected to database successfully")
})

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
  
// })

// app.listen(3000, () => {
//     console.log("Initializing the Essentials Backend");
//   })

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})

//console.log("Initializing the Essentials Backend.")