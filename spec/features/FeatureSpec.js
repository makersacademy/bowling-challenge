
describe('JavaScript Bowling Game', function(){

  beforeEach(function(){
  });

  it('I can play a single normal frame and see the score', function(){
    var game = new BowlingGame();
    spyOn(game, "playBall").and.returnValue(3); 
    game.letsBowl();
    game.letsBowl();
    expect(game.currentFrame()).toBe(2);
    expect(game.scoreCard.getScore()).toBe(6); 
  })

  //User Story 2: 
  //As a bowler, when I bowl a spare, I want to see my bonus points

  it('I can bowl a spare and it will give me double points on the next bowl', function(){
    var game = new BowlingGame();
    spyOn(game, "playBall").and.returnValue(5);
    game.letsBowl();
    game.letsBowl();
    game.letsBowl();
    expect(game.scoreCard.getScore()).toBe(20); 

  });






});
