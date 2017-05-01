-- Valentina Studio --
-- MySQL dump --
-- ---------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
-- ---------------------------------------------------------


-- CREATE DATABASE "sprinklr" ------------------------------
CREATE DATABASE IF NOT EXISTS `sprinklr` CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `sprinklr`;
-- ---------------------------------------------------------


-- CREATE TABLE "cidades" ----------------------------------
-- CREATE TABLE "cidades" --------------------------------------
CREATE TABLE `cidades` ( 
	`id` Int( 255 ) AUTO_INCREMENT NOT NULL,
	`name` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`ddd` Int( 255 ) NOT NULL,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 5;
-- -------------------------------------------------------------
-- ---------------------------------------------------------


-- CREATE TABLE "planos" -----------------------------------
-- CREATE TABLE "planos" ---------------------------------------
CREATE TABLE `planos` ( 
	`id` Int( 255 ) AUTO_INCREMENT NOT NULL,
	`name` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`time` Int( 255 ) NOT NULL,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 4;
-- -------------------------------------------------------------
-- ---------------------------------------------------------


-- CREATE TABLE "tarifas" ----------------------------------
-- CREATE TABLE "tarifas" --------------------------------------
CREATE TABLE `tarifas` ( 
	`id` Int( 255 ) AUTO_INCREMENT NOT NULL,
	`origem` Int( 255 ) NOT NULL,
	`destino` Int( 255 ) NOT NULL,
	`value` Float( 12, 2 ) NOT NULL,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 7;
-- -------------------------------------------------------------
-- ---------------------------------------------------------


-- Dump data of "cidades" ----------------------------------
INSERT INTO `cidades`(`id`,`name`,`ddd`) VALUES ( '1', 'São Paulo', '11' );
INSERT INTO `cidades`(`id`,`name`,`ddd`) VALUES ( '2', 'Ribeirão Preto', '16' );
INSERT INTO `cidades`(`id`,`name`,`ddd`) VALUES ( '3', 'Mirassol', '17' );
INSERT INTO `cidades`(`id`,`name`,`ddd`) VALUES ( '4', 'Tupi Paulista', '18' );
-- ---------------------------------------------------------


-- Dump data of "planos" -----------------------------------
INSERT INTO `planos`(`id`,`name`,`time`) VALUES ( '1', 'FaleMais 30', '30' );
INSERT INTO `planos`(`id`,`name`,`time`) VALUES ( '2', 'FaleMais 60', '60' );
INSERT INTO `planos`(`id`,`name`,`time`) VALUES ( '3', 'FaleMais 120', '120' );
-- ---------------------------------------------------------


-- Dump data of "tarifas" ----------------------------------
INSERT INTO `tarifas`(`id`,`origem`,`destino`,`value`) VALUES ( '1', '1', '2', '1.9' );
INSERT INTO `tarifas`(`id`,`origem`,`destino`,`value`) VALUES ( '2', '2', '1', '2.9' );
INSERT INTO `tarifas`(`id`,`origem`,`destino`,`value`) VALUES ( '3', '1', '3', '1.7' );
INSERT INTO `tarifas`(`id`,`origem`,`destino`,`value`) VALUES ( '4', '1', '4', '0.9' );
INSERT INTO `tarifas`(`id`,`origem`,`destino`,`value`) VALUES ( '5', '3', '1', '2.7' );
INSERT INTO `tarifas`(`id`,`origem`,`destino`,`value`) VALUES ( '6', '4', '1', '1.9' );
-- ---------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


