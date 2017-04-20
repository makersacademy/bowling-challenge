describe ("TenthFrame", function() {
  var tenthFrame;

  beforeEach(function(){
    tenthFrame = new TenthFrame();
  });


  describe('starting last frame', function() {

    it('allows a third bowl if a spare is bowled', function() {
      spyOn(Math, 'random').and.returnValues(0.5, 0.9, 0.5);
      tenthFrame.bowl();
      tenthFrame.bowl();
      tenthFrame.bowl();
      expect(tenthFrame.thirdBowl).toEqual(5)
    });

    it('allows a second bowl if a strike is bowled first', function() {
      spyOn(Math, 'random').and.returnValues(0.99, 0.5);
      tenthFrame.bowl();
      tenthFrame.bowl();
      expect(tenthFrame.secondBowl).toEqual(5)
    });

    it('allows a third bowl if two strikes are bowled', function() {
      spyOn(Math, 'random').and.returnValues(0.99, 0.99, 0.5);
      tenthFrame.bowl();
      tenthFrame.bowl();
      tenthFrame.bowl();
      expect(tenthFrame.thirdBowl).toEqual(5)
    });

  })
})
