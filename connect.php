<?php


$link = mysqli_connect("localhost", "root", "", "user-data");


if(!$link)
{
    die("Error: could not connect to server " . mysqli_connect_error());
} 
