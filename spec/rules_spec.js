describe("Rules", function() {
    var rules;
    var game
    beforeEach(function() {
      rules  = new Rules();
        game = new Game();
    });

    it("if 10 pins are knocked down then its a strike", function(){
        game._pinsKnockedDown = 10
        expect(rules.strike()).toEqual(true)

    }); 

    it(" ", fuction(){

    });


});

