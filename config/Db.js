const Sequelize = require("sequelize");

const
    TaskModel = require("../model/Task")
;

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite"
});

const
    Task = TaskModel(sequelize, Sequelize)
;

sequelize.authenticate()
    .then(() => {
        console.log("DB Connected");
        sequelize.sync({ force: false }).then(async () => {
            console.log("DB Synced");
        });
    })
    .catch(error => console.log("DB Connection Error: ", error));

module.exports = {
    Task
};