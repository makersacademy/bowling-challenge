describe('Scorecard', function() {

  // var Scorecard;
  // beforeEach(function() {
  //   scorecard = new Scorecard();
  // });

  describe('it displays', function(){
    it("number from roll that it's been given", function() {
      scorecard = new Scorecard();
      expect(scorecard.recordRoll(5)).toEqual(5);
    })
  });
});
