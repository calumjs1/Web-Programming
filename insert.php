<?php
include_once 'connect.php';



if(isset($_POST['submit'])) {
  $nickname = $_POST['username'];

  $qry = "INSERT INTO details (nickname)
  VALUES ('$nickname')";

  mysqli_query($link, $qry);


  mysqli_close($link);


}






 ?>
