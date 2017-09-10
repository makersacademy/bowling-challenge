// var expect = require('chai').expect,
// assert = require('assert'),
// Browser = require('zombie'),
// browser = new Browser(),
// url = 'http://localhost:1337/';
// var session = require('express-session');
//
// var mongojs = require('mongojs');
// var db = mongojs('makersbnb', ['rooms', 'users']);
//
//
// describe('App', function() {
//
//     beforeEach(function () {
//         db.rooms.insert({title: 'Makers Academy', owner : 'Stephen', location : 'London', description : 'My lovely home', price: '200'})
//     });
//
//     afterEach(function () {
//         db.rooms.remove({title: 'Makers Academy'});
//     });
//
//     describe('/', function() {
//
//         it('works', function(done) {
//             browser.visit(url, function() {
//                 expect(browser.text('body')).to.include('Welcome to Dr. PJs MakersBnB!');
//                 browser.assert.element('form button[type="submit"][name="Visit Rooms"]');
//                 browser.assert.element('form button[type="submit"][name="Sign Up"]');
//                 done();
//             })
//         });
//
//
//         it('shows rooms when you click Visit Rooms', function(done) {
//             browser.visit(url, function() {
//                 browser.pressButton('Visit Rooms', function() {
//                     expect(browser.text('body')).to.include('London');
//                     expect(browser.text('body')).to.include('Makers Academy');
//                     expect(browser.text('body')).to.include('My lovely home');
//                     expect(browser.text('body')).to.include('£200');
//                     expect(browser.text('body')).to.include('Stephen');
//                     done();
//                 });
//             });
//         });
//
//
//         it('shows sign up page when you click Sign Up', function(done) {
//             browser.visit(url, function() {
//                 browser.pressButton('Sign Up', function() {
//                     browser.assert.element('form input[type="text"][name="name"]');
//                     browser.assert.element('form input[type="text"][name="username"]');
//                     browser.assert.element('form input[type="password"][name="password"]');
//                     browser.assert.element('form input[type="text"][name="email"]');
//                     browser.assert.element('form button[type="submit"][name="sign up"]');
//                     done();
//                 });
//             });
//         });
//
//         it('shows sign in page when you click Sign In', function(done) {
//             browser.visit(url, function() {
//                 browser.pressButton('Sign In', function() {
//                     browser.assert.element('form input[type="text"][name="username"]');
//                     browser.assert.element('form input[type="password"][name="password"]');
//                     browser.assert.element('form button[type="submit"][name="sign in"]');
//                     done();
//                 });
//             });
//         });
//     });
//
//     describe('users', function() {
//
//         beforeEach(function () {
//             db.users.insert({name: 'Stephen', username : 'sgeller', password : 'password123', email: 'test@email.com'})
//         });
//
//         afterEach(function () {
//             db.users.remove({name: 'Stephen', username : 'sgeller', password : 'password123', email: 'test@email.com'})
//         });
//
//         it('displays error if info is missing in sign up', function (done) {
//             browser.visit(url + 'signup', function () {
//                 browser.fill('input[name=username]', 'kaylove')
//                     .pressButton('Sign up', function () {
//                         expect(browser.text('body')).to.include('Password must be filled');
//                         done();
//                     });
//             });
//         });
//
//         it('goes to the room page after signing up', function (done) {
//             browser.visit(url + 'signup', function () {
//                 browser.fill('input[name=name]', 'Kay Lovelace')
//                     .fill('input[name=username]', 'kaylove')
//                     .fill('input[name=password]', 'ilovebluejuly')
//                     .fill('input[name=email]', 'klovelace@email.com')
//                     .pressButton('Sign up', function () {
//                         expect(browser.location.pathname).to.equal('/rooms');
//                         done()
//                     });
//             });
//         });
//         it('displays error if info is missing in sign in', function (done) {
//             browser.visit(url + 'signin', function () {
//                 browser.fill('input[name=username]', 'kaylove')
//                     .pressButton('Sign in', function () {
//                         expect(browser.text('body')).to.include('Password must be filled');
//                         done()
//                     });
//             });
//         });
//
//         it('can sign in if user is signed up', function(done) {
//             db.users.insert({name : 'Stephen', username : 'sgeller', password : 'password123', email: 'test@email.com'})
//             browser.visit(url + 'users/signin', function() {
//                 browser.fill('input[name=username]', 'sgeller')
//                     .fill('input[name=password]', 'password123');
//                 browser.pressButton('Sign in', function () {
//                     expect(browser.text('body')).to.include('Currently logged in as: Stephen');
//                     done();
//                 });
//             });
//         })
//     });
// });
