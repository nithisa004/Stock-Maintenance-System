<?php
include "db.php";

$result = $conn->query("SELECT * FROM products");
$rows = array();

while ($row = $result->fetch_assoc()) {
    $rows[] = $row;
}

echo json_encode($rows);
$conn->close();
?>
