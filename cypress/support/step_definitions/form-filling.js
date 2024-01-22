/// <reference types="cypress" />

import{Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'

// WHEN STEPS SECTION

    //Filling Form informations
    When('Complete {string} in the SignUp form',(data)=>{
        if(data=='name'){
            cy.get('[data-qa="signup-name"]').type('Pedro Perez')
            cy.writeFile('cypress/fixtures/name.json','{"name": "Pedro Perez"}')
        }
        else if(data=='email'){
            cy.get('[data-qa="signup-email"]').type('peter07@gmail.com')
            cy.writeFile('cypress/fixtures/email.json','{"email": "peter07@gmail.com"}')
        }
    } )

    When('Complete {string} in the Login form',(data)=>{
        if(data=='password'){
            cy.readFile('cypress/fixtures/password.json').then(filling =>
                cy.get('[data-qa="login-password"]').type(filling.password)
                )   
        }
        else if(data=='email'){
            cy.readFile('cypress/fixtures/email.json').then(filling =>
                cy.get('[data-qa="login-email"]').type(filling.email)
                ) }  
    } )

     
    When('Complete {string} of the form',(text)=>{
        if(text=='the mandatory fields'){
            cy.get('#id_gender1').check()
            cy.get('[data-qa="password"]').type('passwordIsNull')
            cy.writeFile('cypress/fixtures/password.json','{"password": "passwordIsNull"}')
            cy.get('[data-qa="days"]').select('13')
            cy.get('[data-qa="months"]').select('6')
            cy.get('[data-qa="years"]').select('1994')
            cy.get('[data-qa="first_name"]').type('Pedro Joaquin')
            cy.get('[data-qa="last_name"]').type('Perez De la Cruz')
            cy.get('[data-qa="address"]').type('Chimichangas 1467, Monterrey')
            cy.get('[data-qa="country"]').select('Canada')
            cy.get('[data-qa="state"]').type('Mississauga')
            cy.get('[data-qa="city"]').type('Monterrey')
            cy.get('[data-qa="zipcode"]').type('55687')
            cy.get('[data-qa="mobile_number"]').type('521189623641')
        }
        else if(text=='all the fields'){

        }
        else if(text=='not all the mandatory fields'){

        }
        else if(text=='Credit Card Info'){
            cy.get('[data-qa="name-on-card"]').type('Pedro J. Perez DLC.')
            cy.get('[data-qa="card-number"]').type('5234666677778888')
            cy.get('[data-qa="cvc"]').type('123')
            cy.get('[data-qa="expiry-month"]').type('12')
            cy.get('[data-qa="expiry-year"]').type('2030')
        }
        else if(text=='Contact data'){
            cy.get('[data-qa="name"]').type('Pedro J. Perez DLC.')
            cy.get('[data-qa="email"]').type('pedroperez@gmail.com')
            cy.get('[data-qa="subject"]').type('Work Purpouses form filling')
            cy.get('[data-qa="message"]').type('Just filling in the form so we can do a little practice!')
        }
    })


    When('I add a comment to the order',()=>{
        cy.get('.form-control').type('This is a demo order for work purpouses')
    })