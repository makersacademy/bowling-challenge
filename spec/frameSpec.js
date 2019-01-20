describe('Frame', function(){

  var frame;
  var frameX;

  beforeEach( () => {
    frame = new Frame(0);
    frameX = new Frame(10)
    bowl = jasmine.createSpy('bowl')
  });

  describe('Feature - Gutter Game', function(){

    it('Make a new instance of Frame', function(){
      expect(frame instanceof Frame).toBeTruthy();
    });

    it('Starts with first bowl score', function(){
      expect(frame.bowls).toEqual([0]);
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

    // it('Allows player 3 bowls on final frame IF they strike or spare', function(){

    // });


    it('Returns the total score for the frame', function(){
      frame.addBowl(0);
      expect(frame.frameScore()).toEqual(0);
    });
  })

  describe('Feature - Game without Bonuses', function(){

    it('Prevents a second bowl if first bowl was a strike', function(){
      expect(frameX.addBowl(6)).toThrow(new Error('Strike! Second bowl denied.'));
    })
  })
})
