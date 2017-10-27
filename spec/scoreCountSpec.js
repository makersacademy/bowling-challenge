'use strict';

describe("Scorecount", function(){
  it("New Scorecount", function(){
    var scoreCount = new scoreCount();
  });

  it("Gutter Game", function(){
    var scoreCount = new scoreCount();
    for(var i = 0; i < 20; i++){
      scoreCount.roll(0);
    }
    expect(scoreCount.score()).toBe(0);
  });
})
