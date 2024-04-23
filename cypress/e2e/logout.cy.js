describe('logout', () => {
  it('should logout successfully', () => {
    cy.visit('https://savety.mynest8.com/login');

    cy.get('input[placeholder="Username"]').type('0612548848');
    cy.get('input[placeholder="Password"]').type('0612548848');

    cy.get('#submitbuttonLogin').click();

    cy.url('https://savety.mynest8.com/dashboard').should('include', '/dashboard');

    cy.get('#__layout > section > header > div.mr-3.el-dropdown > span > img').click();

    cy.contains('ออกจากระบบ').click();

    cy.url('https://savety.mynest8.com/dashboard').should('not.include', '/dashboard');
  })
})