<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "campuseco";

mysqli_report(MYSQLI_REPORT_OFF);
$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    http_response_code(500);
    header("Content-Type: application/json");
    echo json_encode(["error" => "Database connection failed"]);
    exit;
}
$conn->set_charset("utf8mb4");