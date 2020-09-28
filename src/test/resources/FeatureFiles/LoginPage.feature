Feature: Login Page


@Login
Scenario: Verify elements of login forms are displayed
Given User launches the Login Page
Then Verify form heading "Fill fields below to log in." is displayed
Then Verify Username text field is displayed
Then Verify Password text field is displayed
Then Verify Forgot Password link is displayed
Then Verify Register link is displayed
Then Verify login button is displayed
Then Verify login button is disabled


@Login
Scenario: Verify user is able to login using valid credentials
Given User launches the Login Page
Given User enters valid username and password
And User clicks on login Button
Then Verify that user is able to login successfully


@Login
Scenario: Verify user is not able to login using invalid credentials
Given User launches the Login Page
When User enter user name "abc@test.com"
When User enter password "A@123"
And User clicks on login Button
Then Verify user is not able to login using invalid credentials

invalid email
valid email wrong password

@Login
Scenario: Verify login button should get enabled when user has filled username and password fields
Given User launches the Login Page
When User enter user name "abc@test.com"
When User enter password "A@123"
Then Verify login button is enabled

@Login
Scenario: Verify mouse cursor should be enabled when user hovers over login button after filling username and password fields
Given User launches the Login Page
When User enter user name "abc@test.com"
When User enter password "A@123"
Then Verify cursor should be enabled when user hover over the login button
