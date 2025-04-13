describe('API Registration Tests', () => {
    it('Should register a new user successfully', () => {
      cy.request({
        method: 'POST',
        url: 'https://osc-ultimate-demo.mageplaza.com/',
        body: {
          customer: {
            email: 'newuser@test.com',
            firstname: 'John',
            lastname: 'Doe'
          },
          password: 'ValidPass123!'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id');
      });
    });
  
    it('Should fail to register with an existing email', () => {
      cy.request({
        method: 'POST',
        url: 'https://osc-ultimate-demo.mageplaza.com/',
        body: {
          customer: { email: 'existinguser@test.com' },
          password: 'ValidPass123!'
        },
        failOnStatusCode: false // Prevent test failure on non-2xx responses.
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.message).to.contain('Email already exists');
      });
    });
  });