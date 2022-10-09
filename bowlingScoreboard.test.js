const BowlingScoreboard = require("./bowlingScoreboard");

describe("BowlingScoreboard", () => {
  it("populates scoreboard with 1 pin", () =>{
    const board = new BowlingScoreboard;

    const pinsDownDouble = 1;

    board.populate(pinsDownDouble);
    expect(board._board).toEqual([[1],[],[],[],[],[],[],[],[],[]]);
  })

  it("populates scoreboard with pins across different frames", () =>{
    const board = new BowlingScoreboard;

    const pinsDownDouble1 = 1;
    const pinsDownDouble2 = 5;
    const pinsDownDouble3 = 9;

    board.populate(pinsDownDouble1);
    board.frameRollLogic(pinsDownDouble1)
    board.populate(pinsDownDouble2);
    board.frameRollLogic(pinsDownDouble2)
    board.populate(pinsDownDouble3);
    board.frameRollLogic(pinsDownDouble3)
    expect(board._board).toEqual([[1,5],[9],[],[],[],[],[],[],[],[]]);
  })

  it("when strike, the next score will be in the following frame", () =>{
    const board = new BowlingScoreboard;

    const pinsDownDouble1 = 10;
    const pinsDownDouble2 = 5;
    const pinsDownDouble3 = 5;
    const pinsDownDouble4 = 3;

    board.populate(pinsDownDouble1);
    board.frameRollLogic(pinsDownDouble1)
    board.populate(pinsDownDouble2);
    board.frameRollLogic(pinsDownDouble2)
    board.populate(pinsDownDouble3);
    board.frameRollLogic(pinsDownDouble3)
    board.populate(pinsDownDouble4);
    board.frameRollLogic(pinsDownDouble4)
    expect(board._board).toEqual([[10],[5,5],[3],[],[],[],[],[],[],[]]);
  })

  it("updates the board and the frame and roll numbers with one command", () =>{
    const board = new BowlingScoreboard;

    const pinsDownDouble1 = 10;
    const pinsDownDouble2 = 5;
    const pinsDownDouble3 = 5;
    const pinsDownDouble4 = 3;

    board.update(pinsDownDouble1);
    board.update(pinsDownDouble2);
    board.update(pinsDownDouble3);
    board.update(pinsDownDouble4);
    expect(board._board).toEqual([[10],[5,5],[3],[],[],[],[],[],[],[]]);
  })

  it("populates and returns the scoreboard", () =>{
    const board = new BowlingScoreboard;

    const pinsDownDouble1 = 1;
    const pinsDownDouble2 = 4;
    const pinsDownDouble3 = 4;
    const pinsDownDouble4 = 5;
    const pinsDownDouble5 = 6;
    const pinsDownDouble6 = 4;
    const pinsDownDouble7 = 5;
    const pinsDownDouble8 = 5;
    const pinsDownDouble9 = 10;
    const pinsDownDouble10 = 0;
    const pinsDownDouble11 = 1;
    const pinsDownDouble12 = 7;
    const pinsDownDouble13 = 3;
    const pinsDownDouble14 = 6;
    const pinsDownDouble15 = 4;
    const pinsDownDouble16 = 10;
    const pinsDownDouble17 = 2;
    const pinsDownDouble18 = 8;
    const pinsDownDouble19 = 6;

    board.update(pinsDownDouble1);
    board.update(pinsDownDouble2);
    board.update(pinsDownDouble3);
    board.update(pinsDownDouble4);
    board.update(pinsDownDouble5);
    board.update(pinsDownDouble6);
    board.update(pinsDownDouble7);
    board.update(pinsDownDouble8);
    board.update(pinsDownDouble9);
    board.update(pinsDownDouble10);
    board.update(pinsDownDouble11);
    board.update(pinsDownDouble12);
    board.update(pinsDownDouble13);
    board.update(pinsDownDouble14);
    board.update(pinsDownDouble15);
    board.update(pinsDownDouble16);
    board.update(pinsDownDouble17);
    board.update(pinsDownDouble18);
    board.update(pinsDownDouble19);
    expect(board.getScoreboard()).toEqual([ [ 1, 4 ], [ 4, 5 ],
      [ 6, 4 ], [ 5, 5 ], 
      [ 10 ], [ 0, 1 ], 
      [ 7, 3 ], [ 6, 4 ], 
      [ 10 ], [ 2, 8, 6 ]]);
  })

  it("constructs", () => {
    const board = new BowlingScoreboard;
    expect(board._board).toEqual([[],[],[],[],[],[],[],[],[],[]]);
    expect(board._frame).toEqual(0);
    expect(board._roll).toEqual(0);


  })
})