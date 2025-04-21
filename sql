CREATE DATABASE stock_system;

USE stock_system;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    category VARCHAR(50),
    price DECIMAL(10, 2),
    quantity INT,
    threshold INT
);
