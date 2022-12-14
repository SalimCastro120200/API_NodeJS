-- MySQL Script generated by MySQL Workbench
-- Wed Nov  9 15:45:32 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
SHOW WARNINGS;
-- -----------------------------------------------------
-- Schema innovattia
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `innovattia` ;

-- -----------------------------------------------------
-- Schema innovattia
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `innovattia` DEFAULT CHARACTER SET latin1 ;
SHOW WARNINGS;
USE `innovattia` ;

-- -----------------------------------------------------
-- Table `area`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `area` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `area` (
  `id_area` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `estado` INT(11) NOT NULL,
  PRIMARY KEY (`id_area`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `area_empleados`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `area_empleados` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `area_empleados` (
  `area_id_area` INT(11) NOT NULL,
  `empleados_id_empleados` INT(11) NOT NULL,
  PRIMARY KEY (`area_id_area`, `empleados_id_empleados`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `empleados`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `empleados` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `empleados` (
  `id_empleados` INT(11) NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(45) NOT NULL,
  `a_paterno` VARCHAR(45) NOT NULL,
  `a_materno` VARCHAR(45) NOT NULL,
  `sexo` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(80) NOT NULL,
  `telefono` VARCHAR(13) NOT NULL,
  `fecha_nacimiento` VARCHAR(45) NOT NULL,
  `dir_calle` VARCHAR(45) NOT NULL,
  `dir_numero` VARCHAR(45) NOT NULL,
  `dir_cp` VARCHAR(45) NOT NULL,
  `dir_colonia` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_empleados`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

SHOW WARNINGS;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
