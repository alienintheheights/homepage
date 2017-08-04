<?php
// util to deal with JSON encoding on UTF-8. copy/paste stackoverflow!
function utf8ize($d) {
    if (is_array($d))
        foreach ($d as $k => $v)
            $d[$k] = utf8ize($v);

     else if(is_object($d))
        foreach ($d as $k => $v)
            $d->$k = utf8ize($v);

     else
        return utf8_encode($d);

    return $d;
}

function getDB() {
    require_once("../etc/dbinfo.inc.php");
    $pdo = new PDO("mysql:dbname=$database;host=$host;charset=UTF8;",$username,$password) or die("Can not connect");
    return $pdo;
}

function pdoGoJSON($query) {
    $pdo = getDB();
    $stmt=$pdo->prepare($query);
    $stmt->execute() or die("Can not execute");
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);

   // clean-up
    $stmt->closeCursor();
    $pdo = null;
    $stmt = null;
}

?>
