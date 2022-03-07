// describe 'the behaviour of the game' do 
//     it "creates a bowling game" do
//     game = BowlingGame.new
//   end

//     it "is able to roll a gutter game" do
//         game = BowlingGame.new
//         20.times{game.roll 0}
//         expect(game.score).to eq 0
//   end
    
//     it 'is able to roll all 1s' do
//         game = BowlingGame.new
//         20.times{game.roll 1}
//         expect(game.score).to eq 20
//     end

//     it "is able to roll a spare" do
//         game = BowlingGame.new
//         @game.roll 3
//         @game.roll 7
//         @game.roll 3
//         17.times{@game.roll 0}
//         expect(@game.score).to eq 16
//     end

//     it "is able to roll a strike" do
//          game = BowlingGame.new
//          @game.roll 10
//          @game.roll 4
//          @game.roll 3
//          16.times(@game.roll 0)
//          expect(@game.score).to eq 24
//     end
    
// end