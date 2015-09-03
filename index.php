<!DOCTYPE html>
<html>
	<head>
		<?php
			header("Access-Control-Allow-Origin: *");
		?>
		<meta charset="utf-8" />
		<meta content="width=device-width, initial-scale=1.0" name="viewport">
		
		<title>NodeJS + PHP + one to one private chat</title>
	
		<link rel="stylesheet" href="css/bootstrap.css" />
		<style type="text/css">body { padding-top: 60px; }</style>
		<link rel="stylesheet" href="css/bootstrap-responsive.css" />
		
		<link rel="stylesheet" href="css/index.css" />
	</head>

	<body>
		<div class="navbar navbar-inverse navbar-fixed-top">
			<div class="navbar-inner">
				<div class="container">
					<a class="brand" href="index.php">NodeJS_PHP</a>
					
				</div>
			</div>
		</div>
		
		<div class="container">
			<h1>Integration test NodeJS + PHP + one to one private chat</h1>
			<p>
				This is a simple application, showing integration between nodeJS and PHP.
			</p>
			
			<form class="form-inline" id="messageForm">
				<!-- <input id="nameInput" type="text" class="input-medium" placeholder="Name" /> -->
				<input id="messageInput" type="text" class="input-xxlarge" placeHolder="Message" />
				<select id="messageRecepient"></select>
			
				<input type="submit" value="Send" />
			</form>
			
			<div>
				<label id="myName"></label>
				<label><b>Connected Users</b></label>
				<ol id="all_users">
					
				</ol>
				<div><i id="typing_text" style="color:green;"></i></div>
				<label><b>Messages</b></label>
				<ul id="messages">
				</ul>
			</div>
			<!-- End #messages -->
		</div>
		
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" ></script>
		<script src="js/bootstrap.js"></script>
		<script src="js/node_modules/socket.io/node_modules/socket.io-client/dist/socket.io.js"></script>
		<script src="js/nodeClient.js"></script>
	</body>
</html>