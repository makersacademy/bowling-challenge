describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('can record the number of pins knocked down in a single frame', function() {
    bowling.pins(5);
    bowling.pins(4);
    expect(bowling.frame_score()).toEqual(9);
  });

  it('can add the frame score to the game total', function() {
    bowling.pins(4);
    bowling.pins(4);
    expect(bowling.game_score()).toEqual(8);
  });

  it('can record a gutter game', function () {
    bowling.pins(0);
    bowling.pins(0);
    bowling.pins(0);
    bowling.pins(0);
    bowling.pins(0);
    bowling.pins(0);
    bowling.pins(0);
    bowling.pins(0);
    bowling.pins(0);
    bowling.pins(0);
    expect(bowling.game_score()).toEqual(0);
  });

  // it('can record the number of pins knocked down in multiple frames', function() {
  //   bowling.pins(5);
  //   bowling.pins(4);
  //   bowling.pins(3);
  //   bowling.pins(2);
  //   expect(bowling.total()).toEqual([[5,4],[3,2]]);
  // });


});
