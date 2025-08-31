
   it('Покупка премиум', function () {
        cy.visit('https://pokemonbattle.ru');
        cy.get('#k_email').type('MAIL');
        cy.wait(5000);
        cy.get('#k_password').type('PASSWORD');
        cy.get('.MuiButton-root').click();
        cy.get('.header_card_trainer').click();
        cy.get('[data-qa="premium"]').click();
        cy.get('.auth__input').type('30');
        cy.get('#buy-premium').click();
        cy.get('.card_number').type('4620869113632996');
        cy.get('.card_csv').type('125');
        cy.get('.card_date').type('1226');
        cy.get('.card_name').type('VERVERA');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.get('.threeds_number').type('56456');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.get('#ok-battles-premium').click();
       })
       
 it('Смена аватара', function () {
        cy.visit('https://pokemonbattle.ru');
        cy.get('#k_email').type('miss.panezhina@yandex.ru');
        cy.wait(5000);
        cy.get('#k_password').type('Academy113!');
        cy.get('.MuiButton-root').click();
        cy.get('.header_card_trainer').click();

    

    })
