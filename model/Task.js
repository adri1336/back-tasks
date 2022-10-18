module.exports = (sequelize, DataTypes) => {
    return sequelize.define("task",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            status: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            title: {
                type: DataTypes.TEXT,
                allowNull: false,
                defaultValue: ""
            },
            author: {
                type: DataTypes.TEXT,
                allowNull: false,
                defaultValue: ""
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
                defaultValue: ""
            },
            creation_date: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
            },
            update_date: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
            }
        },
        {
            freezeTableName: true,
            timestamps: false
        }
    );
};