$(document).ready(function(){
	$(inputZone) = $("#pinfalls .container");
	$(inputZone).click(function(e){
		recordScore(e.target)
	});
});

function recordScore(e) {
	console.log(e);
}