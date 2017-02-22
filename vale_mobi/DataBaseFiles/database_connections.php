<?php
// Connecting to database as mysqli_connect("hostname", "username", "password", "database name");
$con = mysqli_connect(getenv('IP'), getenv('C9_USER'), "", "c9", 3306);
?>