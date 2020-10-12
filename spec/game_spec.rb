require 'game'

describe Game do
  
  subject(:game) { Game.new }

  describe 'gutter_game' do
    it 'rolls 0 pins in the whole game' do
      20.times { game.roll(0) }
      expect(game.score).to eq 0
    end
  end

   describe 'perfect_game' do
     it 'scores 10 strikes plus 2 extra strikes' do
       10.times { game.roll(10) }
       20.times { game.roll(10) } # bonus 
       expect(game.score).to eq 300
     end
   end

   describe '#current_score' do
    it 'sums up the rolls in a frame taking conditionals' do
      # strike: if the roll_index equals the roll length, 
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
      it 'rolls 10 pins in one roll of the game' do
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

    # describe '#strike_bonus' do
     
    # end
  
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
    # describe '#spare_bonus' do
      
    # end
  end
  
  context 'frame10' do
    describe '10frame' do
      it 'has a normal frame_score' do
        game.roll(4)
        game.roll(3)
        expect(game.frame10).to eq 7
      end
      it 'has a strike score that sums the points only from extra 2 rolls' do
        game.roll(10)
        game.roll(10)
        game.roll(10)
        expect(game.strike10).to eq 30
      end
      it 'has a spare score that sums the points only from 1 extra roll' do
        game.roll(1)
        game.roll(9)
        game.roll(5)
        expect(game.spare10).to eq 15
      end
    end
  end
  
end
 
