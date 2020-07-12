'use strict';

describe ('Scorecard', function(){

  var card;

  beforeEach(function(){
    card = new Card();
  });

  it("starts with 10 frames", function(){
    expect(card.frames.length).toEqual(10);
  });
  it("adds the score to the frame", function(){
    card.addRollScore(4);
    card.addRollScore(3);
    expect(card.totalScore()).toEqual(7);
  });

});