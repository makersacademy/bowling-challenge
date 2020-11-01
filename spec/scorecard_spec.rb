describe Scorecard do
  let(:first_round) { Round.new(5, 4) }

  it ' #score can store one bowl as a round score' do
    expect{ subject.score(5) }.to change { subject.round_score }.by 5
  end

  it 'stores each round within an array' do
    expect(subject.rounds).to eq []
    subject.score_round(first_round)
    expect(subject.rounds).to eq [first_round]
  end

  it 'adds all of the scores from the round into a total' do
    subject.score_round(first_round)
    expect(subject.total).to eq 9
  end

end