<?php namespace ThinkingDog\Action;

use ThinkingDog\Service\ShowService;

class Shows
{
    private $service;

    function __construct()
    {
         $this->service = new ShowService();
    }

    function getShows($dir)
    {   
        return $this->service->getShows($dir);
    }
}

?>
