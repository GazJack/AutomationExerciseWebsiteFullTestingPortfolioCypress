// Test Case 6: Contact Us Form
describe('Test Case 6: Contact Us Form', () => { // 1. Launch browser
    it("Contact us Form", () => {
        cy.visit('https://automationexercise.com'); // 2. Navigate to url 'http://automationexercise.com'
        cy.contains('Home').should('be.visible'); // 3. Verify that home page is visible successfully
        cy.contains('Contact us').click(); // 4. Click on 'Contact Us' button
        cy.get('[data-qa="name"]').type('Bebras');
        cy.get('[data-qa="email"]').type('bebras@example.com');
        cy.get('[data-qa="subject"]').type('Pasiūlymas');
        cy.get('[data-qa="message"]').type('Pastebėjau, kad jūsų puslapio nuotrauka yra nekokybiška. Siūlau dabartinę puslapio nuotrauką pakeisti į mano prisegtą.');
        cy.get('[name="upload_file"]').selectFile('cypress/fixtures/baigiamajam.png');
        cy.get('[data-qa="submit-button"]').click(); // 8. Click 'Submit' button
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
        // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
        cy.get('.btn-success').click(); // 11. Click 'Home' button and verify that landed to home page successfully
        cy.contains('Home').should('be.visible');
    })
});

// Test Case 7: Verify Test Cases Page
describe('Test Case 7: Verify Test Cases Page', () => {
    it("Verify Test Cases Page", () => {
        cy.visit('https://automationexercise.com');
        cy.contains('Home').should('be.visible');
        cy.contains('Test Cases').click();
        cy.contains('Test Cases').should('be.visible');
    })
});

// Test Case 8: Verify All Products and product detail page
describe('Test Case 8: Verify All Products and product detail page', () => {
    it("Verify All Products and product detail page", () => {
        cy.visit('https://automationexercise.com');
        cy.contains('Home').should('be.visible');
        cy.contains('Products').click();
        cy.contains('All Products').should('be.visible');
        cy.get('.features_items').should('be.visible');
        cy.get('.features_items .col-sm-4:first .choose a').click();
        cy.contains('h2', 'Blue Top').should('be.visible');
        cy.contains('Blue Top').should('be.visible');
        cy.contains('Category').should('be.visible');
        cy.contains('Rs. 500').should('be.visible');
        cy.contains('Availability').should('be.visible');
        cy.contains('Condition').should('be.visible');
        cy.contains('Brand').should('be.visible');
    })
});

// Test Case 9: Search Product
describe('Test Case 9: Search Product', () => {
    it("Search Product", () => {
        cy.visit('https://automationexercise.com');
        cy.contains('Home').should('be.visible');
        cy.contains('Products').click();
        cy.contains('All Products').should('be.visible');
        cy.get('#search_product').type('dress');
        cy.get('#submit_search').click();
        cy.contains('Searched Products').should('be.visible');
        cy.get('.features_items').should('be.visible');
    })
});

// Test Case 10: Verify Subscription in home page
describe('Test Case 10: Verify Subscription in home page', () => {
    it("Verify Subscription in home page", () => {
        cy.visit('https://automationexercise.com');
        cy.contains('Home').should('be.visible');
        cy.contains('Subscription').should('be.visible');
        cy.get('#susbscribe_email').type('zebre@example.com');
        cy.get('#subscribe').click();
        cy.contains('You have been successfully subscribed!').should('exist');
    })
});
