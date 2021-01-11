'use strict';

describe('frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('records the number of pins knocked down on a single roll', function(){
    frame.recordRoll(7)
    expect(frame.points()).toEqual(7)
  });

  it('records the number of pins knocked down over two rolls', function(){
    frame.recordRoll(7)
    frame.recordRoll(2)
    expect(frame.points()).toEqual(9)
  });

  it('knows if it is a strike', function(){
    frame.recordRoll(10)
    expect(frame.isStrike()).toEqual(true)
  });

  it('knows if it is not a strike', function(){
    frame.recordRoll(7)
    frame.recordRoll(2)
    expect(frame.isStrike()).toEqual(false)
  });

  it('knows if it is a spare', function(){
    frame.recordRoll(9)
    frame.recordRoll(1)
    expect(frame.isSpare()).toEqual(true)
  });

  it('knows if it is not a spare', function(){
    frame.recordRoll(7)
    frame.recordRoll(2)
    expect(frame.isSpare()).toEqual(false)
  });

  describe('when the next roll is a 7', function(){
    it('can apply the bonus for a spare', function(){
      frame.recordRoll(7)
      frame.recordRoll(3)
      expect(frame.points(7)).toEqual(17)
    });
  });

  describe('when the next two rolls are 4 and 2', function(){
    it('can apply the bonus for a strike', function(){
      frame.recordRoll(10)
      expect(frame.points(4, 2)).toEqual(16)
    });
  });

  describe('when it is the final frame', function(){
    it('can apply the bonus roll correctly for a spare', function(){
      frame.number = 10;
      frame.recordRoll(8)
      frame.recordRoll(2)
      frame.recordRoll(4)
      expect(frame.points()).toEqual(14)
    });
    it('can apply the bonus roll correctly for a strike', function(){
      frame.number = 10;
      frame.recordRoll(10)
      frame.recordRoll(10)
      frame.recordRoll(10)
      expect(frame.points()).toEqual(30)
    });
  });

  describe('when the player tries to cheat by entering a score greater than the available number of pins', function(){
    it('raises an error', function(){
      frame.number = 3
      frame.recordRoll(5)
      expect(() => frame.recordRoll(7)).toThrow("CHEATER ALERT!!! PLEASE INPUT A SCORE EQUAL TO OR LOWER THAN THE NUMBER OF AVAILABLE PINS")
    })
  })

  describe('when the player tries to cheat on the bonus rolls', function(){
    it('raises an error', function(){
      frame.number = 10
      frame.recordRoll(10)
      frame.recordRoll(6)
      expect(() => frame.recordRoll(7)).toThrow("CHEATER ALERT!!! PLEASE INPUT A SCORE EQUAL TO OR LOWER THAN THE NUMBER OF AVAILABLE PINS")
    })
  })

  describe('when a player tries to record rolls beyond the end of the game', function(){
    it('raises an error', function(){
      frame.number = 10
      frame.recordRoll(10)
      frame.recordRoll(10)
      frame.recordRoll(10)
      expect(() => frame.recordRoll(7)).toThrow("CHEATER ALERT!!! PLEASE INPUT A SCORE EQUAL TO OR LOWER THAN THE NUMBER OF AVAILABLE PINS")
    })
  })
})
