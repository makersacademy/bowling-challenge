describe Scorecard do
  it ' #score can store one bowl as a round score' do
    expect{ subject.score(5) }.to change { subject.round_score }.by 5
  end

  it 'stores each round within an array' do
    first_round = Round.new(5,4)
    expect(subject.rounds).to eq []
    subject.score_round(first_round)
    expect(subject.rounds).to eq [first_round]
  end
end