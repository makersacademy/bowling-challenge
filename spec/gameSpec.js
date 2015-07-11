// has 10 frames
// count score for each frame (frameScore) and adds to totalScore
// knows when all 10 frames are complete and it is the end of the game
// knows when a perfact game score of 300 is achieved


describe('Game scoring system', function() {
	var game;

	beforeEach(function() {
		game = new Game();
	});

	describe('number of frames', function() {
		it('consists of 10 frames only', function(){
			// something here to increase game number to attempt to increase frames above 10 and it to fail
			expect(game.frameArr.length).toEqual(10)
		});
		it('does not contain more than 10 frames', function(){
			expect(game.frameArr.length).not.toEqual(11)
		});

	});

	// describe end of game function?

	describe('number of rolls per frame', function() {

	});
  //
	// describe('temperature change', function(){
	// 	it('can increase', function(){
	// 		thermostat.increase();
	// 		expect(thermostat.temperature).toEqual(21);
	// 	});
  //
	// 	it('can decrease', function(){
	// 		thermostat.decrease();
	// 		expect(thermostat.temperature).toEqual(19);
	// 	});
	// });
  //
	// describe('has a minimum temp',function(){
	// 	it('minimum is 10 degrees', function(){
	// 		thermostat.temperature = 10;
	// 		thermostat.decrease();
	// 		expect(thermostat.temperature).toEqual(10);
	// 	});
	// });
  //
	// describe('power saving mode on', function() {
	// 	it('max temperature is 25 degrees', function() {
	// 		thermostat.temperature = 25;
	// 		thermostat.increase();
	// 		expect(thermostat.temperature).toEqual(25);
	// 	});
	// });
  //
	// describe('power saving mode off', function() {
	// 	it('max temperature is 32 degrees', function() {
	// 		thermostat.powerSavingOff();
	// 		thermostat.temperature = 32;
	// 		thermostat.increase();
	// 		expect(thermostat.temperature).toEqual(32);
	// 	});
	// });
  //
	// describe('reset button', function(){
	// 	it('resets it to twenty', function(){
	// 		thermostat.temperature = 25;
	// 		thermostat.resetTemp();
	// 		expect(thermostat.temperature).toEqual(20);
	// 	});
	// });
  //
	// describe('energy usage', function(){
	// 	it('is set to low if temperature is below 18 degrees', function(){
	// 		thermostat.temperature = 17;
	// 		expect(thermostat.energyUse()).toEqual('low');
	// 	});
  //
	// 	it ('is set to medium if temperature is below 25', function(){
	// 		thermostat.temperature = 24;
	// 		expect(thermostat.energyUse()).toEqual('medium');
	// 	});
  //
	// 	it ('is set to high if temperature is 25 degrees or above', function(){
	// 		thermostat.temperature = 25;
	// 		expect(thermostat.energyUse()).toEqual('high');
	// 	})
	// });

});
