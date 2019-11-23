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

'use strict';

describe('Scorecard', function(){

  var scorecard;

  beforeEach(function() { scorecard = new Scorecard(); } );

  it('starts with a tally of 0', function(){
    expect(scorecard.tally).toEqual(0);
  });

  it('starts with an array', function(){
    expect(scorecard.array).toEqual([]);
  });

  it('array is empty before first roll', function(){
    expect(scorecard.array).not.toEqual([0]);
  });

  it('records a roll1 of 0 as 0', function(){
    scorecard.roll1(0);
    expect(scorecard.array[1]).toEqual(0);
  });

  it('records a roll1 of 9 as 9', function(){
    scorecard.roll1(9);
    expect(scorecard.array[1]).toEqual(9);
  });

  it('records a roll1 of 10 as a strike', function(){
    scorecard.roll1("X");
    expect(scorecard.array[1]).toEqual(10);
  });

});