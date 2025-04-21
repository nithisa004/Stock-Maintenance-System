<?php
include "db.php";

$id = $_GET['id'];
$change = $_GET['change'];

$conn->query("UPDATE products SET quantity = quantity + $change WHERE id = $id");
$conn->close();
?>
