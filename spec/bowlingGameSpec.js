describe("Javascript bowling score keeper: ", function(){
    describe("#game- ", function(){

        it("starts a new game", function(){
            game = new bowlingGame();
            expect(game.score).toBe(0);
        })

        it("keeps track of frames", function(){
            game = new bowlingGame
            expect(game.frame).toBe(0);
        })

    })
})