describe('FinalFrame', function() {
  var fframe;

  beforeEach(function() {
    fframe = new FinalFrame();
  });

  it('has an array of rolls', function() {
    expect(fframe.rolls).toEqual([])
  });

  it('adds to the rolls when the player rolls', function() {
    fframe.roll(3);
    expect(fframe.rolls).toEqual([3])
  });

  it('always lets the player make two rolls', function() {
    fframe.roll(3);
    fframe.roll(4);
    expect(fframe.rolls).toEqual([3, 4]);
  })

  it('lets the player strike twice', function() {
    fframe.roll(10);
    fframe.roll(10);
    expect(fframe.strikes).toEqual([true, true]);
  })


  it('errors if the player makes a third roll without a spare', function() {
    fframe.roll(3);
    fframe.roll(4);
    expect(function() {
      fframe.roll(2)
    }).toThrowError('The frame is already over.')
  });

  it('errors if the player tries to score more than 10', function() {
    fframe.roll(3);
    fframe.roll(4);
    expect(function() {
      fframe.roll(2)
    }).toThrowError('The frame is already over.')
  });

  it('errors if the player tries to score more than remaining', function() {
    fframe.roll(3);
    expect(function() {
      fframe.roll(8)
    }).toThrowError('You cannot knock down more pins than there are standing.')
  });

  it('errors if the player tries to score more than remaining after strike', function() {
    fframe.roll(10);
    fframe.roll(3);
    expect(function() {
      fframe.roll(8)
    }).toThrowError('You cannot knock down more pins than there are standing.')
  });
});
