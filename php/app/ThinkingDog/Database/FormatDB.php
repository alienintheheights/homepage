<?php namespace ThinkingDog\Database;

/**
* Interface for Decorators.
*/
abstract class FormatDB implements DBRunner {
  protected $db;

  function __construct(DBRunner $db)
  {
    $this->db = $db;
  }

  abstract function run($query);
  
  abstract function runRandom($query);
}


?>