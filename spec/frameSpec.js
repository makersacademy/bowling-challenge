// Count and sum the scores of a bowling game for one player (in JavaScript).
// A bowling game consists of 10 frames in which the player tries to knock down
// the 10 pins. In every frame the player can roll one or two times.
// The actual number depends on strikes and spares. The score of a frame is the
// number of knocked down pins plus bonuses for strikes and spares.
// After every frame the 10 pins are reset.
// 'use strict';

describe('Frame', function() {
  var frame;
  beforeEach(function() {
    frame = new Frame();
  });

  it("exists", function(){
    expect(frame).toBeDefined();
  });

//1. Frame Constructor attributes
  it("has a roll1 variable", function(){
    expect(frame._roll1).toBeDefined();
  });

  it("has a roll2 variable", function(){
    expect(frame._roll2).toBeDefined();
  });

  it("has a roll3 variable", function(){
    expect(frame._roll3).toBeDefined();
  });

  it("has a frameScore variable", function(){
    expect(frame._frameScore).toBeDefined();
  });

  it("has a strikeType variable", function(){
    expect(frame._strikeType).toBeDefined();
  });

//2. Frame Methods
  it("has a getStrikeType method", function(){
    expect(frame.getStrikeType).toBeDefined();
  });

//3. Detail of each Frame method
  // describe('#getStrikeType', function() {
  //   var frame;
  //   beforeEach(function() {
  //     frame = new Frame();
  //   });
  //   it ('is a strike (X) if roll1 is 10', function() {
  //     spyOn(frame, 'roll1').and.returnValue(10);
  //     var y = "";
  //     y = frame.getStrikeType();
  //     expect(frame._strikeType).toEqual(y);
  //   });
  //
  //   it ('is a strike (X) if roll2 is 10', function() {
  //     spyOn(frame, 'roll2').and.returnValue(10);
  //     var a = "";
  //     a = frame.getStrikeType();
  //     expect(frame._strikeType).toEqual(a);
  //   });
  //
  //   it ('is a half-strike (/) if sum of roll1 + roll2 is 10', function() {
  //     spyOn(frame, 'roll1').and.returnValue(5);
  //     spyOn(frame, 'roll2').and.returnValue(5);
  //     var b = "";
  //     b = frame.getStrikeType();
  //     expect(frame._strikeType).toEqual(b);
  //   });
  //
  //   it ('is nothing ("") if sum of roll1 + roll2 is less than 10', function() {
  //     spyOn(frame, 'roll1').and.returnValue(5);
  //     spyOn(frame, 'roll2').and.returnValue(4);
  //     var c = "";
  //     c = frame.getStrikeType();
  //     expect(frame._strikeType).toEqual(c);
  //   });
  // });









  // it("has a roll2 method", function(){
  //   expect(frame.roll2).toBeDefined();
  // });

  // it("has a bonus", function(){
  //   var _strikeType;
  //   expect(frame._strikeType).toBeDefined();
  // });

  // it("has a score", function(){
  //   var _score;
  //   expect(frame._score).toBeDefined();
  // });
  // it("contains roll1 and roll2", function(){
  //   var _roll1;
  //   var _roll2;
  //   expect(frame._roll1).toBeDefined();
  //   expect(frame._roll2).toBeDefined();
  // });
  //
  //
  //
  //
  // it("has a getFrameScore method", function(){
  //   expect(frame.getFrameScore).toBeDefined();
  // });
  //
  //
  // describe('#roll1', function() {
  //   var frame;
  //   beforeEach(function() {
  //     frame = new Frame();
  //   });
  //
  //   it ('returns a number of pins knocked down after the first roll', function() {
  //     frame.roll1();
  //     expect(typeof frame._roll1).toEqual('number');
  //   });
  //   it ('can knock down 0 - 10 pins', function() {
  //     frame.roll1();
  //     expect(frame._roll1).toBeLessThan(10);
  //   });
  //   it ('adds the number of pins knocked down to the frame score', function() {
  //     spyOn(frame, 'roll1').and.returnValue(5);
  //     expect(frame._score).toEqual(frame._score + frame._roll1);
  //   });
  // });
  //
  // describe('#roll2', function() {
  //   var frame;
  //   beforeEach(function() {
  //     frame = new Frame();
  //   });
  //
  //   it ('returns a number of pins knocked down after the second roll', function() {
  //     frame.roll2();
  //     expect(typeof frame._roll2).toEqual('number');
  //   });
  //   it ('can knock down 0 - 10 pins', function() {
  //     frame.roll2();
  //     expect(frame._roll2).toBeLessThan(10);
  //   });
  //   it ('adds the number of pins knocked down to the frame score', function() {
  //     spyOn(frame, 'roll2').and.returnValue(5);
  //     expect(frame._score).toEqual(frame._score + frame._roll2);
  //   });
  // });
  //
  //
  // describe('#getFrameScore', function() {
  //   var frame;
  //   beforeEach(function() {
  //     frame = new Frame();
  //   });
  //   it ('returns the total score for the frame', function() {
  //     spyOn(frame, 'roll1').and.returnValue(1);
  //     spyOn(frame, 'roll2').and.returnValue(2);
  //     var x = 0;
  //     x = frame.getFrameScore();
  //     expect(frame._score).toEqual(x);
  //   });
  // });
  //




});
