require 'game'

describe Game do
  
  subject(:game) { Game.new }

  
  
  
  describe 'roll(pins)' do 
    # specification: 1 game = 20 rolls
    it 'rolls pins and returns score for one game' do
      # roll 20 times 1 pin
      20.times { game.roll(1) }
      expect(game.score).to eq 20
    end
  end

  describe 'gutter_game' do
    it 'rolls 0 pins in the the whole game' do
      20.times { game.roll(0) }
      expect(game.score).to eq 0
    end
  end

  describe 'strike?(roll_index)' do
    it 'rolls 10 pins' do
      game.roll(10)
      19.times { game.roll(1) }
      expect(game.score).to eq 29
    end
  end

  # describe 'strike_score' do
  #   it 'sums the points of the strike and subsequent 2 rolls' do
  #     game.roll(10)
  #     game.roll(2)
  #     game.roll(2)
  #     expect(game.frame_score).to eq 14
  #   end
  # end



end