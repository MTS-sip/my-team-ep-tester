import { DataTypes } from 'sequelize';

/** @param {import('sequelize').QueryInterface} queryInterface */
export const up = async (queryInterface) => {
  await queryInterface.createTable('Users', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true, // Unique identifier for each user
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Ensures email is unique
      validate: {
        isEmail: true // Ensures valid email format
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Ensures createdAt is set automatically
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Ensures updatedAt is set automatically
    },
  });
};

/** @param {import('sequelize').QueryInterface} queryInterface */
export const down = async (queryInterface) => {
  await queryInterface.dropTable('Users');
};
