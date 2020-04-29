module.exports = {
    'search nightwatch on baidu': function(browser) {
        browser
         .url('http://www.baidu.com')
         .waitForElementVisible('body', 1000)
         .setValue('#kw', 'nigthwatch')
         .click('#su')
         .pause(3000)
         .waitForElementVisible('#content_left', 3000)
         .end()
    }
}