

  describe('Frame,',function() {

    var frame = [];

    beforeEach(function() {
      for (var i = 0; i <= 11; i++) {
        frame[i] = new Frame();
      }
    });

    describe('scoring frame without bonus',function() {

      beforeEach(function() {
        frame[0].rollPins(0,5);
        frame[0].rollPins(1,4);
        frame[1].rollPins(0,0);
        frame[1].rollPins(1,0);
        frame[2].rollPins(0,3);
        frame[2].rollPins(1,7);
        frame[3].rollPins(0,10);
        frame[3].rollPins(1,0);
      });

      it('- open frame 7 & 5',function() {
        expect(frame[0].frameScore()).toEqual(9);
      });
      it('- open frame miss and miss',function() {
        expect(frame[1].frameScore()).toEqual(0);
      });
      it('- spare frame',function() {
        expect(frame[2].frameScore()).toEqual(10);
      });
      it('- strike frame & 4',function() {
        expect(frame[3].frameScore()).toEqual(10);
      });

    });

  });

