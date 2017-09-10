var expect = require('chai').expect,
    chai = require('chai'),
    assert = require('assert'),
    should = require('chai').should,
    Browser = require('zombie'),
    browser = new Browser(),
    url = 'http://localhost:1337/';

var rollMany = function(rolls, pins) {
    for(i = 0; i < rolls; i++) {
        browser.pressButton('[type="submit"][value=' + pins + '"1"]', function() {
            done()
        });
    };
};



describe('Bowling Game', function() {

    const browser = new Browser();

    describe('/', function() {

        // before(function() {
        //     return browser.visit('/');
        // });

        after(function() {
        });


    describe('/play', function() {

        // before(function() {
        //     return browser.pressButton('[type="submit"][value="startGame"]');
        // });

        it('has a "last bowl" section that keeps track of your last bowl', function(done) {
            browser.visit(url, function() {
                browser.pressButton('[type="submit"][value="startGame"]', function() {
                    browser.assert.element('#lastRoll');
                    browser.pressButton('[type="submit"][value="1"]', function() {
                        expect(browser.text('body')).to.include('Last roll: 1');
                        done()
                    });
                });
            })
        });

        it('tells you the current frame', function(done) {
            browser.visit(url, function() {
                browser.pressButton('[type="submit"][value="startGame"]', function() {
                    browser.pressButton('[type="submit"][value="8"]', function() {
                        expect(browser.text('body')).to.include('Current frame: 1');
                        browser.pressButton('[type="submit"][value="2"]', function() {
                            expect(browser.text('body')).to.include('Current frame: 2');
                            done()
                        });
                    });
                });
            })
        });

        it('displays an error if roll is illegal', function(done) {
            browser.visit(url + 'play', function() {
                browser.pressButton('[type="submit"][value="8"]', function() {
                    browser.pressButton('[type="submit"][value="3"]', function() {
                        expect(browser.text('body')).to.include('Only 2 pins left!');
                        done()
                    });
                });
            })
        });

        it('tells you the current frame', function(done) {
            browser.visit(url, function() {
                browser.pressButton('[type="submit"][value="startGame"]', function() {
                    browser.pressButton('[type="submit"][value="8"]', function() {
                        expect(browser.text('body')).to.include('Current frame: 1');
                        browser.pressButton('[type="submit"][value="2"]', function() {
                            expect(browser.text('body')).to.include('Current frame: 2');
                            done()
                        });
                    });
                });
            })
        });

        it('displays pins remaining in frame', function(done) {
            browser.visit(url, function() {
                browser.pressButton('[type="submit"][value="startGame"]', function() {
                    browser.pressButton('[type="submit"][value="8"]', function() {
                            expect(browser.text('body')).to.include('Remaining pins: 2');
                            done()
                    });
                });
            })
        });

        it('can restart a game while playing', function(done) {
            browser.visit(url, function() {
                browser.pressButton('[type="submit"][value="startGame"]', function() {
                    browser.pressButton('[type="submit"][value="restart"]', function() {
                        expect(browser.text('body')).to.include('Current frame: 1');
                        done()
                    });
                });
            })
        });

        it('does not display spare total until next roll', function(done) {
            browser.visit(url, function() {
                browser.pressButton('[type="submit"][value="startGame"]', function() {
                    browser.pressButton('[type="submit"][value="8"]', function() {
                        browser.pressButton('[type="submit"][value="2"]', function() {
                            expect(browser.text('body')).to.include('Frames: ...');
                            browser.pressButton('[type="submit"][value="2"]', function() {
                                expect(browser.text('body')).to.include('Frames: 12');
                                done()
                            });
                        });
                    });
                });
            })
        });

        it('does not display strike total until next roll', function(done) {
            browser.visit(url, function() {
                browser.pressButton('[type="submit"][value="startGame"]', function() {
                    browser.pressButton('[type="submit"][value="10"]', function() {
                        browser.pressButton('[type="submit"][value="2"]', function() {
                            expect(browser.text('body')).to.include('Frames: ...');
                            browser.pressButton('[type="submit"][value="2"]', function() {
                                expect(browser.text('body')).to.include('Frames: 14, 18');
                                done()
                            });
                        });
                    });
                });
            })
        });

        it('adds rolls up in progressive frames', function(done) {
            browser.visit(url, function() {
                browser.pressButton('[type="submit"][value="startGame"]', function() {
                    browser.pressButton('[type="submit"][value="10"]', function() {
                        browser.pressButton('[type="submit"][value="2"]', function() {
                            expect(browser.text('body')).to.include('Frames: ...');
                            browser.pressButton('[type="submit"][value="2"]', function() {
                                expect(browser.text('body')).to.include('Frames: 14, 18');
                                done()
                            });
                        });
                    });
                });
            })
        });
    })
        //
        // it('takes you to a page showing room details and availability', function(done) {
        //     browser.visit(url + 'rooms', function() {
        //         browser.pressButton('form button[type="submit"][value="mySpecialRoom"]', function() {
        //             expect(browser.location.pathname).to.equal('/rooms/book');
        //             expect(browser.text('body')).to.include('mySpecialRoom');
        //             expect(browser.text('body')).to.include('sgeller');
        //             expect(browser.text('body')).to.include('Bethnal Green');
        //             expect(browser.text('body')).to.include('Not worth it');
        //             browser.assert.element('form button[type="submit"][name="bookRoomName"]');
        //             browser.assert.element('form button[type="submit"][name="viewRooms"]');
        //             done()
        //         })
        //     })
        // });
        //
        // it('shows that a room has been booked', function(done) {
        //     browser.visit(url + 'rooms', function() {
        //         browser.pressButton('form button[type="submit"][value="mySpecialRoom"]', function() {
        //             browser.pressButton('form button[type="submit"][name="bookRoomName"]', function() {
        //                 expect(browser.location.pathname).to.equal('/rooms');
        //                 assert.equal(browser.text('#BookmySpecialRoom'), '- This room has been booked');
        //                 done()
        //             })
        //         })
        //     });
        // });
        //
        // it('takes you back to the rooms page and ', function(done) {
        //     browser.visit(url + 'rooms', function() {
        //         browser.pressButton('form button[type="submit"][value="mySpecialRoom"]', function() {
        //             browser.pressButton('form button[type="submit"][name="viewRooms"]', function() {
        //                 expect(browser.location.pathname).to.equal('/rooms');
        //                 browser.assert.element('#BookmySpecialRoom');
        //                 done()
        //             })
        //         })
        //     });
        // });
    });
});
