class SampleAppPage {
    visit() {
      cy.visit('https://www.uitestingplayground.com/sampleapp');
      
    }
  
    fillUsername(username) {
      cy.get('input[name="UserName"]').type(username);
    }
  
    fillPassword(password) {
      cy.get('input[name="Password"]').type(password);
    }
  
    clickLogin() {
      cy.get('button').contains('Log In').click();
    }
  
    verifyLoginSuccess() {
      cy.contains('Welcome').should('be.visible');
    }
  }
  
  export default SampleAppPage;
  