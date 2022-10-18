const router = require("express").Router();
const { Task } = require("../config/Db");

const { middleware } = require("./middleware");
router.use(middleware);

router.get("/", async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    }
    catch(error) {
        console.error(error);
        res.sendStatus(500);
    }
});

router.post("/", async (req, res) => {
    try {
        const { title, author, description } = req.body;

        let task = await Task.create({
            title: title,
            author: author,
            description: description
        });

        task = await Task.findOne({ where: { id: task.id } });
        res.json(task);
    }
    catch(error) {
        console.error(error);
        res.sendStatus(500);
    }
});

router.post("/:id", async (req, res) => {
    try {
        const task = await Task.findOne({ where: { id: req.params.id } });
        if(!task) throw "invalid task id";

        const { status, title, author, description } = req.body;

        if(status) task.status = status;
        if(title) task.title = title;
        if(author) task.author = author;
        if(description) task.description = description;
        task.update_date = Date.now();

        await task.save();
        res.json(task);
    }
    catch(error) {
        console.error(error);
        res.sendStatus(500);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const task = await Task.findOne({ where: { id: req.params.id } });
        if(!task) throw "invalid task id";

        await task.destroy();
        res.sendStatus(200);
    }
    catch(error) {
        console.error(error);
        res.sendStatus(500);
    }
});

module.exports = router;