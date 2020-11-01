describe Round do

  let(:not_a_strike) { Round.new(5, 4)}
  let(:strike) { Round.new(10, 0) }
  let(:spare) { Round.new(7, 3) }

  it 'stores bowls in a hash' do
  expect(not_a_strike.round[:first_throw]).to eq 5
  expect(not_a_strike.round[:second_throw]).to eq 4
  end

  it '#is_strike? method changes strike status from false to true' do
    expect(strike.strike).to eq false
    strike.is_a_strike?
    expect(strike.strike).to eq true
  end

  it '#is_strike? method does not change strike status unless it is a strike' do
    expect(not_a_strike.strike).to eq false
    not_a_strike.is_a_strike?
    expect(not_a_strike.strike).to eq false
  end

  it '#is_spare? method changes spare status from false to true' do
    expect(spare.spare).to eq false
    spare.is_a_spare?
    expect(spare.spare).to eq true
  end

  it '#is_spare? method does not change spare status unless it is a spare' do
    expect(strike.spare).to eq false
    strike.is_a_spare?
    expect(strike.spare).to eq false
  end
end