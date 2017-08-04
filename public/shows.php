<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
include("util.php");

$dir = $_GET['dir'];
$sortDir = "";
if (empty($dir) || $dir=="desc") {
    $dir = "<";
    $sortDir = "ORDER BY show_date_start DESC";
} else {
    $dir = ">=";
}
$query="SELECT * FROM al_events WHERE show_date_start ".$dir." DATE_ADD(CURDATE(), INTERVAL 1 DAY) ".$sortDir;
pdoGoJSON($query);
?>                            