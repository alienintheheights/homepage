<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
require_once "app/start.php";

use ThinkingDog\Action\Words;

$words = new Words();
print $words->getRandomWords();
?>                            