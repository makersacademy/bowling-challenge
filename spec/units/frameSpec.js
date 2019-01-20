describe('Frame', function(){

  var frame;
  var frameX;

  beforeEach( () => {
    frame = new Frame(0);
    frameX = new Frame(10)
    //bowl = jasmine.createSpy('bowl')
  });

  it('Make a new instance of Frame', function(){
    expect(frame instanceof Frame).toBeTruthy();
  });

  it('Starts with first bowl score', function(){
    expect(frame.bowls).toEqual([0]);
  });

  it('Returns first bowl score', function(){
    expect(frame.firstBowl()).toEqual(0);
  });

  it('Adds a second bowl to the frame', function(){
    frame.addBowl(0);
    expect(frame.bowls).toEqual([0, 0]);
  });

  it('Prevents player from having 3 bowls per frame, excluding final frame', function(){
    frame.addBowl(0);
    frame.addBowl(0);
    expect(frame.addBowl(0)).toThrow(new Error('2 bowls completed! Third bowl denied.'));
  });

  it('Returns the total score for the frame', function(){
    frame.addBowl(0);
    expect(frame.frameScore()).toEqual(0);
  });

  it('Prevents a second bowl if first bowl was a strike', function(){
    expect(frameX.addBowl(6)).toThrow(new Error('Strike! Second bowl denied.'));
  })

  it('Returns true if Strike Frame', function(){
    expect(frameX.isAStrike()).toEqual(true)
  })

  it('Returns true if Spare Frame', function(){
    frame.addBowl(10);
    expect(frame.isASpare()).toEqual(true)
  })


  
})
