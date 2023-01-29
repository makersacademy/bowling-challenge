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

    // xcontext 'player hits all pins a frame' do
    //     it 'they hit a spare' do
    //         frame.roll1 = 9
    //         frame.roll2 = 1
    //         game.add_frame(frame)
    //         expect(game.calculate_score).to eq 10
    //         frame2 = Frame.new
    //         frame2.roll1 = 3
    //         frame2.roll2 = 2
    //         game.add_frame(frame2)
    //         expect(game.calculate_score).to eq 18
    //         frame3 = Frame.new
    //         frame3.roll1 = 7
    //         frame3.roll2 = 3
    //         game.add_frame(frame3)
    //         expect(game.calculate_score).to eq 28
    //         frame4 = Frame.new
    //         frame4.roll1 = 8
    //         frame4.roll2 = 1
    //         game.add_frame(frame4)
    //         expect(game.calculate_score).to eq 45
    //     end

    //     it 'they hit a strike once' do
    //         frame.roll1 = 10
    //         game.add_frame(frame)
    //         expect(game.calculate_score).to eq 10
    //         frame2 = Frame.new
    //         frame2.roll1 = 3
    //         frame2.roll2 = 2
    //         game.add_frame(frame2)
    //         expect(game.calculate_score).to eq 20
    //         frame3 = Frame.new
    //         frame3.roll1 = 0
    //         frame3.roll2 = 10
    //         game.add_frame(frame3)
    //         expect(game.calculate_score).to eq 30
    //         frame4 = Frame.new
    //         frame4.roll1 = 8
    //         frame4.roll2 = 1
    //         game.add_frame(frame4)
    //         expect(game.calculate_score).to eq 47
    //     end

    //     it 'they hit a couple strikes in a row' do
    //         frame.roll1 = 10
    //         game.add_frame(frame)
    //         expect(game.calculate_score).to eq 10
    //         frame2 = Frame.new
    //         frame2.roll1 = 10
    //         game.add_frame(frame2)
    //         expect(game.calculate_score).to eq 30
    //         frame3 = Frame.new
    //         frame3.roll1 = 4
    //         frame3.roll2 = 3
    //         game.add_frame(frame3)
    //         expect(game.calculate_score).to eq 48
    //         frame4 = Frame.new
    //         frame4.roll1 = 10
    //         game.add_frame(frame4)
    //         expect(game.calculate_score).to eq 58
    //         frame5 = Frame.new
    //         frame5.roll1 = 3
    //         frame5.roll2 = 1
    //         game.add_frame(frame5)
    //         expect(game.calculate_score).to eq 66
    //     end

    //     it 'they hit 9 strikes in a row' do
    //         frame.roll1 = 10
    //         9.times { game.add_frame(frame) }
    //         expect(game.calculate_score).to eq 240
    //     end
        
    //     it 'they hit alternating strike/spare' do
    //         frame.roll1 = 10
    //         frame2 = Frame.new
    //         frame2.roll1 = 0
    //         frame2.roll2 = 10
    //         4.times do
    //             game.add_frame(frame)
    //             game.add_frame(frame2)
    //         end
    //         game.add_frame(frame)
    //         expect(game.calculate_score).to eq 170
    //     end
    // end

    // xcontext 'player plays full game' do
    //     it 'they hit a perfect game' do
    //         frame.roll1 = 10
    //         9.times { game.add_frame(frame) }
    //         frame10 = Frame.new
    //         frame10.roll1 = 10
    //         frame10.roll2 = 10
    //         frame10.roll3 = 10
    //         game.add_frame(frame10)
    //         expect(game.calculate_score).to eq 300
    //     end

    //     it 'they hit a perfect game except for a spare and strike in the 10th frame' do
    //         frame.roll1 = 10
    //         9.times { game.add_frame(frame) }
    //         expect(game.calculate_score).to eq 240
    //         frame10 = Frame.new
    //         frame10.roll1 = 9
    //         frame10.roll2 = 1
    //         frame10.roll3 = 10
    //         game.add_frame(frame10)
    //         expect(game.calculate_score).to eq 279
    //     end

    //     it 'they hit a perfect game except for a spare and gutter in the 10th frame' do
    //         frame.roll1 = 10
    //         9.times { game.add_frame(frame) }
    //         expect(game.calculate_score).to eq 240
    //         frame10 = Frame.new
    //         frame10.roll1 = 5
    //         frame10.roll2 = 5
    //         frame10.roll3 = 5
    //         game.add_frame(frame10)
    //         expect(game.calculate_score).to eq 270
    //     end

    //     it 'they hit a perfect game except for a spare and gutter in the 10th frame' do
    //         frame.roll1 = 10
    //         9.times { game.add_frame(frame) }
    //         expect(game.calculate_score).to eq 240
    //         frame10 = Frame.new
    //         frame10.roll1 = 0
    //         frame10.roll2 = 10
    //         frame10.roll3 = 3
    //         game.add_frame(frame10)
    //         expect(game.calculate_score).to eq 263
    //     end

    //     it 'they hit a perfect game except for a spare and gutter in the 10th frame' do
    //         frame.roll1 = 10
    //         9.times { game.add_frame(frame) }
    //         expect(game.calculate_score).to eq 240
    //         frame10 = Frame.new
    //         frame10.roll1 = 10
    //         frame10.roll2 = 0
    //         frame10.roll3 = 10
    //         game.add_frame(frame10)
    //         expect(game.calculate_score).to eq 280
    //     end
    // end

    // context 'player plays a whole game' do
    //     it 'example from readme' do
    //         frame.roll1 = 1
    //         frame.roll2 = 4
    //         game.add_frame(frame)
    //         frame2 = Frame.new
    //         frame2.roll1 = 4
    //         frame2.roll2 = 5
    //         game.add_frame(frame2)
    //         frame3 = Frame.new
    //         frame3.roll1 = 6
    //         frame3.roll2 = 4
    //         game.add_frame(frame3)
    //         frame4 = Frame.new
    //         frame4.roll1 = 5
    //         frame4.roll2 = 5
    //         game.add_frame(frame4)
    //         frame5 = Frame.new
    //         frame5.roll1 = 10
    //         game.add_frame(frame5)
    //         frame6 = Frame.new
    //         frame6.roll1 = 0
    //         frame6.roll2 = 1
    //         game.add_frame(frame6)
    //         frame7 = Frame.new
    //         frame7.roll1 = 7
    //         frame7.roll2 = 3
    //         game.add_frame(frame7)
    //         frame8 = Frame.new
    //         frame8.roll1 = 6
    //         frame8.roll2 = 4
    //         game.add_frame(frame8)
    //         frame9 = Frame.new
    //         frame9.roll1 = 10
    //         game.add_frame(frame9)
    //         frame10 = Frame.new
    //         frame10.roll1 = 2
    //         frame10.roll2 = 8
    //         frame10.roll3 = 6
    //         game.add_frame(frame10)
    //         expect(game.cumulative_frame_totals).to eq [5, 14, 29, 49, 60, 61, 77, 97, 117, 133]
    //         expect(game.calculate_score).to eq 133
    //     end
    // end
});