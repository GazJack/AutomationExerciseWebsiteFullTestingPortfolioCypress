describe('Test Case 1: Register User', () => {
    it("Let's start testing this site", () => {
        cy.homePage();
        cy.contains('Signup / Login').click();
        cy.contains('New User Signup!').should('be.visible');
        cy.get('[data-qa="signup-name"]').type('Zebras');
        cy.get('[data-qa="signup-email"]').type('zebras@example.com');
        cy.get('[data-qa="signup-button"]').click();
        cy.contains('Enter Account Information').should('be.visible');
        cy.get('#id_gender1').click();
        cy.get('[data-qa="password"]').type('pass');
        cy.get('[data-qa="days"]').select('19');
        cy.get('[data-qa="months"]').select('January');
        cy.get('[data-qa="years"]').select('1991');
        cy.get('#newsletter').check();
        cy.get('#optin').check();
        cy.get('[data-qa="first_name"]').type('Zebras');
        cy.get('[data-qa="last_name"]').type('Zebrauskas');
        cy.get('[data-qa="company"]').type('WildNature');
        cy.get('[data-qa="address"]').type('Haugetuft 2');
        cy.get('[data-qa="address2"]').type('Apartment 4');
        cy.get('[data-qa="country"]').select('United States');
        cy.get('[data-qa="state"]').type('California');
        cy.get('[data-qa="city"]').type('Los Angeles');
        cy.get('[data-qa="zipcode"]').type('789457');
        cy.get('[data-qa="mobile_number"]').type('+4710965125');
        cy.get('[data-qa="create-account"]').click();
        cy.contains('Account Created!').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
        cy.contains('Logged in as Zebras').should('be.visible');
        cy.contains('Delete Account').click();
        cy.contains('Account Deleted!').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
    });
});

describe('Test Case 2: Login User with correct email and password', () => {
    it('Login with correct data', () => {
        cy.homePage();
        cy.contains('Signup / Login').click();
        cy.contains('New User Signup!').should('be.visible');
        cy.get('[data-qa="signup-name"]').type('Zebriukas');
        cy.get('[data-qa="signup-email"]').type('zebriukas@example.com');
        cy.get('[data-qa="signup-button"]').click();
        cy.contains('Enter Account Information').should('be.visible');
        cy.get('#id_gender1').click();
        cy.get('[data-qa="password"]').type('pass');
        cy.get('[data-qa="days"]').select('19');
        cy.get('[data-qa="months"]').select('January');
        cy.get('[data-qa="years"]').select('1991');
        cy.get('#newsletter').check();
        cy.get('#optin').check();
        cy.get('[data-qa="first_name"]').type('Zebras');
        cy.get('[data-qa="last_name"]').type('Zebrauskas');
        cy.get('[data-qa="company"]').type('WildNature');
        cy.get('[data-qa="address"]').type('Haugetuft 2');
        cy.get('[data-qa="address2"]').type('Apartment 4');
        cy.get('[data-qa="country"]').select('United States');
        cy.get('[data-qa="state"]').type('California');
        cy.get('[data-qa="city"]').type('Los Angeles');
        cy.get('[data-qa="zipcode"]').type('789457');
        cy.get('[data-qa="mobile_number"]').type('+4710965125');
        cy.get('[data-qa="create-account"]').click();
        cy.contains('Account Created!').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
        cy.contains('Logout').click();
        cy.contains('Login to your account').should('be.visible');
        cy.get('[data-qa="login-email"]').type('zebriukas@example.com');
        cy.get('[data-qa="login-password"]').type('pass');
        cy.get('[data-qa="login-button"]').click();
        cy.contains('Logged in as Zebriukas').should('be.visible');
        cy.contains('Delete Account').click();
        cy.contains('Account Deleted!').should('be.visible');
    });
});

describe('Test Case 3: Login User with incorrect email and password', () => {
    it('Login with incorrect data', () => {
        cy.homePage();
        cy.contains('Signup / Login').click();
        cy.contains('Login to your account').should('be.visible');
        cy.get('[data-qa="login-email"]').type('zebras@haha.com');
        cy.get('[data-qa="login-password"]').type('pass');
        cy.get('[data-qa="login-button"]').click();
        cy.contains('Your email or password is incorrect!').should('be.visible');
    });
});

describe('Test Case 4: Logout User', () => {
    it('Login and logout already created user', () => {
        cy.homePage();
        cy.contains('Signup / Login').click();
        cy.contains('Login to your account').should('be.visible');
        cy.get('[data-qa="login-email"]').type('zebre@example.com');
        cy.get('[data-qa="login-password"]').type('pass');
        cy.get('[data-qa="login-button"]').click();
        cy.contains('Logged in as Zebre').should('be.visible');
        cy.contains('Logout').click();
        cy.contains('Home').should('be.visible');
    });
});

describe('Test Case 5: Register User with existing email', () => {
    it('Register user with existing email', () => {
        cy.homePage();
        cy.contains('Signup / Login').click();
        cy.contains('New User Signup!').should('be.visible');
        cy.get('[data-qa="signup-name"]').type('Zebre');
        cy.get('[data-qa="signup-email"]').type('zebre@example.com');
        cy.get('[data-qa="signup-button"]').click();
        cy.contains('Email Address already exist!').should('be.visible');
    })
});
