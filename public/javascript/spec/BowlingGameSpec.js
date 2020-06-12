describe("BowlingGame", function(){
    let newGame

    beforeEach(function() {
        newGame = new BowlingGame();
    })

    it('has a starting id of 11', function(){
        expect(newGame.getId()).toEqual('11')
    })

    it('updates the id based on current id and if a strike was scored', function() {
        newGame.updateId()
        expect(newGame.getId()).toEqual('12')
        newGame.updateId()
        expect(newGame.getId()).toEqual('21')
        newGame.updateId('strike')
        expect(newGame.getId()).toEqual('31')
    })

    

})