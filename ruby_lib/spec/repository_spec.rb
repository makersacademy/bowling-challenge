require_relative '../repository'

RSpec.describe Repository do
  describe '#add_frame' do
    it 'adds a frame to the repository' do
      repository = Repository.new
      repository.add_frame(2, 3, 0)
      expect(repository.frames).to eq([[2, 3, 0]])
    end

    it 'adds multiple frames to the repository' do
      repository = Repository.new
      repository.add_frame(2, 3, 0)
      repository.add_frame(4, 5, 4)
      expect(repository.frames).to eq([[2, 3, 0], [4, 5, 4]])
    end
  end
end