-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ecommerce
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ecommerce
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ecommerce` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `ecommerce` ;

-- -----------------------------------------------------
-- Table `ecommerce`.`brands`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`brands` (
  `brandID` INT NOT NULL AUTO_INCREMENT,
  `brandName` VARCHAR(45) NOT NULL,
  `imageUrl` VARCHAR(450) NOT NULL,
  PRIMARY KEY (`brandID`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`products` (
  `productID` INT NOT NULL AUTO_INCREMENT,
  `productName` VARCHAR(45) NOT NULL,
  `price` FLOAT NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `like` TINYINT NOT NULL,
  `imageUrl` VARCHAR(450) NOT NULL,
  `brands_brandID` INT NOT NULL,
  `new` TINYINT NOT NULL DEFAULT '1',
  PRIMARY KEY (`productID`),
  INDEX `fk_products_brands1_idx` (`brands_brandID` ASC) VISIBLE,
  CONSTRAINT `fk_products_brands1`
    FOREIGN KEY (`brands_brandID`)
    REFERENCES `ecommerce`.`brands` (`brandID`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`users` (
  `userID` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `userName` VARCHAR(45) NOT NULL,
  `birthday` DATE NULL DEFAULT NULL,
  `password` VARCHAR(200) NOT NULL,
  `coverUrl` VARCHAR(450) NULL DEFAULT NULL,
  `bio` VARCHAR(255) NULL DEFAULT NULL,
  `profilePicture` VARCHAR(450) NULL DEFAULT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 17
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`basket`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`basket` (
  `basketID` INT NOT NULL AUTO_INCREMENT,
  `users_userID` INT NOT NULL,
  `products_productID` INT NOT NULL,
  PRIMARY KEY (`basketID`),
  INDEX `fk_table1_users_idx` (`users_userID` ASC) VISIBLE,
  INDEX `fk_table1_products1_idx` (`products_productID` ASC) VISIBLE,
  CONSTRAINT `fk_table1_products1`
    FOREIGN KEY (`products_productID`)
    REFERENCES `ecommerce`.`products` (`productID`),
  CONSTRAINT `fk_table1_users`
    FOREIGN KEY (`users_userID`)
    REFERENCES `ecommerce`.`users` (`userID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 28
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`posts` (
  `postID` INT NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(245) NOT NULL,
  `imageUrl` VARCHAR(455) NOT NULL,
  `users_userID` INT NOT NULL,
  PRIMARY KEY (`postID`),
  INDEX `fk_posts_users1_idx` (`users_userID` ASC) VISIBLE,
  CONSTRAINT `fk_posts_users1`
    FOREIGN KEY (`users_userID`)
    REFERENCES `ecommerce`.`users` (`userID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`questions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`questions` (
  `questionsID` INT NOT NULL AUTO_INCREMENT,
  `questions` VARCHAR(455) NOT NULL,
  `users_userID` INT NOT NULL,
  PRIMARY KEY (`questionsID`),
  INDEX `fk_questions_users1_idx` (`users_userID` ASC) VISIBLE,
  CONSTRAINT `fk_questions_users1`
    FOREIGN KEY (`users_userID`)
    REFERENCES `ecommerce`.`users` (`userID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO `ecommerce`.`brands` (`brandName`, `imageUrl`) 
VALUES
('Brand A', 'https://neondeco.fr/cdn/shop/files/neon-nike-cyan.jpg?v=1686754200&width=1445');



INSERT INTO `ecommerce`.`products` (`productName`, `price`, `category`, `like`, `imageUrl`, `brands_brandID`, `new`) 
VALUES
('Product 1', 49.99, 'Electronics', 5, 'https://images.pexels.com/photos/18368138/pexels-photo-18368138/free-photo-of-mode-chaussures-style-marque.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 1, 1);


INSERT INTO `ecommerce`.`basket` (`users_userID`, `products_productID`) 
VALUES
(89, 1);






SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
