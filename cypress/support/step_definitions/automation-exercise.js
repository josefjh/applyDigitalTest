/// <reference types="cypress" />

import{Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'

// WHEN STEPS SECTION

    //Click on view product on the main page
    When('Click to View a Product',()=>{
        cy.get('a[href*="product_details/30"]').click()
    })

    //Clicking on quantity and setting number
    When('Enter {string} in Quantity Box',(number)=>{
        cy.get('#quantity').clear()
        cy.get('#quantity').type(parseInt(number))
    })

// THEN STEPS SECTION

    //Visual and items confirmations
    Then('I can see the product-information is {string}',(name)=>{
        cy.get('h2').should('contain',name)
    })

    Then('I can see the PopUp message {string}',(message)=>{
        cy.get('h4').should('contain',message)
    })

    Then('I can see the {string} button',(button)=>{
        if(button=='Proceed to Checkout'){
            cy.get('div.col-sm-6 > a').should('exist')
        }
    })

    Then('I can see the Login-SignUp page',()=>{
        cy.get('div.login-form').should('exist')
        cy.get('div.signup-form').should('exist')
    })

    Then('I can see the {string} banner',(title)=>{
        cy.get('h2').should('contain',title)
    })

    Then('I can see the Landing Page',()=>{
        cy.get('h2').should('contain','Full-Fledged practice website for Automation Engineers')
    })


    //Delete account href="/delete_account"