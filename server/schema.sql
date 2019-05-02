CREATE DATABASE chat;

USE chat;
CREATE TABLE Users (
  id int NOT NULL AUTO_INCREMENT,
  Username varchar(55) NOT NULL,
  PRIMARY KEY (id)
);



CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL AUTO_INCREMENT,
  UserId int NOT NULL,
  text varchar(200) not null,
  RoomName varchar(200),
  PRIMARY  KEY (id)
);




/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

