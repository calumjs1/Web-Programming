<?php
include_once 'Connect.php';



if(isset($_POST['submit'])) {

  $usr = $_POST['username'];
  $pwd = $_POST['password'];

  $qry = "SELECT username, password FROM user WHERE username = '$usr'";

  if($result = mysqli_query($link, $qry))) {

    $row = mysqli_fetch_assoc($result);

    $username = $row['username'];

    $passcheck = $row['password'];

    $hashedPassCheck = password_verify($pwd, $passcheck);

    if($hashedPassCheck == true and $usr = $username) {
      echo 'correct credentials';
    } else {
      echo 'wrong password';

    }
  }












?>
