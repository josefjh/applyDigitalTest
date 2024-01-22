/// <reference types="cypress" />

import{Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'

// Declaring initial values for auxiliary variables in case they are needed
var variable = 0 

// GIVEN STEPS SECTION

    // Visiting the Website
    Given('I want to visit the site {string}',(url)=>{
        cy.visit('https://'+url+'.com')
    })

    // Scrolling through the page
     Given('I scroll down to {string}',(segment)=>{
        if(segment=='middle'){
            cy.scrollTo('center')
        }       
        else if(segment=='bottom'){
            cy.scrollTo(segment)
        }       
    })


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

    //More clicking but in a general form for different buttons throught the website
    When('Click on {string}',(name)=>{
        // Adding to cart after selection of quantity desired for the item
        if(name=='Add to cart'){
            cy.get('button[class*="btn btn-default cart"]').click()
        }
        else if(name=='View Cart'){
            cy.get('div.modal-body > p > a').click()
        }
        
        
    })


// THEN STEPS SECTION

    //Visual and items confirmations
    Then('I can see the product-information is {string}',(name)=>{
        cy.get('h2').should('contain',name)
    })

    Then('I can see the PopUp message {string}',(message)=>{
        cy.get('h4').should('contain',message)
    })