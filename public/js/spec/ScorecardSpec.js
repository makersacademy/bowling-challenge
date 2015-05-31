describe('Scorecard', function(){
  var scorecard;

  beforeEach( function(){
    scorecard = new Scorecard();
  });

  it('has a total score when initialized', function(){
    expect(scorecard.totalScore).toEqual(0);
  });


  it('has an array of individual scores when initialized', function() {
    expect(scorecard.bowls).toEqual([]);
  });

  it('can store individual bowls in an array', function (){
    scorecard.runFrame(2,3)
    expect(scorecard.bowls).toEqual([[2,3]]);
  });

  it('can calculate the total frame score', function(){
    scorecard.runFrame(2,3)
    expect(scorecard.frameScore).toEqual(5);
  });

  it('can track all 10 frames of 20 bowls with no spares or half strikes', function(){
      for (var i = 0; i < 10; i++){
        scorecard.runFrame(2,3)
      }
      expect(scorecard.totalScore).toEqual(50);
  });

  it('can calculate the score of a game with no spares or half strikes', function(){
      for (var i = 0; i < 10; i++){
        scorecard.runFrame(2,3)
      }
      expect(scorecard.bowls).toEqual([[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3]])
  });

  it('can calculate a bonus score for a half strike', function(){
    scorecard.runFrame(3,7)
    scorecard.runFrame(2,3)
    expect(scorecard.totalScore).toEqual(17);
  });

  it('can calculate a bonus score for multiple half strikes in sequence',function(){
    scorecard.runFrame(3,7)
    scorecard.runFrame(3,7)
    scorecard.runFrame(2,3)
    expect(scorecard.totalScore).toEqual(30);
  });

  it('can calculate a bonus score for a strike', function(){
    scorecard.runFrame(10,0)
    scorecard.runFrame(2,3)
    expect(scorecard.totalScore).toEqual(20);
  });

  it('can calculate a strike and a half strike together', function(){
    scorecard.runFrame(10,0)
    scorecard.runFrame(3,7)
    scorecard.runFrame(2,3)
    expect(scorecard.totalScore).toEqual(37);
  });

  it('can calculate 2 strikes in a row', function(){
    scorecard.runFrame(10,0)
    scorecard.runFrame(10,0)
    scorecard.runFrame(2,3)
    expect(scorecard.totalScore).toEqual(42);
  });

  it('can calculate 4 strikes in a row', function(){
    for (var i = 0; i < 4; i++) {
        scorecard.runFrame(10,0)
      }
    scorecard.runFrame(2,3)
    expect(scorecard.totalScore).toEqual(102);
  });

  it('can calculate 9 strikes in a row up to final frame', function() {
      for (var i = 0; i < 9; i++) {
        scorecard.runFrame(10,0)
      }
      scorecard.runFrame(2,3)
      expect(scorecard.totalScore).toEqual(252);
  });

  it('can calculate a gutter game', function(){
    for (var i = 0; i < 10; i++) {
      scorecard.runFrame(0,0)
    }
    expect(scorecard.totalScore).toEqual(0);
  });

  it('can add an extra bonus bowl score in the last frame', function(){
    for (var i = 0; i < 9; i++) {
      scorecard.runFrame(2,3)
    }
    scorecard.runFrame(1,9,5)
    expect(scorecard.totalScore).toEqual(60);
  })

  it('can add strikes in the last frame', function(){
    for (var i = 0; i < 9; i++) {
      scorecard.runFrame(2,3)
    }
    scorecard.runFrame(10,10,10)
    expect(scorecard.totalScore).toEqual(75);
  });

  it('can calculate the perfect game', function(){
    for (var i = 0; i < 9; i++) {
        scorecard.runFrame(10,0)
      }
      scorecard.runFrame(10,10,10)
      expect(scorecard.totalScore).toEqual(300);
  });

  it('can calculate a very complex game!', function(){
    scorecard.runFrame(2,3)
    scorecard.runFrame(5,4)
    scorecard.runFrame(8,2)
    scorecard.runFrame(10,0)
    scorecard.runFrame(10,0)
    scorecard.runFrame(3,7)
    scorecard.runFrame(1,2)
    scorecard.runFrame(4,5)
    scorecard.runFrame(4,6)
    scorecard.runFrame(10,10,6)
    expect(scorecard.totalScore).toEqual(146);
  });

  it('can stop a game after 10 frames', function(){
    for (var i = 0; i < 10; i++) {
        scorecard.runFrame(10,0)
      }
    expect(function(){
      scorecard.runFrame(10,0);}).toThrow("The Game is over");
  });

  it('can validate that two bowls cannot knock over more than 10 pins', function(){
    expect(function(){
      scorecard.runFrame(10,10);}).toThrow("Oops, try again");
  });
});











