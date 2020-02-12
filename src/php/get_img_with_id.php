<?php
include 'dbConfig.php';
$id = htmlspecialchars($_GET["id"]);
$sql = "SELECT FILE_NAME FROM images WHERE ID = $id";
$sql_annot = "SELECT * FROM images_annotations WHERE IMG_ID = $id";
// $result = mysqli_query($db, $sql);
$result_anno = $db->query($sql_annot);
while($row = $result_anno->fetch_assoc()) {
    // echo "id: " . $row["ID"]. " - Name: " . $row["FILE_NAME"];
    echo $row["ANNOTATION_TEXT"] . ' ' . $row["X_COORD"]. ' ' . $row["X_COORD"]. ' ' . $row["Z_COORD"];
} 
$result = $db->query($sql);
while($row = $result->fetch_assoc()) {
    // echo "id: " . $row["ID"]. " - Name: " . $row["FILE_NAME"];
    echo $row["FILE_NAME"];
}



?>