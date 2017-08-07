<?php namespace ThinkingDog\Database;

use \PDO;

/**
* A Class that provides basic DB operations.
* Implements DB.
*/
class SimpleDB implements DBRunner
{
    
    private $stmt;
    private $pdo;

    function __construct()
    {
        require_once __DIR__ . "/../../../dbinfo.inc.php";
        try {
            $this->pdo = new PDO("mysql:dbname=$database;host=$host;charset=UTF8;", $username, $password);
        } catch (PDOException $e) {
            echo 'Connection failed: ' . $e->getMessage();
        }
    }

    function __destruct()
    {
        // clean-up
        try {
            if (!is_null($this->stmt)) {
                $this->stmt->closeCursor();
            }
            $this->pdo = null;
            $this->stmt = null;
        } catch (PDOException $e) {
            echo 'Query failed: ' . $e->getMessage();
        }
    }

    function run($query)
    {
        try {
            $this->stmt=$this->pdo->prepare($query);
            $this->stmt->execute();
            return $this->stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo 'Query failed: ' . $e->getMessage();
        }
    }

    function runRandom($query)
    {
        $results = $this->run($query);
        shuffle($results);
        return $results;
    }

}

?>