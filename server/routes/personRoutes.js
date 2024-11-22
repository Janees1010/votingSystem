const express = require("express")
const router = express.Router()
const {
  createPerson,
  handleLikeDecriment,
  handleLikeIncriment,
  getPersons
} = require("../controller/personController")


router.get("/",getPersons)  

router.post("/create",createPerson)
router.post("/incriment-like",handleLikeIncriment)
router.post("/dicriment-like",handleLikeDecriment)

module.exports = router