"use strict";

describe("Frame", function() {

let frame;

beforeEach(function() {
  frame = new Frame;
});

it('has an empty current frame score by default', function(){
   expect(frame.currentFrameScore()).toEqual([]);
 })

describe('adding to frames', function(){
  it('adds pins to current frame', function(){
    frame.addToFrame(10);
    expect(frame.currentFrameScore()).toContain(10);
  })
 })

 describe('summing the total frame', function(){
   it('adds pins to current frame', function(){
     frame.addToFrame(3);
     frame.addToFrame(6);
     expect(frame.total()).toEqual(9);
   })
  })

  describe('First Bowl', function(){
    it('return first bowl of current frame', function(){
      frame.addToFrame(3);
      frame.addToFrame(6);
      expect(frame.firstBowl()).toEqual(3);
    })
   })

   describe('strike function', function(){
     it('returns true if a strike', function(){
       frame.addToFrame(10);
       frame.addToFrame(0);
       expect(frame.isStrike()).toEqual(true);
     })
     it('returns false if not a strike', function(){
       frame.addToFrame(2);
       frame.addToFrame(3);
       expect(frame.isStrike()).toEqual(false);
    })
  })

  describe('spare function', function(){
    it('returns true if a spare', function(){
      frame.addToFrame(5);
      frame.addToFrame(5);
      expect(frame.isSpare()).toEqual(true);
    })
    it('returns false if not a strike', function(){
      frame.addToFrame(2);
      frame.addToFrame(3);
      expect(frame.isSpare()).toEqual(false);
   })
 })
})
