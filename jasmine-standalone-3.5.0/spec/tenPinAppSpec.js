describe('Bowling', function() {
    var bowling; 

    beforeEach(function() {
        bowling = new Bowling()
      });

    it ( "Has has a starting score of 0 for player", function () {
        expect (bowling.player_score).toEqual(0)
    }) 

    it ( "Can add points to a players score", function () {
        bowling.calcPoints(3,0)
        expect (bowling.player_score).toEqual(3)
    }) 

    it ("Only adds 10 for a stirke, bonus only added following round", function(){
        bowling.calcPoints(10,2)
        expect (bowling.player_score).toEqual(10)
    })

    it ("adds bonus following round if player scored a strike previously and not in the round following", function(){
        bowling.calcPoints (10,0)
        bowling.calcPoints (2,5)
        expect (bowling.player_score).toEqual(24)
    })

    it ("doesn't add bonus following round if player scored a strike twice", function(){
        bowling.calcPoints (10,0)
        bowling.calcPoints (10,0)
        expect (bowling.player_score).toEqual(20)
    })

    it ("doesn't add bonus following until following round", function(){
        bowling.calcPoints (10,0)
        bowling.calcPoints (10,0)
        bowling.calcPoints (2,7)
        expect (bowling.player_score).toEqual(38)
    })

    it ("adds the first a bonus of x points from the first roll of the following frame", function(){
        bowling.calcPoints (4,6)
        bowling.calcPoints (3,4)
        expect (bowling.player_score).toEqual(20)
    })

    it ("tracks the frame the user is on", function(){
        bowling.calcPoints (4,4)
        bowling.calcPoints (1,4)
        expect (bowling.frame).toEqual(2)
        
    })

    it ("checks to see if the player gets a bonus roll at the end of the game", function(){
        bowling.frame = 10;
        bowling.calcPoints (10,0)
        expect (bowling.bonus).toEqual(true)
    })



  

    


})

