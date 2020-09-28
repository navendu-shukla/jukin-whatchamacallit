Feature: Register Page

@RegisterPage
Scenario: Verify on clicking register link user is directed to register page
Given User launches the Login Page
When User clicks on Register link
Then Verify user lands on Registration page

@RegisterPage
Scenario: Verify register page form elements
Then Verify form heading "Fill out the form to create your account." is displayed
Then Verify email field is displayed on register page
Then Verify password field is displayed on register page
Then Verify confirm password field is displayed on register page
Then Verify submit button is displayed on register page
Then Verify Back to Login button is displayed on register page

@RegisterPage
Scenario: Verify user is able to successfully register on entering valid email and password
When On register page user enters email "abc@test.com"
When On register page user enters password "A@123"
And On register page user enters confirmation password "A@123"
And User clicks on submit button of register page
Then Verify Registration successful page is displayed

@RegisterPage
Scenario: Verify user is redirected to Exception page if user clicks on submit button leaving every field blank
Given User launches the Login Page
When User clicks on Register link
And User clicks on submit button of register page
Then Verify exception page is displayed

@RegisterPage
Scenario: Verify is user enters invalid email a fail message is displayed
Given User launches the Login Page
When User clicks on Register link
When On register page user enters email "abc.com"
When On register page user enters password "A@123"
And On register page user enters confirmation password "A@123"
And User clicks on submit button of register page
Then Verify fail message "Please enter a valid Email." is displayed

@RegisterPage
Scenario: Verify on password and confirm password field mismatch fail message is displayed
Given User launches the Login Page
When User clicks on Register link
When On register page user enters email "abc@test.com"
When On register page user enters password "A@123a"
And On register page user enters confirmation password "A@123"
And User clicks on submit button of register page
Then Verify fail message "Password confirmation must must match Password" is displayed

@RegisterPage
Scenario: Verify on hovering over tool tip image tool tip text is displayed
Then Verify on hovering over tool tip image tool tip text is displayed

@RegisterPage
Scenario: Verify tool tip disappers when user stops hovering over tool tip image
Then Verify tool tip disappers when user stops hovering over tool tip image