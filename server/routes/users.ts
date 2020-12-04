import express from "express"
const router = express.Router()

router.get("/", function (req, res) {
  res.send("respond with a user")
})

router.post("/create/", function (req, res) {
  res.send("create a user")
})

export default router
