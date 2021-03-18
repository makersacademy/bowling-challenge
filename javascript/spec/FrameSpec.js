describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
    game = new Game();
  });

  it("has a default empty rolls array and a score of 0", function(){
    expect(frame.getRolls()).toEqual([]);
    expect(frame.getScore()).toEqual(0);
  });

  describe("getScore", function(){
    it("returns a number", function(){
      expect(frame.getScore()).toEqual(jasmine.any(Number));
    })
  })

  describe("getRolls", function(){
    it("returns an array", function(){
      expect(Array.isArray(frame.getRolls())).toBe(true);
    })
  })

  describe("amendScore", function(){
    it("adds the score to the frame", function(){
      frame.amendScore(5)
      expect(frame.getScore()).toEqual(5);
    })
  })

  describe("isStrike", function(){
    it("returns true if roll is a strike", function(){
      frame.addRoll(10);
      expect(frame.isStrike()).toBe(true)
    });
    it("returns false if roll is not a strike", function(){
      frame.addRoll(3);
      frame.addRoll(7);
      expect(frame.isStrike()).toBe(false)
    });
  });

  describe("isSpare", function(){
    it("returns true if roll is a spare", function(){
      frame.addRoll(3);
      frame.addRoll(7);
      expect(frame.isSpare()).toBe(true)
    });
    it("returns false if roll is not a spare", function(){
      frame.addRoll(10);
      expect(frame.isSpare()).toBe(false)
    });
  });

  describe("addRoll", function(){
    it("adds the roll to the frame and adjusts score", function(){
      frame.addRoll(5, game)
      expect(frame.getRolls().length).toEqual(1);
      expect(frame.getRolls()).toContain(5);
      expect(frame.getScore()).toEqual(5);
    });

    it("throws an error if the roll is not a number", function(){
      expect(function(){ frame.addRoll("roll"); }).toThrow(new Error("You must input a number from 1 to 10."));
    });

    it("throws an error if the total value of the rolls is more than 10", function(){
      frame.addRoll(6, game)
      expect(function(){ frame.addRoll(6, game); }).toThrow(new Error("There are only 10 pins in a frame!"));
    });

    it("unless it's the final frame spare bonus roll", function(){
      spyOn(game, 'finalFrame').and.returnValue(true);
      frame.addRoll(5, game)
      frame.addRoll(5, game)
      expect(function(){ frame.addRoll(6, game); }).not.toThrow(new Error("There are only 10 pins in a frame!"));
    });
    it("or the final frame strike bonus rolls", function(){
      spyOn(game, 'finalFrame').and.returnValue(true);
      frame.addRoll(10, game)
      expect(function(){ frame.addRoll(6, game); }).not.toThrow(new Error("There are only 10 pins in a frame!"));
      frame.addRoll(5, game)
      expect(function(){ frame.addRoll(6, game); }).not.toThrow(new Error("There are only 10 pins in a frame!"));
    });
    it("edge case for final frame no bonuses", function(){
      spyOn(game, 'finalFrame').and.returnValue(true);
      frame.addRoll(4, game)
      expect(function(){ frame.addRoll(7, game); }).toThrow(new Error("There are only 10 pins in a frame!"));

    });
  });

  describe("isFFandStrike", function(){
    it("returns true if game is on final frame and frame is a strike", function(){
      spyOn(game, 'finalFrame').and.returnValue(true);
      frame.addRoll(10, game);
      expect(frame.isFFandStrike(game)).toBe(true);
    });
  });

  describe("isFFLastRollSpare", function(){
    it("returns true if game is on final frame last roll and frame is a spare", function(){
      spyOn(game, 'finalFrame').and.returnValue(true);
      frame.addRoll(6, game);
      frame.addRoll(4, game);
      expect(frame.isFFLastRollSpare(game)).toBe(true);
    });
  });

  describe("finalFrameEdgeCases", function(){
    it("returns true if final frame is neither strike nor last roll of spare", function(){
      spyOn(game, 'finalFrame').and.returnValue(true);
      frame.addRoll(5, game);
      frame.addRoll(3, game);
      expect(frame.finalFrameEdgeCases(game)).toBe(true);
    });
  });


});
