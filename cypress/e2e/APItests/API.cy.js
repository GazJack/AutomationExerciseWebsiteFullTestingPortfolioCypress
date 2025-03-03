// describe("API Testai", () => {
//     it("Turėtų grąžinti visus produktus", () => {
//       cy.request("GET", "/productsList").then((response) => {
//         const responseBody = JSON.parse(response.body); //Vaido
//         expect(response.status).to.eq(200);
//         expect(response.body).to.have.property("products");
//       });
//     });
//   });

// const { describe } = require("mocha");

// KAS CIA IR IS KUR JIS ATSIRADO? const { expect } = require("chai");

  
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
  })

  describe('API 3', () => {
    it('Get All Brands List', () => {
      cy.request('GET', 'https://automationexercise.com/api/brandsList').then((response) => {
        const responseBody = JSON.parse(response.body);
        expect(responseBody).to.have.property('responseCode', 200);
        expect(responseBody).to.have.property('brands').that.is.an('array');
        expect(responseBody.brands).to.be.an('array').that.is.not.empty;
      })
    })
  })





// API 4: PUT To All Brands List
// API URL: https://automationexercise.com/api/brandsList
// Request Method: PUT
// Response Code: 405
// Response Message: This request method is not supported.
// API 5: POST To Search Product
// API URL: https://automationexercise.com/api/searchProduct
// Request Method: POST
// Request Parameter: search_product (For example: top, tshirt, jean)
// Response Code: 200
// Response JSON: Searched products list
// API 6: POST To Search Product without search_product parameter
// API URL: https://automationexercise.com/api/searchProduct
// Request Method: POST
// Response Code: 400
// Response Message: Bad request, search_product parameter is missing in POST request.
// API 7: POST To Verify Login with valid details
// API URL: https://automationexercise.com/api/verifyLogin
// Request Method: POST
// Request Parameters: email, password
// Response Code: 200
// Response Message: User exists!
// API 8: POST To Verify Login without email parameter
// API URL: https://automationexercise.com/api/verifyLogin
// Request Method: POST
// Request Parameter: password
// Response Code: 400
// Response Message: Bad request, email or password parameter is missing in POST request.
// API 9: DELETE To Verify Login
// API URL: https://automationexercise.com/api/verifyLogin
// Request Method: DELETE
// Response Code: 405
// Response Message: This request method is not supported.
// API 10: POST To Verify Login with invalid details
// API URL: https://automationexercise.com/api/verifyLogin
// Request Method: POST
// Request Parameters: email, password (invalid values)
// Response Code: 404
// Response Message: User not found!
// API 11: POST To Create/Register User Account
// API URL: https://automationexercise.com/api/createAccount
// Request Method: POST
// Request Parameters: name, email, password, title (for example: Mr, Mrs, Miss), birth_date, birth_month, birth_year, firstname, lastname, company, address1, address2, country, zipcode, state, city, mobile_number
// Response Code: 201
// Response Message: User created!
// API 12: DELETE METHOD To Delete User Account
// API URL: https://automationexercise.com/api/deleteAccount
// Request Method: DELETE
// Request Parameters: email, password
// Response Code: 200
// Response Message: Account deleted!
// API 13: PUT METHOD To Update User Account
// API URL: https://automationexercise.com/api/updateAccount
// Request Method: PUT
// Request Parameters: name, email, password, title (for example: Mr, Mrs, Miss), birth_date, birth_month, birth_year, firstname, lastname, company, address1, address2, country, zipcode, state, city, mobile_number
// Response Code: 200
// Response Message: User updated!
// API 14: GET user account detail by email
// API URL: https://automationexercise.com/api/getUserDetailByEmail
// Request Method: GET
// Request Parameters: email
// Response Code: 200
// Response JSON: User Detail

//   describe('API tests', () => {
//     it('_________'), () =>{

//     }
//   });

//   describe('API tests', () => {
//     it('_________'), () =>{

//     }
//   });

//   describe('API tests', () => {
//     it('_________'), () =>{

//     }
//   });

//   describe('API tests', () => {
//     it('_________'), () =>{

//     }
//   });

//   pm.test("Status code is 200", function () {
//     pm.response.to.have.status(200);
// });

// pm.expect(respData).to.have.property('products').and.not.empty;


// chat pvz:

// describe("API testavimas", () => {
//     it("Turėtų grąžinti visus produktus", () => {
//       cy.request("GET", "/productsList").then((response) => {
//         expect(response.status).to.eq(200);
//         expect(response.body).to.have.property("products"); // Tikrina, ar yra "products"
//       });
//     });
//   });
  
// Cypress.Commands.add("login", (email, password) => {
//     cy.request("POST", "/verifyLogin", {
//       email,
//       password,
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//     });
//   });
  
// describe("Vartotojo sukūrimas", () => {
//     it("Turėtų sukurti naują vartotoją", () => {
//       cy.request("POST", "/createAccount", {
//         name: "Test User",
//         email: "test@example.com",
//         password: "password123",
//       }).then((response) => {
//         expect(response.status).to.eq(201); // Tikrinam ar grąžina 201 (sukurta)
//       });
//     });
//   });
  
// it("Turėtų sėkmingai prisijungti", () => {
//     cy.request("POST", "/verifyLogin", {
//       email: "test@example.com",
//       password: "password123",
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//       expect(response.body).to.have.property("message", "Login successful!");
//     });
//   });
  