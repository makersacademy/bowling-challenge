describe Bowl do

  it 'a new instance of bowl takes in a number of pins knocked down so the user can score it' do
    first_bowl = Bowl.new(9)
    expect(first_bowl.pins).to eq 9
  end
  
end