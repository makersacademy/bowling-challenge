describe ("Bowling", function() {

	var game;
	beforeEach(function(){
		game = new Bowling();
	});

	 it("can score the gutter game score", function(){
		 rollFew(0, 20);
	 	expect(game.score()).toEqual(0)
	 });

	 it("can roll 1 for 20 times", function(){
		rollFew(1, 20);
		expect(game.score()).toEqual(20);
	 });


	 var rollFew = function (pins, rolls) {
		 for (var i = 0; i < 20; i++) {
		 game.roll(pins);
		 }
	 };
}); 