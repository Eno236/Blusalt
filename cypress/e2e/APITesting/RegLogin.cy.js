describe('User Registration and Login API Tests', () => {
    const baseUrl = 'https://osc-ultimate-demo.mageplaza.com';   
    const user = {
      name: 'Eno Ikon',
      email: `testuser${Date.now()}@example.com`,
      password: 'Password123!'
    };
  
    it('should register a new user', () => {
      cy.request({
        method: 'POST',
        //url: `${'https://osc-ultimate-demo.mageplaza.com'}/default/sociallogin/popup/create/',
        url: '${'https://osc-ultimate-demo.mageplaza.com'}/default/sociallogin/popup/create/',
        body: {
          name: user.name,
          email: user.email,
          password: user.password
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(201); // ✅ Expecting successful creation
        expect(response.body).to.have.property('message', 'User registered successfully');
      });
    });
  /*
    it('should login the registered user', () => {
      cy.request({
        method: 'POST',
        url: `${'https://osc-ultimate-demo.mageplaza.com/'}/default/login`, 
        body: {
          email: user.email,
          password: user.password        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('token');
      });
    });*/ 
  });