<?php
// if(isset($_POST["submit"])){
    // Include the database configuration file
    include 'dbConfig.php';
    
    // File upload configuration
    $uploadsDir = '../uploads/';
    $allowTypes = array('jpg','png','jpeg','gif');
    $statusMsg = $errorMsg = $insertValuesSQL = $errorUpload = $errorUploadType = '';
    if(!empty(array_filter($_FILES['files']['name']))){
        
        $folderGroupName = $_POST['fileGroupName'];
        $targetDir = $uploadsDir . $folderGroupName.'/';
        $isMade = mkdir($targetDir, 0755);
        foreach($_FILES['files']['name'] as $key=>$val){
            // File upload path
            $fileName = basename($_FILES['files']['name'][$key]);
            // Check whether file type is valid
            $fileType = pathinfo($fileName,PATHINFO_EXTENSION);
            if(in_array($fileType, $allowTypes)){
                // Upload file to server\
                if(move_uploaded_file($_FILES["files"]["tmp_name"][$key], $targetDir . $fileName)){
                    // Image db insert sql
                    $insertValuesSQL .= "('".$fileName."','".$folderGroupName."', NOW()),";
                }else{
                    $errorUpload .= $_FILES['files']['name'][$key].', ';
                    rmdir($targetDir);
                }
            }else{
                $errorUploadType .= $_FILES['files']['name'][$key].', ';
                rmdir($targetDir);
            }
        }
        
        if(!empty($insertValuesSQL)){
            $insertValuesSQL = trim($insertValuesSQL,',');
            // Insert image file name into database
            $insert = $db->query("INSERT INTO images (file_name, file_group_name, uploaded_on) VALUES $insertValuesSQL");
            if($insert){
                $errorUpload = !empty($errorUpload)?'Upload Error: '.$errorUpload:'';
                $errorUploadType = !empty($errorUploadType)?'File Type Error: '.$errorUploadType:'';
                $errorMsg = !empty($errorUpload)?'<br/>'.$errorUpload.'<br/>'.$errorUploadType:'<br/>'.$errorUploadType;
                $statusMsg = "Files are uploaded successfully.".$errorMsg;
            }else{
                $statusMsg = "Sorry, there was an error uploading your file.";
            }
        }
    }else{
        $statusMsg = 'Please select a file to upload.';
    }
    
    // Display status message
    echo $statusMsg;
// }
// echo $_POST["submit"];
?>