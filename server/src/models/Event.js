import { DataTypes } from 'sequelize';
import sequelize from './database.js';

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true, // Unique identifier for each event
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false, // Event must have a title
  },
  description: {
    type: DataTypes.TEXT, // Optional event description
  },
  createdBy: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Users', // References the Users table
      key: 'id'
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, // Ensures createdAt is set automatically
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default Event;
