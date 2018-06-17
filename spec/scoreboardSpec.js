'use strict';

describe ('Scoreboard', function(){

  var scoreboard;

  beforeEach(function() {
    scoreboard = new Scoreboard;
  });

  it('records the first roll', function(){
    scoreboard.recordFirstRoll(7);
    expect(scoreboard.accessFirstRoll()).toEqual(7);
  });

  it('records the second roll', function(){
    scoreboard.recordSecondRoll(8);
    expect(scoreboard.accessSecondRoll()).toEqual(8);
  });

  it('keeps track of each individual frame on the scorecard', function(){
    scoreboard.recordFirstRoll(2);
    scoreboard.recordSecondRoll(3);
    scoreboard.recordFrameResults();
    scoreboard.recordFirstRoll(4);
    scoreboard.recordSecondRoll(5);
    scoreboard.recordFrameResults();
    expect(scoreboard.accessResultsArray()).toEqual([[2,3],[4,5]]);
  });

  it('totals the previous frame', function (){
    scoreboard.recordFirstRoll(4);
    scoreboard.recordSecondRoll(3);
    scoreboard.recordFrameResults();
    scoreboard.recordFirstRoll(2);
    scoreboard.recordSecondRoll(3);
    scoreboard.recordFrameResults();
    scoreboard.sumPreviousFrame();
    expect(scoreboard.accessLastFrameTotal()).toEqual(7);
  });

  it('determines if the last frame was a spare', function (){
    scoreboard.recordFirstRoll(8);
    scoreboard.recordSecondRoll(2);
    scoreboard.recordFrameResults();
    scoreboard.recordFirstRoll(3);
    scoreboard.recordSecondRoll(4);
    scoreboard.recordFrameResults();
    scoreboard.sumPreviousFrame();
    expect(scoreboard.isSpare()).toEqual(true);
  });

  it('adds additional points for a spare', function (){
    scoreboard.recordFirstRoll(8);
    scoreboard.recordSecondRoll(2);
    scoreboard.recordFrameResults();
    scoreboard.recordFirstRoll(3);
    scoreboard.recordSecondRoll(4);
    scoreboard.recordFrameResults();
    scoreboard.sumPreviousFrame();
    scoreboard.addSparePoints();
    expect(scoreboard.accessResultsArray()).toEqual([[8,2,3],[3,4]]);
  });

  it('does not add points when there is not a spare', function(){
    scoreboard.recordFirstRoll(8);
    scoreboard.recordSecondRoll(1);
    scoreboard.recordFrameResults();
    scoreboard.recordFirstRoll(3);
    scoreboard.recordSecondRoll(4);
    scoreboard.recordFrameResults();
    scoreboard.sumPreviousFrame();
    scoreboard.addSparePoints();
    expect(scoreboard.accessResultsArray()).toEqual([[8,1],[3,4]]);
  });

  it('determines if the last frame was a stirke', function(){
    scoreboard.recordFirstRoll(10);
    scoreboard.recordSecondRoll(0);
    scoreboard.recordFrameResults();
    scoreboard.recordFirstRoll(3);
    scoreboard.recordSecondRoll(4);
    scoreboard.recordFrameResults();
    scoreboard.sumPreviousFrame();
    expect(scoreboard.isStrike()).toEqual(true);
  });

  it('adds additional points for a strike', function(){
    scoreboard.recordFirstRoll(10);
    scoreboard.recordSecondRoll(0);
    scoreboard.recordFrameResults();
    scoreboard.recordFirstRoll(3);
    scoreboard.recordSecondRoll(4);
    scoreboard.recordFrameResults();
    scoreboard.sumPreviousFrame();
    scoreboard.addStrikePoints();
    expect(scoreboard.accessResultsArray()).toEqual([[10,0,3,4],[3,4]]);
  });


});
