feature 'Web page loads' do
  scenario 'and contains all the information needed to start the game' do
    visit('/')
    expect(page).to have_content('Bowling Scorecard')
    expect(page).to have_content('Pins knocked down:')
    expect(page).to have_button('Enter')
    expect(page).to have_css('table', text: 'Frame')
  end
end
