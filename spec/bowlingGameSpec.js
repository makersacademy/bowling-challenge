describe ("Bowling", function() {

	var game;
	beforeEach(function(){
		game = new Bowling();
	});

	it("can store rolls correctly", function(){
		game.roll(2);
		game.roll(2);
		game.roll(2);
		expect(game.rolls).toEqual([2, 2, 2]);
	});

	it("can show a current result", function(){
		game.roll(2);
		expect(game.currentTotal()).toEqual(2)
	});

	 it("can score the gutter game score", function(){
		 rollFew(0, 20);
	 	expect(game.score()).toEqual(0)
	 });

	 it("can roll 1 for 20 times", function(){
		rollFew(1, 20);
		expect(game.score()).toEqual(20);
	 });

	 it ("can roll a spare", function(){
		game.roll(6);
		game.roll(4);
		game.roll(1);
		game.roll(3);
		rollFew(0, 16);
		expect(game.score()).toEqual(15)
	 });

	 it("can roll a strike", function(){
		game.roll(10);
		game.roll(2);
		game.roll(6);
		rollFew(0, 16);
		expect(game.score()).toEqual(26)
	 });
	 
	 it("Can calculate a perfect stike only game", function(){
		rollFew(10, 12);
		expect(game.score()).toEqual(300)
	 });


	 var rollFew = function (pins, rolls) {
		 for (var i = 0; i < 20; i++) {
		 game.roll(pins);
		 }
	 };
}); 