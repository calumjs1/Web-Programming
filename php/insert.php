<?php
include_once 'connect.php';



if(isset($_POST['submit'])) {

  $usr = $_POST['username'];
  $pwd = $_POST['password'];

  $usrcheck = "SELECT username FROM users WHERE username='$usr'";
  $pwdcheck = "SELECT password FROM users WHERE password='$pwd'";

  $qry1 = mysqli_query($conn, $usrcheck);
  $qry2 = mysqli_query($conn, $pwdcheck);


  $row1 = mysqli_fetch_array($qry1);
  $row2 = mysqli_fetch_array($qry2);

  if($row1 > 0 and $row2 > 0) {
    header("Location: canvas.html");
  }

}







?>
