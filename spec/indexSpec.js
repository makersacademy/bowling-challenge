'use strict';

describe ('Scorecard', function(){

  var card;

  beforeEach(function(){
    card = new Card();
  });

  it("starts with 10 frames", function(){
    expect(card.frames.length).toEqual(10);
  });


});