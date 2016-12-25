'use strict';

describe ("Scoreboard", function() {
  var scoreboard;


  beforeEach(function(){
    scoreboard = new Scoreboard();
  });

  it("Should initialize with an empty scores array", function(){
    expect(scoreboard.scores).toEqual([]);
  });

  it("should initialize with an empty totalScores array", function(){
    expect(scoreboard.totalScores).toEqual([]);
  });



});
