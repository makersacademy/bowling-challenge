
$( document ).ready(function() {

	var scorecard = new Scorecard;

	$( "#up" ).click(function( event ) {
 		thermostat.up();
        alert( "It's getting hot in here!" );
    });
});