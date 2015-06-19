<?php
	$user = json_decode(file_get_contents('php://input'));
	if($user->email == "msmuthu008@gmail.com" && $user->password == "1234"){
		session_start();
		$_SESSION['uid'] = uniqid('muthu_');
		print $_SESSION['uid'];
	}
		
?>