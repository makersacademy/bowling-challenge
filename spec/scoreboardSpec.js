describe("Scoreboard", function() {
  var score;
  beforeEach(function() {
    score = new Scoreboard();
  });

  it('starts with zero frames', function() {
    expect(score._frames).toEqual([]);
   });

  it('saves completed frames', function(){
    spyOn(score._currentFrame, 'done').and.returnValue(true);
    score.roll();
    expect(score._frames.length).toEqual(1);
  });

  it('calculates the total', function(){
    spyOn(score._currentFrame, 'savePoints').and.returnValue(4);
    spyOn(score._currentFrame, 'done').and.returnValue(true);
    score.roll();
    expect(score.total()).toEqual(4);
  })

  it('adds a spare bonus', function() {
    spyOn(score._currentFrame, 'hit').and.returnValue(5);
    score.roll();
    score.roll();
    spyOn(score._currentFrame, 'hit').and.returnValue(3);
    // score.roll();
    // score.roll();
    expect(score.total()).toEqual(19);
  });

  // it('calculates bonus strike points', function() {
  //   spyOn(score._currentFrame, 'savePoints').and.returnValue(10);
  //   spyOn(score._currentFrame, 'isDone').and.returnValue(true);
  //   score.roll();
  //   spyOn(score._currentFrame, 'savePoints').and.returnValue(10);
  //   spyOn(score._currentFrame, 'isDone').and.returnValue(true);
  //   score.roll();
  //   expect(score.total()).toEqual(30);
  // });
});
