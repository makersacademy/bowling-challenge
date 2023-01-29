const BowlingGame = require('./BowlingGame');
const BowlingFrame = require('./BowlingFrame');

describe(BowlingGame, () => {
    describe('player hits zero pins in every frame', () => {
        it('after one frame shows total points as zero', () => {
            const game = new BowlingGame();
            const frame = new BowlingFrame(0, 0);
            game.addFrame(frame)
            expect(game.calculateScore()).toBe(0);
            expect(game.getFramesPlayed()).toBe(1);
        });

        it('after 9 frames shows total points as zero', () => {
            const game = new BowlingGame();
            const frame = new BowlingFrame(0, 0);
            for (let i = 0; i < 9; i++) {
                game.addFrame(frame);
            };
            expect(game.calculateScore()).toBe(0);
            expect(game.getFramesPlayed()).toBe(9);
        });

        it('after 10 frames shows total points as zero', () => {
            const game = new BowlingGame();
            const frame = new BowlingFrame(0, 0);
            for (let i = 0; i < 10; i++) {
                game.addFrame(frame);
            };
            expect(game.calculateScore()).toBe(0);
            expect(game.getFramesPlayed()).toBe(10);
        });
    });

    describe('player hits some pins without strike or spare', () => {
        it('returns correct score after one hit', () => {
            const game = new BowlingGame();
            const frame = new BowlingFrame(1, 0);
            game.addFrame(frame)
            expect(game.calculateScore()).toBe(1);
        });

        it('returns correct score after one frame with hits on both rolls', () => {
            const game = new BowlingGame();
            const frame = new BowlingFrame(7, 2);
            game.addFrame(frame)
            expect(game.calculateScore()).toBe(9);
        });

        it('returns correct score after one frame with hits on both rolls', () => {
            const game = new BowlingGame();
            const frame = new BowlingFrame(6, 1);
            game.addFrame(frame)
            const frame2 = new BowlingFrame(4, 5);
            game.addFrame(frame2)
            expect(game.calculateScore()).toBe(16);
        });

        it('correct score after 10 frames', () => {
            const game = new BowlingGame();
            const frame = new BowlingFrame(7, 2);
            for (let i = 0; i < 10; i++) {
                game.addFrame(frame);
            };
            expect(game.calculateScore()).toBe(90);
        });
    });

    describe('player hits all pins in a frame', () => {
        it('they hit a spare', () => {
            const game = new BowlingGame();
            const frame = new BowlingFrame(9, 1);
            game.addFrame(frame)
            expect(game.calculateScore()).toBe(10);
            const frame2 = new BowlingFrame(3, 2);
            game.addFrame(frame2)
            expect(game.calculateScore()).toBe(18);
            const frame3 = new BowlingFrame(7, 3);
            game.addFrame(frame3)
            expect(game.calculateScore()).toBe(28);
            const frame4 = new BowlingFrame(8, 1);
            game.addFrame(frame4)
            expect(game.calculateScore()).toBe(45);
        });

        it('they hit a strike once', () => {
            const game = new BowlingGame();
            const frame = new BowlingFrame(10);
            game.addFrame(frame)
            expect(game.calculateScore()).toBe(10);
            const frame2 = new BowlingFrame(3, 2);
            game.addFrame(frame2)
            expect(game.calculateScore()).toBe(20);
            const frame3 = new BowlingFrame(0, 10);
            game.addFrame(frame3)
            expect(game.calculateScore()).toBe(30);
            const frame4 = new BowlingFrame(8, 1);
            game.addFrame(frame4)
            expect(game.calculateScore()).toBe(47);
        });

        it('they hit a couple strikes in a row', () => {
            const game = new BowlingGame();
            const frame = new BowlingFrame(10);
            game.addFrame(frame)
            expect(game.calculateScore()).toBe(10);
            const frame2 = new BowlingFrame(10);
            game.addFrame(frame2)
            expect(game.calculateScore()).toBe(30);
            const frame3 = new BowlingFrame(4, 3);
            game.addFrame(frame3)
            expect(game.calculateScore()).toBe(48);
            const frame4 = new BowlingFrame(10);
            game.addFrame(frame4)
            expect(game.calculateScore()).toBe(58);
            const frame5 = new BowlingFrame(3, 1);
            game.addFrame(frame5)
            expect(game.calculateScore()).toBe(66);
        });

        it('they hit 9 strikes in a row', () => {
            const game = new BowlingGame();
            const frame = new BowlingFrame(10);
            for (let i = 0; i < 9; i++) {
                game.addFrame(frame);
            };
            expect(game.calculateScore()).toBe(240);
        });

        it('they hit alternating/strike spare', () => {
            const game = new BowlingGame();
            const frame = new BowlingFrame(10);
            const frame2 = new BowlingFrame(0, 10);
            for (let i = 0; i < 4; i++) {
                game.addFrame(frame);
                game.addFrame(frame2);
            };
            game.addFrame(frame);
            expect(game.calculateScore()).toBe(170);
        });
    });

    describe('player plays a full game', () => {
        it('they play a perfect game', () => {
            const game = new BowlingGame();
            const frame = new BowlingFrame(10);
            for (let i = 0; i < 9; i++) {
                game.addFrame(frame);
            };
            const frame10 = new BowlingFrame(10, 10, 10);
            expect(game.calculateScore()).toBe(300);
        });

        it('they play a perfect game except for spare and strike in 10th frame', () => {
            const game = new BowlingGame();
            const frame = new BowlingFrame(10);
            for (let i = 0; i < 9; i++) {
                game.addFrame(frame);
            };
            const frame10 = new BowlingFrame(9, 1, 10);
            expect(game.calculateScore()).toBe(279);
        });

        it('they play a perfect game except for spare in 10th frame', () => {
            const game = new BowlingGame();
            const frame = new BowlingFrame(10);
            for (let i = 0; i < 9; i++) {
                game.addFrame(frame);
            };
            const frame10 = new BowlingFrame(5, 5, 5);
            expect(game.calculateScore()).toBe(270);
        });

        it('they play a perfect game except for gutter saved by spare in 10th frame', () => {
            const game = new BowlingGame();
            const frame = new BowlingFrame(10);
            for (let i = 0; i < 9; i++) {
                game.addFrame(frame);
            };
            const frame10 = new BowlingFrame(0, 10, 3);
            expect(game.calculateScore()).toBe(263);
        });

        it('they play a perfect game except for strike, gutter, strike in 10th frame', () => {
            const game = new BowlingGame();
            const frame = new BowlingFrame(10);
            for (let i = 0; i < 9; i++) {
                game.addFrame(frame);
            };
            const frame10 = new BowlingFrame(10, 0, 10);
            expect(game.calculateScore()).toBe(280);
        });
    });

    describe('player plays a whole game scenario', () => {
        it('example from readme', () => {
            const game = new BowlingGame();
            const frame = new BowlingFrame(1, 4);
            game.addFrame(frame)
            const frame2 = new BowlingFrame(4, 5);
            game.addFrame(frame2)
            const frame3 = new BowlingFrame(6, 4);
            game.addFrame(frame3)
            const frame4 = new BowlingFrame(5, 5);
            game.addFrame(frame4)
            const frame5 = new BowlingFrame(10);
            game.addFrame(frame5)
            const frame6 = new BowlingFrame(0, 1);
            game.addFrame(frame6)
            const frame7 = new BowlingFrame(7, 3);
            game.addFrame(frame7)
            const frame8 = new BowlingFrame(6, 4);
            game.addFrame(frame8)
            const frame9 = new BowlingFrame(10);
            game.addFrame(frame9)
            const frame10 = new BowlingFrame(2, 8, 6);
            game.addFrame(frame10)
            expect(game.calculateScore()).toBe(133);
        });
    });
});