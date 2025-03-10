// Test Case 11: Verify Subscription in Cart page
describe('Test Case 11: Verify Subscription in Cart page', () => {
    it("Verify Subscription in Cart page", () => {
        cy.homePage();
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
        cy.homePage();
        cy.contains('Products').click();
        cy.get('.features_items').should('be.visible');
        cy.get('.features_items .product-image-wrapper').first().trigger('mouseover');
        cy.get('.features_items .product-image-wrapper').first().find('a').contains('Add to cart').click({ force: true });
        cy.get('#cartModal').should('be.visible');
        cy.get('#cartModal').contains('Continue Shopping').click({ force: true });
        cy.get('.features_items .product-image-wrapper').eq(1).trigger('mouseover');
        cy.get('.features_items .product-image-wrapper').eq(1).find('a').contains('Add to cart').click({ force: true });
        cy.get('#cartModal').should('be.visible');
        cy.get('#cartModal').contains('View Cart').click({ force: true });
        cy.get('.cart_description').should('have.length', 2)
        cy.get('.cart_price').each(($price) => {
            cy.wrap($price).should('be.visible');
        });
        cy.get('.cart_quantity').each(($quantity) => {
            cy.wrap($quantity).should('be.visible');
        });
        cy.get('.cart_total_price').each(($total) => {
            cy.wrap($total).should('be.visible');
        });
    })
});

// Test Case 13: Verify Product quantity in Cart
describe('Test Case 13: Verify Product quantity in Cart', () => {
    it("Verify Product quantity in Cart", () => {
        cy.homePage();
        cy.get(':nth-child(5) .product-image-wrapper .choose .nav li a').contains('View Product').click();
        cy.contains('h2', 'Sleeveless Dress').should('be.visible');
        cy.get('#quantity').clear();
        cy.get('#quantity').type(4);
        cy.contains('Add to cart').click();
        cy.get('u').click();
        cy.get('.disabled').should('have.text', '4')
    })
});

// 14: prisijungima galima sukelti i funkcija
// Test Case 14: Place Order: Register while Checkout
describe('Test Case 14: Place Order: Register while Checkout', () => {
    it("Place Order: Register while Checkout", () => {
        cy.visit('https://automationexercise.com');
        cy.contains('Home').should('be.visible');
        cy.contains('Products').click();
        cy.get('.features_items').should('be.visible');
        cy.get('.features_items .product-image-wrapper').first().trigger('mouseover');
        cy.wait(1000);
        cy.get('.features_items .product-image-wrapper').first().find('a').contains('Add to cart').click({ force: true });
        cy.wait(1000)
        cy.get('#cartModal').should('be.visible');
        cy.wait(1000);
        cy.get('#cartModal').contains('Continue Shopping').click({ force: true });
        cy.wait(1000);
        cy.get('.features_items .product-image-wrapper').eq(1).trigger('mouseover');
        cy.get('.features_items .product-image-wrapper').eq(1).find('a').contains('Add to cart').click({ force: true });
        cy.wait(1000);
        cy.get('#cartModal').contains('Continue Shopping').click({ force: true });
        cy.wait(1000);
        cy.contains('Cart').click();
        cy.get('#cart_info').should('be.visible');
        cy.get('.col-sm-6 > .btn').click();
        cy.get('.modal-body > :nth-child(2) > a > u').click();
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
        cy.contains('Cart').click();
        cy.get('.col-sm-6 > .btn').click();
        cy.contains('Address Details').should('be.visible');
        cy.contains('Review Your Order').should('be.visible');
        cy.get('.form-control').type('Sveiki. Mano namas yra pirmasis žiūrint nuo parduotuvės pusės.');
        cy.get(':nth-child(7) > .btn').click();
        cy.get('[data-qa="name-on-card"]').type('Zebras');
        cy.get('[data-qa="card-number"]').type('8800238800');
        cy.get('[data-qa="cvc"]').type('080');
        cy.get('[data-qa="expiry-month"]').type('02');
        cy.get('[data-qa="expiry-year"]').type('2028');
      //1. atsiranda zinute "Your order has been placed successfully!"
      //2. sita zinute atsiranda akimirkai ir svetaine pereina i kita puslapi(refreshinasi)

      //isjungiu persikrovima      
      //sustabdyti formos numatytaji veikima  
      cy.get('form#payment-form').then(($form) => {
        $form.on('submit', (e) => {
            e.preventDefault(); // Stop the form from being submitted automatically
        });
      });

      //paspausti formos mygtuka ranka
      //17. Click 'Pay and Confirm Order' button
      cy.get('[data-qa="pay-button"]').click();
   
      //18. Verify success message 'Your order has been placed successfully!'
     cy.get("#success_message > .alert-success").should("contain.text", "Your order has been placed successfully!");

     cy.get('form#payment-form').then(($form) => {
      $form.off('submit');
    });
cy.get('[data-qa="pay-button"]').click();

      
      //19. Click 'Delete Account' button
      cy.contains("Delete Account").click();
      //20. Verify 'ACCOUNT DELETED!' and click 'Continue' button
      cy.contains("Account Deleted!").should("be.visible");
      cy.get("a[data-qa='continue-button']").click();
    });
  });



// cy.get value



//         cy.get('[data-qa="pay-button"]').click();
//         // cy.get('Your order has been placed successfully!').should('exist');
//         cy.get('#success_message > .alert-success').should('exist').and('contain', 'Your order has been placed successfully!');
//         cy.contains('Delete Account').click(); 
//         cy.contains('Account Deleted!').should('be.visible'); 
//     })
// });
// 13. Click 'Proceed To Checkout' button
// 14. Verify Address Details and Review Your Order
// 15. Enter description in comment text area and click 'Place Order'
// 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
// 17. Click 'Pay and Confirm Order' button
// 18. Verify success message 'Your order has been placed successfully!'
// 19. Click 'Delete Account' button
// 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button


// Test Case 17: Remove Products From Cart
describe('Test Case 17: Remove Products From Cart', () => {
    it("Remove Products From Cart", () => {
        cy.homePage();
        cy.contains('Products').click();
        cy.get('.features_items').should('be.visible');
        cy.get('.features_items .product-image-wrapper').first().trigger('mouseover');
        cy.get('.features_items .product-image-wrapper').first().find('a').contains('Add to cart').click({ force: true });
        cy.get('#cartModal').should('be.visible');
        cy.get('#cartModal').contains('Continue Shopping').click({ force: true });
        cy.get('.features_items .product-image-wrapper').eq(1).trigger('mouseover');
        cy.get('.features_items .product-image-wrapper').eq(1).find('a').contains('Add to cart').click({ force: true });
        cy.get('#cartModal').should('be.visible');
        cy.get('#cartModal').contains('Continue Shopping').click({ force: true });
        cy.contains('Cart').click();
        cy.get('#cart_info').should('be.visible');
        cy.get('#product-1 > .cart_delete > .cart_quantity_delete > .fa').click();
        cy.contains('Men Tshirt').should('be.visible');
    })
});

// Test Case 18: View Category Products
describe('Test Case 18: View Category Products', () => {
    it("View Category Products", () => {
        cy.homePage();
        cy.contains('Category').should('be.visible');
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click();
        cy.get('#Women > .panel-body > ul > :nth-child(2) > a').click();
        cy.contains('h2', 'Women - Tops Products').should('be.visible');
        cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click();
        cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click();
        cy.contains('h2', 'Men - Tshirts Products').should('be.visible');
    })
});
