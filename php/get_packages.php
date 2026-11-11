<?php
header("Content-Type: application/json");
require_once "db.php";

$result = $conn->query("SELECT id, tracking, destination, priority, status FROM packages ORDER BY id");
$packages = [];

while ($row = $result->fetch_assoc()) {
    $packages[] = $row;
}

echo json_encode($packages);
$conn->close();