describe('Bowling', function() {

  var bowling;
  var frames;

  beforeEach(function(){
    bowling = new Bowling();
    frames = new Frames();
  });

  it('adds bonus points and toggles frame bowl number', function() {
    bowling.bowl(5);
    bowling.frames.applyBonus();
    expect(bowling._isFirstBowlOfFrame).toEqual(false);
  });

});
