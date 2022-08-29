const BowlingScore = require('./bowlingScore');

describe('bowling score', ()=>{
  it('returns correct score for a game of all strikes',()=>{
    const scorer = new BowlingScore;
    scorer.inputScore(10,0) //#1
    scorer.inputScore(10,0) //#2
    scorer.inputScore(10,0) //#3
    scorer.inputScore(10,0) //#4
    scorer.inputScore(10,0) //#5
    scorer.inputScore(10,0) //#6
    scorer.inputScore(10,0) //#7
    scorer.inputScore(10,0) //#8
    scorer.inputScore(10,0) //#9
    scorer.inputScore(10,0) //#10 
    scorer.inputScore(10,0) //#10 +1
    scorer.inputScore(10,0) //#10 +2
    expect(scorer.scoreTotal()).toEqual(300)
  
  });
  it('returns correct score for a game of all spares',()=>{
    const scorer = new BowlingScore;
    scorer.inputScore(2,8) //#1
    scorer.inputScore(2,8) //#2
    scorer.inputScore(2,8) //#3
    scorer.inputScore(2,8) //#4
    scorer.inputScore(2,8) //#5
    scorer.inputScore(2,8) //#6
    scorer.inputScore(2,8) //#7
    scorer.inputScore(2,8) //#8
    scorer.inputScore(2,8) //#9
    scorer.inputScore(2,8) //#10
    scorer.inputScore(2,0) //#10 +
    expect(scorer.scoreTotal()).toEqual(120)
  
  });
   it('returns correct score for a game of all gutters',()=>{
    const scorer = new BowlingScore;
    scorer.inputScore(0, 0) //#1
    scorer.inputScore(0, 0) //#2
    scorer.inputScore(0, 0) //#3
    scorer.inputScore(0, 0) //#4
    scorer.inputScore(0, 0) //#5
    scorer.inputScore(0, 0) //#6
    scorer.inputScore(0, 0) //#7
    scorer.inputScore(0, 0) //#8
    scorer.inputScore(0, 0) //#9
    scorer.inputScore(0, 0) //#10
    expect(scorer.scoreTotal()).toEqual(0)
  
  });
  it('returns correct score for a game of spares and strikes',()=>{
    const scorer = new BowlingScore;
    scorer.inputScore(10,0) //#1
    scorer.inputScore(10,0) //#2
    scorer.inputScore(10,0) //#3
    scorer.inputScore(10,0) //#4
    scorer.inputScore(2,8) //#5
    scorer.inputScore(2,8) //#6
    scorer.inputScore(2,8) //#7
    scorer.inputScore(2,8) //#8
    scorer.inputScore(7,3) //#9
    scorer.inputScore(7,3) //#10
    scorer.inputScore(3,0) //#10
    expect(scorer.scoreTotal()).toEqual(185)
  
  });
  it('returns correct score for a game of spares, strikes and gutters',()=>{
    const scorer = new BowlingScore;
    scorer.inputScore(10,0) //#1
    scorer.inputScore(10,0) //#2
    scorer.inputScore(10,0) //#3
    scorer.inputScore(10,0) //#4
    scorer.inputScore(2,8) //#5
    scorer.inputScore(2,8) //#6
    scorer.inputScore(2,8) //#7
    scorer.inputScore(2,8) //#8
    scorer.inputScore(7,3) //#9
    scorer.inputScore(0,0) //#10
    expect(scorer.scoreTotal()).toEqual(165)
  
  });
  

});
