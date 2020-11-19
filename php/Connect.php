<?php

$DB_CONNECT = "localhost";
$DB_USR = "root";
$DB_PWD = "";
$DB_NAME = "user-data";

$link = mysqli_connect($DB_CONNECT, $DB_USR, $DB_PWD, $DB_NAME);

if(!$link)
{
    die("Error: could not connect to server " . mysqli_connect_error());
}
