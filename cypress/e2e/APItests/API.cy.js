

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
    it.only('Get All Brands List', () => {
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

// API 5: POST To Search Product
describe('API 5', () => {
  it('Post to Search Product', () => {
    cy.request('POST', 'https://automationexercise.com/api/searchProduct').then((response) => {
      const responseBody = JSON.parse(response.body);
      expect(responseBody).to.have.property('responseCode', 200);
      test('Products are not empty', () => {
        expect(responseBody.products).to.be.an('array').that.is.not.empty;
        responseBody.products.forEach((product) => {
            expect(product).to.have.property('id');
            expect(product).to.have.property('name');
            expect(product).to.have.property('price');
            expect(product).to.have.property('brand');
            expect(product).to.have.property('category');
            expect(product.category).to.have.property('usertype');
            expect(product.category).to.have.property('category');
           })
        });
     });
  })
})
// Request Parameter: search_product (For example: top, tshirt, jean)
// Response JSON: Searched products list

// // API 6: POST To Search Product without search_product parameter
// describe('API 5', () => {
//   it('PUT To All Brands List', () => {
//   cy.request('POST', 'https://automationexercise.com/api/searchProduct').then((response) => {
//     const responseBody = JSON.parse(response.body);
//      })
//   })
// })
// // API URL: https://automationexercise.com/api/searchProduct
// // Request Method: POST
// // Response Code: 400
// // Response Message: Bad request, search_product parameter is missing in POST request.

// // API 7: POST To Verify Login with valid details
// describe('API 5', () => {
//   it('PUT To All Brands List', () => {
//   cy.request('POST', 'https://automationexercise.com/api/searchProduct').then((response) => {
//     const responseBody = JSON.parse(response.body);
//      })
//   })
// })
// // API URL: https://automationexercise.com/api/verifyLogin
// // Request Method: POST
// // Request Parameters: email, password
// // Response Code: 200
// // Response Message: User exists!

// // API 8: POST To Verify Login without email parameter
// describe('API 5', () => {
//   it('PUT To All Brands List', () => {
//   cy.request('POST', 'https://automationexercise.com/api/searchProduct').then((response) => {
//     const responseBody = JSON.parse(response.body);
//      })
//   })
// })
// // API URL: https://automationexercise.com/api/verifyLogin
// // Request Method: POST
// // Request Parameter: password
// // Response Code: 400
// // Response Message: Bad request, email or password parameter is missing in POST request.

// // API 9: DELETE To Verify Login
// describe('API 5', () => {
//   it('PUT To All Brands List', () => {
//   cy.request('POST', 'https://automationexercise.com/api/searchProduct').then((response) => {
//     const responseBody = JSON.parse(response.body);
//      })
//   })
// })
// // API URL: https://automationexercise.com/api/verifyLogin
// // Request Method: DELETE
// // Response Code: 405
// // Response Message: This request method is not supported.

// // API 10: POST To Verify Login with invalid details
// describe('API 5', () => {
//   it('PUT To All Brands List', () => {
//   cy.request('POST', 'https://automationexercise.com/api/searchProduct').then((response) => {
//     const responseBody = JSON.parse(response.body);
//      })
//   })
// })
// // API URL: https://automationexercise.com/api/verifyLogin
// // Request Method: POST
// // Request Parameters: email, password (invalid values)
// // Response Code: 404
// // Response Message: User not found!

// // API 11: POST To Create/Register User Account
// describe('API 5', () => {
//   it('PUT To All Brands List', () => {
//   cy.request('POST', 'https://automationexercise.com/api/searchProduct').then((response) => {
//     const responseBody = JSON.parse(response.body);
//      })
//   })
// })
// // API URL: https://automationexercise.com/api/createAccount
// // Request Method: POST
// // Request Parameters: name, email, password, title (for example: Mr, Mrs, Miss), birth_date, birth_month, birth_year, firstname, lastname, company, address1, address2, country, zipcode, state, city, mobile_number
// // Response Code: 201
// // Response Message: User created!

// // API 12: DELETE METHOD To Delete User Account
// describe('API 5', () => {
//   it('PUT To All Brands List', () => {
//   cy.request('POST', 'https://automationexercise.com/api/searchProduct').then((response) => {
//     const responseBody = JSON.parse(response.body);
//      })
//   })
// })
// // API URL: https://automationexercise.com/api/deleteAccount
// // Request Method: DELETE
// // Request Parameters: email, password
// // Response Code: 200
// // Response Message: Account deleted!

// // API 13: PUT METHOD To Update User Account
// describe('API 5', () => {
//   it('PUT To All Brands List', () => {
//   cy.request('POST', 'https://automationexercise.com/api/searchProduct').then((response) => {
//     const responseBody = JSON.parse(response.body);
//      })
//   })
// })
// // API URL: https://automationexercise.com/api/updateAccount
// // Request Method: PUT
// // Request Parameters: name, email, password, title (for example: Mr, Mrs, Miss), birth_date, birth_month, birth_year, firstname, lastname, company, address1, address2, country, zipcode, state, city, mobile_number
// // Response Code: 200
// // Response Message: User updated!

// // API 14: GET user account detail by email
// describe('API 5', () => {
//   it('PUT To All Brands List', () => {
//   cy.request('POST', 'https://automationexercise.com/api/searchProduct').then((response) => {
//     const responseBody = JSON.parse(response.body);
//      })
//   })
// })
// // API URL: https://automationexercise.com/api/getUserDetailByEmail
// // Request Method: GET
// // Request Parameters: email
// // Response Code: 200
// // Response JSON: User Detail

// //   describe('API tests', () => {
// //     it('_________'), () =>{

// //     }
// //   });

// //   describe('API tests', () => {
// //     it('_________'), () =>{

// //     }
// //   });

// //   describe('API tests', () => {
// //     it('_________'), () =>{

// //     }
// //   });

// //   describe('API tests', () => {
// //     it('_________'), () =>{

// //     }
// //   });

// //   pm.test("Status code is 200", function () {
// //     pm.response.to.have.status(200);
// // });

// // pm.expect(respData).to.have.property('products').and.not.empty;


// // chat pvz:

// // describe("API testavimas", () => {
// //     it("Turėtų grąžinti visus produktus", () => {
// //       cy.request("GET", "/productsList").then((response) => {
// //         expect(response.status).to.eq(200);
// //         expect(response.body).to.have.property("products"); // Tikrina, ar yra "products"
// //       });
// //     });
// //   });
  
// // Cypress.Commands.add("login", (email, password) => {
// //     cy.request("POST", "/verifyLogin", {
// //       email,
// //       password,
// //     }).then((response) => {
// //       expect(response.status).to.eq(200);
// //     });
// //   });
  
// // describe("Vartotojo sukūrimas", () => {
// //     it("Turėtų sukurti naują vartotoją", () => {
// //       cy.request("POST", "/createAccount", {
// //         name: "Test User",
// //         email: "test@example.com",
// //         password: "password123",
// //       }).then((response) => {
// //         expect(response.status).to.eq(201); // Tikrinam ar grąžina 201 (sukurta)
// //       });
// //     });
// //   });
  
// // it("Turėtų sėkmingai prisijungti", () => {
// //     cy.request("POST", "/verifyLogin", {
// //       email: "test@example.com",
// //       password: "password123",
// //     }).then((response) => {
// //       expect(response.status).to.eq(200);
// //       expect(response.body).to.have.property("message", "Login successful!");
// //     });
// //   });
  