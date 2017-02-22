CREATE TABLE mercadoria (
id int(255) NOT NULL AUTO_INCREMENT,
nome varchar(255) NOT NULL,
tipo_mercadoria varchar(255) NOT NULL,
quantidade int NOT NULL,
preco Double NOT NULL,
tipo_negocio int NOT NULL,
PRIMARY KEY (id)
);

insert into mercadoria(nome,tipo_mercadoria,quantidade,preco,tipo_negocio)
values('IPHONE 6S', 'CELULAR', 1, 1200.5, 1);
insert into mercadoria(nome,tipo_mercadoria,quantidade,preco,tipo_negocio)
values('Renault Fluence', 'Carro', 1, 55000, 2);
insert into mercadoria(nome,tipo_mercadoria,quantidade,preco,tipo_negocio)
values('PLAYSTATION 4', 'VIDEOGAME', 10, 1200.5, 1);
insert into mercadoria(nome,tipo_mercadoria,quantidade,preco,tipo_negocio)
values('Xiaomi MI5S', 'CELULAR', 32, 145.63, 1);