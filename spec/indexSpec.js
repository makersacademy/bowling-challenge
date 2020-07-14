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
    expect(card.frames[0].roll1).toEqual(4);
    expect(card.frames[0].roll2).toEqual(3);
  });
  it("knows which frame it should add scores to for basic scores", function(){
    card.addRollScore(4);
    card.addRollScore(6);
    card.addRollScore(3);
    expect(card.frameCount).toEqual(1);
    expect(card.frames[1].roll1).toEqual(3);
  });
  it("knows to end the frame if there's a strike", function(){
    card.addRollScore(10);
    card.addRollScore(1);
    expect(card.frameCount).toEqual(1);
    expect(card.frames[1].roll1).toEqual(1);
  });
  it("adds the bonus to the previous frame for a spare", function(){
    card.addRollScore(4);
    card.addRollScore(6);
    card.addRollScore(5);
    expect(card.frames[0].bonus1).toEqual(5);
  });
  it("adds the bonus to the frame for a strike, even if the next ones a strike", function(){
    card.addRollScore(10);
    card.addRollScore(10);
    card.addRollScore(4);
    expect(card.frames[0].bonus2).toEqual(4);
  });
});