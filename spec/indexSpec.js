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
    card.roll(4);
    card.roll(3);
    expect(card.frames[0].roll1).toEqual(4);
    expect(card.frames[0].roll2).toEqual(3);
  });
  it("knows which frame it should add scores to for basic scores", function(){
    card.roll(4);
    card.roll(6);
    card.roll(3);
    expect(card.frameCount).toEqual(1);
    expect(card.frames[1].roll1).toEqual(3);
  });
  it("knows to end the frame if there's a strike", function(){
    card.roll(10);
    card.roll(1);
    expect(card.frameCount).toEqual(1);
    expect(card.frames[1].roll1).toEqual(1);
  });
  it("adds the bonus to the previous frame for a spare", function(){
    card.roll(4);
    card.roll(6);
    card.roll(5);
    expect(card.frames[0].bonus1[1]).toEqual(5);
  });
  it("adds the bonus to the frame for a strike, even if the next ones a strike", function(){
    card.roll(10);
    card.roll(10);
    card.roll(4);
    expect(card.frames[0].bonus2[1]).toEqual(4);
  });
  it("knows the score of the whole game in a no-mark game", function(){
    card.roll(1);
    card.roll(6);
    card.roll(4);
    expect(card.totalScore()).toEqual(11);
  });
  it("knows the score of the whole game on a perfect game", function(){
    card.roll(10);
    card.roll(10);
    card.roll(10);
    card.roll(10);
    card.roll(10);
    card.roll(10);
    card.roll(10);
    card.roll(10);
    card.roll(10);
    card.roll(10);
    card.roll(10);
    card.roll(10);
    expect(card.totalScore()).toEqual(300);
  });
  it("knows the score of a gutter game", function(){
    card.roll(0);
    card.roll(0);
    card.roll(0);
    card.roll(0);
    card.roll(0);
    card.roll(0);
    card.roll(0);
    card.roll(0);
    card.roll(0);
    card.roll(0);
    card.roll(0);
    card.roll(0);
    expect(card.totalScore()).toEqual(0);
  });
});