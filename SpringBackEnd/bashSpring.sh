#!/bin/bash

echo "Setting Up Spring Project

"

sleep 3

echo "Creating DataBase"

mysql -u root -proot -e "

DROP SCHEMA IF EXISTS ensolversinterview;

CREATE DATABASE ensolversinterview; 

USE ensolversinterview; 

CREATE TABLE folder (
	id bigint NOT NULL AUTO_INCREMENT, 
	nombre varchar(255) DEFAULT NULL, 
	PRIMARY KEY (id) 
);


CREATE TABLE to_do (
  id bigint NOT NULL AUTO_INCREMENT,
  description varchar(255) DEFAULT NULL,
  is_completed int DEFAULT NULL,
  folder_id bigint DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (folder_id) REFERENCES folder(id) ON DELETE CASCADE
);

INSERT INTO folder (id, nombre) VALUES(1, 'Work');
INSERT INTO folder (id, nombre) VALUES(2, 'Shopping List');
INSERT INTO folder (id, nombre) VALUES(3, 'Daily Tasks');

INSERT INTO to_do (id, description, is_completed, folder_id) VALUES(1, 'Call boss', 1, 1);
INSERT INTO to_do (id, description, is_completed, folder_id) VALUES(2, 'Test new code', 0, 1);
INSERT INTO to_do (id, description, is_completed, folder_id) VALUES(3, 'Meat', 0, 2);
INSERT INTO to_do (id, description, is_completed, folder_id) VALUES(4, 'Carrot', 1, 2);
INSERT INTO to_do (id, description, is_completed, folder_id) VALUES(5, 'Contact Manager', 0, 1);
INSERT INTO to_do (id, description, is_completed, folder_id) VALUES(6, 'Go to the gym', 1, 3);
INSERT INTO to_do (id, description, is_completed, folder_id) VALUES(7, 'Go shopping', 0, 3);
"

echo "Database Created"

echo "Setting up Sring Project"

mvn install

cd target

sleep 3

echo "

BackEnd casi listo, va a correr en puerto 8080

"

sleep 5

java -jar EnsolversInterview-0.0.1-1erosPasos.war
