// migrations/<timestamp>-create-users.js

import { DataTypes } from "sequelize";

/** @param {import('sequelize').QueryInterface} queryInterface */
/** @param {import('sequelize')} Sequelize */
export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable("Users", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  });
};

/** @param {import('sequelize').QueryInterface} queryInterface */
/** @param {import('sequelize')} _Sequelize */
export const down = async (queryInterface, _Sequelize) => {
  await queryInterface.dropTable("Users");
};