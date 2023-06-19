require_relative '../score_calculator'

RSpec.describe ScoreCalculator do
  describe '.calculate_score' do
    it 'returns 0 for an empty frame' do
      frames = []
      score = ScoreCalculator.calculate_score(frames)
      expect(score).to eq(0)
    end

    it 'calculates the score for a game without strikes or spares' do
      frames = [[2, 3], [4, 5], [6, 3], [1, 4], [5, 2], [3, 6], [4, 2], [1, 3], [5, 3], [2, 1]]
      score = ScoreCalculator.calculate_score(frames)
      expect(score).to eq(65)
    end

    it 'calculates the score for a game with strikes' do
      frames = [[10, 0], [4, 5], [6, 3], [10, 0], [5, 2], [10, 0], [4, 2], [10, 0], [5, 3], [2, 1]]
      score = ScoreCalculator.calculate_score(frames)
      expect(score).to eq(112)
    end

    it 'calculates the score for a game with spares' do
      frames = [[2, 8], [4, 5], [6, 3], [1, 9], [5, 2], [3, 7], [4, 2], [1, 3], [5, 5], [2, 1]]
      score = ScoreCalculator.calculate_score(frames)
      expect(score).to eq(93)
    end

    it 'calculates the score for a game with strikes and spares' do
      frames = [[10, 0], [4, 5], [6, 4], [10, 0], [5, 5], [10, 0], [4, 2], [10, 0], [5, 5], [10, 0]]
      score = ScoreCalculator.calculate_score(frames)
      expect(score).to eq(160)
    end

    it 'calculates the score for a game with strikes and spares and the thrid roll on the tenth frame' do
      frames = [[10, 0], [4, 5], [6, 4], [10, 0], [5, 5], [10, 0], [4, 2], [10, 0], [5, 5], [10, 10, 3]]
      score = ScoreCalculator.calculate_score(frames)
      expect(score).to eq(173)
    end

    it 'calculates the score for a game with only strikes' do
      frames = [[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]]
      score = ScoreCalculator.calculate_score(frames)
      expect(score).to eq(300)
    end
  end
end
