<?php namespace ThinkingDog\Service;

use ThinkingDog\Database\JSONFormatDB;
use ThinkingDog\Database\SimpleDB;

class WordService
{
    // DBRunner class
    private $formatDB;
    // Query for Words
    private $query="SELECT word, definition, type FROM al_xwords";

    function __construct()
    {
         // decorate DBRunner with FormatDB
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
