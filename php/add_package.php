<?php
header("Content-Type: application/json");
require_once "db.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Use POST"]);
    exit;
}

$tracking    = trim($_POST["tracking"] ?? "");
$destination = trim($_POST["destination"] ?? "");
$priority    = trim($_POST["priority"] ?? "Standard");
$status      = "Ready for Delivery";

if ($tracking === "" || $destination === "") {
    http_response_code(400);
    echo json_encode(["error" => "Tracking and destination are required"]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO packages (tracking, destination, priority, status) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $tracking, $destination, $priority, $status);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "id" => $conn->insert_id]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Could not save package"]);
}

$stmt->close();
$conn->close();