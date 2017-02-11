$(document).ready(function(){
	var game = new Game();
	var pins = [0,1,2,3,4,5,6,7,8,9,10];
	

	$('#firstRollButton').click(function(){
		pinsFirst = pins[Math.floor(Math.random()* pins.length)];
		if(pinsFirst == 10){
			$('#firstRoll-' + game.frameIndex()).text(pinsFirst);
			$('#score-' + game.frameIndex()).text(pinsFirst);
			game.play(pinsFirst);
			$('#totalScore').text(game.score())
			}
		else{
			$('#firstRoll-' + game.frameIndex()).text(pinsFirst);
			$('#firstRollButton').addClass('hidden');
			$('#secondRollButton').removeClass('hidden');
			game.play(pinsFirst);
			$('#totalScore').text(game.score());}
		});

	$('#secondRollButton').click(function(){
		pinsSecond = pins[Math.floor(Math.random() * (pins.length - game.returnFirstRollPins()))];
		game.secondPlay(pinsSecond);
		$('#secondRoll-' + game.frameIndex()).text(game.returnSecondRollPins());
		$('#secondRollButton').addClass('hidden');
		$('#firstRollButton').removeClass('hidden');
		$('#score-' + game.frameIndex()).text(game.returnFirstRollPins() + game.returnSecondRollPins())
		game.nextFrame();
		if (game.frameIndex()==10){
			$('#firstRollButton').addClass('hidden');
			$('#secondRollButton').addClass('hidden');
			$('#newGameButton').removeClass('hidden');
		}
		$('#totalScore').text(game.score());
		if(game.frameIndex() == 9 && game.hasBonusPlay() == true){
			$('#firstRollButton').addClass('hidden');
			$('#secondRollButton').addClass('hidden');
			$('#bonusRollButton').removeClass('hidden')};
		});

$('#bonusRollButton').click(function(){
	pinsBonus = pins[Math.floor(Math.random()* pins.length)];
	game.bonusPlay(pinsBonus)
	if(game.score() == 210){
		game.perfectGame()}
	});

});
