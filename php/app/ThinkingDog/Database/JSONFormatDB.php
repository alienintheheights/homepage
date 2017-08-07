<?php namespace ThinkingDog\Database;

/**
* JSONDB decorates with JSON output.
*/
class JSONFormatDB extends FormatDB
{
    function run($query)
    {
        return json_encode($this->db->run($query));
    }

    function runRandom($query)
    {
        return json_encode($this->db->runRandom($query));
    }
}

?>