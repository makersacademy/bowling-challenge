
describe('Frame',function(){

  var frame;

  beforeEach(function(){
    frame = new Frame
  });

  it('starts with 10 pins standing',function(){
    expect(frame.getPins()).toBe(10)
  });

  it('bowling knocks over pins', function(){
    frame.roll(5)
    expect(frame.getPins()).toBe(5)
  });

  it("can't knock over more pins than there are standing",function(){
    expect(function(){
      frame.roll(11);
    }).toThrowError("Invalid roll")
  });


  it('records the rolls', function(){
    frame.roll(3);
    expect(frame.getRolls()).toEqual([3])
    frame.roll(6);
    expect(frame.getRolls()).toEqual([3,6])
  });

  it('is a spare if all 10 pins are knocked down in 2 rolls',function(){
    frame.roll(7);
    frame.roll(3);
    expect(frame.isSpare()).toBe(true)
    expect(frame.isStrike()).toBe(false)
  });

  it('is a strike if all 10 pins are knocked down in 1 roll',function(){
    frame.roll(10);
    expect(frame.isSpare()).toBe(false)
    expect(frame.isStrike()).toBe(true)
  });
  describe('normal frame',function(){

    it('not final frame by default', function(){
      expect(frame.getIsFinalFrame()).toBe(false)
    });

    it('strike means no more rolls left', function(){
      frame.roll(10);
      expect(function(){
        frame.roll(3);
      }).toThrowError("No rolls left")
    });

    it('two rolls max per frame',function(){
      frame.roll(3);
      frame.roll(3);
      expect(function(){
        frame.roll(3);
      }).toThrowError("No rolls left")
    });
  });


  describe('final frame',function(){
    beforeEach(function(){
      frame.setFinalFrame();
    });

    it('can be set to final frame', function(){
      expect(frame.getIsFinalFrame()).toBe(true)
    });

    describe('when spare',function(){
      beforeEach(function(){
        frame.roll(3);
        frame.roll(7);
      });

      it('pins reset',function(){
        expect(frame.getPins()).toEqual(10);
      });

      it('one extra roll',function(){
        expect(function(){
          frame.roll(3);
        }).not.toThrowError("No rolls left")
      });

      it('max three rolls',function(){
        frame.roll(3);
        expect(function(){
          frame.roll(3);
        }).toThrowError("No rolls left")
      });
    });

    describe('when strike',function(){
      beforeEach(function(){
        frame.roll(10);
      });

      it('pins are reset',function(){
        expect(frame.getPins()).toEqual(10);
      });

      it('two extra rolls',function(){
        expect(function(){
          frame.roll(3);
          frame.roll(7);
        }).not.toThrowError("No rolls left")
      });

      it('max three rolls',function(){
        expect(function(){
          frame.roll(3);
          frame.roll(2);
          frame.roll(2);
        }).toThrowError("No rolls left")
      });

      describe('when first and second rolls are strikes',function(){
        beforeEach(function(){
          frame.roll(10);
        });

        it('pins are reset',function(){
          expect(frame.getPins()).toEqual(10);
        });

        it('max three rolls',function(){
          frame.roll(3);
          expect(function(){
            frame.roll(2);
          }).toThrowError("No rolls left")
        });

        it('max three rolls even if another strike',function(){
          frame.roll(10);
          expect(function(){
            frame.roll(2);
          }).toThrowError("No rolls left")
        });
      });
    });
  });
});
