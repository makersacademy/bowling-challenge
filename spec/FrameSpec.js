'use strict';

describe('Frame:', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('Total', function(){
    it('initializes at zero', function(){
      expect(frame.total).toEqual(0);
    });
    it('trascks first and second rolls', function(){
      expect(frame.firstRoll).toEqual(0);
      expect(frame.secondRoll).toEqual(0);
    });
  });

});
