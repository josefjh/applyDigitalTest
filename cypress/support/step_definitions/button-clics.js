/// <reference types="cypress" />

import{Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'

// WHEN STEPS SECTION

    //More clicking but in a general form for different buttons throught the website
    When('Click on {string}',(name)=>{
        // Adding to cart after selection of quantity desired for the item
        if(name=='Add to cart'){
            cy.get('button[class*="btn btn-default cart"]').click()
        }
        else if(name=='View Cart' || name=='Register / Login'){
            cy.get('div.modal-body > p > a').click()
        }
        else if(name=='Proceed to Checkout'){
            cy.get('div.col-sm-6 > a').click()
        } 
        else if(name=='Signup'){
            cy.get('[data-qa="signup-button"]').click()
        }
        else if(name=='Create Account'){
            cy.get('[data-qa="create-account"]').click()
        }
        else if(name=='Continue'){
            cy.get('[data-qa="continue-button"]').click()
        }
        else if(name=='Cart'){
            cy.get('.nav > li:nth-child(3) > a:nth-child(1)').contains('Cart').click()
        }
        else if(name=='Place Order'){
            cy.get('a[href*="/payment"]').click()
        }
        else if(name=='Pay and Confirm Order'){
            cy.get('[data-qa="pay-button"]').click()
        }
        else if(name=='Login'){
            cy.get('[data-qa="login-button"]').click()
        }
        else if(name=='Logout'){
            cy.get('.navbar-nav > li:nth-child(4) > a:nth-child(1)').contains('Logout').click()
        }
        else if(name=='Contact Us'){
            cy.get('.navbar-nav > li:nth-child(9) > a:nth-child(1)').contains('Contact us').click()
        }
        else if(name=='Submit'){
            cy.get('[data-qa="submit-button"]').click()
            cy.scrollTo('top')
        }
    })
