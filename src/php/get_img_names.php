<?php
include 'dbConfig.php';

$sql = "SELECT DISTINCT FILE_GROUP_NAME FROM images";


// $result = mysqli_query($db, $sql); 
$result = $db->query($sql) or die($conn->error);;
      
while($row = $result->fetch_assoc()) {
    // echo "id: " . $row["ID"]. " - Name: " . $row["FILE_NAME"];
    echo $row["FILE_GROUP_NAME"] . "\n";
}

?>