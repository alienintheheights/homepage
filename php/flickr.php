<?php
header("Access-Control-Allow-Origin: *");

$page = $_GET['page'];
if (!$page) {
    $page = 1;
}

$per_page = $_GET['per_page'];
if (!$per_page) {
    $per_page = 5;
}

if (!filter_var($per_page, FILTER_VALIDATE_INT) === false || !filter_var($page, FILTER_VALIDATE_INT) === false) {
    require_once("api.inc.php");
    $API_ENDPOINT = 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&user_id=51168414@N00&api_key=';
    $API_ENDPOINT .= $API_KEY;
    $API_ENDPOINT .= '&format=json&nojsoncallback=1&page=';
    $API_ENDPOINT .= $page;
    $API_ENDPOINT .= '&format=json&nojsoncallback=1&per_page=';
    $API_ENDPOINT .= $per_page;
    $response = file_get_contents($API_ENDPOINT);
    echo $response;
} else {
    exit(0);
}


?>
