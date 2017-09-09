describe("Frame", function() {
  var testFrame1;
  var testFrame2;

  beforeEach(function() {
    testFrame1 = new Frame();
    testFrame2 = new Frame();
  });


  // Set up tests. Relate only to intital set up of the Frame function.

  it("initiates with the results hash setting the scores of both rolls equal to null", function(){
    expect(testFrame1._result["A"]).toBe(null);
    expect(testFrame1._result["B"]).toBe(null);
  });

  // it("initiates with a frameResult equal to the cumulative result of A and B - namely 0", function(){
  //   expect(testFrame1._frameResult).toEqual(testFrame1._resultA + testFrame1._resultB);
  //   expect(testFrame1._frameResult).toEqual(0);
  // });

  it("initiates with a frameScore equal to null", function(){
    expect(testFrame1._frameScore).toBe(null);
  });

  it("initiates with a _pins attribute that is equal to 10", function(){
    expect(testFrame1._pins).toEqual(10)
  });


  // Functionality tests. Relate to use and update of game relevant data in a frame.

  it("allows me to record the result from rollA in key 'A' of the _result", function(){
    testFrame1.rollA(5);
    expect(testFrame1._result["A"]).toEqual(5);
  });

  it("allows me to record the result from rollB in key 'B of the the _result'", function(){
    testFrame1.rollB(5);
    expect(testFrame1._result["B"]).toEqual(5);
  });

  it("updates the _possibleResults array to mirror the possible scores in the next roll", function(){
    testFrame1.rollA(5);
    expect(testFrame1._pins).toEqual(5);
  });


  // Result testing. Relate to recording and updating initial results from full first frame.

  it("allows me to record the cumulative results from rollA and rollB in _frameScore", function(){
    testFrame1.rollA(3);
    testFrame1.rollB(3);
    expect(testFrame1._frameScore).toEqual(6);
  });

  it("does not set a frameScore if a player rolls a strike", function(){
    testFrame1.rollA(10);
    expect(testFrame1._frameScore).toBe(null);
  });

  it("sets the score multiplyer equal to 1 when frame is a strike", function(){
    testFrame1.rollA(10);
    expect(testFrame1._multiplyer).toEqual(1);
  });

  it("does not set a frameScore if a player rolls a spare", function(){
    testFrame1.rollA(5);
    testFrame1.rollB(5);
    expect(testFrame1._frameScore).toBe(null);
  });

  it("sets the score multiplyer equal to 0 when frame is a spare", function(){
    testFrame1.rollA(5);
    testFrame1.rollB(5);
    expect(testFrame1._multiplyer).toEqual(0);
  });

  

  // Results testing for score dependency. Makes sure that later frames influence the score of previous frames, based on the multiplyer.

  it("sets the previous frameScore dependent on rollA and rollB when previous frame is a strike", function(){
    testFrame1.rollA(10);
    testFrame2.rollA(5);
    testFrame2.rollB(3);
    testFrame2.setPreviousScore(testFrame1);
    expect(testFrame1._frameScore).toEqual(18);
  });

  it("sets the previous frameScore dependent on rollA when previous frame is a spare", function(){
    testFrame1.rollA(5);
    testFrame1

    .rollB(5);
    testFrame2.rollA(5);
    testFrame2.rollB(3);
    testFrame2.setPreviousScore(testFrame1);
    expect(testFrame1._frameScore).toEqual(15);
  });


  // Edge case testing. Relates to errors and guard clauses within Frame function.

  it("throws an error when I try to topple less than 0 pins on rollA", function(){
    expect(function(){testFrame1.rollA(-1)}).toThrowError("Invalid number of toppledPins");
  });

  it("throws an error when I try to topple more than 10 pins on rollA", function(){
    expect(function(){testFrame1.rollA(11)}).toThrowError("Invalid number of toppledPins");
  });

  it("throws an error when I try to topple less than 0 pins on rollB", function(){
    expect(function(){testFrame1.rollB(-1)}).toThrowError("Invalid number of toppledPins");
  });

  it("throws an error when I try to topple more than the remaining pins on rollB", function(){
    testFrame1._pins = 5
    expect(function(){testFrame1.rollB(6)}).toThrowError("Invalid number of toppledPins");
  });
});
