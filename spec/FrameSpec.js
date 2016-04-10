'use strict';

describe('Frame', function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('to start', function(){
    it('has empty turns array', function(){
      expect(frame.round).toEqual([]);
    });
    it('has 0 score', function(){
       expect(frame.score).toEqual(0);
    });
    it('has 10 pins', function(){
      expect(frame.pinsRemaining).toEqual(10);
    });
    it('has 0 balls rolled', function(){
      expect(frame.ballsRolled).toEqual(0);
    });
  })

  describe('First bowl of frame', function(){

    beforeEach(function(){
      frame.bowl(3);
    });

    it('adds to score', function(){
      expect(frame.score).toEqual(3);
    });
    it('adds to array', function(){
      expect(frame.round).toEqual([3]);
    });
    it('removes from pins', function(){
      expect(frame.pinsRemaining).toEqual(7);
    });
    it('adds to balls rolled', function(){
      expect(frame.ballsRolled).toEqual(1);
    });
  });

  describe('Second bowl of frame', function(){

    beforeEach(function(){
      frame.bowl(3);
    });

    it('error when knocking down too many pins', function(){
      expect(function() {
        frame.bowl(9);
      }).toThrowError('Cannot knock down more than 10 pins!');
    });
  });

  describe('Strike', function(){
    it('cannot throw second bowl', function(){
      frame.bowl(10);
      expect( function(){ frame.bowl(1); } ).toThrow(new Error("Frame complete!"));
    });
    it('adds "X" to round', function(){
      frame.bowl(10);
      expect(frame.round).toEqual(["X"])
    });
    it('isStrike is true', function(){
      frame.bowl(10);
      expect(frame.isStrike).toEqual(true)
    });
  });

  describe('Spare', function(){
    it('adds "/" to round', function(){
      frame.bowl(3);
      frame.bowl(7);
      expect(frame.round).toEqual([3,"/"])
    });
    it('isSpare is true', function(){
      frame.bowl(3);
      frame.bowl(7);
      expect(frame.isSpare).toEqual(true)
    });
  });

  it('prevents third bowl when not final', function(){
    frame.bowl(5);
    frame.bowl(4);
    expect( function(){ frame.bowl(1); } ).toThrow(new Error("Frame complete!"));
  });
});
