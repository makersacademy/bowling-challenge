describe("Score", function(){
  var score;

  beforeEach(function(){
    score = new Score();
  });

  it("returns a frame", function(){
    score.addFrame({});
    expect(score.frames).toEqual([{}]);
  });

  it("returns the total of multiple frames", function(){
    score.addFrame({total : function(){ return 1 } });
    score.addFrame({total : function(){ return 5 } });
    expect(score.total()).toEqual(6);
  });
});
