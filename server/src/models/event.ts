import { DataTypes, Model } from "sequelize";
import sequelize from "../config/connections.js"; // ✅ Ensure correct DB connection import

class Event extends Model {
  public id!: string;
  public title!: string;
  public description?: string;
  public createdBy!: string;
}

Event.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    createdBy: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "events",
  }
);

export default Event;