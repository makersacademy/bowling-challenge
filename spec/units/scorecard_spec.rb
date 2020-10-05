require 'scorecard'

RSpec.describe Scorecard do

  let(:card) { Scorecard.new }
  
  describe 'initialisation' do 
    it 'has a hash to stores scores' do 
      expect(card.scores).to be_instance_of Hash
    end 
    it 'current_frame is the first frame' do 
      expect(card.current_frame).to eq 1
    end
  end 

  describe '#game' do
    it 'allows a user to enter scores for 10 frames' do 
      expect(card.scores.values.length).to eq 10
    end 
  end 

end 