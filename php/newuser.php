<?php
require('Connect.php');


if(isset($_POST['submit'])) {
  $user = $_POST['username'];
  $pwd = $_POST['password'];
  //hash system will be implemented
  $salt = "@$&%£WRHSFAA%B&@%(^*$%&$^£*&£ad";

  $pwdHash = hash("sha256", $pwd);

  $usrCheck = "SELECT username FROM user WHERE userName='".$user."'";
  $qry = mysqli_query($conn, $usrCheck);
  $rows = mysqli_num_rows($qry);

  if($rows != 0) {
    echo '<p>Sorry, that username is already taken.</p>'; //checks if a username already exists on the database
    header("Location: ../newuser.html");
  } else {
    $qry = "INSERT INTO user (username, password) VALUES ('".$user."', '".$pwdHash."')";
    $result = mysqli_query($conn, $qry);
    if($result) {
      header("Location: ../canvas.html");
    }


  }




}









 ?>
