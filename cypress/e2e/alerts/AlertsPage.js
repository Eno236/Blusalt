class AlertsPage {
    visit() {
      cy.visit('https://osc-ultimate-demo.mageplaza.com/javascript-alerts');
    }
  
    triggerAlert() {
      cy.contains('Click for JS Alert').click();
    }
  
    verifyAlert() {
      cy.on('window:alert', (text) => {
        expect(text).to.contains('I am a JS Alert');
      });
    }
  }
  
  export default AlertsPage;
  