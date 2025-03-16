import { DataTypes, Model } from "sequelize";
import  sequelize  from "../config/connections.js"; // Use named import

class Event extends Model {
  public id!: string;
  public title!: string;
  public description!: string;
  public createdBy!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public location!: string;
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
        model: "user",
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize, //  import
    modelName: "Event",
    tableName: "event",
    timestamps: true,
  }
);

export default Event;
