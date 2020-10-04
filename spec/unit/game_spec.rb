require 'game'

describe Game do

  before do
    @game = Game.new
  end

  describe '#first_roll' do   
    it 'stores the pins hit in an array' do
      @game.first_roll(4)
      expect(@game.pins_down).to eq [4]
    end

    it 'stores an X for a strike' do
      @game.first_roll(10)
      expect(@game.pins_down).to eq ["X"]
    end
  end

  describe '#second_roll' do   
    it 'stores the pins hit in an array' do
      @game.first_roll(4)
      @game.second_roll(5)
      expect(@game.pins_down).to eq [4,5]
    end

    it 'stores an / for a spare' do
      @game.first_roll(4)
      @game.second_roll(6)
      expect(@game.pins_down).to eq [4,"/"]
    end
  end


    

end
