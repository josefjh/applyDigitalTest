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