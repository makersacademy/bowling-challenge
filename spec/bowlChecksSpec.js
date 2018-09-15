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

  describe('checks', function() {

    it ('frame is added if strike is rolled', function () {
      bowlChecks.checks(10);
      expect(bowlChecks._frame).toEqual(2);
    });

    it ('frame is added if spare is rolled', function () {
      bowlChecks.checks(5);
      bowlChecks.checks(5);
      expect(bowlChecks._frame).toEqual(2);
    });

    it ('frame is not added if if only one bowl of under 10 is rolled', function () {
      bowlChecks.checks(5);
      expect(bowlChecks._frame).toEqual(1);
    });

    it ('display equals an X if strike is rolled', function () {
      bowlChecks.checks(10);
      expect(bowlChecks._display).toEqual('X');
    });

    it ('display equals / if spare is rolled', function () {
      bowlChecks.checks(5);
      bowlChecks.checks(5);
      expect(bowlChecks._display).toEqual('/');
    });

  });

});
