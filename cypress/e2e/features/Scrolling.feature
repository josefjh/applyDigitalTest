Feature: Visiting the Website

    Scenario: Successful visit of the website and middle scroll
    Given I want to visit the site "automationexercise"
    When I scroll down to "middle"
    #Then Obtengo un Status code "200"
    #And Confirmo que el "name" es "typhlosion"

        Scenario: Successful visit of the website and full scroll to bottom
    Given I want to visit the site "automationexercise"
    When I scroll down to "bottom"