<?php
$conn = new mysqli("localhost", "root", "", "stock_system");

if ($conn->connect_error) {
    die("Connection failed 😢: " . $conn->connect_error);
}
?>
