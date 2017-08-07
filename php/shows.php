<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
require_once "app/start.php";


use ThinkingDog\Action\Shows;

$shows = new Shows();
print $shows->getShows($_GET['dir']);
?>                            