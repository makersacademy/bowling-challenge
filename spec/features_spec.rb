feature 'correctly scoring a game' do

  before do
    visit('/')
  end

  it 'can score a full game correctly, updating the frame number as it goes' do
    expect(page.find('#score')).to have_content '0'
    expect(page.find('#current-frame')).to have_content '1'
    click_on('ten-pins')
    click_on('two-pins')
    expect(page).not_to have_content('9')
    click_on('three-pins')
    expect(page.find('#score')).to have_content '20'
    expect(page.find('#current-frame')).to have_content '2'
    click_on('three-pins')
    expect(page.find('#current-frame')).to have_content '3'
    click_on('four-pins')
    click_on('ten-pins')
    click_on('one-pin')
    click_on('six-pins')
    click_on('one-pin')
    click_on('two-pins')
    click_on('four-pins')
    click_on('three-pins')
    click_on('seven-pins')
    click_on('three-pins')
    click_on('two-pins')
    click_on('eight-pins')
    click_on('two-pins')
    click_on('one-pin')
    expect(page.find('#score')).to have_content '88'
    expect(page.find('#current-frame')).to have_content '10'
  end
end
