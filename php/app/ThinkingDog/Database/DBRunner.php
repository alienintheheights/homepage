<?php namespace ThinkingDog\Database;

/**
* DB Interface
*/
interface DBRunner {

  /**
  * Runs a Query.
  */
  function run($query);

  /**
  * Returns randomly sorted list of results, per query
  */
  function runRandom($query);
}

?>