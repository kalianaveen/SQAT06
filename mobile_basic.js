"use strict";

const webdriverio = require('webdriverio');
const options = { 
            port: 4723,
            address: "127.0.0.1",
            desiredCapabilities: {
            
            port: 4723,
            address: "127.0.0.1",
            commandTimeout: "9000000",
            platformName: "Android",
            browserName: "chrome",
            deviceName: "Android Emulator",
 } };
const client = webdriverio.remote(options);

client
    .init()
    .url('https://duckduckgo.com/')
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#search_button_homepage')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
    })
    .end();
