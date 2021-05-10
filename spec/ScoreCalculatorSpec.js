describe('ScoreCalculator', function() {

  let score;
  let game;

  beforeEach(function(){
   game = new Game();
   score = new ScoreCalculator();
  });

  it('Should start a game on the first round', () => {
    expect(score.round).toEqual(1);
  });
  it('Will not continue adding once the game has ended', () =>{
    score.round = 12
    expect(score.gameOver()).toEqual(true);
    expect(score.add(1)).toEqual(null);
  });
  it('Will not continue adding once the game has ended', () =>{
    score.round = 12
    expect(score.add(2)).toEqual(null);
  });
  it('Can push two values into one frame', () => {
    score.add(1);
    score.add(2);
    expect(score.frames).toEqual([ 1, 2 ]);
  });
  it('Will reset the frame after a round', () => {
    score.add(1);
    score.add(2);
    expect(score.frame).toEqual(1);
  });
  it('can add the total scores of the game', () => {
    score.add(1);
    score.add(5);
    expect(score.addedScores()).toEqual(6);
  });
  it('can work out if a roll was a strike', () => {
    expect(score.isStrike(10)).toBe(true);
  });
  it('can calculate a strike bonus', () => {
    score.add(10);
    score.add(1)
    expect(score.addedScores()).toBe(22)
  });
  it('can calculate a spare bonus', () => {
    score.add(2)
    score.add(8)
    score.add(2)
    expect(score.addedScores()).toBe(22);
  });
  it('Will end the game if in the tenth frame without a strike', () => {
    score.round = 11
    score.add(2)
    score.add(2)
    expect(score.gameOver()).toBe(true)
  });
  it('Will end the game if in the tenth frame without a spare', () => {
    score.round = 11
    score.add(2)
    score.add(2)
    expect(score.gameOver()).toBe(true)
  });
  it('Will give another round if you score a strike or a spare in the tenth frame', () => {
    score.round = 11
    score.add(10)
    score.add(5)
    expect(score.gameOver()).toBe(false)
  });
});