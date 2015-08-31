feature 'when the game begins', js: true do
    
    scenario 'it should display opening content' do
        visit '/'
        expect(page).to have_content "Current Frame: 1"
        expect(page).to have_content "Current Roll: 1"
        expect(page).to have_select("pins", options: ['Pins knocked down', '0','1','2','3','4','5','6','7','8','9','10'])
    end

    scenario 'on selecting pins hit the scorecard should update' do
        visit '/'
        select '4', from: "pins"
        expect(page).to have_content "SCORE CARD"
    end

end
