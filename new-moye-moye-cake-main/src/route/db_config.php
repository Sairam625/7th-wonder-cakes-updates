<?php
// db_config.php - Configuration for database connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "7th_wonder";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
