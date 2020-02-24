'use strict';

describe('Scorecard', function(){
  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  describe('#scoreArray', function(){

    it ("Empty array exists", function(){

      expect(scorecard.scoreArray).toEqual([]);

    });

  });

  describe ('#storeFrame', function() {

    it ("should add frameScore dictionary to Scorearray array", function() {

      scorecard.addScore(10)
      scorecard.storeFrame()

      expect(scorecard.scoreArray).toContain({ throw_1: 10, throw_2: 0, result: 'X' })

    })

    it ("should clear frameScore dictionary after being stored in scoreArray", function() {

      scorecard.addScore(10)
      scorecard.storeFrame()

      expect(scorecard.frameScore).toEqual({})

    })
  })

  describe ('#addScore', function() {

    it("should return empty hash on initiialize", function() {

      expect(scorecard.frameScore).toEqual({})

    })

    it("should return a throw_1 when adding score less than 10", function() {

      scorecard.addScore(9)

      expect(scorecard.frameScore).toEqual({ throw_1: 9})


    })

    it("should return throw_1, throw_2 and result when adding score totalling less than 10", function() {

      scorecard.addScore(5)
      scorecard.addScore(4)

      expect(scorecard.scoreArray[0]).toEqual({ throw_1: 5, throw_2: 4, result: 9 })


    })

    it("should store a strike and write all dictionary values after throw", function() {

      scorecard.addScore(10)

      expect(scorecard.scoreArray[0]).toEqual({ throw_1: 10, throw_2: 0, result: 'X' })


    })

    it("should store a strike and write all dictionary values after throw", function() {

      scorecard.addScore(9)
      scorecard.addScore(1)

      expect(scorecard.scoreArray[0]).toEqual({ throw_1: 9, throw_2: 1, result: '/' })


    })

    it("following the result of the frame being added to dictionary it should clear the frame", function() {

      scorecard.addScore(9)
      scorecard.addScore(1)

      expect(scorecard.frameScore).toEqual({})


    })

    it("if it is the 10th round, player should be able to make an extra throw if recieving strike", function() {
      scorecard.addScore(10)
      scorecard.addScore(10)
      scorecard.addScore(10)
      scorecard.addScore(10)
      scorecard.addScore(10)
      scorecard.addScore(10)
      scorecard.addScore(10)
      scorecard.addScore(10)
      scorecard.addScore(10)
      scorecard.addScore(10)
    
      // 10th throw is strike
      scorecard.addScore(10)

      // Extra throw

      scorecard.addScore(10)

      //extra throw should be stored in same round

      expect(scorecard.scoreArray).toContain({ throw_1: 10, throw_2: 0, result: 'X', throw_3: 10})

    })

    it("if it is the 10th round, player should be able to make an extra throw if receiving spare", function() {
      scorecard.addScore(10)
      scorecard.addScore(10)
      scorecard.addScore(10)
      scorecard.addScore(10)
      scorecard.addScore(10)
      scorecard.addScore(10)
      scorecard.addScore(10)
      scorecard.addScore(10)
      scorecard.addScore(10)

      // 10th throw is spare
      scorecard.addScore(3)
      scorecard.addScore(7)

      // Extra throw

      scorecard.addScore(10)

     //extra throw should be stored in same round

      expect(scorecard.scoreArray).toContain({ throw_1: 3, throw_2: 7, result: '/', throw_3: 10})

    });

  })



});

