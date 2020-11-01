describe Calculator do
  it 'can add two numbers together' do
    expect(subject.add_round(5, 9)).to eq 14
  end
  it 'can add three numbers together' do
    expect(subject.add_strike_or_spare(10, 4, 9)).to eq 23
  end
end