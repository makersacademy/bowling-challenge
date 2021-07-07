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

    describe('returnCurrentFrameIndex', function() {
        it('should return 0 at game start', function() {
            game.begin([])
            expect(game.returnCurrentFrameIndex()).toBe(0)
        })
    })

    describe('presentCurrentFrame', function() {
        it('should return a string identifying the table cell next to require updating at game start', function() {
            game.begin(['Foo'])
            expect(game.presentCurrentFrame()).toBe('Foo-f0')
        })
    })

    describe('takeThrow', function() {
        it("should, when running for the first time, take it's argument and push it into the first bowler's first frame's throw array", function() {
            game.begin(['Foo'])
            game.takeThrow(0)
            expect(game.frames['Foo'][0]['throws']).toContain(0)
        })

        it('should increment bowler frame index if first throw is less than 10', function() {
            game.begin(['Foo'])
            game.takeThrow(0)
            expect(game.currentBowlersFrameIndex).toEqual(1)
        })

        it('should not change frame index if first throw is 10', function() {
            game.begin(['Foo'])
            game.takeThrow(10)
            expect(game.currentBowlersFrameIndex).toEqual(0)
        })

        it('should reset bowler frame index after bowler finishes in frame', function(){
            game.begin(['Foo'])
            game.takeThrow(0)
            game.takeThrow(0)
            expect(game.currentBowlersFrameIndex).toEqual(0)
        })

        it('should allow the bowler to play his second frame is his first throw is not a strike', function(){
            game.begin(['Foo', 'Bar'])
            game.takeThrow(0)
            expect(game.currentBowler()).toEqual('Foo')
        })

        it('should change the current bowler to the next after the frame', function() {
            game.begin(['Foo', 'Bar'])
            game.takeThrow(10)
            expect(game.currentBowler()).toBe('Bar')
        })

        it("should change the current bowler to the first after the last bowler's turn", function() {
            game.begin(['Foo', 'Bar'])
            game.takeThrow(10)
            game.takeThrow(10)
            expect(game.currentBowler()).toBe('Foo')
        })

        it('should increment the current frame if everyone has had their throw', function() {
            game.begin(['Foo'])
            game.takeThrow(10)
            expect(game.returnCurrentFrameIndex()).toBe(1)
        })
    })

    describe('over', function() {
        it('returns false when game not over', function() {
            game.begin(['Foo'])
            expect(game.over()).toBe(false)
        })
        it('returns false when game not over', function() {
            game.begin(['Foo'])
            for(i = 0; i < 9; i++) { game.takeThrow('10') }
            expect(game.over()).toBe(false)
        })
        it('returns true when game not over', function() {
            game.begin(['Foo'])
            for(i = 0; i < 10; i++) { game.takeThrow('10') }
            expect(game.over()).toBe(true)
        })
    })
})