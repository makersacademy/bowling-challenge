describe Scorecard do
  let(:first_frame) { Frame.new(5, 4) }

  it ' #score can store one bowl as a round score' do
    expect{ subject.score(5) }.to change { subject.frame_score }.by 5
  end

  it 'stores each round within an array' do
    expect(subject.frames).to eq []
    subject.score_frame(first_frame)
    expect(subject.frames).to eq [first_frame]
  end

  it 'adds all of the scores from the round into a total' do
    subject.score_frame(first_frame)
    expect(subject.total).to eq 9
  end

end