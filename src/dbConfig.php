<?php
// Database configuration
$dbHost     = "db";
$dbUsername = "dbuser";
$dbPassword = "654321";
$dbName     = "mydb";

// Create database connection
$db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

// Check connection
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}
?>