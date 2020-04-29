module.exports = {
    'Test login'(client) {
        client
         .url('http://localhost:9000/')
         .waitForElementVisible('body', 1000)
         .setValue('input[name="userAccount"]', 'admin')
         .setValue('input[name="userPassword"]', 'admin')
         .click('button[type="submit"]')
         .end()
    }
}