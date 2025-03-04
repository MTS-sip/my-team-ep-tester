import { DataTypes, Model } from "sequelize";
import  sequelize  from "../config/connections.js"; // ✅ Fix: Use named import

class Event extends Model {
  public id!: string;
  public title!: string;
  public description!: string;
  public createdBy!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
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
        model: "Users",
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
    sequelize, // ✅ Fixed import
    modelName: "Event",
    tableName: "Events",
    timestamps: true,
  }
);

export default Event;



// VIDEO HAS NO DEFAUL EXPORT FIX 
/*
import { DataTypes, Model } from "sequelize"; // Remove unused Sequelize import
import sequelize from "../config/connections.js"; // Ensure correct DB connection

class Event extends Model {
  public id!: string;
  public title!: string;
  public description!: string;
  public createdBy!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
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
        model: "Users",
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
    sequelize,
    modelName: "Event",
    tableName: "Events",
    timestamps: true,
  }
);

export default Event;
*/