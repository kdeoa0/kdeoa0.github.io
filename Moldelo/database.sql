
create database if not exists elfaro;
use elfaro;
create table if not exists Articulos(
id int auto_increment primary key,	
 Titulo	varchar(50),
 Cuerpo longtext
);
create table if not exists Clientservice(
	id int auto_increment primary key,	
	Username varchar(255),
    peticion longtext
);
create table if not exists users(
	id int auto_increment primary key,	
	usersname varchar(255),
    clave varchar(255)
);

	DELIMITER //

	CREATE PROCEDURE SelectData()
	BEGIN
		SELECT usersname FROM users;
	END //

	DELIMITER ;
    
    	DELIMITER //

	CREATE PROCEDURE InsertDataUsers(IN p_username VARCHAR(255), IN p_password VARCHAR(255))
	BEGIN
		INSERT INTO users (usersname, clave) VALUES (p_username, p_password);
	END //

	DELIMITER ;

 -- select * from users;

-- INSERT INTO users(usersname, clave) VALUES ('$name', '$password');

 -- drop table users;	