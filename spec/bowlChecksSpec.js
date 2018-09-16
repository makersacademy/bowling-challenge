describe('BowlChecks', function() {

  beforeEach(function() {
    bowlChecks = new BowlChecks;
  });

  describe('initialized settings', function () {

    it ('first bowl of frame is false', function () {
      expect(bowlChecks._bowlOneOfFrame).toEqual(false);
    });

    it ('display of knocked down pins in a frame is 0', function () {
      expect(bowlChecks._display).toEqual(0);
    });

    it ('number of frame is 1', function () {
      expect(bowlChecks._frame).toEqual(1);
    });

  });

  describe('frameChecks', function() {

    describe('frame', function() {

      it ('is added if strike is rolled', function () {
        bowlChecks.frameChecks(10);
        expect(bowlChecks._frame).toEqual(2);
      });

      it ('is added if spare is rolled', function () {
        bowlChecks.frameChecks(5);
        bowlChecks.frameChecks(5);
        expect(bowlChecks._frame).toEqual(2);
      });

      it ('is not added if if only one bowl of under 10 is rolled', function () {
        bowlChecks.frameChecks(5);
        expect(bowlChecks._frame).toEqual(1);
      });
    });

    describe('display', function() {

      it ('equals an X if strike is rolled', function () {
        bowlChecks.frameChecks(10);
        expect(bowlChecks._display).toEqual('X');
      });

      it ('equals / if spare is rolled', function () {
        bowlChecks.frameChecks(5);
        bowlChecks.frameChecks(5);
        expect(bowlChecks._display).toEqual('/');
      });

    });

    describe('entered knocked pins number', function () {

      it ('returns a message and if knocked pins are over 10', function () {
        expect(bowlChecks.frameChecks(11)).toEqual('knocked down pins number not valid');
      });

      it ('returns a message and if both knocked pins in frame add up to over 10', function () {
        bowlChecks._bowlOneKnockedPins = 5;
        bowlChecks._bowlOneOfFrame = true;
        expect(bowlChecks.frameChecks(6)).toEqual('knocked down pins number not valid');
      });
    });
  });
});
