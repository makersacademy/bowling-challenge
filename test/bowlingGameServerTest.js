var expect = require('chai').expect,
	Browser = require('zombie'),
	url = 'http://localhost:3000/';

var app = require('../app');
var http = require('http');
var server = http.createServer(app);
var browser;

describe('Bowling Game', function() {

	browser = new Browser();

	describe('/', function() {

		before(function() {
			server.listen(3000);
		});

		after(function() {
			server.close();
		});

		describe('/play', function() {

			it('has a "last bowl" section that keeps track of your last bowl', function(done) {
				browser.visit(url, function() {
					browser.pressButton('[type="submit"][value="startGame"]', function() {
						browser.assert.element('#lastRoll');
						browser.pressButton('[type="submit"][value="1"]', function() {
							expect(browser.text('body')).to.include('Last roll: 1');
							done();
						});
					});
				});
			});

			it('tells you the current frame', function(done) {
				browser.visit(url, function() {
					browser.pressButton('[type="submit"][value="startGame"]', function() {
						browser.pressButton('[type="submit"][value="8"]', function() {
							expect(browser.text('body')).to.include('Current frame: 1');
							browser.pressButton('[type="submit"][value="2"]', function() {
								expect(browser.text('body')).to.include('Current frame: 2');
								done();
							});
						});
					});
				});
			});

			it('does not add to score if roll is illegal', function(done) {
				browser.visit(url, function() {
					browser.pressButton('[type="submit"][value="startGame"]', function() {
						browser.pressButton('[type="submit"][value="8"]', function() {
							expect(browser.text('body')).to.include('Last roll: 8');
							expect(browser.text('body')).to.include('-2-');
							expect(browser.text('body')).to.not.include('-5-');
							done();
                        })
					});
				});
			});

			it('tells you the current frame', function(done) {
				browser.visit(url, function() {
					browser.pressButton('[type="submit"][value="startGame"]', function() {
						browser.pressButton('[type="submit"][value="8"]', function() {
							expect(browser.text('body')).to.include('Current frame: 1');
							browser.pressButton('[type="submit"][value="2"]', function() {
								expect(browser.text('body')).to.include('Current frame: 2');
								done();
							});
						});
					});
				});
			});

			it('displays pins remaining in frame', function(done) {
				browser.visit(url, function() {
					browser.pressButton('[type="submit"][value="startGame"]', function() {
						browser.pressButton('[type="submit"][value="8"]', function() {
							expect(browser.text('body')).to.include('Remaining pins: 2');
							done();
						});
					});
				});
			});

			it('can restart a game while playing', function(done) {
				browser.visit(url, function() {
					browser.pressButton('[type="submit"][value="startGame"]', function() {
						browser.pressButton('[type="submit"][value="restart"]', function() {
							expect(browser.text('body')).to.include('Current frame: 1');
							done();
						});
					});
				});
			});

			it('does not display spare total until next roll', function(done) {
				browser.visit(url, function() {
					browser.pressButton('[type="submit"][value="startGame"]', function() {
						browser.pressButton('[type="submit"][value="8"]', function() {
							browser.pressButton('[type="submit"][value="2"]', function() {
								expect(browser.text('body')).to.include('Frames: ...');
								browser.pressButton('[type="submit"][value="2"]', function() {
									expect(browser.text('body')).to.include('Frames: 12');
									done();
								});
							});
						});
					});
				});
			});

			it('does not display strike total until next roll', function(done) {
				browser.visit(url, function() {
					browser.pressButton('[type="submit"][value="startGame"]', function() {
						browser.pressButton('[type="submit"][value="10"]', function() {
							browser.pressButton('[type="submit"][value="2"]', function() {
								expect(browser.text('body')).to.include('Frames: ...');
								browser.pressButton('[type="submit"][value="2"]', function() {
									expect(browser.text('body')).to.include('Frames: 14, 18');
									done();
								});
							});
						});
					});
				});
			});

			it('adds rolls up in progressive frames', function(done) {
				browser.visit(url, function() {
					browser.pressButton('[type="submit"][value="startGame"]', function() {
						browser.pressButton('[type="submit"][value="10"]', function() {
							browser.pressButton('[type="submit"][value="2"]', function() {
								expect(browser.text('body')).to.include('Frames: ...');
								browser.pressButton('[type="submit"][value="2"]', function() {
									expect(browser.text('body')).to.include('Frames: 14, 18');
									done();
								});
							});
						});
					});
				});
			});
		});
	});
});
