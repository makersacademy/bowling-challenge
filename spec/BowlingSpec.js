describe ("Bowling", function() {
	var bowling;

	beforeEach (function(){
		bowling = new Bowling();
	});

	it('starts with a total of 0', function() {
		expect(bowling.total).toEqual(0);
	});

  // it('the frame starts at 0', function(){
  //   expect(bowling.frame).toEqual(0);
  // });
  //
  // it('increments the frame by 1 every 2 turns', function(){
  //   fullGame(0, 20)
  //   expect(bowling.frame).toEqual(10);
  // });

  it('can roll a gutter game', function() {
    fullGame(0, 20)
    expect(bowling.total).toEqual(0);
  });

  it('can roll a game of 2s with no spares/strikes', function(){
    fullGame(2, 20)
    expect(bowling.score()).toEqual(40);
  });

  it('can roll a spare', function(){
    bowling.roll(9);
    bowling.roll(1);
    bowling.roll(6);
    fullGame(0, 17);
    expect(bowling.score()).toEqual(22);
  });

  it('can roll a strike', function(){
    bowling.roll(10);
    bowling.roll(4);
    bowling.roll(3);
    fullGame(0, 16);
    expect(bowling.score()).toEqual(24)
  });

  it('stops adding to the total after 10 frames', function() {
    fullGame(2, 20)
    expect(bowling.score()).toEqual(40);
  });

  it('can roll a perfect game', function() {
    fullGame(10, 20)
    expect(bowling.score()).toEqual(300);
  });

  var fullGame = function(pins, rolls) {
    for(var i=0; i<rolls; i++) {
      bowling.roll(pins);
    }
  }
});
