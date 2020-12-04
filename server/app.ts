import express from "express"
import cookieParser from "cookie-parser"
import logger from "morgan"
import path from "path"

// var indexRouter = require('./routes/index');
import usersRouter from "./routes/users"

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

// app.use('/', indexRouter);
app.use("/users", usersRouter)

const PORT = 3000
app.get("/", (req, res) => res.send("Express + Typecript Server"))
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})

import mongoose from "mongoose"
mongoose.connect("mongodb://admin:admin123@localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", function () {
  console.log("connected to mongo")
})

export default app
