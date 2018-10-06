feature 'static elements of page' do
  before { visit '/' }
  scenario 'title set to Bowling Scorer' do
    expect(page.title).to eq('Bowling Scorecard')
  end

  scenario 'header set to Welcome to Bowling Scorecard' do
    expect(find('h1#header')).to have_content('Welcome to Bowling Scorecard')
  end
end

feature 'score table' do
  before { visit '/' }

  scenario 'div id set to #score-div' do
    expect(page).to have_css('div#score-div')
  end

  scenario 'table id set to #score-table' do
    expect(page).to have_css('table#score-table')
  end

  context 'frame header' do
    scenario 'id set to #frame-header' do
      expect(find('#score-table')).to have_css('th#frame-header')
    end

    scenario 'content set to Frame' do
      expect(find('#frame-header')).to have_content('Frame')
    end
  end

  context 'roll header' do
    scenario 'id set to #roll-header' do
      expect(find('#score-table')).to have_css('th#roll-header')
    end

    scenario 'content set to Roll' do
      expect(find('#roll-header')).to have_content('Roll')
    end
  end

  context 'Knocked Down header' do
    scenario 'id set to #knocked-down-header' do
      expect(find('#score-table')).to have_css('th#knocked-down-header')
    end

    scenario 'content set to Knocked Down' do
      expect(find('#knocked-down-header')).to have_content('Knocked Down')
    end
  end

  context 'total score header' do
    scenario 'id set to #total-score-header' do
      expect(find('#score-table')).to have_css('th#total-score-header')
    end

    scenario 'content set to Total Score' do
      expect(find('#total-score-header')).to have_content('Total Score')
    end
  end

  context 'Notes header' do
    scenario 'id set to #notes-header' do
      expect(find('#score-table')).to have_css('th#notes-header')
    end

    scenario 'content set to Notes' do
      expect(find('#notes-header')).to have_content('Notes')
    end
  end
end
