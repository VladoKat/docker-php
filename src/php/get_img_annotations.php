<?php
include 'dbConfig.php';
$groupName = htmlspecialchars($_GET["groupName"]);
// echo $groupName;
// $sql = "SELECT DISTINCT FILE_GROUP_NAME FROM images WHERE FILE_GROUP_NAME = '$groupName'";
$sql_annot = "SELECT * FROM images_annotations WHERE file_group_name_fk = '$groupName'";
// echo $sql_annot;
// $result = mysqli_query($db, $sql);
$result_anno = $db->query($sql_annot) or die($db->error);
while($row = $result_anno->fetch_assoc()) {
    // echo "groupName: " . $row["groupName"]. " - Name: " . $row["FILE_NAME"];
    echo $row["annotation_text"] . ';' . $row["x_coord"]. ';' . $row["y_coord"]. ';' . $row["z_coord"]."\n";
} 
// $result = $db->query($sql) or die($conn->error);;
// while($row = $result->fetch_assoc()) {
//     // echo "groupName: " . $row["groupName"]. " - Name: " . $row["FILE_NAME"];
//     echo $row["FILE_GROUP_NAME"];
// }

?>