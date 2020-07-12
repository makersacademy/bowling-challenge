'use strict';

describe ('Scorecard', function(){

  var card;

  beforeEach(function(){
    card = new Card();
  });

  it('knows the score is 6 after a normal frame', function(){
    card.addScore(4);
    card.addScore(2);
    expect(card.getTotalScore()).toEqual(6);
  });
  it('knows the score is 10 after a strike before bonus added', function(){
    card.addScore(10);
    expect(card.getTotalScore()).toEqual(10);
  });

  // it('adds bonus points for a spare', function(){
  //   card.addScore(6);
  //   card.addScore(4);
  //   card.addScore(5);
  //   expect(card.getTotalScore()).toEqual(20);
  // });

});