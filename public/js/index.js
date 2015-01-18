
$('#hitAPI').click(function() {
	$.post( "/api", function( res ) {
	  console.log(res);
	});
});