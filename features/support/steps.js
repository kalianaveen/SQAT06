const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()

"use strict";


Given('I go to duck duck go', function(callback) {
  this.browser
    .init()
    .url('https://duckduckgo.com/').then(function() {
      callback();
    })
})

When('I search for WebdriverIO', function(callback) {
  this.browser
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#search_button_homepage').then(function(){
      callback();
    })
})

Then('I should see the search results', function(callback) {
  this.browser
    .getTitle().then(function(result){
        result.should.equal("WebdriverIO at DuckDuckGo");
        callback();
  }).catch(function(error){
    callback(error);
  })
})

Given('I go to google', function(callback) {
  this.browser
    .init()
    .url('https://google.ca/').then(function() {
      callback();
    })
})

When('I search for cnn on google', function(callback) {
  this.browser
    .setValue('#lst-ib', 'cnn')
    .keys('Enter').then(function(){
      callback();
    }).catch(function(error){
      callback(error);
    })
})

Then('I should see the search results on google', function(callback) {
  this.browser
    .getTitle().then(function(result){
        result.should.equal("cnn - Google Search");
        callback();
  }).catch(function(error){
    callback(error);
  })
})


Given('I go to cbc', function(callback) {
  this.browser
    .init()
    .url('http://cbc.ca').then(function() {
      callback();
    })
})

When('I click on medals on cbc', function(callback) {
  this.browser
    .click('#//olympics.cbc.ca/medals/index.html').then(function() {
    callback();
    }).catch(function(error){
      callback(error);
    })
})

Then('I should see the medals page on cbc', function(callback) {
  this.browser
    .getTitle().then(function(result){
        result.should.equal("Winners - Overall | Medals | CBC Olympics |PyeongChang 2018");
        callback();
  }).catch(function(error){
    callback(error);
  })
})

