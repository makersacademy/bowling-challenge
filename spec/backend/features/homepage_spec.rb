feature 'Test Infastructure' do
  scenario 'Homepage loads' do
    visit('/')
    expect(page).to have_content('Bowling Scorecard')
  end
end
