/* describe('Thermostat', function() { 
  var thermostat; 
  
    beforeEach(function() {  
      thermostat  = new Thermostat();
    });
  
    describe( 'temperature to start at 20', function(){
      it('returns 20', function(){
        expect(thermostat.startTemperature).toEqual(20)
      });
    }); 
 });

 */

describe("Bowling", function () {
  var bowling;

  beforeEach(function () {
    bowling = new Bowling();
  });

  describe("#calculateScore ", function () {
    it(" returns 1", function () {
      expect(bowling.calculateScore(1)).toEqual(1);
    });
    it("adds amount  of pins down together and returns 5", function () {
      bowling.calculateScore(1);
      expect(bowling.calculateScore(4)).toEqual(5);
    });
  });

  describe("#makeCard", function () {
    it("stores num pins down & score", function () {
      bowling.calculateScore(1);
      bowling.makeCard();
      bowling.calculateScore(4);
      expect(bowling.makeCard()).toEqual([
        { numPinsDown: 1, score: 1 },
        { numPinsDown: 4, score:5 }
      ]);
    });
  });
  describe('loopFrame', function(){
    it("loops ten times and each time returns 'frame + number of loop' ", function(){
      expect(bowling.loopFrame()).toEqual('Frame 10')
    })
  
  })

  


});




