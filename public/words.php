<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
include("util.php");

$query="SELECT * FROM al_xwords";
pdoGoJSON($query);
?>                            