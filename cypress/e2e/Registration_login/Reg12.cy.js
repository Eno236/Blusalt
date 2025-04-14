describe('API Tests for Registration and Login', () => {

    // Registration Test
    it('should successfully register a new user', () => {
      const email = 'testuser' + Date.now() + '@yopmail.com'; 
      const password = 'TestPassword123'; 
  
      cy.request({
        method: 'POST',
        url: 'https://osc-ultimate-demo.mageplaza.com/', 
        body: {
          email: email,
          password: password,
          firstname: 'Testi',
          lastname: 'Userr',
          //dob: '',
          password_confirmation: password
        },
        headers: {
          'Content-Type': 'application/json',
        }
      }).should((response) => {
        expect(response.status).to.eq(200); l
       
      });
    });

    it('should display existing user', () => {
      const email = 'testuser' + Date.now() + '@yopmail.com'; 
      const password = 'TestP@ssword123'; 
  
      cy.request({
        method: 'POST',
        url: 'https://osc-ultimate-demo.mageplaza.com/', 
        body: {
          email: email,
          password: password,
          firstname: 'Dan',
          lastname: 'Olu',
          //dob: '',
          password_confirmation: password
        },
        
        headers: {
          'Content-Type': 'application/json',
        }
      }).should((response) => {
        expect(response.status).to.eq(200); 
        
      });
    });
  
     
  });
  