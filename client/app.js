
$('#hitAPI').click( function() {
	console.log("meow");
    $.post( "/api", function (res) {
        console.log(res);
    })
})