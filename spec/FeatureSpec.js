describe('Feature tests', function(){
  var frame;
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
    frame = new Frame();
  });

  it('sums the scores of a bowling game for one player', function() {
    for(var i=0; i<3; i++) {
      bowling.play(5,5);
      bowling.completeFrame();
      bowling.play(10,0);
      bowling.completeFrame();
      bowling.play(4,3);
      bowling.completeFrame();
    }
    bowling.play(3,5);
    bowling.completeFrame();
    bowling.calculateTotalScore();
    console.log(bowling.frames);
    expect(bowling.totalScore).toEqual(140)
  });

  it('adds the correct bonus to a frame if a strike is scored', function() {
    bowling.play(10,0);
    bowling.completeFrame();
    bowling.play(3,3);
    bowling.completeFrame();
    expect(bowling.frames[0].bonus).toEqual([3,3]);
  });

  it('adds the correct bonus to a frame if spare is scored', function() {
    bowling.play(5,5);
    bowling.completeFrame();
    bowling.play(3,3);
    bowling.completeFrame();
    expect(bowling.frames[0].bonus).toEqual([3]);
  });

  it('adds the correct bonus to a frame if two strikes are scored in a row',
   function() {
     bowling.play(10,0);
     bowling.completeFrame();
     bowling.play(10,0);
     bowling.completeFrame();
     bowling.play(5,5);
     expect(bowling.frames[0].bonus).toEqual([10, 5]);
  });

  it('adds the correct bonus to the 10th frame if a strike is scored',
   function() {
    for(var i=0; i<9; i++) {
      bowling.play(4,5);
      bowling.completeFrame();
    }
    bowling.play(10,0);
    bowling.bonusRoll(5);
    bowling.thirdRoll(3);
    bowling.completeFrame();
    expect(bowling.frames[bowling.frames.length-1].bonus).toEqual([5,3]);
  });

  it('adds the correct bonus to the 10th frame is a spare is scored',
   function(){
    for(var i=0; i<9; i++) {
      bowling.play(4,5);
      bowling.completeFrame();
    }
    bowling.play(5,5);
    bowling.thirdRoll(3);
    bowling.completeFrame();
    expect(bowling.frames[bowling.frames.length-1].bonus).toEqual([3]);
  });

  it('gives a total score of 0 in the event of a gutter game (no pins hit)',
   function() {
    for(var i=0; i<10; i++) {
      bowling.play(0,0);
      bowling.completeFrame();
    }
    bowling.calculateTotalScore();
    expect(bowling.totalScore).toEqual(0);
  });

  it('gives a total score of 300 in the event of a perfect game (10 strikes)',
   function() {
    for(var i=0; i<9; i++) {
      bowling.play(10,0);
      bowling.completeFrame();
    }
    bowling.play(10,0);
    bowling.bonusRoll(10);
    bowling.thirdRoll(10);
    bowling.completeFrame();
    bowling.calculateTotalScore();
    expect(bowling.totalScore).toEqual(300);
  });
});
