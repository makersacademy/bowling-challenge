describe("Frame", function() {
  var testFrame;

  beforeEach(function() {
    testFrame = new Frame();
  });


  // Set up tests. Relate only to intital set up of the Frame function.

  it("initiates with resultA and resultB both being 0", function(){
    expect(testFrame._resultA).toEqual(0);
    expect(testFrame._resultB).toEqual(0);
  });

  it("initiates with a frameResult equal to the cumulative result of A and B - namely 0", function(){
    expect(testFrame._frameResult).toEqual(testFrame._resultA + testFrame._resultB);
    expect(testFrame._frameResult).toEqual(0);
  });

  it("initiates with a frameScore equal to 0", function(){
    expect(testFrame._frameScore).toEqual(0);
  });

  it("initiates with a _possibleResults array containing the possible results from 0 to 10", function(){
    expect(testFrame._possibleResults).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });


  // Functionality tests. Relate to use and update of game relevant data in a frame.

  it("allows me to record the result from rollA in resultA", function(){
    testFrame.rollA(5);
    expect(testFrame._resultA).toEqual(5);
  });

  it("allows me to record the result from rollB in resultB", function(){
    testFrame.rollB(5);
    expect(testFrame._resultB).toEqual(5);
  });

  it("updates the _possibleResults array to mirror the possible scores in the next role", function(){
    testFrame.rollA(5);
    expect(testFrame._possibleResults).toEqual([0, 1, 2, 3, 4, 5]);
  });


  // Result testing. Relate to recording and updating initial results from full first frame.

  it("allows me to record the cumulative results from rollA and rollB in _frameResult", function(){
    testFrame.rollA(5);
    testFrame.rollB(5);
    expect(testFrame._frameResult).toEqual(10);
  });


  // Edge case testing. Relates to errors and guard clauses within Frame function.

  it("throws an error when I try to topple less than 0 pins on rollA", function(){
    expect(function(){testFrame.rollA(-1)}).toThrowError("Invalid number of toppledPins");
  });

  it("throws an error when I try to topple more than 10 pins on rollA", function(){
    expect(function(){testFrame.rollA(11)}).toThrowError("Invalid number of toppledPins");
  });

  it("throws an error when I try to topple less than 0 pins on rollB", function(){
    testFrame.rollA(5);
    expect(function(){testFrame.rollB(-1)}).toThrowError("Invalid number of toppledPins");
  });

  it("throws an error when I try to topple more than the remaining pins on rollB", function(){
    testFrame.rollA(5);
    expect(function(){testFrame.rollB(6)}).toThrowError("Invalid number of toppledPins");
  });
});
