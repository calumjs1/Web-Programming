<?php
require('connect.php');


if(isset($_POST['submit'])) {
  $user = $_POST['username'];
  $pwd = $_POST['password'];


  $qry = "INSERT INTO 'user' (username, password_sha1) VALUES ('$user', '$pwd')";
  

}









 ?>
