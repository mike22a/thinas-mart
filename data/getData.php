<?php
header('Access-Control-Allow-Origin: *');

include "../config/config.php";

if ($_GET['case'] == 'category') {    
    getCategory();
}
else
if ($_GET['case'] == 'item') {    
    getItem();
}

function getCategory()
{
    global $connection;
    $query = mysqli_query($connection, "SELECT * FROM category ");

    $no = 1;
    while ($row = mysqli_fetch_array($query)) {
        $category[] = $row;
    }

    echo json_encode($category);
}

function getItem()
{
    global $connection;
    $query = mysqli_query($connection, "SELECT * FROM item i JOIN category c ON i.id_category = c.id_category");

    $no = 1;
    while ($row = mysqli_fetch_array($query)) {
        $item[] = $row;
    }

    echo json_encode($item);
}
