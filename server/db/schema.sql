DROP DATABASE IF EXISTS event_planner_db;
CREATE DATABASE event_planner_db;

\c event_planner_db;

-- Users Table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Events Table
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  event_title VARCHAR(255) NOT NULL,
  event_description TEXT NOT NULL,
  created_by INT NOT NULL,
  active BOOLEAN DEFAULT TRUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE
);

-- RSVP Table with Unique RSVP Link
CREATE TABLE rsvps (
  id SERIAL PRIMARY KEY,
  event_id INT NOT NULL,
  guest_email TEXT NOT NULL,
  rsvp_link TEXT UNIQUE NOT NULL,
  status VARCHAR(10) CHECK (status IN ('YES', 'NO', 'PENDING')) DEFAULT 'PENDING',
  rsvp_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);
