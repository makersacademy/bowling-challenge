describe('Roll', function(){

    var roll;
    var defaultResult

    beforeEach(function(){
      roll = new Roll();
      defaultResult = "You haven't bowled yet dummy!";
    });

    describe("default", function(){
      it("it's tels you you need to bowl", function(){
        expect(roll.result()).toEqual(defaultResult)
      });
    });

    describe('#go', function (){
      it('returns a random result between 0 and 10', function(){
        roll.go();
        expect(roll.result()).toBeLessThan(11);
        expect(roll.result()).not.toBeLessThan(0);
      });
    });

});
