class ClientDelayPage {
    visit() {
      cy.visit('https://osc-ultimate-demo.mageplaza.com/client-side-delay');
    }
  
    clickButton() {
      cy.get('button').contains('Button Triggering Client Side Logic').click();
    }
  
    verifyMessage() {
      cy.get('.bg-success').should('be.visible');
    }
  }
  
  export default ClientDelayPage;

  