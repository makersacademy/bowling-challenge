describe('Frame', function(){
  var frame

  beforeEach(function(){
    frame = new Frame();

  })

  it('has 2 rolls normally and starts at 0 for both', function(){
    expect(frame.firstRoll).toEqual(0);
    expect(frame.secondRoll).toEqual(0);

  })

  it('starts with 10 pins standing', function(){
    expect(frame.pinsStanding).toEqual(10)

  })

  it('rolls random numbers and adds to score normally', function(){
      // frame.firstRoll() = 5
      // frame.secondRoll() = 0
    spyOn(frame, 'firstRoll').and.returnValue(5)
    spyOn(frame, 'secondRoll').and.returnValue(0)
    // frame.addRollOne()
    // frame.addRollTwo()
    expect(frame.getTotalScore()).toEqual(5)
    // expect(frame.score).toEqual(5)
  })

  // it('rolls a random number of remaining pins', function (){

  //   spyOn(frame, 'secondRoll').and.returnValue(0)

  // })







  // it('adds 2 scores under normal circumstance', function(){
  //   frame.firstRoll = 5
  //   frame.secondRoll = 3
  //   expect(frame.score).toEqual(8)



  // })




})