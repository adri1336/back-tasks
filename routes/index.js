const router = require("express").Router();

const TaskRouter = require("./Task");

router.use("/task", TaskRouter);

module.exports = router;