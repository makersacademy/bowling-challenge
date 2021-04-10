describe('scoreCard', function() {
  let scoreCard = new ScoreCard;
  
  describe('frames', function() {
    it ('should be empty by default', function() {
      expect(scoreCard.frames).toEqual([])
    })
  })
})

// describe ScoreCard do
//   let(:bowl) { ScoreCard.new }
//   let(:frame) { double :frame }
//   describe '#frames' do
//     it 'should be empty by default' do
//       expect(bowl.frames).to eq []
//     end
//   end


