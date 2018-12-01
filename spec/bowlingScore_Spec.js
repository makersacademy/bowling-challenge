describe('Bowling', function() {

  var score;

  beforeEach(function() {
    score = new Score();
    frame = new Frame();

  });

  describe('#runner', function() {
    it('correctly identifies the bowl score', function() {
      score.runner(1, 1, 3);
      expect(score.currentScore).toEqual(3);
    });

    it('correctly identifies the current turn', function() {
      score.runner(1, 1, 5);
      expect(score.currentTurn).toEqual(1);
    });

    it('correctly identifies the current frame', function() {
      score.runner(9, 2, 3);
      expect(score.currentFrame).toEqual(9);
    });


    it('adds score to scoreboard', function() {
      score.runner(1, 1, 5)
      expect(score.scorecard[0]).toEqual(5);
    });

  });

  describe('#isAStrike', function() {
    it ('identifies a strike', function() {
      score.runner(1, 1, 10);
      expect(score.isAStrike()).toEqual(true);

    });

  })


});


// describe('to increase temperature', function() {
//   it('increases temperature by 1 degree', function() {
//     thermostat.up();
//     expect(thermostat.temperature).toEqual(21);
//   });
// });
