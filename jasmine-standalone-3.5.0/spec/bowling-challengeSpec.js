// // ATTEMPT 1

// 'use strict';

// describe('Scorer', function(){

//   var scorer;

//   beforeEach(function() { scorer = new Scorer(); } );

//   it('starts with a score of 0', function(){
//     expect(scorer.tally).toEqual(0);
//   });

//   it('adds a normal frame to the tally', function(){
//      scorer.addFrame(3, 2);
//      expect(scorer.tally).toEqual(5);
//   });

//   it('adds a first roll to the tally', function(){
//     scorer.addFrame(2, 0);
//     expect(scorer.tally).toEqual(2); 
//   });

//   it('adds a second roll to the tally', function(){
//     scorer.addFrame(0, 6);
//     expect(scorer.tally).toEqual(6); 
//   });

//   it('adds a strike bonus to the tally', function(){
//     scorer.addFrame(10, 0);
//     scorer.addFrame(3, 4);
//     expect(scorer.tally).toEqual(24);
//   });

//   it('adds a spare bonus to the tally', function(){
//     scorer.addFrame(7, 3);
//     scorer.addFrame(4, 5);
//     expect(scorer.tally).toEqual(23);
//   });

//   it('scores 0 for a gutter game', function(){
//     scorer.addFrame(0,0);
//     scorer.addFrame(0,0);
//     scorer.addFrame(0,0);
//     scorer.addFrame(0,0);
//     scorer.addFrame(0,0);
//     scorer.addFrame(0,0);
//     scorer.addFrame(0,0);
//     scorer.addFrame(0,0);
//     scorer.addFrame(0,0);
//     scorer.addFrame(0,0);
//     scorer.addFrame(2,3);
//     expect(scorer.tally).toEqual(0);
//   });

//   it('scores a maximum of ten frames', function(){
//     scorer.addFrame(2,3);
//     scorer.addFrame(2,3);
//     scorer.addFrame(2,3);
//     scorer.addFrame(2,3);
//     scorer.addFrame(2,3);
//     scorer.addFrame(2,3);
//     scorer.addFrame(2,3);
//     scorer.addFrame(2,3);
//     scorer.addFrame(2,3);
//     expect(scorer.addFrame(2,3)).toEqual("Final score: 50");
//   });
// });

// ATTEMPT 2

'use strict';

describe('Scorecard', function(){

  var scorecard;

  beforeEach(function() { scorecard = new Scorecard(); } );

  it('starts with a tally of 0', function(){
    expect(scorecard.tally).toEqual(0);
  });

  it('starts with an array', function(){
    expect(scorecard.rolls).toEqual([]);
  });

  it('array is empty before first roll', function(){
    expect(scorecard.rolls).not.toEqual([0]);
  });

  it('records a roll1 of 0 as 0', function(){
    scorecard.roll1(0);
    expect(scorecard.rolls[0]).toEqual(0);
  });

  it('records a roll1 of 9 as 9', function(){
    scorecard.roll1(9);
    expect(scorecard.rolls[0]).toEqual(9);
  });

  it('records a roll1 of 10 as a strike', function(){
    scorecard.roll1("X");
    expect(scorecard.rolls[0]).toEqual(10);
  });

  it('records a roll2 of 0 as 0', function(){
    scorecard.roll1(8);
    scorecard.roll2(0);
    expect(scorecard.rolls[1]).toEqual(0);
  });

  it('records a roll2 of 9 as 9', function(){
    scorecard.roll1(0);
    scorecard.roll2(9);
    expect(scorecard.rolls[1]).toEqual(9);
  });

  it('recognises a strike', function(){
    scorecard.roll1(10);
    expect(scorecard.strike).toEqual(true);
  });

  it('recognises a spare', function(){
    scorecard.roll1(3);
    scorecard.roll2(7);
    expect(scorecard.spare).toEqual(true);
  });

  it('awards a bonus for a spare', function(){
    scorecard.roll1(4);
    scorecard.roll2(6);
    scorecard.roll1(5);
    expect(scorecard.frames[scorecard.frames.length-1]).toEqual(15);
  });

  it('awards a strike bonus in the next frame', function(){
    scorecard.roll1(10);
    scorecard.roll1(4);
    scorecard.roll2(4);
    expect(scorecard.frames[scorecard.frames.length-2]).toEqual(18);
  });

  it('awards a strike bonus across the next two frames', function(){
    scorecard.roll1(10);
    scorecard.roll1(10);
    scorecard.roll2(5);
    expect(scorecard.frames[scorecard.frames.length-2]).toEqual(25);
  });

});
