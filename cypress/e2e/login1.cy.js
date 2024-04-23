describe('login1', () => {
  it('should display error message when username and password are not provided', () => {
    cy.visit('https://savety.mynest8.com/login')

    cy.get('#submitbuttonLogin').click();

    cy.contains('กรุณากรอกข้อมูล').should('be.visible');
    cy.contains('กรุณากรอกข้อมูล').should('be.visible');
  })
})