var TenthFrame = require('../src/tenthFrame.js');
describe("TenthFrame", function() {

    beforeEach(function() {
       tenthFrame = new TenthFrame();
    });

    it("is an instance of TenthFrame", function() {
        expect(tenthFrame).toEqual(jasmine.any(TenthFrame));
    });

    it('allows two more shots if you score a stike on its first shot', function(){
      tenthFrame.setFirstScore(10);
      tenthFrame.setSecondScore(2);
      tenthFrame.setBonusScore(2);
      expect(tenthFrame.getFinalFrameScore()).toEqual(14);
    });

    it('allows a bonus shot if the second score adds up to a spare', function(){
      tenthFrame.setFirstScore(8);
      tenthFrame.setSecondScore(2);
      tenthFrame.setBonusScore(6);
      expect(tenthFrame.getFinalFrameScore()).toEqual(16);
    });

    it('only allows two shots if its first and second shots add up to less than 10', function(){
      tenthFrame.setFirstScore(8);
      tenthFrame.setSecondScore(1);
      expect(tenthFrame.setBonusScore(6)).toEqual(null);
    });

    it('it has a score of 30 if the player enters three strikes', function(){
      tenthFrame.setFirstScore(10);
      tenthFrame.setSecondScore(10);
      tenthFrame.setBonusScore(10)
      expect(tenthFrame.getFinalFrameScore()).toEqual(30);
    });
});

