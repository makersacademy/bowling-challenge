// describe('features of the site', function() {
//
//     beforeEach(function() {
//         jasmine.getFixtures().fixturesPath = '.';
//         loadFixtures('index.html');
//     });
//
//     it('displays a title', function() {
//         expect('#page_heading').toContainText('Bowling Scorecard');
//     });
//
//     it('has a section for the table', function() {
//         expect("#score_table").toBeInDOM();
//     });
//
//     it('has a table', function() {
//         expect("#score_table").toContainElement('.scores');
//         expect('#score_table').toContainElement('table');
//     });
//
//     it('table has headings', function() {
//         expect('table.scores').toContainText('Frame');
//         expect('table.scores').toContainText('Roll');
//         expect('table.scores').toContainText('Score');
//     });
//
//     it('has add button to add data to table', function() {
//       expect('#score_table').toContainElement('input#add_entry');
//     });
//
//     it('clicking add entry adds new row to table', function() {
//       $('input#add_score').val('2');
//       $('input#add_entry').click;
//       var rowCount = $('table.scores tr').length;
//       expect(rowCount).toEqual(1);
//     });
//
// });
