describe('login3', () => {
  it('should display error message when username are not provided', () => {
    cy.visit('https://savety.mynest8.com/login')

    cy.get('input[placeholder="Password"]').type('0612548848');

    cy.get('#submitbuttonLogin').click();

    cy.contains('กรุณากรอกข้อมูล').should('be.visible');
  })
})