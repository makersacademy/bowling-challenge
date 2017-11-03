'use strict';

describe('Frame', function() {
var frame;
  beforeEach(function(){

    frame = new Frame();
  });

  describe('score card', function(){
    it("score card begins at 0", function(){
      console.log(frame.scoreCard());
      expect(frame.scoreCard()).toEqual(0);
    });
  });

  // describe('pinsLeft', function() {
  //   it('has a default of 10 pins left to knock down', function() {
  //     console.log(frame)
  //     expect(frame.pinsLeft()).toEqual(10);
  //   });
  });
