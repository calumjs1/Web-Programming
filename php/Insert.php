<?php
include_once 'Connect.php';



if(isset($_POST['submit'])) {

  $usr = $_POST['username'];
  $pwd = $_POST['password'];

  $qry = "SELECT username, password FROM users WHERE username = '$usr'";


  if($result = mysqli_fetch_array($link, $qry)) {
    $row = mysqli_fetch_assoc($result);
    $username = $row['username'];
    $passcheck = $row['password'];

    $hashedPassCheck = password_verify($pwd, $passcheck);

    if($hashesPassCheck == false) {
      echo 'Incorrect Password';
    } else {
      echo ' Login Successful';
      header("Location: ../canvas.html");
    }
  }





  $row1 = mysqli_fetch_array($qry1);
  $row2 = mysqli_fetch_array($qry2);

  if($row1 > 0 and $row2 > 0) {
    header("Location: Canvas.html");
  }

}







?>
