require 'score_card'

describe ScoreCard do
  describe 'initialisation' do
    it 'will return an instance of the ScoreCard class' do
      scorecard = ScoreCard.new([
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0]
                                ])
      expect(scorecard).to be_a ScoreCard
    end
  end

  describe '.result' do
    it 'will return for the Gutter Game' do
      scorecard = ScoreCard.new([
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0]
                                ])
      expect(scorecard.result).to eq 0
    end

    it 'will return 300 for the Perfect Game' do
      scorecard = ScoreCard.new([
                                  [10],
                                  [10],
                                  [10],
                                  [10],
                                  [10],
                                  [10],
                                  [10],
                                  [10],
                                  [10],
                                  [10, 10, 10]
                                ])
      expect(scorecard.result).to eq 300
    end

    it 'will add the number of pins in games without a strike or spare' do
      scorecard = ScoreCard.new([
                                  [3, 2],
                                  [7, 1],
                                  [5, 3],
                                  [2, 3],
                                  [4, 5],
                                  [2, 5],
                                  [4, 5],
                                  [3, 1],
                                  [2, 4],
                                  [3, 3]
                                ])
      expect(scorecard.result).to eq 67
    end

    it 'will return the score for the example game' do
      scorecard = ScoreCard.new([
                                  [1, 4],
                                  [4, 5],
                                  [6, 4],
                                  [5, 5],
                                  [10],
                                  [0, 1],
                                  [7, 3],
                                  [6, 4],
                                  [10],
                                  [2, 8, 6]
                                ])
      expect(scorecard.result).to eq 133
    end
  end
end
