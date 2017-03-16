'user strict';

describe("Bowling", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it("should start at 0", function() {
    expect(bowling.score).toEqual(0);
  });

  it("should start at 1", function() {
    expect(bowling.frame).toEqual(1);
  })

  it("should not increment until end of frame", function() {
    bowling.enterScore(1);
    expect(bowling.score).toEqual(0);
  })

  it("should show score at end of the frame", function() {
    rollMultiple(1, 2);
    expect(bowling.score).toEqual(2);
  })

  it("should increase frame by 1 every second time score is entered", function() {
    rollMultiple(1, 2);
    expect(bowling.frame).toEqual(2);
  })

  it("seventh go frame should be 4", function() {
    rollMultiple(1, 7);
    expect(bowling.frame).toEqual(4);
  })

  it("should start as an empty array", function() {
    expect(bowling.runningTotal).toEqual([]);
  })

  it("should store scores in an array", function() {
    bowling.enterScore(1);
    expect(bowling.runningTotal).toEqual([1]);
  })

  it("should store multiple scores in an array", function() {
    bowling.enterScore(1);
    bowling.enterScore(2);
    expect(bowling.runningTotal).toEqual([1,2]);
  })

  it("should skip to next frame if there is a strike", function() {
    bowling.enterScore(10);
    expect(bowling.frame).toEqual(2)
  });

  it("should change last_strike to true", function() {
    bowling.enterScore(10);
    expect(bowling.unscoredStrikes).toEqual(1)
  });

  it("should double score of next frame after a strike", function() {
    bowling.enterScore(10);
    rollMultiple(1, 2);
    expect(bowling.score).toEqual(14)
  });

  it("should return 1 after 1 strike", function() {
    bowling.enterScore(10);
    expect(bowling.unscoredStrikes).toEqual(1)
  })

  it("strike counter should reset after player does not score a strike", function() {
    bowling.enterScore(10);
    rollMultiple(1, 2);
    expect(bowling.unscoredStrikes).toEqual(0)
  });

  it("strike counter should increment when multiple strikes are scored in a row", function() {
    rollMultiple(10, 2);
    expect(bowling.unscoredStrikes).toEqual(2)
  });

  it("should correctly multiply scores if multiple strikes are scored", function() {
    rollMultiple(10, 2);
    bowling.enterScore(1);
    expect(bowling.score).toEqual(21)
  });

  it("should give the correct score after multiple strikes are scored", function() {
    rollMultiple(10, 2);
    rollMultiple(1, 2);
    expect(bowling.score).toEqual(35)
  })

  it("score should be 30 when three strikes are scored in a row", function() {
    rollMultiple(10, 3);
    expect(bowling.score).toEqual(30)
  })

  it("score should be 60 when four strikes are scored in a row", function() {
    rollMultiple(10, 4);
    expect(bowling.score).toEqual(60)
  })

  it("score should be 180 when eight strikes are scored in a row", function() {
    rollMultiple(10, 8);
    expect(bowling.score).toEqual(180)
  })

  it("score should be 300 when 12 strikes are scored in a row", function() {
    rollMultiple(10, 12);
    expect(bowling.score).toEqual(300)
  })

  it("score should be 225 when this is scored", function() {
    rollMultiple(10, 8);
    bowling.enterScore(1);
    bowling.enterScore(2);
    bowling.enterScore(5);
    bowling.enterScore(3);
    expect(bowling.score).toEqual(225)
  })

  it("score should be equal to 43 when a 7, 2, 10, 6, 3, 5, 1 is entered", function() {
    bowling.enterScore(7);
    bowling.enterScore(2);
    bowling.enterScore(10);
    bowling.enterScore(6);
    bowling.enterScore(3);
    bowling.enterScore(5);
    bowling.enterScore(1);
    expect(bowling.score).toEqual(43)
  })

  it("should should equal to 22 after a 9,1,5,2 is scored", function() {
    bowling.enterScore(9);
    bowling.enterScore(1);
    bowling.enterScore(5);
    bowling.enterScore(2);
    expect(bowling.score).toEqual(22)
  })

  it("should should equal to 36 after a 10,5,5,2,2 is scored", function() {
    bowling.enterScore(10);
    rollMultiple(5, 2);
    rollMultiple(2, 2);
    expect(bowling.score).toEqual(36)
  })

  it("should correctly score when a strike follows a half strike", function() {
    bowling.enterScore(6);
    bowling.enterScore(4);
    bowling.enterScore(10);
    expect(bowling.score).toEqual(20)
  })

  it("should start out with game over being false", function() {
    expect(bowling.gameOver).toEqual(false)
  })

  it("game over should be true when all ten frames are completed", function() {
    rollMultiple(1, 20);
    expect(bowling.gameOver).toEqual(true)
  })

  it("should be game over if 12 strikes are scored in a row", function() {
    rollMultiple(10, 12);
    expect(bowling.gameOver).toEqual(true)
  })

  it("score should be 272 if 11 strikes and a 1 are scored", function() {
    rollMultiple(10, 11);
    bowling.enterScore(1);
    expect(bowling.score).toEqual(291)
  })

  it("gameover should be true if 11 strikes and a 1 are scored", function() {
    rollMultiple(10, 11);
    bowling.enterScore(1);
    expect(bowling.gameOver).toEqual(true)
  })

  it("score should be 279 if 10 strikes and a 1, 1 are scored", function() {
    rollMultiple(10, 10);
    rollMultiple(1, 2);
    expect(bowling.score).toEqual(273)
  })

  it("score should be 286 if 10 strikes and a 6, 4 are scored", function() {
    rollMultiple(10, 10);
    bowling.enterScore(6);
    bowling.enterScore(4);
    expect(bowling.score).toEqual(286)
  })

  it("should reject invalid numbers", function() {
    expect(function(){ bowling.enterScore(11); }).toThrowError("Cannot enter score: please enter a valid number")
  })

  it("should not let new scores be entered if game if finished", function() {
    for(var i=0; i<20; i++) {
      bowling.enterScore(1);
    };
    expect(function(){ bowling.enterScore(1); }).toThrowError("Cannot enter score: game is complete")
  })

  it("should raise error if too many pins entered on second ball", function() {
    bowling.enterScore(5);
    expect(function(){ bowling.enterScore(6); }).toThrowError("Cannot enter score: please enter a valid number")
  })

  var rollMultiple = function(score, rolls){
    for(var i=0; i<rolls; i++) {
      bowling.enterScore(score);
    }
  };

});
