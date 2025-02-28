//cia kai divai divuose yra ir norim nusirodyti kelia: cy.get('ul.todo-list li')
// .each(($el,$list) => {
//     //turetume galimybe atlikti kazkokius tai veiksmus su individualiu saraso elementu
//     //ar elementas netuscias ir t.t.

//     //Paspausti kiekviena saraso elementa double click
//     $el.dblclick();
// })
// .then(($list) => {
//     expect($list).to.have.length(6);
// })


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
        cy.get('.single-products').first().find('a').contains('Add to cart').click({ force: true });
        cy.get('#cartModal').should('be.visible');
        cy.get('#cartModal').contains('Continue Shopping').click({ force: true });
        cy.get('.single-products').eq(1).find('a').contains('Add to cart').click({ force: true });
        cy.get('#cartModal').should('be.visible');
        cy.get('#cartModal').contains('Continue Shopping').click({ force: true });
        cy.get('.single-products').eq(2).find('a').contains('Add to cart').click({ force: true });
        cy.get('#cartModal').should('be.visible');
        cy.get('#cartModal').contains('Continue Shopping').click({ force: true });
        // sitas budas geresnis: cy.get("ul.nav > li > a[href='/view_cart']").click();
        cy.contains('Cart').click();
        cy.get('#cart_info #cart_info_table .cart_quantity').should('have.length', 3);
        cy.get('#cart_info #cart_info_table .cart_quantity').each(($el) => {
            cy.wrap($el).should('be.visible');
        });
        cy.contains('Signup / Login').click();
        cy.get('[data-qa="login-email"]').type('zebre@example.com');
        cy.get('[data-qa="login-password"]').type('pass');
        cy.get('[data-qa="login-button"]').click();
        cy.contains('Cart').click();
        cy.get('#cart_info #cart_info_table .cart_quantity').should('have.length', 3);
        cy.get('#cart_info #cart_info_table .cart_quantity').each(($el) => {
            cy.wrap($el).should('be.visible');
        });
        cy.contains('Logout').click();
    })
});

// Test Case 21: Add review on product
describe('Test Case 21: Add review on product', () => {
    it.only("Add review on product", () => {
        cy.visit('https://automationexercise.com');
        cy.contains('Home').should('be.visible');
        cy.contains('Products').click();
        cy.contains('h2', 'All Products').should('be.visible');
        // norėčiau geresnį kelią rasti (suknele View product):
        cy.get('a[href="/product_details/4"]').contains('View Product').click();
        // cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').contains('View Product').click();
        cy.contains('Write Your Review').should('be.visible');
        cy.get('#name').type('Zebrė');
        cy.get('#email').type('zebre@example.com');
        cy.get('#review').type('Graži ir kokybiška suknelė.');
        cy.get('#button-review').click();
        cy.get('#review-section').contains('Thank you for your review.').should('be.visible');
    })
});

// Test Case 22: Add to cart from Recommended 
describe('Test Case 22: Add to cart from Recommended ', () => {
    it.only("Add to cart from Recommended ", () => {
        cy.visit('https://automationexercise.com');
        cy.contains('Home').should('be.visible');
        cy.get('.recommended_items').contains('recommended items').should('be.visible');
        cy.get('[data-product-id="2"]').contains('Add to cart').click();
        // kaip paspausti antrajį produktą?
        cy.get('.text-center').contains('View Cart').click();
        cy.get('#cart_info').should('have.length', '1');
    })
});

// Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality
describe('Test Case 22: Add to cart from Recommended ', () => {
    it("Add to cart from Recommended ", () => {
        cy.visit('https://automationexercise.com');
        cy.contains('Home').should('be.visible');
        cy.scrollTo("bottom");
        cy.get('.single-widget').contains('Subscription').should('be.visible');
        cy.get('#scrollUp').click();
        cy.get('.carousel-inner').contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
    })
});
