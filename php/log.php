<?php

$name = $_POST['name'];
$site = $_POST['site'];
$feature = $_POST['feature'];
$reason = $_POST['reason'];
$imp = $_POST['importance'];

$con=mysqli_connect("localhost","root","root","feature");

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

mysqli_query($con,"INSERT INTO requests (rName, rSite, rFeature, rReason, rImportance)
VALUES ('$name', '$site','$feature','$reason','$imp')");

mysqli_close($con);
?> 