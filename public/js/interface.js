$(document).ready(function() {
	var roll = new Roll();
	var pin = new Pin();
	$('#pins').text(pin.currentPins());

	$('#rollBall').click(function() {
		pin.pinsDown(roll.rollBall());
		$('#pins').text(pin.currentPins());
	});
});