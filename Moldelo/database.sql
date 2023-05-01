
create database if not exists Elfaro;
use Elfaro;
create table Articulos(
 Titulo	varchar(50),
 Cuerpo longtext
);
create table Clientservice(
	Username varchar(255),
    peticion longtext
);

insert into Articulos (Titulo, Cuerpo)
VALUES ("xxx", "ddd");

insert into Clientservice (Username, peticion)
VALUES ("yyy", "eee");
/*no coneccion for the moment*/