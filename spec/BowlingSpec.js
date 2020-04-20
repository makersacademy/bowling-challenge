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
    it("stores numPinsDown & score", function () {
      bowling.calculateScore(1);
     
      //bowling.calculateScore(4);
   //expect({"a": 1, "b":2}).toHaveProperty("a", "1"); 
      expect(bowling.makeCard()[0]).toEqual(
        {frame: 1, roll:1, numPinsDown: 1, score: 1 },
        
      );
      //expect(bowling.card[1]).toEqual(
       // {frame: 1, roll:2, numPinsDown: 4, score: 5  },
      //);

    });
  });




  describe("loopText", function () {
    it("loops 'frame + number of loop' 10 times", function () {
      bowling.loopText()
      expect(bowling.frameText).toEqual("Frame 10");
    });
  
    it("creates a nested loop and loops 'Roll' twice for every time it loops 'frame' ", function () {
      bowling.loopText()
      expect(bowling.rollText).toEqual("Roll 2");
    });
  });
});

