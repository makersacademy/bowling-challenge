describe('bowlingGame', function() {

  beforeEach(function() {
      bowlingGame = new BowlingGame;
  });

  it('can roll a gutter game', function() {
    customInput(20, 0);
    expect(bowlingGame.score()).toBe(0);
  });

  it('can roll a one point game', function() {
    customInput(20, 1);
    expect(bowlingGame.score()).toBe(20);
  });

  it('can roll score a custom amount of scores', function() {
    customInput(5, 2);
    customInput(10, 4);
    customInput(3, 3);
    customInput(2, 1);
    expect(bowlingGame.score()).toBe(61);
  });

  it('spare bonus is calculated into the score', function() {
    customInput(2, 5);
    customInput(2, 3);
    customInput(16, 0);
    expect(bowlingGame.score()).toBe(19);
  });

  it('strike bonus is calculated into the score', function() {
    customInput(1, 10);
    customInput(2, 3);
    customInput(16, 0)
    expect(bowlingGame.score()).toBe(22);
  });

  it('can play a perfect game (last frame can score 3 times)', function() {
    customInput(12, 10);
    expect(bowlingGame.score()).toBe(300);
  });






  var customInput = function(inputAmount, score) {
      for( i = 0; i < inputAmount; i++) {
        bowlingGame.scoreInput(score);
      }
    }


});
