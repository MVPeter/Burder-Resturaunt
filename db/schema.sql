-- Drops the day_planner_db if it already exists --
DROP DATABASE IF EXISTS eatburgers_db;



-- Create the database eatburger and specified it for use.
CREATE DATABASE eatburgers_db;

USE eatburgers_db;

-- Create the burger Table
CREATE TABLE burger (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name varchar(50),
    eaten BOOLEAN DEFAULT false, 

    PRIMARY KEY (id)
);
