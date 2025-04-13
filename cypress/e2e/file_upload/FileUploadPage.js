class FileUploadPage {
    visit() {
      cy.visit('https://osc-ultimate-demo.mageplaza.com/upload');
    }
  
    uploadFile(fileName) {
      cy.get('input[type="file"]').attachFile(fileName);
    }
  
    verifyFileUpload() {
      cy.get('#uploaded-files').should('contain.text', 'example.json');
    }
  }
  
  export default FileUploadPage;
  