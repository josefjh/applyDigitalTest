Feature: Full Happy path for the requested test
banner
    Scenario: Complete User Flow in the website
    Given I want to visit the site "automationexercise"
    And I scroll down to "middle"
    When Click to View a Product 
    Then I can see the product-information is "Premium Polo T-Shirts"
    When Enter "30" in Quantity Box
    And Click on "Add to cart"
    Then I can see the PopUp message "Added!"
    When Click on "View Cart"
    And Click on "Proceed to Checkout"
    Then I can see the PopUp message "Checkout"
    When Click on "Register / Login"
    Then I can see the Login-SignUp page
    When Complete "name" in the SignUp form
    And Complete "email" in the SignUp form
    And Click on "Signup"
    Then I can see the "Enter Account Information" banner
    When Complete "the mandatory fields" of the form
    Then Click on "Create Account"
    And I can see the "Account Created!" banner
    And Click on "Continue"
    When Click on "Cart"
    Then I can see the "Proceed to Checkout" button
    And Click on "Proceed to Checkout"
    Then I can see the "Review Your Order" banner
    When I add a comment to the order
    And Click on "Place Order"
    Then I can see the "Payment" banner
    When Complete "Credit Card Info" of the form
    And Click on "Pay and Confirm Order"
    Then I can see the "Order Placed!" banner
    When Click on "Continue" 
    Then I can see the Landing Page
    When Click on "Logout"
    Then I can see the Login-SignUp page 
    When Complete "email" in the Login form
    And Complete "password" in the Login form
    And Click on "Login"
    Then I can see the Landing Page
    When Click on "Contact Us"
    Then I can see the "Get In Touch" banner
    When Complete "Contact data" of the form
    And Click on "Submit"
    #Then asdasd
    #When Click "OK"
    #Then asdasd
    #When Click "Logout"
    #Then asdasdasdasd