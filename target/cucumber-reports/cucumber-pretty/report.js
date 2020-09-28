$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page",
  "description": "",
  "id": "login-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 273624,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify elements of login forms are displayed",
  "description": "",
  "id": "login-page;verify-elements-of-login-forms-are-displayed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User launches the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Verify form heading \"Fill fields below to log in.\" is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify Username text field is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify Password text field is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify Forgot Password link is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify Register link is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Verify login button is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify login button is disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDef.launchLoginPage()"
});
formatter.result({
  "duration": 521473410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fill fields below to log in.",
      "offset": 21
    }
  ],
  "location": "LoginPageStepDef.verifyHeading(String)"
});
formatter.result({
  "duration": 60307998,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.verifyUserNameField()"
});
formatter.result({
  "duration": 84902108,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.verifyPasswordTextField()"
});
formatter.result({
  "duration": 60615012,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.verifyForgotPasswordLinkIsDisplayed()"
});
formatter.result({
  "duration": 42162590,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.verifyRegisterLinkIsDisplayed()"
});
formatter.result({
  "duration": 54561906,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.verifyloginButtonIsDisplayed()"
});
formatter.result({
  "duration": 51348453,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.verifyLoginButtonIsDisabled()"
});
formatter.result({
  "duration": 24664602,
  "status": "passed"
});
formatter.after({
  "duration": 264811,
  "status": "passed"
});
formatter.before({
  "duration": 195247,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify user is able to login using valid credentials",
  "description": "",
  "id": "login-page;verify-user-is-able-to-login-using-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User launches the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User enters valid username and password",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify that user is able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDef.launchLoginPage()"
});
formatter.result({
  "duration": 337546516,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.enterValidUsernameAndPassword()"
});
formatter.result({
  "duration": 533846293,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.userClicksOnLoginButton()"
});
formatter.result({
  "duration": 321124936,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.verifyUserIsOnSuccessPage()"
});
formatter.result({
  "duration": 10897169,
  "status": "passed"
});
formatter.after({
  "duration": 116406,
  "status": "passed"
});
formatter.before({
  "duration": 88580,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify user is not able to login using invalid credentials",
  "description": "",
  "id": "login-page;verify-user-is-not-able-to-login-using-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User launches the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User enter user name \"abc@test.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User enter password \"A@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify user is not able to login using invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDef.launchLoginPage()"
});
formatter.result({
  "duration": 771082454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@test.com",
      "offset": 22
    }
  ],
  "location": "LoginPageStepDef.enterUserName(String)"
});
formatter.result({
  "duration": 192981049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A@123",
      "offset": 21
    }
  ],
  "location": "LoginPageStepDef.enterPassword(String)"
});
formatter.result({
  "duration": 159231684,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.userClicksOnLoginButton()"
});
formatter.result({
  "duration": 392082915,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.verifyUserIsNotAbleToLoginUsingInvalidCredentials()"
});
formatter.result({
  "duration": 59179186,
  "status": "passed"
});
formatter.after({
  "duration": 81160,
  "status": "passed"
});
formatter.before({
  "duration": 62609,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify login button should get enabled when user has filled username and password fields",
  "description": "",
  "id": "login-page;verify-login-button-should-get-enabled-when-user-has-filled-username-and-password-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User launches the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User enter user name \"abc@test.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User enter password \"A@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Verify login button is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDef.launchLoginPage()"
});
formatter.result({
  "duration": 357825723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@test.com",
      "offset": 22
    }
  ],
  "location": "LoginPageStepDef.enterUserName(String)"
});
formatter.result({
  "duration": 261149923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A@123",
      "offset": 21
    }
  ],
  "location": "LoginPageStepDef.enterPassword(String)"
});
formatter.result({
  "duration": 187782667,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.verifyLoginButtonIsEnabled()"
});
formatter.result({
  "duration": 21879672,
  "status": "passed"
});
formatter.after({
  "duration": 83942,
  "status": "passed"
});
formatter.before({
  "duration": 49623,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verify mouse cursor should be enabled when user hovers over login button after filling username and password fields",
  "description": "",
  "id": "login-page;verify-mouse-cursor-should-be-enabled-when-user-hovers-over-login-button-after-filling-username-and-password-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "User launches the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "User enter user name \"abc@test.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User enter password \"A@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Verify cursor should be enabled when user hover over the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDef.launchLoginPage()"
});
formatter.result({
  "duration": 228139806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@test.com",
      "offset": 22
    }
  ],
  "location": "LoginPageStepDef.enterUserName(String)"
});
formatter.result({
  "duration": 173198073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A@123",
      "offset": 21
    }
  ],
  "location": "LoginPageStepDef.enterPassword(String)"
});
formatter.result({
  "duration": 159989481,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.verifyCursorIsEnabledWhenUserHoverOverLoginButton()"
});
formatter.result({
  "duration": 173419292,
  "error_message": "java.lang.AssertionError: [Assertion Failed]: Cursor is not enabled expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:1037)\r\n\tat org.testng.Assert.assertTrue(Assert.java:45)\r\n\tat JukinMedia.automation.action.LoginPageAction.verifyCursorIsEnabledWhenUserHoverOverLoginButton(LoginPageAction.java:147)\r\n\tat JukinMedia.automation.stepdefs.LoginPageStepDef.verifyCursorIsEnabledWhenUserHoverOverLoginButton(LoginPageStepDef.java:108)\r\n\tat ✽.Then Verify cursor should be enabled when user hover over the login button(LoginPage.feature:45)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 117333,
  "status": "passed"
});
formatter.uri("RegisterPage.feature");
formatter.feature({
  "line": 1,
  "name": "Register Page",
  "description": "",
  "id": "register-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 69565,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify on clicking register link user is directed to register page",
  "description": "",
  "id": "register-page;verify-on-clicking-register-link-user-is-directed-to-register-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@RegisterPage"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launches the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify user lands on Registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDef.launchLoginPage()"
});
formatter.result({
  "duration": 343959043,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.userClicksOnRegisterLink()"
});
formatter.result({
  "duration": 1898816370,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.verifyUserLandsOnRegisterPage()"
});
formatter.result({
  "duration": 9120009,
  "status": "passed"
});
formatter.after({
  "duration": 71884,
  "status": "passed"
});
formatter.before({
  "duration": 80233,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify register page form elements",
  "description": "",
  "id": "register-page;verify-register-page-form-elements",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@RegisterPage"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Verify form heading \"Fill out the form to create your account.\" is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Verify email field is displayed on register page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify password field is displayed on register page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify confirm password field is displayed on register page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify submit button is displayed on register page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify Back to Login button is displayed on register page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Fill out the form to create your account.",
      "offset": 21
    }
  ],
  "location": "LoginPageStepDef.verifyHeading(String)"
});
formatter.result({
  "duration": 44904390,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStepDef.verifyEmailFieldIsDisplayed()"
});
formatter.result({
  "duration": 39668443,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStepDef.verifyPasswordFieldIsDisplayed()"
});
formatter.result({
  "duration": 37738239,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStepDef.verifyConfirmPasswordFieldIsDisplayed()"
});
formatter.result({
  "duration": 39080384,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStepDef.verifySubmitButtonIsDisplayed()"
});
formatter.result({
  "duration": 33498466,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStepDef.verifyBackToLoginButtonIsDisplayed()"
});
formatter.result({
  "duration": 31485246,
  "status": "passed"
});
formatter.after({
  "duration": 66320,
  "status": "passed"
});
formatter.before({
  "duration": 64464,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify user is able to successfully register on entering valid email and password",
  "description": "",
  "id": "register-page;verify-user-is-able-to-successfully-register-on-entering-valid-email-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@RegisterPage"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "On register page user enters email \"abc@test.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "On register page user enters password \"A@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "On register page user enters confirmation password \"A@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on submit button of register page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify Registration successful page is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "abc@test.com",
      "offset": 36
    }
  ],
  "location": "RegisterPageStepDef.enterEmail(String)"
});
formatter.result({
  "duration": 229922532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A@123",
      "offset": 39
    }
  ],
  "location": "RegisterPageStepDef.enterPassword(String)"
});
formatter.result({
  "duration": 177332570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A@123",
      "offset": 52
    }
  ],
  "location": "RegisterPageStepDef.enterConfirmationPassword(String)"
});
formatter.result({
  "duration": 184961099,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStepDef.clickOnSubmitButton()"
});
formatter.result({
  "duration": 290554242,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStepDef.verifyRegistationSuccessfulPageIsDisplayed()"
});
formatter.result({
  "duration": 30378695,
  "status": "passed"
});
formatter.after({
  "duration": 64464,
  "status": "passed"
});
formatter.before({
  "duration": 45450,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify user is redirected to Exception page if user clicks on submit button leaving every field blank",
  "description": "",
  "id": "register-page;verify-user-is-redirected-to-exception-page-if-user-clicks-on-submit-button-leaving-every-field-blank",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@RegisterPage"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User launches the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User clicks on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User clicks on submit button of register page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Verify exception page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDef.launchLoginPage()"
});
formatter.result({
  "duration": 324326330,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.userClicksOnRegisterLink()"
});
formatter.result({
  "duration": 1727214124,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStepDef.clickOnSubmitButton()"
});
formatter.result({
  "duration": 472655743,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStepDef.verifyExceptionPageIsLaunched()"
});
formatter.result({
  "duration": 7518152,
  "status": "passed"
});
formatter.after({
  "duration": 63536,
  "status": "passed"
});
formatter.before({
  "duration": 46377,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify is user enters invalid email a fail message is displayed",
  "description": "",
  "id": "register-page;verify-is-user-enters-invalid-email-a-fail-message-is-displayed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@RegisterPage"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User launches the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User clicks on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "On register page user enters email \"abc.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "On register page user enters password \"A@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "On register page user enters confirmation password \"A@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User clicks on submit button of register page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Verify fail message \"Please enter a valid Email.\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDef.launchLoginPage()"
});
formatter.result({
  "duration": 274009761,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.userClicksOnRegisterLink()"
});
formatter.result({
  "duration": 287646875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc.com",
      "offset": 36
    }
  ],
  "location": "RegisterPageStepDef.enterEmail(String)"
});
formatter.result({
  "duration": 226009252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A@123",
      "offset": 39
    }
  ],
  "location": "RegisterPageStepDef.enterPassword(String)"
});
formatter.result({
  "duration": 179117152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A@123",
      "offset": 52
    }
  ],
  "location": "RegisterPageStepDef.enterConfirmationPassword(String)"
});
formatter.result({
  "duration": 190012929,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStepDef.clickOnSubmitButton()"
});
formatter.result({
  "duration": 330843669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid Email.",
      "offset": 21
    }
  ],
  "location": "RegisterPageStepDef.verifyFailMessageIsDisplayed(String)"
});
formatter.result({
  "duration": 49473437,
  "status": "passed"
});
formatter.after({
  "duration": 97391,
  "status": "passed"
});
formatter.before({
  "duration": 55188,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify on password and confirm password field mismatch fail message is displayed",
  "description": "",
  "id": "register-page;verify-on-password-and-confirm-password-field-mismatch-fail-message-is-displayed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@RegisterPage"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "User launches the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "User clicks on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "On register page user enters email \"abc@test.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "On register page user enters password \"A@123a\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "On register page user enters confirmation password \"A@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User clicks on submit button of register page",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Verify fail message \"Password confirmation must must match Password\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDef.launchLoginPage()"
});
formatter.result({
  "duration": 309455128,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.userClicksOnRegisterLink()"
});
formatter.result({
  "duration": 392949234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@test.com",
      "offset": 36
    }
  ],
  "location": "RegisterPageStepDef.enterEmail(String)"
});
formatter.result({
  "duration": 201036245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A@123a",
      "offset": 39
    }
  ],
  "location": "RegisterPageStepDef.enterPassword(String)"
});
formatter.result({
  "duration": 171086999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A@123",
      "offset": 52
    }
  ],
  "location": "RegisterPageStepDef.enterConfirmationPassword(String)"
});
formatter.result({
  "duration": 154535564,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStepDef.clickOnSubmitButton()"
});
formatter.result({
  "duration": 314645625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password confirmation must must match Password",
      "offset": 21
    }
  ],
  "location": "RegisterPageStepDef.verifyFailMessageIsDisplayed(String)"
});
formatter.result({
  "duration": 39139283,
  "status": "passed"
});
formatter.after({
  "duration": 61216,
  "status": "passed"
});
formatter.before({
  "duration": 57971,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Verify on hovering over tool tip image tool tip text is displayed",
  "description": "",
  "id": "register-page;verify-on-hovering-over-tool-tip-image-tool-tip-text-is-displayed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@RegisterPage"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "Verify on hovering over tool tip image tool tip text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageStepDef.verifyOnHoveringOverToolTipImageToolTipTextIsDisplayed()"
});
formatter.result({
  "duration": 268940771,
  "status": "passed"
});
formatter.after({
  "duration": 81624,
  "status": "passed"
});
formatter.before({
  "duration": 66782,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Verify tool tip disappers when user stops hovering over tool tip image",
  "description": "",
  "id": "register-page;verify-tool-tip-disappers-when-user-stops-hovering-over-tool-tip-image",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 57,
      "name": "@RegisterPage"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "Verify tool tip disappers when user stops hovering over tool tip image",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageStepDef.verifyToolTipDisappears()"
});
formatter.result({
  "duration": 188991711,
  "error_message": "java.lang.AssertionError: [Assrtion Failed]: Tool tip is displayed expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:1037)\r\n\tat org.testng.Assert.assertFalse(Assert.java:67)\r\n\tat JukinMedia.automation.action.RegisterPageAction.verifyToolTipDisappears(RegisterPageAction.java:110)\r\n\tat JukinMedia.automation.stepdefs.RegisterPageStepDef.verifyToolTipDisappears(RegisterPageStepDef.java:67)\r\n\tat ✽.Then Verify tool tip disappers when user stops hovering over tool tip image(RegisterPage.feature:59)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 96000,
  "status": "passed"
});
});