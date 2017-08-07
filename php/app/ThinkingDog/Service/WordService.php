<?php namespace ThinkingDog\Service;

use ThinkingDog\Database\JSONFormatDB;
use ThinkingDog\Database\SimpleDB;

class WordService
{
    // SimpleDB class
    private $formatDB;
    // Query for Words: TEMP table name for testing!
    private $query="SELECT word, definition, type FROM al_xwords";

    function __construct()
    {
         $this->formatDB = new JSONFormatDB(new SimpleDB());
    }

    function getRandomWords()
    {

        return $this->formatDB->runRandom($this->query);
    }

    function getSortedWords()
    {   
        return $this->formatDB->run($this->query + " ORDER BY word");
    }
}

?>
