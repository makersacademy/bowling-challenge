describe Round do
  it 'stores bowls in a hash' do
    round_1 = Round.new(5, 4)
  expect(round_1.round[:first_throw]).to eq 5
  expect(round_1.round[:second_throw]).to eq 4
  end
end