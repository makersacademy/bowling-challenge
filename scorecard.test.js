const Scorecard = require('./scorecard');

describe(Scorecard, () => {
  
  it("adds new roll score to the scorecard with roll()", () => {
    const card = new Scorecard();
    card.roll(5);
    expect(card.scores).toEqual([[5]]);
  });

  it("adds a roll to the same frame (in frames 1 to 9) with roll() if the previous roll was not 10, or the second roll in the frame", () => {
    const card = new Scorecard();
    card.roll(4);
    card.roll(4);
    expect(card.scores).toEqual([[4,4]]);
  });

  it("adds a roll to the next frame", () => {
    const card = new Scorecard();
    card.roll(10);
    card.roll(3);
    expect(card.scores).toEqual([[10], [3]]);
  });

  it("adds a strike to the next frame after a completed frame", () => {
    const card = new Scorecard();
    card.roll(3);
    card.roll(5);
    card.roll(10);
    expect(card.scores).toEqual([[3, 5], [10]]);
  });

  it("allows a third roll in the tenth frame if a spare has already been scored in the frame", () => {
    const card = new Scorecard();
    for(i = 0; i < 20; i++) {
      card.roll(5);
    };
    card.roll(1);
    expect(card.scores[9]).toEqual([5, 5, 1])
  });

  it("allows a third roll in the tenth frame if a strike has already been scored in the frame", () => {
    const card = new Scorecard();
    for(i = 0; i < 10; i++) {
      card.roll(10);
    };
    card.roll(5);
    card.roll(1);
    expect(card.scores[9]).toEqual([10, 5, 1])
  });

  it("allows a third roll in the tenth frame if two strikes have already been scored in the frame", () => {
    const card = new Scorecard();
    for(i = 0; i < 12; i++) {
      card.roll(10);
    };
    expect(card.scores[9]).toEqual([10, 10, 10])
  });

  it("does not allow a fourth roll in the tenth frame", () => {
    const card = new Scorecard();
    for(i = 0; i < 12; i++) {
      card.roll(10);
    };
    expect(() => {
      card.roll(1);
    }).toThrow("No more rolls, three was already quite generous!");
    expect(card.scores[9]).toEqual([10, 10, 10])
  });

  it("throws an error if the score for a roll is more than 10", () => {
    const card = new Scorecard();
    expect(() => {
      card.roll(11);
    }).toThrow("The maximum score for one roll is 10! Try again...");
    expect(card.scores).toEqual([]);
  });

  it("throws an error if the combined number of pins in the first frame is more than 10", () => {
    const card = new Scorecard();
    card.roll(8);
    expect(() => {
      card.roll(3);
    }).toThrow("The maths don't work on those last two rolls! Try again...");
    expect(card.scores).toEqual([[8]]);
  });

  it("throws an error if the combined number of pins in the second frame is more than 10", () => {
    const card = new Scorecard();
    for(i = 0; i < 3; i++) {
      card.roll(4);
    };
    expect(() => {
      card.roll(8);
    }).toThrow("The maths don't work on those last two rolls! Try again...");
  });

  it("throws an error if the combined number of pins for the first two rolls of the last frame is more than 10, and the first is not a strike", () => {
    const card = new Scorecard();
    for(i = 0; i < 19; i++) {
      card.roll(3);
    };  
    expect(() => {
      card.roll(8);
    }).toThrow("The maths don't work on those last two rolls! Try again...");
  });

  it("throws an error if the combined number of pins for the last two rolls of the last frame is more than 10, and the second is not a strike", () => {
    const card = new Scorecard();
    for(i = 0; i < 10; i++) {
      card.roll(10);
    };
    card.roll(5);     
    expect(() => {
      card.roll(8);
    }).toThrow("The maths don't work on those last two rolls! Try again...");
  });

  it("throws an error if the roll score is not a number", () => {
    const card = new Scorecard();
    expect(() => {
      card.roll('Hello');
    }).toThrow("Input scores as numbers please! Try again...");
    expect(card.scores).toEqual([]);
  });

  it("throws an error if the roll score is not an integer", () => {
    const card = new Scorecard();
    expect(() => {
      card.roll(1.5);
    }).toThrow("Seems impossible to knock over part of a pin!");
    expect(card.scores).toEqual([]);
  });

  it("throws an error if the roll score is a negative number", () => {
    const card = new Scorecard();
    expect(() => {
      card.roll(-1);
    }).toThrow("Seems very unlikely that you would be able to put pins up with a bowling ball!");
    expect(card.scores).toEqual([]);
  });

  it("scores the game accurately for a completed game without bonuses", () => {
    const card = new Scorecard();
    for(i = 0; i < 20; i++) {
      card.roll(1);
    }; 
    expect(card.show()).toEqual(20); 
  });

  it("adds a bonus for the next roll after a spare", () => {
    const card = new Scorecard();
    card.roll(5);
    card.roll(5);
    for(i = 0; i < 18; i++) {
      card.roll(1);
    }; 
    expect(card.show()).toEqual(29); 
  });

  it("adds a bonus for the next two rolls after a strike", () => {
    const card = new Scorecard();
    card.roll(10);
    for(i = 0; i < 18; i++) {
      card.roll(1);
    }; 
    expect(card.show()).toEqual(30); 
  });
  
  it("scores the game at 300 for a perfect game", () => {
    const card = new Scorecard();
    for(i = 0; i < 12; i++) {
      card.roll(10);
    }; 
    expect(card.show()).toEqual(300); 
  });

  it("throws an error if extra rolls are attempted after the game is complete", () => {
    const card = new Scorecard();
    for(i = 0; i < 20; i++) {
      card.roll(1);
    }; 
    expect(() => {
      card.roll(1);
    }).toThrow("This game is over, call show() to get your final score...");
  });

  it("throws an error if show() is called after 5 frames have been completed", () => {
    const card = new Scorecard();
    for(i = 0; i < 5; i++) {
      card.roll(10);
    }; 
    expect(() => {
      card.show();
    }).toThrow("Hey, you still have frames to roll! 5 to complete");
  });

  it("throws an error if show() is called before the last frame is complete", () => {
    const card = new Scorecard();
    for(i = 0; i < 11; i++) {
      card.roll(10);
    }; 
    expect(() => {
      card.show();
    }).toThrow("Hey, you still have frames to roll! 1 to complete");
  });
});