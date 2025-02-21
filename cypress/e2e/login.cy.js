describe('Login Functionality', () => {
    beforeEach(() => {
        // 在每个测试前访问登录页面
        cy.visit('http://localhost:8080/login.html')
    })

    it('should login successfully with correct credentials', () => {
        // 输入正确的账号密码
        cy.get('.account').type('admin')
        cy.get('.password').type('admin')

        // 点击登录按钮
        cy.get('button').click()

        // 验证是否跳转到 index.html
        cy.url().should('include', '/index.html')

        // 验证页面内容
        cy.contains('Hello World!').should('be.visible')
    })

    it('should show error message with incorrect credentials', () => {
        // 输入错误的账号密码
        cy.get('.account').type('wrong')
        cy.get('.password').type('wrong')

        // 拦截 alert
        cy.on('window:alert', (text) => {
            expect(text).to.equal('登录失败，请输入正确的账号密码')
        })

        // 点击登录按钮
        cy.get('button').click()

        // 验证没有跳转
        cy.url().should('include', '/login.html')
    })

    it('should have empty inputs initially', () => {
        // 验证输入框初始为空
        cy.get('.account').should('have.value', '')
        cy.get('.password').should('have.value', '')
    })
})