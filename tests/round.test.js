const Round = require("../main/round.cjs");
const Frame = require("../main/frame.cjs");
jest.mock("../main/frame.cjs");

describe("Round", () => {
  beforeEach(() => {
    Frame.mockClear();
  });

  it("has no frames- score is 0", () => {
    const round = new Round();
    expect(round.getTotalScore()).toEqual(0);
  });

  describe("getTotalScore", () => {
    it("returns total score", () => {
      let frames = [{ score: 24 }, { score: 30 }, { score: 7 }];
      const round = new Round(frames);
      expect(round.getTotalScore()).toEqual(61);
    });
  });
  
  // TEST - Round FINISHED?
  
  describe("addRoll", () => {
    describe("#isFinished", () => {
      describe("when frames empty", () => {
        it("does not throw an error", () => {
          const round = new Round();
          expect(() => {
            round.addRoll(5);
          }).not.toThrow("round finished");
        });
      });
      describe("when 10 frames and no bonus", () => {
        it("throws 'round finished'", () => {
          let frames = [];
          for (let i = 0; i < 10; i++) {
            frames.push(new Frame());
          }
          Frame.mock.instances.at(-1).bonusPoints = 0;
          Frame.mock.instances.at(-1).isComplete = jest.fn(() => true);

          const round = new Round(frames);
          expect(() => {
            round.addRoll(5);
          }).toThrow("round finished");
        });
      });
    });

    // TEST - Allocate bonus POINTS

    describe("#allocateBonusPoints", () => {
      describe("when frame has bonusPoints", () => {
        it("calls addBonus on frame", () => {
          let strike1 = new Frame();
          strike1.isComplete = jest.fn(() => true);
          strike1.bonusPoints = 1;

          let strike2 = new Frame();
          strike2.isComplete = jest.fn(() => true);
          strike2.bonusPoints = 2;

          const round = new Round([strike1, strike2]);

          round.addRoll(1);
          expect(strike1.addBonus).toHaveBeenCalledWith(1);
          expect(strike2.addBonus).toHaveBeenCalledWith(1);

          strike1.bonusPoints = 0;
          strike2.bonusPoints = 1;

          round.addRoll(2);
          expect(strike1.addBonus).not.toHaveBeenCalledWith(2);
          expect(strike2.addBonus).toHaveBeenCalledWith(2);
        });
      });
    });

    describe("#fillOrCreateFrame", () => {
      describe("when no frames", () => {
        it("adds a new frame", () => {
          const round = new Round();
          expect(round.frames).toEqual([]);
          round.addRoll(5);
          expect(Frame).toHaveBeenCalledTimes(1);
          expect(Frame.mock.instances[0].addRoll).toHaveBeenCalledWith(5);
          expect(round.frames[0]).toEqual(Frame.mock.instances[0]);
        });
      });

      describe("when latest frame incomplete", () => {
        it("fills the latest frame", () => {
          const round = new Round();
          round.addRoll(2);
          round.addRoll(3);
          expect(Frame).toHaveBeenCalledTimes(1);
          expect(Frame.mock.instances[0].addRoll).toHaveBeenCalledWith(2);
          expect(Frame.mock.instances[0].addRoll).toHaveBeenCalledWith(3);
          expect(round.frames[0]).toEqual(Frame.mock.instances[0]);
        });
      });

      describe("when latest frame complete", () => {
        const round = new Round([{ bonusPoints: 0, isComplete: () => true }]);
        round.addRoll(5);
        expect(Frame).toHaveBeenCalledTimes(1);
        expect(Frame.mock.instances[0].addRoll).toHaveBeenCalledWith(5);
        expect(round.frames.at(-1)).toEqual(Frame.mock.instances[0]);
        expect(round.frames.length).toEqual(2);
      });
    });
  });
});

// case1 -  open_frame --> roll
  // arrange
    // make a round
    // add 2 strikes
  // act
    // addRoll(points)    
  // assert
    // expect strike1 to have been called with addBonus(points)
    // expect strike2 to have been called with addBonus(points)

// case1 - 10 open frames
  // arrange
    // make a round
    // add 10 open frames
  // act
    // addRoll(5)
  // assert
    // expect an 'round finished' error

// case2 - last frame strike
  // arrange
    // make round
    // add 10 strikes
  // act
    // addRoll(10)
    // addRoll(10)
    // addRoll(10)
  // assert
    // expect the third addRoll to raise 'round finished' error

// case 3 - last frame spare
  // arrange
    // make round
    // add 10 spares
  // act
    // addRoll(10)
    // addRoll(10)
  // assert
    // expect the second addRoll to raise 'round finished' error

// case1 -  open_frame --> roll
  // arrange
    // make a round
    // add 2 strikes
  // act
    // addRoll(points)
  // assert
    // expect strike1 to have been called with addBonus(points)
    // expect strike2 to have been called with addBonus(points)
  