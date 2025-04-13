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
        expect(response.status).to.eq(200); // Check if the registration was successful
        //expect(response.body).to.have.property('id'); // Ensure the response contains a user ID
      });
    });

    it('should display existing user', () => {
      const email = 'testuser' + Date.now() + '@yopmail.com'; // Generating a unique email
      const password = 'TestP@ssword123'; // Sample password
  
      cy.request({
        method: 'POST',
        url: 'https://osc-ultimate-demo.mageplaza.com/', // Replace with your actual registration endpoint
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
        expect(response.status).to.eq(200); // Check if the registration was successful
        //expect(response.body).to.have.property('id'); // Ensure the response contains a user ID
      });
    });
  
     
  });
  