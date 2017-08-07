<?php namespace ThinkingDog\Service;

use ThinkingDog\Database\JSONFormatDB;
use ThinkingDog\Database\SimpleDB;

class ShowService
{
    // SimpleDB class
    private $formatDB;
    // Query for Shows: TEMP table name for testing!
    private $baseQuery="SELECT event_name, venue_name, venue_url, show_date_start, show_date_end FROM al_events WHERE show_date_start ";

    function __construct()
    {
         $this->formatDB = new JSONFormatDB(new SimpleDB());
    }

    private function getSQL($showSortDir)
    {
        $isDesc = (empty($showSortDir) || $showSortDir=="desc");
        $orderByDirection = "ORDER BY show_date_start ".($isDesc ? "DESC" : "ASC");
        $inequalityString = ($isDesc ? "<" : ">=");
       
        return $this->baseQuery.$inequalityString." CURDATE() ".$orderByDirection;
    }

    function getShows($dir)
    {   
        return $this->formatDB->run($this->getSQL($dir));
    }
}

?>
