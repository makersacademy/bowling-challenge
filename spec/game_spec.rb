require 'game'

describe Game do
  
  subject(:game) { Game.new }

  describe 'gutter_game' do
    it 'rolls 0 pins in the the whole game' do
      20.times { game.roll(0) }
      expect(game.score).to eq 0
    end
  end
  
  context 'frames 1-9' do # 18 rolls or 9 frames
    describe 'roll(pins)' do
      # specification: 1 game = 18 rolls
      it 'rolls pins and returns score for one game' do
        # roll 18 times 1 pin
        18.times { game.roll(1) }
        expect(game.score).to eq 18
      end
    end

    describe '#strike?(roll_index)' do
      it 'rolls 10 pins' do
        game.roll(10)
        17.times { game.roll(1) }
        expect(game.score).to eq 27
      end
    end
  
    describe '#strike_score' do # error in logic for the test!
      it 'sums the points of the strike and subsequent 2 rolls plus the points of the subsequent rolls' do
        game.roll(10)
        game.roll(2) # subsequent roll1
        game.roll(2) # subsequent roll2
        game.roll(2) # points for subsequent roll1
        game.roll(2) # points for subsequent roll2
        expect(game.strike_score).to eq 18
      end
    end
  
    describe '#frame_score' do
      it 'sums two subsequent rolls' do
        game.roll(1)
        game.roll(5)
        expect(game.frame_score).to eq 6
      end
    end
  
    describe '#spare?' do
      it 'frame sums 10 in two different rolls' do
        game.roll(1)
        game.roll(9)
        16.times { game.roll(1) }
        expect(game.score).to eq 26
      end
    end
  
    describe '#spare_score' do
      it 'sums 10 in different rolls plus the roll1 and points of roll1 of next frame' do
        game.roll(1)
        game.roll(9)
        game.roll(3) # subsequent roll1
        game.roll(3) # points of subsequent roll1
        expect(game.spare_score).to eq 16
      end
    end
  end

  context '10th frame' do
    describe '10th frame' do
      it '' do
      end
    end




  end

end