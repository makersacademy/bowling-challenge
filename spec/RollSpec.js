

  describe('Roll,',function() {


    var roll=[];


    beforeEach(function() {
      for (var i = 0; i <= 2; i++) {
        roll[i] = new Roll();
      }
    });

    describe('scoring of roll 0 when open: ',function() {

      beforeEach(function() {
        roll[0].pinsKnockedDown(5);
        roll[1].pinsKnockedDown(7);
      });

      it('5 on roll 0; scores 5',function() {
        expect(roll[0].rollScore()).toEqual(5);
      });
      it('5 on roll 0; bonus 0',function() {
        expect(roll[0].rollBonus()).toEqual(0);
      });

    });

    describe('scoring of roll 0 when strike or spare: ',function() {

      beforeEach(function() {
        roll[0].pinsKnockedDown(10);
        roll[1].pinsKnockedDown(10);
      });

      it('10 on roll 0; scores 10',function() {
        expect(roll[0].rollScore()).toEqual(10);
      });
      it('10 on roll 0; bonus 10',function() {
        expect(roll[0].rollBonus()).toEqual(10);
      });

      it('10 on roll 1; scores 10',function() {
        expect(roll[1].rollScore()).toEqual(10);
      });
      it('10 on roll 1; bonus 10',function() {
        expect(roll[1].rollBonus()).toEqual(10);
      });

    });

  });
