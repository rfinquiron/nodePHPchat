var socket = io.connect( 'http://localhost:1334' );
var userData = {
	userID: Math.floor(Math.random() * 100) + 1,
	userName: 'temp',
	clientID: Math.floor(Math.random() * 10) + 1,
};
$( "#messageForm" ).submit( function() {
	var nameVal = $( "#nameInput" ).val();
	var msg = $( "#messageInput" ).val();
	var messageRecepient = $('#messageRecepient').val();
	socket.emit( 'message', { name: nameVal, message: msg, recepient: messageRecepient } );
	$( "#messageInput" ).val('').focus();	
	return false;
});

$( "#messageInput" ).keyup( function() {
	//console.log('clientside keyup');
	var nameVal = $( "#nameInput" ).val();
	var msg = $( "#messageInput" ).val();
	
	socket.emit( 'typing', { name: nameVal, message: msg } );	
});

socket.on( 'connect', function( data ) {
	//console.log('received connect at clientside');
});

var typingClear = false;
socket.on( 'typing', function( data ) {
	//console.log('received typing at clientside from ' + data.name);
	$( "#typing_text" ).html( data.name + ' is typing...' );
	clearTimeout(typingClear);
	typingClear = setTimeout(function() {
		$( "#typing_text" ).html( '' );
	}, 3000);
});


socket.on( 'message', function( data ) {
	//console.log(socket);
	//console.log('received message at clientside from ' + data.name);
	var actualContent = $( "#messages" ).html();
	var newMsgContent = '<li> <strong>' + data.name + '</strong> : ' + data.message + '</li>';
	var content = newMsgContent + actualContent;
	
	$( "#messages" ).prepend( newMsgContent );
});

socket.on( 'userData', function( data ) {
	//console.log('userData at clientside');
	$( "#myName" ).html('Hello! You are <b style="color:red">' + data.username + '</b>');
});

socket.on( 'allUsers', function( data ) {
	var userDetails = data.userDetails;
	$( "#all_users" ).html('');
	$('#messageRecepient').html('');
	for(var key in userDetails) {
		$( "#all_users" ).append('<li>' +  userDetails[key]  + '</li>');
		$( "#messageRecepient" ).append('<option value="'+key+'">' +  userDetails[key]  + '</option>');
	}
});

