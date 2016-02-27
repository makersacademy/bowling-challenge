
//User Story 1:
//As a bowler,
//So that I can see how well I'm doing,
//I can play 1 frame and see the score.

describe('JavaScript Bowling Game', function(){

  beforeEach(function(){
  });

  it('I can play a single normal frame and see the score', function(){
    var game = new BowlingGame();
    spyOn(game, "playBall").and.returnValue(3); 
    game.letsBowl();
    game.letsBowl();
    expect(game.currentFrame()).toBe(2);
    expect(game.getScore()).toBe(6); 
  })







});
