describe('Player', function() {

  beforeEach(function() {
    player = new Player();
  });

  it('should start with 10 pins', function() {
    expect(player.pinCount).toEqual(10);
  });

  it('should start with a frame count of -1', function() {
    expect(player.frameCount).toEqual(-1);
  });

  it('should start with 0 points', function() {
    expect(player.score).toEqual(0);
  });

  it('throw generator should return a number that is less than 11', function() {
    expect(player.throwBall()).toBeLessThan(11);
  });

  it('pinCount should remain at 10 if player misses', function() {
    expect(player.pinCount).toEqual(10);
  });

  it('should have a pin count of 6 if you hit a total of 4 pins', function() {
    spyOn(Math, 'floor').and.returnValue(2);
    player.takeTurn();
    expect(player.pinCount).toEqual(6);
  });

  it('should throw Strike if you hit 10 pins', function() {
    spyOn(Math, 'floor').and.returnValue(10);
    expect(function() {player.takeTurn(); }).toThrow('STRIKE!');
  });

  it('should throw half strike if you knock down all your pins on your second go', function() {
    spyOn(Math, 'floor').and.returnValue(5);
    expect(function() {player.takeTurn(); }).toThrow('HALF STRIKE!');
  });

  it('should have a score of 8 if total pins knocked down is 8', function() {
    spyOn(Math, 'floor').and.returnValue(4);
    player.takeTurn();
    expect(player.score).toEqual(8);
  });

  it('should not be able to score more than 10 points per frame (not including strikes/half strikes)', function() {
    spyOn(Math, 'floor').and.returnValue(6);
    expect(function() {player.takeTurn(); }).toThrow('HALF STRIKE!');
    expect(player.score).toEqual(10);
  });

  it('strike should be true if player hits a strike', function() {
    spyOn(Math, 'floor').and.returnValue(10);
    expect(function() {player.takeTurn(); }).toThrow('STRIKE!');
    expect(player.strike).toEqual(true);
  });

  it('strike should be true if player hits a strike', function() {
    spyOn(Math, 'floor').and.returnValue(5);
    expect(function() {player.takeTurn(); }).toThrow('HALF STRIKE!');
    expect(player.halfStrike).toEqual(true);
  });

  xit('scoresheet should include an X if player hits a strike', function() {
    spyOn(Math, 'floor').and.returnValue(10);
    expect(function() {player.takeTurn(); }).toThrow('STRIKE!');
    expect(player.scoreSheet).toContain('X');
  });

  it('strike count should be 1 if player hits a strike', function() {
    spyOn(Math, 'floor').and.returnValue(10);
    expect(function() {player.takeTurn(); }).toThrow('STRIKE!');
    expect(player.strikeCount).toEqual(1);
  });

  it('half strike count should be 1 if player hits a strike', function() {
    spyOn(Math, 'floor').and.returnValue(5);
    expect(function() {player.takeTurn(); }).toThrow('HALF STRIKE!');
    expect(player.halfStrikeCount).toEqual(1);
  });

});
