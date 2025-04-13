class ShadowDomPage {
    visit() {
      cy.visit('https://osc-ultimate-demo.mageplaza.com/shadow-dom');
    }
  
    accessShadowElement() {
      cy.get('guid-generator').shadow().find('h1').as('shadowText');
    }
  
    verifyShadowText() {
      cy.get('@shadowText').should('contain.text', 'Guid Generator');
    }
  }
  
  export default ShadowDomPage;
  