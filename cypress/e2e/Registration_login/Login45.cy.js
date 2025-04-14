// api/login.spec.js
describe('API Authentication', () => {
    it('Generates valid auth token', () => {
      cy.request({
        method: 'POST',
        url: 'https://osc-ultimate-demo.mageplaza.com/',
        body: {
          username: 'testuser@example.com',
          password: 'Test1234!'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.a('string')
      });
    });
   });


  //describe('API Authentication - Negative Tests', () => {
    //const baseUrl = 'https://osc-ultimate-demo.mageplaza.com/';

    // Test 1: Invalid Credentials
    it('Should reject invalid username/password combination', () => {
        cy.request({
          method: 'POST',
          url: 'https://osc-ultimate-demo.mageplaza.com/',
          body: {
            username: 'Rita@yobmail.com',
            password: 'Wr!Password123!'
          },
          failOnStatusCode: false 
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('message');
          expect(response.body.message).to.contain('Invalid login or password');
        });
      });

    