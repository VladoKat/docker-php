<?php
include 'dbConfig.php';

$sql = "SELECT ID, FILE_NAME FROM images";


// $result = mysqli_query($db, $sql); 
$result = $db->query($sql);
      
while($row = $result->fetch_assoc()) {
    // echo "id: " . $row["ID"]. " - Name: " . $row["FILE_NAME"];
    echo $row["ID"] . "- " . $row["FILE_NAME"] . "\n";
}

?>