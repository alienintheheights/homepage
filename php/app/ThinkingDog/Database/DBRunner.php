<?php namespace ThinkingDog\Database;

/**
* DB Interface
*/
interface DBRunner {
  function run($query);
  function runRandom($query);
}

?>