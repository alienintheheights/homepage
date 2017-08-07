<?php namespace ThinkingDog\Action;


use ThinkingDog\Service\ProfileService;

class About
{
    private $service;

    function __construct()
    {
         $this->service = new ProfileService();
    }

    function getBio()
    {   
        return $this->service->getBio();
    }
}



?>
