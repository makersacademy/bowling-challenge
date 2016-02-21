describe("When a new game begins", function () {
  var bowling = new Bowling();

  it("has 10 current pins", function() {
    expect(bowling.currentPins).toEqual(10);
  });

  it("has a score of 0", function() {
    expect(bowling.score).toEqual(0);
  });

  it("returns the current frame", function() {
    expect(bowling.currentFrame).toEqual(1);
  });

});

describe("When a user bowls", function () {
  var bowling = new Bowling();

  beforeEach(function(){
    spyOn(bowling, 'randomHit');
    spyOn(bowling, 'isStrike');
  });

  it("sets second round to 0 if strike", function(){
    bowling.isStrike.and.returnValue(true);
    bowling.randomHit.and.returnValue(10);
    bowling.bowl();
    expect(bowling.allFrames[bowling.currentFrame]).toContain(10, 0);
  });

  it("scores 3 if it hits 3 pins", function(){
    bowling.isStrike.and.returnValue(false);
    bowling.randomHit.and.returnValue(3);
    bowling.bowl();
    expect(bowling.score).toEqual(3);
  });

  it("is on the 2nd frame", function(){
    bowling.isStrike.and.returnValue(false);
    bowling.randomHit.and.returnValue(3);
    bowling.bowl();
    expect(bowling.currentFrame).toEqual(2);
  });

});


describe("when a user strikes",function(){
  var bowling = new Bowling();

  beforeEach(function(){
    spyOn(bowling, 'randomHit');
    spyOn(bowling, 'isStrike');
  });

  it("doubles the next round", function () {
    bowling.randomHit.and.returnValue(10);
    bowling.bowl();
    bowling.isStrike.and.returnValue(true);
    bowling.randomHit.and.returnValue(2);
    bowling.bowl();
    expect(bowling.viewTotalScore()).toEqual(14);
  });

  it("returns isStrike to true at next round", function () {
    bowling.isStrike.and.returnValue(true);
    expect(bowling.isStrike()).toEqual(true);
  });

});

describe("when a user has a spare",function(){
  var bowling = new Bowling();

  beforeEach(function(){
    spyOn(bowling, 'randomHit');
    spyOn(bowling, 'isStrike');
  });

  it("returns 10 by spare", function () {
    bowling.randomHit.and.returnValue(5);
    bowling.bowl();
    bowling.randomHit.and.returnValue(5);
    bowling.bowl();
    expect(bowling.viewTotalScore()).toEqual(10);
  });

  it("returns isSpare to true at next round", function () {
    bowling.isStrike.and.returnValue(false);
    bowling.bowl();
    expect(bowling.isSpare()).toEqual(true);
  });

});
