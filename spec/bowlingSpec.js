'use strict';

describe('Bowling', function(){

  var bowling, frame;

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe('tracks score', function(){
    it('starts at zero', function() {
      expect(bowling.getScore()).toEqual(0);
    });
  });

  describe('tracks frames', function(){

    it('can store frame objects', function(){
      bowling.playFrame(frame);
      expect(bowling.getFrames()).toEqual([frame]);
    });

    it('starts with no frames', function(){
      expect(bowling.getFrames()).toEqual([]);
    });

    it('stores a maximum of 10 frames', function(){
      
    });
  });

});
