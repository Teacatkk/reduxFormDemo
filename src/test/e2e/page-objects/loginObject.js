module.exports = {
    url() {
        return 'http://localhost:9000/'
    },
    elements: {
        name: 'input[name="userAccount"]',
        password: 'input[name="userPassword"]',
        submit: 'button[type="submit"]'
    }
}