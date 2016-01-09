describe('Game', function() {

  var game

  beforeEach(function() {
   game = new Game();
  });

  it('has a starting score of 0', function() {
    expect(game.score).toEqual(0);
  });

  it('raises an error if play continues after the 10th frame', function(){
    var n
    for (n=0; n<20; n++) {
      game.knockDownPins(4);
    }
    expect(function(){
      game.knockDownPins(9);
    }).toThrowError('Game over: The 10th frame has finished')
  });

  describe('#pinsKnockedDown', function() {
    it('adds the number of pins to the score', function() {
      game.knockDownPins(9);
      expect(game.score).toEqual(9);
    });

    it('doesn\'t allow more than 10 pins per frame', function () {
      game.knockDownPins(9);
      expect(function() {
        game.knockDownPins(2);
      }).toThrowError('Not possible: Only 10 pins per frame')
    })

    it('doesn\t allow a single score of more than 10', function() {
      expect(function() {
        game.knockDownPins(11);
      }).toThrowError('Not possible: Max score in one go is 10')
    })
  });

  describe('#getScore', function() {
    it('returns the current score', function() {
      game.knockDownPins(4);
      game.knockDownPins(5);
      expect(game.getScore()).toEqual(9);
    });
  });

  describe('#getFrame', function() {
    it('initially returns frame 1', function () {
      expect(game.getFrame()).toEqual(1);
    });

    it('returns the correct frame after 2 balls', function () {
      game.knockDownPins(4);
      game.knockDownPins(5);
      expect(game.getFrame()).toEqual(2);
    });

    it('returns the correct frame after 15 balls', function() {
      var n
      for (n = 0; n <=14; n++) {
        game.knockDownPins(4);
      }
      expect(game.getFrame()).toEqual(8)
    });
  });

});
