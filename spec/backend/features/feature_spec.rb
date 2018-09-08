feature 'Web page loads' do
  scenario 'and contains all the information needed to start the game' do
    visit('/')
    expect(page).to have_content('Bowling Scorecard')
  end
end
