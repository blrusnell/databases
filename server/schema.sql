CREATE DATABASE chat;

USE chat;
CREATE TABLE Users (
  Id int NOT NULL AUTO_INCREMENT,
  User char(15),
  PRIMARY KEY (Id)
);

CREATE TABLE Rooms (
  Id int NOT NULL AUTO_INCREMENT,
  Room_name char(15),
  PRIMARY KEY (Id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  Id int NOT NULL AUTO_INCREMENT,
  Message_Data char,
  time_stamp TIMESTAMP,
  Users_Id int,
  Rooms_Id int,
  PRIMARY  KEY (Id),
  FOREIGN KEY (Users_Id) REFERENCES Users(Id),
  FOREIGN KEY (Rooms_Id) REFERENCES Rooms(Id)
);




/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

