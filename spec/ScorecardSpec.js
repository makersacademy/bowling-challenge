describe("Scorecard", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("can record a frame", function() {
    scorecard.recordFrame({});
    expect(scorecard.frames).toEqual([{}]);
  });

  it("can calculate a total over a number of frames", function(){
    scorecard.recordFrame({total : function(){ return 4} })
    // // this creates an object which has a 'total' function which returns 4 (and then 6 below)
    scorecard.recordFrame({total : function(){ return 6} })
    expect(scorecard.total()).toEqual(10);
  })
});