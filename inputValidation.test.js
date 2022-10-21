const InputValidation = require("./inputValidation");

describe("InputValidation", () => {
  it("is an instance of InputValidation class", () => {
    const validation = new InputValidation;
    expect(validation).toBeInstanceOf(InputValidation);
  });

  it("checks whether user input is a whole number from 0 to 10", () => {
    const validation = new InputValidation;
    const inputDouble = 1;

    validation.checkRange(inputDouble);
    expect(validation._error).toBe(null);
  });

  it("assign value to error if input is not a whole number from 0 to 10", () => {
    const validation = new InputValidation;
    const inputDouble = 20;

    validation.checkRange(inputDouble);
    expect(validation._error).toBe("Please enter a whole number from 0 to 10. ");
  });

  it("assign value to error if input is not a whole number from 0 to 10", () => {
    const validation = new InputValidation;
    const inputDouble = "some text";

    validation.checkRange(inputDouble);
    expect(validation._error).toBe("Please enter a whole number from 0 to 10. ");
  });

  it("checks how pins are left in the game on roll 1", () => {
    const validation = new InputValidation;
    const scoreboardDouble = {
      getScoreboard() {
        return [[],[],[],[],[],[],[],[],[],[]];
      },
      getFrame() {
        return 0;
      },
    };

    const result = validation.pinsAvailable(scoreboardDouble)
    expect(result).toBe(10);
  });

  it("checks how pins are left in the game on roll 2", () => {
    const validation = new InputValidation;
    const scoreboardDouble = {
      getScoreboard() {
        return [[1],[],[],[],[],[],[],[],[],[]];
      },
      getFrame() {
        return 0;
      },
    };

    const result = validation.pinsAvailable(scoreboardDouble)
    expect(result).toBe(9);
  });

  it("checks whether user input does not exceed the number of pins left in the game", () => {
    const validation = new InputValidation;
    const scoreboardDouble = {
      getScoreboard() {
        return [[1],[],[],[],[],[],[],[],[],[]];
      },

      getFrame() {
        return 0;
      }
    };
    const inputDouble = 1;
    
    validation.checkPinsLeft(scoreboardDouble, inputDouble)
    expect(validation._error).toBe(null);
  });

  it("checks whether user input does not exceed the number of pins left in the game", () => {
    const validation = new InputValidation;
    const scoreboardDouble = {
      getScoreboard() {
        return [[1],[],[],[],[],[],[],[],[],[]];
      },
      getFrame() {
        return 0;
      }
    };
    const inputDouble = 15;
    
    validation.checkPinsLeft(scoreboardDouble, inputDouble)
    expect(validation._error).toBe("You have only 9 pins left. ");
  });

  it("checks whether user input does not exceed 1 pin left in the game", () => {
    const validation = new InputValidation;
    const scoreboardDouble = {
      getScoreboard() {
        return [[9],[],[],[],[],[],[],[],[],[]];
      },
      getFrame() {
        return 0;
      }
    };
    const inputDouble = 15;
    
    validation.checkPinsLeft(scoreboardDouble, inputDouble)
    expect(validation._error).toBe("You have only 1 pin left. ");
  });

  it("validates input if the input is within the range and less or equal to the no of pins left in the game", () => {
    const validation = new InputValidation;
    const scoreboardDouble = {
      getScoreboard() {
        return [[9, 1],[10],[5],[],[],[],[],[],[],[]];
      },
      getFrame() {
        return 2;
      },
    };
    const inputDouble = 1;

    validation.validateInput(inputDouble, scoreboardDouble)
    expect(validation._error).toBe(null);
  });

  it("determines and returns error", () => {
    const validation = new InputValidation;
    const scoreboardDouble = {
      getScoreboard() {
        return [[9, 1],[10],[5],[],[],[],[],[],[],[]];
      },
      getFrame() {
        return 2;
      }
    };
    const inputDouble = "input";

    validation.validateInput(inputDouble, scoreboardDouble)
    expect(validation.getError()).toBe("Please enter a whole number from 0 to 10. ");
  });

  it("returns error", () => {
    const validation = new InputValidation;

    expect(validation.getError()).toBe(null);
  });

  it("constructs ", () => {
    const validation = new InputValidation;

    expect(validation._error).toBe(null);
  });

})