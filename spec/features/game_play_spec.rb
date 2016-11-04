feature 'Playing 10 pin bowling' do
  scenario "Viewing the game page" do
    visit '/'
    expect(page).to have_content('Ten Pin Bowling Score Sheet')
  end
end
