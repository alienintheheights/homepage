<?php namespace ThinkingDog\Action;

use ThinkingDog\Service\WordService;

class Words
{
    private $service;

    function __construct()
    {
         $this->service = new WordService();
    }

    function getRandomWords()
    {

        return $this->service->getRandomWords();
    }

    function getSortedWords()
    {   
        return $this->service->getSortedWords();
    }
}

?>
