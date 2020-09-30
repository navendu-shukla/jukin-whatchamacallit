Feature: Forgot Password

@ForgotPassword
Scenario: Verify on clicking Forgot password link user is redirected to forgot password page 
Given User launches the Login Page
When User clicks on Forgot Password link
Then Verify user lands on Forgot Password page

@ForgotPassword
Scenario: Verify form elements of reset password page
Then Verify email field is displayed on forgot password page
Then Verify Submit button is dispalyed on forgot password page
Then Verify back to login link is displayed on forgot password page

@ForgotPassword
Scenario: Verify that user is able to reset the password
When User enters email "abc@test.com" on forgot password page
When User clicks submit button on forgot password page
Then Verify password reset successfull modal is diaplayed
And User clicks on Ok button of Password reset successfull modal

@ForgotPassword
Scenario: Verify that flash message is displayed id user clicks on submit button without email
Given User launches the Login Page
When User clicks on Forgot Password link
When User clicks submit button on forgot password page
Then Verify on forgot password flash message is displayed when user clicks on submit button with invalid email id

@ForgotPassowrd
Scenario Outline: Verify flash message "Please enter a valid email" is displayed if user enters invalid mail id
Given User launches the Login Page
When User clicks on Forgot Password link
Then Verify user lands on Forgot Password page
When User enters email "<mailId>" on forgot password page
When User clicks submit button on forgot password page
Then Verify on forgot password flash message is displayed when user clicks on submit button with invalid email id

Examples:
|mailId|
|abc|
|@|
|.com|
|@test.com|
||

@ForgotPassword
Scenario: Verify on clicking Back to Login user is redirected to Login Page
When User clicks on Back to Login Link
Then Verify form heading "Fill fields below to log in." is displayed

@ForgotPassword
Scenario: Verify on clicking enter button after giving email text input user is able to see password reset successfull modal
Given User launches the Login Page
When User clicks on Forgot Password link
When User enters email "abc@test.com" on forgot password page
And User hits on enter button
Then Verify password reset successfull modal is diaplayed
