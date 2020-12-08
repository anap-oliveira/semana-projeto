const express = require("express")
const router = express.Router()
const controller = require("../controllers/participantesController")

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.post("/", controller.postParticipantes)
router.put("/:id", controller.putParticipantes)
router.delete("/:id", controller.deleteParticipantes)


module.exports = router