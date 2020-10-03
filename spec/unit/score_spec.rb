require 'score'

describe Score do

  before(:each) do
    Score.reset
  end

  describe '.total' do
    it 'stores the current score' do
      allow(Score).to receive(:total) { 5 }
      expect(Score.total).to eq 5
    end
    it 'has a maximum of 300' do
      Score.increase(301)
      expect { Score.total }.to raise_error 'You are cheating'
    end
  end

  describe '.display' do
    it 'displays the current score' do
      allow(Score).to receive(:total) { 5 }
      expect(Score.display).to eq 5
    end
  end

  describe '.increase' do
    it 'increases the score by 4' do
      Score.increase(4)
      expect(Score.total).to eq 4
    end
  end

  describe '.reset' do
    it 'resets the score to zero' do
      Score.increase(7)
      Score.reset
      expect(Score.total).to eq 0
    end
  end
end
