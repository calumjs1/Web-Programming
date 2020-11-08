<?php
include_once 'connect.php';



if(isset($_POST['submit'])) {
    $nickname = $_POST['username'];
    
    $usrcheck = "SELECT nickname FROM details WHERE nickname = '$nickname'";
    $sql = mysqli_query($link, $usrcheck);


    if(mysqli_num_rows($sql) >=1) {
      header("Location: index.php");
    } else if(mysqli_num_rows($sql) < 1) {
      $qry = "INSERT INTO details (nickname)
              VALUES ('$nickname')";

      mysqli_query($link, $qry);
      header('Location: canvas.html');

}


?>
