// Test Case 19: View & Cart Brand Products
describe('Test Case 19: View & Cart Brand Products', () => {
    it("View & Cart Brand Products", () => {
        cy.visit('https://automationexercise.com');
        cy.contains('Home').should('be.visible');
        cy.contains('Products').click();
        cy.contains('h2', 'Brands').should('be.visible');
        cy.contains('Polo').click();
        cy.contains('h2', 'Brand - Polo Products').should('be.visible');
        cy.contains('H&M').click();
        cy.contains('h2', 'Brand - H&M Products').should('be.visible');
    })
});

// Test Case 20: Search Products and Verify Cart After Login
describe('Test Case 20: Search Products and Verify Cart After Login', () => {
    it("Search Products and Verify Cart After Login", () => {
        cy.visit('https://automationexercise.com');
        cy.contains('Home').should('be.visible');
        cy.contains('Products').click();
        cy.contains('h2', 'All Products').should('be.visible');
        cy.get('#search_product').type('jeans');
        cy.get('#submit_search').click();
        cy.contains('h2', 'Searched Products').should('be.visible');
        cy.get('.single-products').should('have.length', 3);
        cy.get('.single-products').each(($el) => {
            cy.wrap($el).should('be.visible');
        });


    })
});

// 7. Verify all the products related to search are visible
// 8. Add those products to cart
// 9. Click 'Cart' button and verify that products are visible in cart
// 10. Click 'Signup / Login' button and submit login details
// 11. Again, go to Cart page
// 12. Verify that those products are visible in cart after login as well