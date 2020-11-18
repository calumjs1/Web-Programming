<?php
require('Connect.php');


if(isset($_POST['submit'])) {
  $user = $_POST['username'];
  $pwd = $_POST['password'];
  //hash system will be implemented

  $usrCheck = "SELECT ' username'FROM 'user' WHERE userName='$user'";
  $qry = mysqli_query($conn, $usrCheck);

  if(mysqli_num_rows($qry > 0)) {
    echo '<p>Sorry, that username is already taken.</p>'; //checks if a username already exists on the database 
  } else {
    $qry = "INSERT INTO 'user' (username, password_sha1) VALUES ('$user', '$pwd')";
    mysqli_query($conn, $qry);

  }




}









 ?>
