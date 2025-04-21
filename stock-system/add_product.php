<?php
include "db.php";

$name = $_POST['name'];
$category = $_POST['category'];
$price = $_POST['price'];
$quantity = $_POST['quantity'];
$threshold = $_POST['threshold'];

$sql = "INSERT INTO products (name, category, price, quantity, threshold)
        VALUES ('$name', '$category', '$price', '$quantity', '$threshold')";

$conn->query($sql);
$conn->close();
?>
