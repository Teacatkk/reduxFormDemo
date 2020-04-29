module.exports = {
    'Test login use page object' (client) {
        const page = client.page.loginObject()
        page
         .navigate()
         .waitForElementVisible('body', 1000)
         .setValue('@name', 'admin')
         .setValue('@password', 'admin')
         .click('@submit')
         .end()
    }
}