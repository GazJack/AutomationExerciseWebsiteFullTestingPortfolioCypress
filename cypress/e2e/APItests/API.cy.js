describe('API 1', () => {
  it('Get All Products List', () => {
  })
});

describe('API 2', () => {
  it('Post All Products List', () => {
    cy.request('POST', 'https://automationexercise.com/api/productsList').then((response) => {
      const responseBody = JSON.parse(response.body);
      expect(responseBody).to.have.property('responseCode', 405);
      expect(responseBody).to.have.property('message', 'This request method is not supported.');
    })
  })
});

describe('API 3', () => {
  it('Get All Brands List', () => {
    cy.request('GET', 'https://automationexercise.com/api/brandsList').then((response) => {
      const responseBody = JSON.parse(response.body);
      expect(responseBody).to.have.property('responseCode', 200);
      expect(responseBody.brands).to.be.an('array').that.is.not.empty;
      responseBody.brands.forEach((brand) => {
        expect(brand).to.have.property('id');
        expect(brand).to.have.property('brand');
      })
    })
  })
});

describe('API 4', () => {
  it('PUT To All Brands List', () => {
    cy.request('PUT', 'https://automationexercise.com/api/brandsList').then((response) => {
      const responseBody = JSON.parse(response.body);
      expect(responseBody).to.have.property('responseCode', 405);
      expect(responseBody).to.have.property('message', 'This request method is not supported.');
    })
  })
});

describe('API 5: POST To Search Product', () => {
  it('Should return searched products list', () => {
    const searchTerm = 'dress';
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/searchProduct',
      body: { search_product: searchTerm },
      form: true
    }).then((response) => {
      const responseBody = JSON.parse(response.body);
      expect(responseBody).to.have.property('responseCode', 200);
      expect(responseBody.products).to.be.an('array').that.is.not.empty;

      responseBody.products.forEach((product) => {
        expect(product).to.have.property('id').that.is.a('number');
        expect(product).to.have.property('name').that.is.a('string');
        expect(product).to.have.property('price').that.is.a('string');
        expect(product).to.have.property('brand').that.is.a('string');
        expect(product).to.have.property('category').that.is.an('object');
        expect(product.category).to.have.property('usertype').that.is.an('object');
        expect(product.category.usertype).to.have.property('usertype').that.is.a('string');
        expect(product.category).to.have.property('category').that.is.a('string');

        const nameIncludesSearch = product.name.toLowerCase().includes(searchTerm);
        const categoryIncludesSearch = product.category.category.toLowerCase().includes(searchTerm);
        expect(nameIncludesSearch || categoryIncludesSearch).to.be.true;
      });
    });
  });
});

describe('API 6', () => {
  it('POST To Search Product without search_product parameter', () => {
    cy.request('POST', 'https://automationexercise.com/api/searchProduct').then((response) => {
      const responseBody = JSON.parse(response.body);
      expect(responseBody).to.have.property('responseCode', 400);
      expect(responseBody).to.have.property('message', 'Bad request, search_product parameter is missing in POST request.');
    })
  })
});

describe('API 7', () => {
  it('POST To Verify Login with valid details', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/verifyLogin',
      body: {
        email: 'john.smith2@gmail.com',
        password: 'passs'
      },
      form: true
    }).then((response) => {
      const responseBody = JSON.parse(response.body);
      expect(responseBody).to.have.property('responseCode', 200);
      expect(responseBody).to.have.property('message', 'User exists!');
    })
  })
});

describe('API 8', () => {
  it('POST To Verify Login without email parameter', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/verifyLogin',
      body: {
        password: 'passs'
      },
      form: true
    }).then((response) => {
      const responseBody = JSON.parse(response.body);
      expect(responseBody).to.have.property('responseCode', 400);
      expect(responseBody).to.have.property('message', 'Bad request, email or password parameter is missing in POST request.');
    })
  })
});

describe('API 9', () => {
  it('DELETE To Verify Login', () => {
    cy.request('DELETE', 'https://automationexercise.com/api/verifyLogin').then((response) => {
      const responseBody = JSON.parse(response.body);
      expect(responseBody).to.have.property('responseCode', 405);
      expect(responseBody).to.have.property('message', 'This request method is not supported.');
    })
  })
});

describe('API 10', () => {
  it('POST To Verify Login with invalid details', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/verifyLogin',
      body: {
        email: 'john.smiths@gmail.com',
        password: 'pass'
      },
      form: true
    }).then((response) => {
      const responseBody = JSON.parse(response.body);
      expect(responseBody).to.have.property('responseCode', 404);
      expect(responseBody).to.have.property('message', 'User not found!');
    })
  })
});

describe('API 11', () => {
  it('POST To Create/Register User Account', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/createAccount',
      body: {
        name: ' Layla Smith2',
        email: 'laylasmith2@gmail.com',
        password: 'pass',
        title: 'Mr',
        birth_date: '28',
        birth_month: '02',
        birth_year: '1982',
        firstname: 'John',
        lastname: 'Smith',
        company: 'Arijus',
        address1: 'Haugetuft',
        address2: '1',
        country: 'United States',
        zipcode: '269875',
        state: 'Illinois',
        city: 'Chicago',
        mobile_number: '+025897456315'
      },
      form: true
    }).then((response) => {
      const responseBody = JSON.parse(response.body);
      expect(responseBody).to.have.property('responseCode', 201);
      expect(responseBody).to.have.property('message', 'User created!');
    })
  })
});

describe('API 12', () => {
  it('DELETE METHOD To Delete User Account', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://automationexercise.com/api/deleteAccount',
      body: {
        email: 'laylasmith2@gmail.com',
        password: 'pass'
      },
      form: true,
    }).then((response) => {
      const responseBody = JSON.parse(response.body);
      expect(responseBody).to.have.property('responseCode', 200);
      expect(responseBody).to.have.property('message', 'Account deleted!');
    })
  })
});

describe('API 13', () => {
  it('PUT METHOD To Update User Account', () => {
    cy.request({
      method: 'PUT',
      url: 'https://automationexercise.com/api/updateAccount',
      body: {
        name: 'AlisaSmith',
        email: 'john.smith1234@gmail.com',
        password: 'pass',
        title: 'Mrs',
        birth_date: '15',
        birth_month: 'May',
        birth_year: '1995',
        firstname: 'Alisa',
        lastname: 'Smith',
        company: 'Arijus',
        address1: 'Haugetuft',
        address2: '18',
        country: 'United States',
        zipcode: '254789',
        state: 'Illinois',
        city: 'Chicago',
        mobile_number: '+3259874563'
      },
      form: true
    }).then((response) => {
      const responseBody = JSON.parse(response.body);
      expect(responseBody).to.have.property('responseCode', 200);
      expect(responseBody).to.have.property('message', 'User updated!');
    })
  })
});

describe('API 14', () => {
  it('GET user account detail by email', () => {
    cy.request({
      method: 'GET',
      url: 'https://automationexercise.com/api/getUserDetailByEmail',
      qs: { email: 'layla.smith88@gmail.com' },
    }).then((response) => {
      const responseBody = JSON.parse(response.body);
      expect(responseBody).to.have.property('responseCode', 200);
      expect(responseBody.user).to.be.an('object').that.is.not.empty;

      const user = response.body.user;
      expect(responseBody.user.id).to.be.a('number');
      expect(responseBody.user.name).to.be.a('string');
      expect(responseBody.user.email).to.be.a('string');
      expect(responseBody.user.birth_day).to.be.a('string');
      expect(responseBody.user.title).to.be.a('string');
      expect(responseBody.user.birth_month).to.be.a('string');
      expect(responseBody.user.birth_year).to.be.a('string');
      expect(responseBody.user.first_name).to.be.a('string');
      expect(responseBody.user.last_name).to.be.a('string');
      expect(responseBody.user.company).to.be.a('string');
      expect(responseBody.user.address1).to.be.a('string');
      expect(responseBody.user.address2).to.be.a('string');
      expect(responseBody.user.country).to.be.a('string');
      expect(responseBody.user.state).to.be.a('string');
      expect(responseBody.user.city).to.be.a('string');
      expect(responseBody.user.zipcode).to.be.a('string');
    })
  })
});

