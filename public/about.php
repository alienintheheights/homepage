<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
include("util.php");

$query="SELECT post_content FROM wp_sf2jjy_posts where post_name = 'about';";
pdoGoJSON($query);
?> 