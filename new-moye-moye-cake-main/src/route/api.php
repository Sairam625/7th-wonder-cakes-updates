<?php
include('db_config.php');

$sql = "SELECT * FROM user_data";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row as JSON
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($data);
} else {
    echo "0 results";
}
$conn->close();
?>
