require 'bowling_v2'
describe Bowling_v2 do
  before(:each) do
    @game = Bowling_v2.new
  end
  it 'scores 0 when all 0s' do
    20.times{@game.roll(0)}
    expect(@game.score).to eq 0
  end
  it 'scores 20 when rolled 1s' do
    20.times{@game.roll(1)}
    expect(@game.score).to eq 20
  end
  it 'score a spare' do
    2.times{@game.roll(5)}
    @game.roll(2)
    @game.roll(3)
    16.times{@game.roll(0)}
  expect(@game.score).to eq 17
  end
  it 'scores a strike' do
    @game.roll(10)
    @game.roll(3)
    @game.roll(3)
    17.times{@game.roll(0)}
    expect(@game.score).to eq 22
  end
  it 'scores 2 strikes' do
    @game.roll(10)
    @game.roll(10)
    @game.roll(7)
    @game.roll(3)
    14.times{@game.roll(0)}
    expect(@game.score).to eq 57
  end
  it 'scores a perfect game' do
    12.times{@game.roll(10)}
    expect(@game.score).to eq 300
  end
end