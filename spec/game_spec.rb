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



end