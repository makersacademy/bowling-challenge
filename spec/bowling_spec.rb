describe Bowling do

  it '#is_strike? method changes strike status from false to true' do
    expect(subject.strike).to eq false
    subject.is_strike?(10)
    expect(subject.strike).to eq true
  end

  it '#is_strike? method does not change strike status unless it is a strike' do
    expect(subject.strike).to eq false
    subject.is_strike?(7)
    expect(subject.strike).to eq false
  end

  it '#is_spare? method changes spare status from false to true' do
    expect(subject.spare).to eq false
    subject.is_spare?(5, 5)
    expect(subject.spare).to eq true
  end

  it '#is_spare? method does not change spare status unless it is a spare' do
    expect(subject.spare).to eq false
    subject.is_spare?(7, 2)
    expect(subject.spare).to eq false
  end
    

end