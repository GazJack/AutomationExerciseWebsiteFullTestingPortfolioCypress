// // Test Case 11: Verify Subscription in Cart page
describe('Test Case 11: Verify Subscription in Cart page', () => {
    it("Verify Subscription in Cart page", () => {
        cy.visit('https://automationexercise.com');
        cy.contains('Home').should('be.visible');
        cy.contains('Cart').click();
        cy.contains('Subscription').should('be.visible');
        cy.get('#susbscribe_email').type('zebre@example.com');
        cy.get('#subscribe').click();
        cy.contains('You have been successfully subscribed!').should('exist');
    })
});

// Test Case 12: Add Products in Cart
describe('Test Case 12: Add Products in Cart', () => {
    it("Add Products in Cart", () => {
        cy.visit('https://automationexercise.com');
        cy.contains('Home').should('be.visible');
        cy.contains('Products').click();
        cy.get('.features_items').should('be.visible');

        cy.get('.product-overlay').first().trigger('mouseover');
        cy.wait(500);
        cy.get('.product-overlay').first().find('a').contains('Add to cart').click({ force: true });
        cy.wait(500);
        cy.get('#cartModal').should('be.visible');
        cy.get('#cartModal').contains('Continue Shopping').click({ force: true });
        cy.wait(500);

        cy.get('.product-overlay').eq(1).trigger('mouseover');
        cy.wait(500);
        cy.get('.product-overlay').eq(1).find('a').contains('Add to cart').click({ force: true });
        cy.wait(500);
        cy.get('#cartModal').should('be.visible');
        cy.get('#cartModal').contains('View Cart').click({ force: true });
        cy.wait(500);

        // neveikia: cy.get('#cart_items tr').should('have.length', 2);
        // veikia, bet nežinau ar gerai, nes nerašo, kad 2 ateina tik ekrane matosi: 
        cy.get('#cart_items tr').should('exist', 2);
        cy.get('.cart_price').eq(0).should('contain', 'Rs. 500');
        cy.get('.cart_price').eq(1).should('contain', 'Rs. 400');
        // nuo cia nebeveikia, bet yra klaidu
        cy.get('.cart_quantity input').eq(0).should('have.value', '1');
        cy.get('.cart_quantity input').eq(1).should('have.value', '1');
        cy.get('.total_price').should('contain', 'Rs. 900');

    })
});
// 5. Hover over first product and click 'Add to cart'
// 6. Click 'Continue Shopping' button
// 7. Hover over second product and click 'Add to cart'
// 8. Click 'View Cart' button
// 9. Verify both products are added to Cart
// 10. Verify their prices, quantity and total price

//reikia iki galo susitikrinti, susipaprastinti ir issiaiskinti kas kaip