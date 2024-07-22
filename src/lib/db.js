import { Sequelize } from "sequelize";
import pg from "pg";
import dotenv from "dotenv";
import MeetingModel from "./models/meeting";

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
    dialectModule: pg,
  }
);

MeetingModel(sequelize);

const {
  models: { Meeting },
} = sequelize;

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { Meeting, connectDB };
