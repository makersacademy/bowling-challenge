require 'game'

describe Game do

  before do
    @game = Game.new
  end

  describe '#first_roll' do   
    it 'stores the pins hit in an array' do
      @game.first_roll(4)
      expect(@game.frame_pins).to eq [4]
    end

    it 'stores an X for a strike' do
      @game.first_roll(10)
      expect(@game.frame_pins).to eq ["X"]
    end
  end

  describe '#second_roll' do   
    it 'stores the pins hit in an array' do
      @game.first_roll(4)
      @game.second_roll(5)
      expect(@game.frame_pins).to eq [4,5]
    end

    it 'stores an / for a spare' do
      @game.first_roll(4)
      @game.second_roll(6)
      expect(@game.frame_pins).to eq [4,"/"]
    end
  end

  describe '#end_frame' do
    context 'on a strike' do
      it 'pushes a single X into the game array' do
        @game.first_roll(10)
        @game.end_frame
        expect(@game.frame_pins).to be_empty
        expect(@game.pins_sequence).to eq [["X"]]
      end
    end

    context 'on a spare' do
      it 'pushes both hits into a game array' do
        @game.first_roll(4)
        @game.second_roll(6)
        @game.end_frame
        expect(@game.frame_pins).to be_empty
        expect(@game.pins_sequence).to eq [[4,"/"]]
      end
    end
  end


    

end
