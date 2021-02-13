describe('Bowling_challange', function() {  

    beforeEach(function() {
        newbowling = new bowling 
    }); 

    describe('holding inflation for the game', function() {
        it("should return an emtpy array", function() {
            expect(newbowling.round).toEqual([])
        }); 

        it('should return a low bounes of 5', function() {
            expect(newbowling.bonus).toEqual(5)
        }) 

        it('should return a high bounes of 10', function() {
            expect(newbowling.bonus_two).toEqual(10)
        }) 

        it('should have zero playes', function(){
            expect(newbowling.number_rounds).toEqual(0)
        }) 

        it('should match the bounes of 5', function() {
            expect(newbowling.bonus).toEqual(5)
        }) 

        it('should match the high bounes of 10', function(){
            expect(newbowling.bonus_two).toEqual(10)
        })

    });  

    describe('game round', function() {
        it('should return a score [3, 6]', function() { 
            expect(newbowling.gameRound(3, 6)).toEqual([3, 6])
        }) 

        it('score will not be exected because its over 10', function() {
            expect(newbowling.gameRound(4, 7)).toEqual("Thats not a realy score, it must be below 10")
        }) 

        it('should return strick if the player gets all 10 pines down', function(){
            expect(newbowling.gameRound(10, 0)).toEqual("strick")
        }) 

        it('should return a splite spare if both pints are [5, 5]', function(){
            expect(newbowling.gameRound(5, 5)).toEqual("splite spare")
        }) 

        it('should return a splite', function(){
            expect(newbowling.gameRound(4, 6)).toEqual("spare")
        }) 

        it('should not be able to play another round', function(){
            newbowling.gameRound(3, 6) 
            newbowling.gameRound(3, 6) 
            newbowling.gameRound(3, 6)
            newbowling.gameRound(3, 6)
            newbowling.gameRound(3, 6)
            newbowling.gameRound(3, 6)
            newbowling.gameRound(3, 6)
            newbowling.gameRound(3, 6)
            newbowling.gameRound(3, 6) 
            newbowling.gameRound(3, 6)
            expect(newbowling.gameRound(3, 3)).toEqual("Thats the game")
        }) 
    }); 

    describe('final score', function(){
        it('should return score of 6', function(){
            newbowling.gameRound(3, 3) 
            expect(newbowling.game_score()).toEqual(6)
        }) 

        it('should return score of 10 + a low bounes of 5', function(){
            newbowling.gameRound(4, 6) 
            expect(newbowling.game_score()).toEqual(15)
        }) 

        it('should return a score 10 + a high bounes that is douled by the next bowl', function(){ 
            newbowling.gameRound(5, 5)
            newbowling.gameRound(4, 2)
            expect(newbowling.game_score()).toEqual(21)
        }) 

        it('should return a score of 10 + a hight bounes that is douled by the next 2 round', function(){
            newbowling.gameRound(10, 0) 
            newbowling.gameRound(3, 5) 
            expect(newbowling.game_score()).toEqual(31)
        })
    })

});