describe Bowling do
  it '#is_strike? method changes strike status from false to true' do
    expect(subject.strike).to eq false
    subject.is_strike?(10)
    expect(subject.strike).to eq true
  end
end