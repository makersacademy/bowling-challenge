describe('Game', function() {
    var game;
    beforeEach(function(){
        game = new Game()
    })

    // describe('begin', function() {
    //     it('should accept a list of bowlers and create frames accordingly', function() {
    //         game.begin(['foo', 'bar'])
    //         expect(game.frames).toEqual({
    //             foo: [Frame, Frame, Frame, Frame, Frame, Frame, Frame, Frame, Frame, Frame],
    //             bar: [Frame, Frame, Frame, Frame, Frame, Frame, Frame, Frame, Frame, Frame]
    //         })
    //     })
    // })

    // Test display frame function - upon pass update Interface to use game.presentFrame(<given frame>)
    describe('presentFrame', function() {
        it('should take an array containing a single digit integer and it as a string suffixed with a /', function() {
            expect(game.presentFrame([1])).toBe("1/")
            expect(game.presentFrame([9])).toBe("9/")
        })
        
        it('should take an array containing only the number 10 and return a string, the character X', function() {
            expect(game.presentFrame([10])).toBe("X")
        })

        it('should take an array with two numbers whose sum is less than 10 and return a string separating them with /', function() {
            expect(game.presentFrame([1,8])).toBe("1/8")
        })

        it('should take an array with two numbers whose sum is 10 and return string /', function() {
            expect(game.presentFrame([0,10])).toBe("/")
            expect(game.presentFrame([3,7])).toBe("/")
        })
        // check Game comments for other tests
    })

    // Test add stuff to frame function
})