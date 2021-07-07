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

    it('creates an instance of spare when spare called', function() {
        newGame.spare(5, 'callback')
        expect(newGame.getSpares()[0]).toBeInstanceOf(Spare)
    })

    it('creates an instance of strike when strike called', function() {
        newGame.strike('callback')
        expect(newGame.getStrikes()[0]).toBeInstanceOf(Strike)
    })

    it('deleteSpares will remove the first value in array', function() {
        newGame.spare(2, 'callback')
        newGame.spare(5, 'callback')
        newGame.deleteFirstValue(newGame.getSpares())
        expect(newGame.getSpares().length).toEqual(1)
    })

    it('deleteSpares will remove the first value in array', function() {
        newGame.strike('callback')
        newGame.strike('callback')
        newGame.deleteFirstValue(newGame.getStrikes())
        expect(newGame.getStrikes().length).toEqual(1)
    })

    it('checks if strikes has values', function() {
        expect(newGame.checkSparesStrikes(newGame.getStrikes())).toEqual(false)
        newGame.strike('callback')
        expect(newGame.checkSparesStrikes(newGame.getStrikes())).toEqual(true)
    })

    it('adds up an array .finalTotal', function() {
        array = [1, 2, 3, 4, 5]
        expect(newGame.finalTotal(array)).toEqual(15)
    })

    

})