<?php
	$user = json_decode(file_get_contents('php://input'));
	if($user->email == "msmuthu008@gmail.com" && $user->password == "1234")
		print "succes";
	else 
		print "error";
?>