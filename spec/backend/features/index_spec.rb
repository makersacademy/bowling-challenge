RSpec.feature 'index' do
  it 'works' do
    visit '/'

    expect(page).to have_content 'Bowling'
  end
end
