describe('login4', () => {
  it('should login successfully with correct credentials', () => {
    cy.visit('https://savety.mynest8.com/login');

    cy.get('input[placeholder="Username"]').type('0612548848');
    cy.get('input[placeholder="Password"]').type('0612548848');

    cy.get('#submitbuttonLogin').click();
    cy.url('https://savety.mynest8.com/dashboard').should('include', '/dashboard');
  })
})