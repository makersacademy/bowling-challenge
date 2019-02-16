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

    describe('presentThrows', function() {
        it('should take an array containing a single digit integer and it as a string suffixed with a ,', function() {
            expect(game.presentThrows([1])).toBe("1,")
            expect(game.presentThrows([9])).toBe("9,")
        })
        
        it('should take an array containing only the number 10 and return a string, the character X', function() {
            expect(game.presentThrows([10])).toBe("X")
        })

        it('should take an array with two numbers whose sum is less than 10 and return a string separating them with /', function() {
            expect(game.presentThrows([1,8])).toBe("1,8")
        })

        it('should take an array with two numbers whose sum is 10 and return string /', function() {
            expect(game.presentThrows([0,10])).toBe("/")
            expect(game.presentThrows([3,7])).toBe("/")
        })

        it('should take an empty array and return string ,', function() {
            expect(game.presentThrows([])).toBe(",")
        })
    })

    describe('currentBowler', function() {
        it('should begin with the first bowler entered', function() {
            game.begin(['Foo'])
            expect(game.currentBowler()).toBe('Foo')
        })
    })

    describe('currentFrame', function() {
        it('should return 0 at game start', function() {
            game.begin([])
            expect(game.currentFrame()).toBe(0)
        })
    })

    describe('presentCurrentFrame', function() {
        it('should return a string identifying the table cell next to require updating at game start', function() {
            game.begin(['Foo'])
            expect(game.presentCurrentFrame()).toBe('Foo-f0')
        })
    })
})