<?php

session_start();

  if(!$_SESSION['signed_in']) {
    $_SESSION['flash_error'] = 'Please sign in';
    header("Location: index.php");
    exit;
  }






 ?>
