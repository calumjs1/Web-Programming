<?php


$link = mysqli_connect("hostname", "username", "password", "database"); //server details will be added in the future


if(!$link)
{
    die("Error: could not connect to server " . mysqli_connect_error());
}


$username = $_POST['username'];


$sql = 'INSERT INTO users (usrname) VALUES ($username)';
mysqli_query($link, $sql);


?>
