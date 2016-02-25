describe("Feature", function(){
  var bowling;
  var score;

  beforeEach(function(){
    score = new Score;
    bowling = new Bowling(score);
  });

  describe("score patterns:", function(){

    it("normal, normal, normal", function(){
      bowling.pinsHit(7);
      bowling.pinsHit(2);
      bowling.pinsHit(1);
      bowling.pinsHit(1);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(18);
    });

    it("normal, strike, normal", function(){
      bowling.pinsHit(7);
      bowling.pinsHit(2);
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(33);
    });

    it("strike, normal, normal", function(){
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(31);
    });

    it("strike, strike", function(){
      bowling.pinsHit(10);
      bowling.pinsHit(10);
      expect(bowling.calculateScore()).toEqual(0);
    });

    it("strike, normal, strike, normal", function(){
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(48);
    });

    it("strike, strike, normal", function(){
      bowling.pinsHit(10);
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(49);
    });

    it("strike, strike, strike, normal", function(){
      bowling.pinsHit(10);
      bowling.pinsHit(10);
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(79);
    });

    it("strike, strike, strike, strike, normal", function(){
      bowling.pinsHit(10);
      bowling.pinsHit(10);
      bowling.pinsHit(10);
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(109);
    });

    it("normal, spare, normal", function(){
      bowling.pinsHit(7);
      bowling.pinsHit(2);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(31);
    });

    it("spare, spare", function(){
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      expect(bowling.calculateScore()).toEqual(0);
    });

    it("spare, spare, normal", function(){
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(37);
    });

    it("spare, spare, spare, normal", function(){
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(52);
    });

    it("spare, strike, normal", function(){
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(44);
    });

    it("strike, spare, normal", function(){
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(42);
    });

    it("strike, spare, strike, spare, normal", function(){
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(82);
    });

    it("strike, strike, spare, strike, spare, spare, normal", function(){
      bowling.pinsHit(10);
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(122);
    });

    it("strike, strike, spare, normal", function(){
      bowling.pinsHit(10);
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(67);
    });

    it("strike, spare, spare, normal", function(){
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(57);
    });

    it("strike, strike, normal, strike, normal", function(){
      bowling.pinsHit(10);
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(73);
    });

    it("strike, strike, spare, normal, strike, spare, spare, normal", function(){
      bowling.pinsHit(10);
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(124);
    });

    it("ten rounds normal", function(){
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(70);
    });

    it("ten rounds normal with final strike", function(){
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(80);
    });

  });

});
