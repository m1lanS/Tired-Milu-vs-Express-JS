const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("chinook", null, null, {
  dialect: "sqlite",
  storage: "../backend/chinook.db"
});

module.exports = sequelize;
