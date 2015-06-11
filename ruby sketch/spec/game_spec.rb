require './lib/game'
describe Game do
  puts "GAME 3"
  it 'can correctly increment its score for ordinary rolls' do
    game = Game.new([5,4,3,2,3,2,4,1])
    expect(game.score_for_frame(1)).to eq(9)
    expect(game.score_for_frame(2)).to eq(14)
    expect(game.score_for_frame(3)).to eq(19)
    expect(game.score_for_frame(4)).to eq(24)
  end

  it 'can correctly increment its score if there is a spare' do
    game = Game.new([5,5,3,2,3,2,4,1])
    expect(game.score_for_frame(1)).to eq(13)
    expect(game.score_for_frame(2)).to eq(18)
    expect(game.score_for_frame(3)).to eq(23)
    expect(game.score_for_frame(4)).to eq(28)
  end

  it 'can correctly increment its score if there is a strike' do
    game = Game.new([10,3,2,10,4,1])
    expect(game.score_for_frame(1)).to eq(15)
    expect(game.score_for_frame(2)).to eq(20)
    expect(game.score_for_frame(3)).to eq(35)
    expect(game.score_for_frame(4)).to eq(40)
  end
    it 'can correctly increment its score if there is a strike' do
    game = Game.new([10,3,2,10,4,1])
    expect(game.score_for_frame(1)).to eq(15)
    expect(game.score_for_frame(2)).to eq(20)
    expect(game.score_for_frame(3)).to eq(35)
    expect(game.score_for_frame(4)).to eq(40)
  end

  it 'can correctly increment its score if there a 2 strikes in a row' do
    game = Game.new([10,10,5,4,6,2])
    expect(game.score_for_frame(1)).to eq(25)
    expect(game.score_for_frame(2)).to eq(44)
    expect(game.score_for_frame(3)).to eq(53)
    expect(game.score_for_frame(4)).to eq(61)
  end
  it 'can correctly increment its score if there a 3 strikes in a row' do
    game = Game.new([10,10,10,6,2])
    expect(game.score_for_frame(1)).to eq(30)
    expect(game.score_for_frame(2)).to eq(56)
    expect(game.score_for_frame(3)).to eq(74)
    expect(game.score_for_frame(4)).to eq(82)
  end

  it 'can handle 2 spares in a row' do
    game = Game.new([5,5,4,6,7,1])
    expect(game.score_for_frame(1)).to eq(14)
    expect(game.score_for_frame(2)).to eq(31)
    expect(game.score_for_frame(3)).to eq(39)
  end

  it 'can handle a strike and a spare' do
    game = Game.new([10,4,6,7,1])
    expect(game.score_for_frame(1)).to eq(20)
    expect(game.score_for_frame(2)).to eq(37)
    expect(game.score_for_frame(3)).to eq(45)
  end

  it 'can handle 12 strikes' do
    game = Game.new([10,10,10,10,10,10,10,10,10,10,10,10])
    expect(game.score_for_frame(10)).to eq(300)
  end
end