<?php namespace ThinkingDog\Service;

use ThinkingDog\Database\JSONFormatDB;
use ThinkingDog\Database\SimpleDB;

class ProfileService
{
    // SimpleDB class
    private $formatDB;
    // Query for Bio: TEMP table name for testing!
    private $query="SELECT post_content FROM wp_sf2jjy_posts where post_name = 'about'";

    function __construct()
    {
         $this->formatDB = new JSONFormatDB(new SimpleDB());
    }

    function getBio()
    {

        return $this->formatDB->run($this->query);
    }

}

?>