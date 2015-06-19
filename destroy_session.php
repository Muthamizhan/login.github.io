<?php
	session_id('uid');
	session_start();
	session_destroy();
	sesssion_commit();

?>