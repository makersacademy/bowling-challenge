'use strict';

describe('Frame', function() {

  describe('normal scoring behaviour', function() {
    it('tallies a normal score', function() {
      var frame = new Frame();
      frame.roll(2);
      frame.roll(4);
      expect(frame.score()).toEqual(6);
    });
    it('allows only two rolls in normal circumstances', function(){
        var frame = new Frame();
      frame.roll(2);
      frame.roll(3);
      expect(frame.roll(2)).toEqual('Only two rolls per frame until frame 10!');
    });
  });

  describe('spares', function() {
    it('logs a spare', function(){
      var frame = new Frame();
      frame.roll(5);
      frame.roll(5);
      expect(frame.isSpare()).toEqual(true);
    });
    it('allows a single bonus roll to be added if a spare is logged', function(){
      var frame = new Frame();
      frame.roll(5);
      frame.roll(5);
      frame.bonus(5);
      expect(frame.score()).toEqual(15);
    });
    it('does not allow multiple bonus rolls to be added if a spare is logged', function(){
      var frame = new Frame();
      frame.roll(5);
      frame.roll(5);
      frame.bonus(5);
      expect(frame.bonus(2)).toEqual('Only one bonus roll allowed with a spare!');
    });
    it('does not allow a bonus roll to be added is a spare is not logged', function(){
      var frame = new Frame();
      frame.roll(5);
      expect(frame.bonus(2)).toEqual('Bonus rolls not permitted unless a strike or spare is logged!');
    });
  });

  describe('strikes', function(){
    it('logs a strike', function(){
      var frame = new Frame();
      frame.roll(10);
      expect(frame.isStrike()).toEqual(true);
    });
    it('will not accept a second roll if a strike is logged', function(){
      var frame = new Frame();
      frame.roll(10);
      expect(frame.roll(2)).toEqual('No second roll after strike!');
    });
    it('allows multiple bonus rolls to be added if a strike is logged', function(){
      var frame = new Frame();
      frame.roll(10);
      frame.bonus(5);
      frame.bonus(5);
      expect(frame.score()).toEqual(20);
    });
    it('does not allow bonus rolls to be added is a strike is not logged', function(){
      var frame = new Frame();
      frame.roll(5);
      expect(frame.bonus(2)).toEqual('Bonus rolls not permitted unless a strike or spare is logged!');
    });
  });

  describe('frame numbering', function(){
    it('allows a frame number to be set and returned', function(){
      var frame = new Frame();
      frame.nSet(5);
      expect(frame.n()).toEqual(5);
    });
  });

  describe('frame 10', function(){
    it('allows three rolls if a the first roll is a strike', function(){
      var frame = new Frame();
      frame.nSet(10);
      frame.roll(10);
      frame.roll(10);
      frame.roll(10);
      expect(frame.score()).toEqual(30);
    });
    it('does not allow more than three rolls, even if the first roll is a strike', function(){
      var frame = new Frame();
      frame.nSet(10);
      frame.roll(10);
      frame.roll(10);
      frame.roll(10);
      expect(frame.roll(10)).toEqual('Only three rolls allowed in frame 10!');
    });
  });
});
