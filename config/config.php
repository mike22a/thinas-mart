<?php

date_default_timezone_set("Asia/Jakarta");
error_reporting(0);


$config['sess_cookie_name'] = 'thinasmart';
$config['sess_expiration'] = 7200;
$config['encryption_key'] = md5(time());

$hostname = 'localhost';
$username = 'id18254419_admin';
$password = 'A7@5+*<5qSP|/ti&';
$database = 'id18254419_thinasmart';

// $hostname = 'localhost';
// $username = 'root';
// $password = '';
// $database = 'thinasmart';

$connection = mysqli_connect($hostname, $username, $password, $database);


// Check connection
if (mysqli_connect_errno()) {
    echo "Database connection failed : " . mysqli_connect_error();
    die;
}
?>


