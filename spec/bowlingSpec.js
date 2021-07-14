describe('Bowling', function () {
  let bowling;

  beforeEach(function () {
    bowling = new Bowling();
  });

  describe('the frame function', function () {
    it('sets the state to spare when conditions are met', function () {
      bowling.frame(4, 6);
      expect(bowling.state[0]).toEqual('spare');
      expect(bowling.total).toEqual(0);
    });

    it('sets the state to strike when the conditions are met', function () {
      bowling.frame(10, 0);
      expect(bowling.state[0]).toEqual('strike');
      expect(bowling.total).toEqual(0);
    });

    it('sets the state to open frame when the conditions are met', function () {
      bowling.frame(4, 4);
      expect(bowling.state[0]).toEqual('open frame');
      expect(bowling.total).toEqual(8);
    });
  });

  describe('tenthFrameExtra', function () {
    it('when a full game is played and each bowling frame is a strike', function () {
      for (let i = 0; i < 10; i++) {
        bowling.frame(10, 0);
      }
      bowling.tenthFrameExtra(10);
      bowling.tenthFrameExtra(10);

      expect(bowling.frameCounter).toEqual(12);
      expect(bowling.framesTotal.length).toEqual(10);
      expect(bowling.total).toEqual(300);
    });

    it('when a full game is played and each bowling frame is a spare', function () {
      for (let i = 0; i < 10; i++) {
        bowling.frame(5, 5);
      }
      bowling.tenthFrameExtra(5);

      expect(bowling.frameCounter).toEqual(11);
      expect(bowling.framesTotal.length).toEqual(10);
      expect(bowling.total).toEqual(150);
    });

    it('when a full game is played and results are strikes followed by last open frame', function () {
      for (let i = 0; i < 10; i++) {
        bowling.frame(10, 0);
      }
      bowling.tenthFrameExtra(10);
      bowling.tenthFrameExtra(5);

      expect(bowling.frameCounter).toEqual(12);
      expect(bowling.framesTotal.length).toEqual(10);
      expect(bowling.total).toEqual(295);
    });

    it('when a full game is played and last frame is spare and extra roll', function () {
      for (let i = 0; i < 9; i++) {
        bowling.frame(10, 0);
      }
      bowling.frame(5, 5);
      bowling.tenthFrameExtra(6);

      expect(bowling.frameCounter).toEqual(11);
      expect(bowling.framesTotal.length).toEqual(10);
      expect(bowling.total).toEqual(271);
    });

    it('when a full game is played and the tenth frame is an open frame', function () {
      for (let i = 0; i < 9; i++) {
        bowling.frame(10, 0);
      }
      bowling.frame(7, 2);

      expect(bowling.frameCounter).toEqual(10);
      expect(bowling.framesTotal.length).toEqual(10);
      expect(bowling.total).toEqual(265);
    });
  });

  describe('frameEnds', function () {
    it('increments the frame counter by 1 after each frame is processed', function () {
      bowling.frame(4, 3);
      expect(bowling.frameCounter).toEqual(1);
    });

    it('acts on the state, calling the appropriate method (openFrame)', function () {
      spyOn(bowling, 'openFrame');
      bowling.frame(7, 2);
      expect(bowling.openFrame).toHaveBeenCalled();
    });

    it('acts on the state, calling the appropriate method (strike)', function () {
      spyOn(bowling, 'strike');
      bowling.frame(10, 0);
      expect(bowling.strike).toHaveBeenCalled();
    });

    it('acts on the state, calling the appropriate method (spare)', function () {
      spyOn(bowling, 'spare');
      bowling.frame(5, 5);
      expect(bowling.spare).toHaveBeenCalled();
    });
  });

  describe('strike', function () {
    it('allocates points based on the previous frames if x2_strike', function () {
      spyOn(bowling, 'prevCondition').and.returnValue('x2_strike');
      bowling.strike();
      expect(bowling.framesTotal.length).toEqual(1);
      expect(bowling.framesTotal[0]).toEqual(30);
    });

    it('allocates points based on previous frames, if spare', function () {
      spyOn(bowling, 'prevCondition').and.returnValue('spare');
      bowling.strike();
      expect(bowling.framesTotal.length).toEqual(1);
      expect(bowling.framesTotal[0]).toEqual(20);
    });
  });

  describe('spare', function () {
    it('allocates points based on previous frame if x2_strike', function () {
      spyOn(bowling, 'prevCondition').and.returnValue('x2_strike');
      spyOn(bowling, 'currentFrame').and.returnValue(7);
      bowling.spare();
      expect(bowling.framesTotal.length).toEqual(2);
      expect(bowling.framesTotal[0]).toEqual(27);
      expect(bowling.framesTotal[1]).toEqual(20);
    });

    it('allocates points based on previous frame if x1_strike', function () {
      spyOn(bowling, 'prevCondition').and.returnValue('x1_strike');
      bowling.spare();
      expect(bowling.framesTotal.length).toEqual(1);
      expect(bowling.framesTotal[0]).toEqual(20);
    });

    it('allocates points based on previous frame if spare', function () {
      spyOn(bowling, 'prevCondition').and.returnValue('spare');
      spyOn(bowling, 'currentFrame').and.returnValue(7);
      spyOn(bowling, 'frameCounter').and.returnValue(1);
      bowling.spare();
      expect(bowling.framesTotal.length).toEqual(1);
      expect(bowling.framesTotal[0]).toEqual(17);
    });
  });

  describe('openFrame', function () {
    it('allocates points based on previous frame if x2_strike', function () {
      spyOn(bowling, 'prevCondition').and.returnValue('x2_strike');
      spyOn(bowling, 'currentFrame').and.returnValue(7);
      spyOn(bowling, 'currentOpenFrame').and.returnValue(7);
      bowling.openFrame();
      expect(bowling.framesTotal.length).toEqual(3);
      expect(bowling.framesTotal[0]).toEqual(27);
      expect(bowling.framesTotal[1]).toEqual(17);
      expect(bowling.framesTotal[2]).toEqual(7);
    });

    it('allocates points based on previous frame if x1_strike', function () {
      spyOn(bowling, 'prevCondition').and.returnValue('x1_strike');
      spyOn(bowling, 'currentOpenFrame').and.returnValue(7);
      bowling.openFrame();
      expect(bowling.framesTotal.length).toEqual(2);
      expect(bowling.framesTotal[0]).toEqual(17);
      expect(bowling.framesTotal[1]).toEqual(7);
    });

    it('allocates points based on previous frame if spare', function () {
      spyOn(bowling, 'prevCondition').and.returnValue('spare');
      spyOn(bowling, 'currentFrame').and.returnValue(7);
      spyOn(bowling, 'currentOpenFrame').and.returnValue(7);
      bowling.openFrame();
      expect(bowling.framesTotal.length).toEqual(2);
      expect(bowling.framesTotal[0]).toEqual(17);
      expect(bowling.framesTotal[1]).toEqual(7);
    });

    it('allocates points based on previous frame if open_frame', function () {
      spyOn(bowling, 'prevCondition').and.returnValue('open_frame');
      spyOn(bowling, 'currentOpenFrame').and.returnValue(7);
      bowling.openFrame();
      expect(bowling.framesTotal.length).toEqual(1);
      expect(bowling.framesTotal[0]).toEqual(7);
    });
  });
});
