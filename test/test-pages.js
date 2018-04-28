const expect = require('chai').expect;
const request = require('request');

it('Main page content', function(done) {
    request('http://localhost:8080' , function(error, response, body) {
        if(error) { console.log(error); }
        expect(body).to.equal('Hello World!');
        done();
    });
});
