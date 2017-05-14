describe('Features', function() {

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('Player can bowl a ball', function(){
    expect(bowling.bowl()).toEqual(bowling.getFrames());
  });

});
