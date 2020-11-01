describe Scorecard do
  it 'can store one bowl as a round score' do
    expect{ subject.score(5) }.to change { subject.round_score }.by 5
  end

  it ''
end