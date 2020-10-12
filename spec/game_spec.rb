require 'game'

describe Game do
  describe '#play' do
    it 'when provided with scores 5 and 3, total score = 8' do
      game = Game.new
      game.play([5,3])
      expect(game.total_score).to eq 8
    end

    it 'when provided with scores [4,5,10,6,2] total score = 35' do
      game = Game.new
      game.play([4,5,10,6,2])
      expect(game.total_score).to eq 35
    end

    it 'when provided with scores [4,5,10,6,2,8,2,4,4] total score = 57' do
      game = Game.new
      game.play([4,5,10,6,2,8,2,4,4])
      expect(game.total_score).to eq 57
    end

    it 'when provided with scores [10,10,10,10,10,10,10,10,4,4] total score = 166' do
      game = Game.new
      game.play([10,10,10,10,10,10,10,10,4,4])
      expect(game.total_score).to eq 230
    end

    it 'when provided with scores [8,2,8,2,8,2,8,2,4,4] total score = 76' do
      game = Game.new
      game.play([8,2,8,2,8,2,8,2,4,4])
      expect(game.total_score).to eq 76
    end

    it 'when provided with scores [8,2,10,8,2,8,2,4,4,9,1,4,2] total score = 100' do
      game = Game.new
      game.play([8,2,10,8,2,8,2,4,4,9,1,4,2])
      expect(game.total_score).to eq 100
    end

    it 'when provided with scores [8,2,10,10,8,2,10,4,4] total score = 114' do
      game = Game.new
      game.play([8,2,10,10,8,2,10,4,4])
      expect(game.total_score).to eq 114
    end

    it 'when provided with scores [1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6] total score = 133' do
      game = Game.new
      game.play([1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6])
      expect(game.total_score).to eq 133
    end

    it 'when provided with scores [10,10,10,10,10,10,10,10,10,10,10,10] total score = 300' do
      game = Game.new
      game.play([10,10,10,10,10,10,10,10,10,10,10,10])
      expect(game.total_score).to eq 300
    end
  end
end