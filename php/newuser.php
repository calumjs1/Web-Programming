<?php
require("Connect.php");



if(isset($_POST['submit'])) {
  $user = $_POST['newUsername'];
  $pwd = $_POST['newPassword'];



  $pwdHash = password_hash($pwd, PASSWORD_DEFAULT);

  $usrCheck = "SELECT username FROM user WHERE username = '".$user."';";
  $qry = mysqli_query($link, $usrCheck);
  $row = mysqli_num_rows($qry);
;
  if($row != 0) {
    echo '<script> alert("Sorry. that username is already taken")</script>';
  } else {
    $qry = "INSERT INTO user (username, password) VALUES ('".$user."', '".$pwdHash."')";
    $res = mysqli_query($link, $qry);
    if($res) {
      header("Location: ../canvas.html");
    } else {
      echo 'Error: did not register details.';
    }

  }




}


?>
