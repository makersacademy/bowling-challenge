'use strict';

describe('Scorecard', function() {
  var scorecard;
  beforeEach(function(){
    scorecard = new Scorecard()
  });



describe('gutter game', function(){
  it('gives score 0', function(){
    for (var i = 0; i < 20; i++)
    scorecard.roll( 0);
    expect(scorecard.total()).toEqual(0);
  });
  it('expects game to comeplete with 20', function(){
    for (var i = 0; i < 20; i++)
    scorecard.roll(0);
    expect(scorecard.isComplete()).toEqual(true);
  });
 });
});

// describe('one frame', function(){
//   it('gives total score so far', function(){
//     roll(20,4);
//     expect(scorecard.total()).toEqual(80)
//     expect(scorecard.isComplete()).toBe(true)
//   });
// });
