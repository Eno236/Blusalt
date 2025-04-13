class DynamicTablePage {
    visit() {
      cy.visit('https://osc-ultimate-demo.mageplaza.com/dynamic-table');
    }
  
    findChromeCpu() {
      cy.get('.table').contains('Chrome')
        .parent()
        .find('td')
        .eq(2) // Assuming CPU is the 3rd column
        .invoke('text')
        .as('chromeCpu');
    }
  
    verifyCpuValue() {
      cy.get('@chromeCpu').should('match', /\d+%/); // should match like "45%"
    }
  }
  
  export default DynamicTablePage;

  