// Test Case 1: Register User
describe('Test Case 1: Register User', () => { // 1. Launch browser
    it("Let's start testing this site", () => {
        cy.visit('https://automationexercise.com'); // 2. Navigate to url 'http://automationexercise.com'
        cy.contains('Home').should('be.visible'); // 3. Verify that home page is visible successfully
        cy.contains('Signup / Login').click();  // 4. Click on 'Signup / Login' button
        cy.contains('New User Signup!').should('be.visible'); // 5. Verify 'New User Signup!' is visible
        cy.get('[data-qa="signup-name"]').type('Zebras'); // 6. Enter name and email address:
        cy.get('[data-qa="signup-email"]').type('zebras@example.com');
        cy.get('[data-qa="signup-button"]').click(); // 7. Click 'Signup' button  
        cy.contains('Enter Account Information').should('be.visible'); // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible  
        cy.get('#id_gender1').click(); // 9. Fill details: Title, Name, Email, Password, Date of birth
        cy.get('[data-qa="password"]').type('pass');
        cy.get('[data-qa="days"]').select('19');
        cy.get('[data-qa="months"]').select('January');
        cy.get('[data-qa="years"]').select('1991');
        cy.get('#newsletter').check(); // 10. Select checkbox 'Sign up for our newsletter!'
        cy.get('#optin').check(); // 11. Select checkbox 'Receive special offers from our partners!'  
        cy.get('[data-qa="first_name"]').type('Zebras'); // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        cy.get('[data-qa="last_name"]').type('Zebrauskas');
        cy.get('[data-qa="company"]').type('WildNature');
        cy.get('[data-qa="address"]').type('Haugetuft 2');
        cy.get('[data-qa="address2"]').type('Apartment 4');
        cy.get('[data-qa="country"]').select('United States');
        cy.get('[data-qa="state"]').type('California');
        cy.get('[data-qa="city"]').type('Los Angeles');
        cy.get('[data-qa="zipcode"]').type('789457');
        cy.get('[data-qa="mobile_number"]').type('+4710965125');
        cy.get('[data-qa="create-account"]').click(); // 13. Click 'Create Account button'
        cy.contains('Account Created!').should('be.visible'); // 14. Verify that 'ACCOUNT CREATED!' is visible  
        cy.get('[data-qa="continue-button"]').click(); // 15. Click 'Continue' button
        cy.contains('Logged in as Zebras').should('be.visible'); // 16. Verify that 'Logged in as username' is visible  
        cy.contains('Delete Account').click(); // 17. Click 'Delete Account' button
        cy.contains('Account Deleted!').should('be.visible'); // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        cy.get('[data-qa="continue-button"]').click();
    });
});

// Test Case 2: Login User with correct email and password
describe('Test Case 2: Login User with correct email and password', () => { // 1. Launch browser
    it('Login with correct data', () => {
        cy.visit('https://automationexercise.com'); // 2. Navigate to url 'http://automationexercise.com'
        cy.contains('Home').should('be.visible'); // 3. Verify that home page is visible successfully
        cy.contains('Signup / Login').click(); // 4. Click on 'Signup / Login' button
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
        cy.contains('Login to your account').should('be.visible'); // 5. Verify 'Login to your account' is visible
        cy.get('[data-qa="login-email"]').type('zebriukas@example.com');
        cy.get('[data-qa="login-password"]').type('pass'); // 6. Enter correct email address and password
        cy.get('[data-qa="login-button"]').click(); // 7. Click 'login' button
        cy.contains('Logged in as Zebriukas').should('be.visible'); // 8. Verify that 'Logged in as username' is visible
        cy.contains('Delete Account').click(); // 9. Click 'Delete Account' button
        cy.contains('Account Deleted!').should('be.visible'); // 10. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    });
});

// Test Case 3: Login User with incorrect email and password
describe('Test Case 3: Login User with incorrect email and password', () => { // 1. Launch browser
    it('Login with incorrect data', () => {
        cy.visit('https://automationexercise.com'); // 2. Navigate to url 'http://automationexercise.com'
        cy.contains('Home').should('be.visible'); // 3. Verify that home page is visible successfully
        cy.contains('Signup / Login').click(); // 4. Click on 'Signup / Login' button
        cy.contains('Login to your account').should('be.visible'); // 5. Verify 'Login to your account' is visible
        cy.get('[data-qa="login-email"]').type('zebras@haha.com'); // 6. Enter incorrect email address and password
        cy.get('[data-qa="login-password"]').type('pass');
        cy.get('[data-qa="login-button"]').click(); // 7. Click 'login' button
        cy.contains('Your email or password is incorrect!').should('be.visible'); // 8. Verify error 'Your email or password is incorrect!' is visible
    });
});

// Test Case 4: Logout User
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'Login to your account' is visible
// 6. Enter correct email address and password
// 7. Click 'login' button
// 8. Verify that 'Logged in as username' is visible
// 10. Verify that user is navigated to login page
describe('Test Case 4: Logout User', () => { // 1. Launch browser
    it('Login and logout already created user', () => {
        cy.visit('https://automationexercise.com'); // 2. Navigate to url 'http://automationexercise.com'
        cy.contains('Home').should('be.visible'); // 3. Verify that home page is visible successfully
        cy.contains('Signup / Login').click(); // 4. Click on 'Signup / Login' button
        cy.contains('Login to your account').should('be.visible'); // 5. Verify 'Login to your account' is visible
        cy.get('[data-qa="login-email"]').type('zebre@example.com'); // 6. Enter incorrect email address and password
        cy.get('[data-qa="login-password"]').type('pass');
        cy.get('[data-qa="login-button"]').click(); // 7. Click 'login' button
        cy.contains('Logged in as Zebre').should('be.visible'); // 8. Verify error 'Your email or password is incorrect!' is visible
        cy.contains('Logout').click(); // 9. Click 'Logout' button
        cy.contains('Home').should('be.visible'); // 10. Verify that user is navigated to login page   
    });
});

// Test Case 5: Register User with existing email
describe('Test Case 5: Register User with existing email', () => { 
    it('Register user with existing email', () => {
        cy.visit('https://automationexercise.com'); 
        cy.contains('Home').should('be.visible'); 
        cy.contains('Signup / Login').click(); 
        cy.contains('New User Signup!').should('be.visible');
        cy.get('[data-qa="signup-name"]').type('Zebre');
        cy.get('[data-qa="signup-email"]').type('zebre@example.com');
        cy.get('[data-qa="signup-button"]').click();
        cy.contains('Email Address already exist!').should('be.visible');
    })
});