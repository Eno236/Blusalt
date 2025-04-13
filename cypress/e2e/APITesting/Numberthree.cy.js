describe('API Tests for Registration and Login', () => {

    // Registration Test
    it('should register a new user successfully', () => {
      cy.request({
        method: 'POST',
        url: 'https://osc-ultimate-demo.mageplaza.com/rest/V1/customers', // API URL for registration
        body: {
          customer: {
            email: 'testuser' + Date.now() + '@example.com',
            firstname: 'Test',
            lastname: 'User',
            password: 'TestPassword123'
          }
        },
        headers: {
          'Content-Type': 'application/json',
        }
      }).should((response) => {
        expect(response.status).to.eq(200); // Check if status code is 200 (OK)
        expect(response.body).to.have.property('id'); // Ensure the customer ID is returned
      });
    });
  
    // Login Test
    it('should log in the user successfully', () => {
      // Use the credentials of the newly registered user
      cy.request({
        method: 'POST',
        url: 'https://osc-ultimate-demo.mageplaza.com/rest/V1/integration/customer/token', // API URL for login
        body: {
          username: 'testuser' + Date.now() + '@example.com', // Use the same email used for registration
          password: 'TestPassword123'
        },
        headers: {
          'Content-Type': 'application/json',
        }
      }).should((response) => {
        expect(response.status).to.eq(200); // Check if login was successful
        expect(response.body).to.be.a('string'); // Ensure that a token is returned (login success)
      });
    });
  
  });