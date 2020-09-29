JUKIN UI Automation
* Scripts are written using java-selenium
* Cucumber BDD framework
* Runner class (Runner.java) is also added in case local execution is required

Pre-requisites : Java and Maven should be installed

##############################################################

Test Execution:

Maven goal to execute single tag: mvn clean verify -Dcucumber.options=--tags'@tagName'
Maven goal to execute multiple tags: mvn clean verify -Dcucumber.options=--tags'@tagName1,@tagName2,@tagName3'

tags available : @Login , @RegisterPage , @ForgotPassword

To execute all the UI tests execute : mvn clean verify -Dcucumber.options=--tags'@Login,@RegisterPage,@ForgotPassword'


###############################################################

BUGS FOUND WHILE TESTING

Login Page:
1. Cursor style when user hover over Login Button is "not-allowed". (Instead it should be default or pointer) (Covered in automation)

Forgot Password Page:
1. On Clicking Back to Login link user is directed to Register Page (Covered in automation)
2. After entering valid email ID if user hits enter button then he/she is directed to Login Page (instead Password reset successfull modal should come up) (Covered in automation)

Register Page:
1. Tool tip does not disappear when user stops hovering over tool tip image  (Covered in automation)
Observation >> When user hits enter button after clicking any of the text fields given all the fields are empty Internal Server Error page comes up. Same thing happens when user clicks on Submit button given all the input fields are blank.
This can be a bug if it is not as designed (Covered in automation with expected behavior to launch the exception page when user performs above action)

Success Page:
1. There is no Logout button present on the success page


##############################################################

How to improve the automatability of the Login Page

1. In the links Forgot Password and Register an aditional attribute id can be added 
2. In the div tag containing "Incorrect email/password combination" an aditional attribute id can be added 
3. The label tags with "Username" and "Password" should have additional attributes so that locators can be made easily





