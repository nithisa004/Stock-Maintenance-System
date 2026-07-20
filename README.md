# Stock Maintenance System

A simple PHP + MySQL stock management web app that lets you add products, view the product list, update stock quantities, and delete products.

## Features
- Add new products
- View all products in a table
- Increase or decrease stock quantity
- Delete products
- Low-stock warning based on the threshold value

## Requirements
- XAMPP or similar local web server with:
  - Apache
  - MySQL
- A web browser

## Download and Setup

### 1. Download or clone the project
You can download the project as a ZIP file or clone it with Git:

```bash
git clone <your-repository-url>
```

Place the project folder inside your XAMPP htdocs directory:

```text
C:\xampp\htdocs\stock-system
```

### 2. Start XAMPP services
Open the XAMPP Control Panel and start:
- Apache
- MySQL

### 3. Create the database
Open phpMyAdmin in your browser:

```text
http://localhost/phpmyadmin
```

Create a database named `stock_system` and then run this SQL:

```sql
CREATE DATABASE stock_system;

USE stock_system;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  category VARCHAR(100) DEFAULT '',
  price DECIMAL(10,2) NOT NULL,
  quantity INT NOT NULL,
  threshold INT NOT NULL
);
```

### 4. Check database connection
The project uses the following connection settings in [db.php](db.php):

```php
$conn = new mysqli("localhost", "root", "", "stock_system");
```

If your MySQL password is not empty, update the credentials in [db.php](db.php) accordingly.

## Run the Project
Open the app in your browser:

```text
http://localhost/stock-system/
```

You should now be able to use the stock management interface.

## Troubleshooting
- If you see a database connection error, make sure MySQL is running and the `stock_system` database exists.
- If the page does not load, confirm that the project folder is inside `C:\xampp\htdocs`.
- If Apache is not running, start it from XAMPP Control Panel.
