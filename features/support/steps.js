const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()

"use strict";


Given('I go to figure1 website for invalid signup', function(callback) {
  this.browser
    .init()
    .url('https://app.figure1.com/account/register').then(function() {
      callback();
    })
})

When('I type Username invalid signup', function(callback) {
  this.browser
    .waitForVisible('.register-page__username-input', 2000)
    .setValue('.register-page__username-input','abc')
    .setValue('.register-page__email-input','abc@gmail.com')
    .setValue('.register-page__password-input','abc123')
    .setValue('.register-page__confirm-password-input','abc123')
    .selectByIndex('.register-page__specialties-list', 6)
    .selectByIndex('.register-page__specialties-other-list', 12)
    .scroll('.box')
    .click('.box')
    .click('.register-page__submit-button')
    .then(function() { 
     callback();
  }).catch(function(error){
    callback(error);
  })
})

Then('I should see invalid signup result', function(callback) {
  this.browser
    .waitForVisible('.invalid-field', 2000)
    .getText('.invalid-field').then(function(result) { 
    result.should.equal("Username must be at least 4 characters long (accepts letters, numbers and dashes)");
     
     callback();
  }).catch(function(error){
    callback(error);
  })
})

Given('I go to figure1 website for valid signup', function(callback) {
  this.browser
    .init()
    .url('https://app.figure1.com/account/register').then(function() {
      callback();
    })
})

When('I type Username valid signup', function(callback) {
  this.browser
    .waitForVisible('.register-page__username-input', 2000)
    .setValue('.register-page__username-input','chesleacdef')
    .setValue('.register-page__email-input','chesleacdef@gmail.com')
    .setValue('.register-page__password-input','chesleacdef12345')
    .setValue('.register-page__confirm-password-input','chesleacdef12345')
    .selectByIndex('.register-page__specialties-list', 6)
    .selectByIndex('.register-page__specialties-other-list', 12)
    .scroll('.box')
    .click('.box')
    .click('.register-page__submit-button')
    .then(function() { 
     callback();
  }).catch(function(error){
    callback(error);
  })
})

Then('I should see result valid signup', function(callback) {
  this.browser
    .waitForVisible('.email-confirmation-intro__email', 10000)
    .getText('.email-confirmation-intro__email').then(function(result) { 
    result.should.equal("Is your email address still chesleacdef@gmail.com?");
     
     callback();
  }).catch(function(error){
    callback(error);
  })
})


Given('I go to figure1 website to confirm signup', function(callback) {
  this.browser
    .init()
    .url('https://app.figure1.com/account/login').then(function() {
      callback();
    })
})

When('I type email address and password', function(callback) {
  this.browser
    .waitForVisible('.login-page__email-input', 5000)
    .setValue('.login-page__email-input','chesleacdef@gmail.com')
    .setValue('.login-page__password-input','chesleacdef12345')
    .click('.login-page__submit-button')
    .then(function() { 
     callback();
  }).catch(function(error){
    callback(error);
  })
})

Then('I should see account confirmation page', function(callback) {
  this.browser
    .waitForVisible('.email-confirmation-intro__email', 5000)
    .getText('.email-confirmation-intro__email').then(function(result) { 
    result.should.equal("Is your email address still chesleacdef@gmail.com?");
     
     callback();
  }).catch(function(error){
    callback(error);
  })
})