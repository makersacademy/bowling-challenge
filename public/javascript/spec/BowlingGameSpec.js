describe("BowlingGame", function(){
    let newGame

    beforeEach(function() {
        newGame = new BowlingGame();
    })

    it('has a starting id of 11', function(){
        expect(newGame.getId()).toEqual('11')
    })

})