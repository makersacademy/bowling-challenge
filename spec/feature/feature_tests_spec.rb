feature 'homepage' do
  scenario 'the user visits the home page' do
    visit('/')
    expect(page).to have_content("This is balls")
  end
end

feature 'enter scores' do
  scenario 'the user can enter their score' do
    visit('/game')
    fill_in('score', with:'10')
  end
end
