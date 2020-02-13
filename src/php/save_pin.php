<?php
include 'dbConfig.php';

$groupName = $_POST['fileGroupName'];
$annotationText = $_POST['annotationText'];
$x = $_POST['x'];
$y = $_POST['y'];
$z = $_POST['z'];
$sql_annot = "insert into images_annotations (file_group_name_fk, annotation_text, x_coord, y_coord, z_coord)" . 
" values('$groupName', '$annotationText', $x, $y, $z)";
echo $sql_annot;
$result_anno = $db->query($sql_annot) or die($db->error);

?>