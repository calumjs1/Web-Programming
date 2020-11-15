<?php
include_once 'connect.php';



if(isset($_POST['submit'])) {
  $nickname = $_POST['username'];
  $password = sha1($_POST['password']);

  $qry = "SELECT username FROM user WHERE username = :u AND password_sha1  = :p";
  $stmt = $pdo->prepare($qry);

  $stmt->execute(array(
            ":u"=>$username,
            ":p"=>$password_sha1
          ));
  $row = $stmt->fetch();

  if($row) {
    $_SESSION['signedIn'] = true;
    $_SESSION['username'] = $username;
    header("Location: canvas.html");

  } else {
   $_SESSION['flash_error'] = "Invalid username or password";
   $_SESSION['signed_in'] = false;
   $_SESSION['username'] = null;
   header("Location: /index.php");

  }




}


?>
