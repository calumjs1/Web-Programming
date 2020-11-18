<?php


$link = mysqli_connect(DB_CONNECT, DB_USR, DB_PWD, DB_NAME);

define("DB_CONNECT", "localhost");
define("DB_USR", "root");
define("DB_PWD", "";)
define("DB_NAME", "user-data");


if(!$link)
{
    die("Error: could not connect to server " . mysqli_connect_error());
}
