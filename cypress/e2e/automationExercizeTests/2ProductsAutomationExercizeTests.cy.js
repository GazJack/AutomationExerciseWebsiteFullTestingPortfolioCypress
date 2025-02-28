// Test Case 6: Contact Us Form
describe('Test Case 6: Contact Us Form', () => {
    it("Contact us Form", () => {
        cy.homePage();
        cy.contains('Contact us').click();
        cy.get('[data-qa="name"]').type('Bebras');
        cy.get('[data-qa="email"]').type('bebras@example.com');
        cy.get('[data-qa="subject"]').type('Pasiūlymas');
        cy.get('[data-qa="message"]').type('Pastebėjau, kad jūsų puslapio nuotrauka yra nekokybiška. Siūlau dabartinę puslapio nuotrauką pakeisti į mano prisegtą.');
        cy.get('[name="upload_file"]').selectFile('cypress/fixtures/baigiamajam.png');
        cy.get('[data-qa="submit-button"]').click();
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
        cy.get('.btn-success').click();
        cy.contains('Home').should('be.visible');
    })
});

// Test Case 7: Verify Test Cases Page
describe('Test Case 7: Verify Test Cases Page', () => {
    it("Verify Test Cases Page", () => {
        cy.homePage();
        cy.contains('Test Cases').click();
        cy.contains('Test Cases').should('be.visible');
    })
});

// Test Case 8: Verify All Products and product detail page
describe('Test Case 8: Verify All Products and product detail page', () => {
    it("Verify All Products and product detail page", () => {
        cy.homePage();
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
        cy.homePage();
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
        cy.homePage();
        cy.contains('Subscription').should('be.visible');
        cy.get('#susbscribe_email').type('zebre@example.com');
        cy.get('#subscribe').click();
        cy.contains('You have been successfully subscribed!').should('exist');
    })
});
