feature 'when the game begins', js: true do

    before(:each) { visit '/' }
    
    scenario 'it should display opening content' do
        expect(page).to have_content "Frame: 1"
        expect(page).to have_content "Roll: 1"
        expect(page).to have_select("pins", options: ['Pins knocked down', '0','1','2','3','4','5','6','7','8','9','10'])
    end

    scenario 'on selecting pins hit the total score should update' do
        select '4', from: "pins"
        expect(page).to have_content "Total Score: 4"
    end

    scenario 'on hitting a stike, score card should show x' do
        select '10', from: "pins"
        expect(page).to have_content "X"
    end

    scenario 'no X if 10 on roll 2' do
        select '0', from: "pins"
        select '10', from: "pins"
        expect(page).not_to have_content "X"
    end

    scenario 'drop down menu should update with pins left standing after a hit' do
        select '3', from: "pins"
        expect(page).to have_select("pins", options: ['Pins knocked down', '0','1','2','3','4','5','6','7'])
    end

end
