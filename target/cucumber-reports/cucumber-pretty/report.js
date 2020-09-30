$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page",
  "description": "",
  "id": "login-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Verify error messages \"Incorrect email/password combination\" is displayed when user enters invalid mail ID",
  "description": "",
  "id": "login-page;verify-error-messages-\"incorrect-email/password-combination\"-is-displayed-when-user-enters-invalid-mail-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@Login"
    },
    {
      "line": 33,
      "name": "@na"
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
  "name": "User enter user name \"\u003cmailId\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User enter password \"A@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Verify on login page flash message is displayed when user clicks on submit button with invalid email id",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "login-page;verify-error-messages-\"incorrect-email/password-combination\"-is-displayed-when-user-enters-invalid-mail-id;",
  "rows": [
    {
      "cells": [
        "mailId"
      ],
      "line": 42,
      "id": "login-page;verify-error-messages-\"incorrect-email/password-combination\"-is-displayed-when-user-enters-invalid-mail-id;;1"
    },
    {
      "cells": [
        "abc"
      ],
      "line": 43,
      "id": "login-page;verify-error-messages-\"incorrect-email/password-combination\"-is-displayed-when-user-enters-invalid-mail-id;;2"
    },
    {
      "cells": [
        "@"
      ],
      "line": 44,
      "id": "login-page;verify-error-messages-\"incorrect-email/password-combination\"-is-displayed-when-user-enters-invalid-mail-id;;3"
    },
    {
      "cells": [
        ".com"
      ],
      "line": 45,
      "id": "login-page;verify-error-messages-\"incorrect-email/password-combination\"-is-displayed-when-user-enters-invalid-mail-id;;4"
    },
    {
      "cells": [
        "@test.com"
      ],
      "line": 46,
      "id": "login-page;verify-error-messages-\"incorrect-email/password-combination\"-is-displayed-when-user-enters-invalid-mail-id;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 582958,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verify error messages \"Incorrect email/password combination\" is displayed when user enters invalid mail ID",
  "description": "",
  "id": "login-page;verify-error-messages-\"incorrect-email/password-combination\"-is-displayed-when-user-enters-invalid-mail-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@Login"
    },
    {
      "line": 33,
      "name": "@na"
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
  "name": "User enter user name \"abc\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User enter password \"A@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Verify on login page flash message is displayed when user clicks on submit button with invalid email id",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDef.launchLoginPage()"
});
formatter.result({
  "duration": 619921735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 22
    }
  ],
  "location": "LoginPageStepDef.enterUserName(String)"
});
formatter.result({
  "duration": 241697153,
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
  "duration": 183028575,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.userClicksOnLoginButton()"
});
formatter.result({
  "duration": 293844215,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.verifyIncorrectEmailPasswordCombinationTextIsDisplayedForInvalidMailID()"
});
formatter.result({
  "duration": 34801191,
  "status": "passed"
});
formatter.after({
  "duration": 142841,
  "status": "passed"
});
formatter.before({
  "duration": 57971,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify error messages \"Incorrect email/password combination\" is displayed when user enters invalid mail ID",
  "description": "",
  "id": "login-page;verify-error-messages-\"incorrect-email/password-combination\"-is-displayed-when-user-enters-invalid-mail-id;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@Login"
    },
    {
      "line": 33,
      "name": "@na"
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
  "name": "User enter user name \"@\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User enter password \"A@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Verify on login page flash message is displayed when user clicks on submit button with invalid email id",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDef.launchLoginPage()"
});
formatter.result({
  "duration": 241316397,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@",
      "offset": 22
    }
  ],
  "location": "LoginPageStepDef.enterUserName(String)"
});
formatter.result({
  "duration": 169055229,
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
  "duration": 173003290,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.userClicksOnLoginButton()"
});
formatter.result({
  "duration": 304312399,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.verifyIncorrectEmailPasswordCombinationTextIsDisplayedForInvalidMailID()"
});
formatter.result({
  "duration": 51495931,
  "status": "passed"
});
formatter.after({
  "duration": 90898,
  "status": "passed"
});
formatter.before({
  "duration": 73738,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Verify error messages \"Incorrect email/password combination\" is displayed when user enters invalid mail ID",
  "description": "",
  "id": "login-page;verify-error-messages-\"incorrect-email/password-combination\"-is-displayed-when-user-enters-invalid-mail-id;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@Login"
    },
    {
      "line": 33,
      "name": "@na"
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
  "name": "User enter user name \".com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User enter password \"A@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Verify on login page flash message is displayed when user clicks on submit button with invalid email id",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDef.launchLoginPage()"
});
formatter.result({
  "duration": 310640985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": ".com",
      "offset": 22
    }
  ],
  "location": "LoginPageStepDef.enterUserName(String)"
});
formatter.result({
  "duration": 178371412,
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
  "duration": 170444679,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.userClicksOnLoginButton()"
});
formatter.result({
  "duration": 272342978,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.verifyIncorrectEmailPasswordCombinationTextIsDisplayedForInvalidMailID()"
});
formatter.result({
  "duration": 46872160,
  "status": "passed"
});
formatter.after({
  "duration": 87188,
  "status": "passed"
});
formatter.before({
  "duration": 60290,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Verify error messages \"Incorrect email/password combination\" is displayed when user enters invalid mail ID",
  "description": "",
  "id": "login-page;verify-error-messages-\"incorrect-email/password-combination\"-is-displayed-when-user-enters-invalid-mail-id;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@Login"
    },
    {
      "line": 33,
      "name": "@na"
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
  "name": "User enter user name \"@test.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User enter password \"A@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Verify on login page flash message is displayed when user clicks on submit button with invalid email id",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDef.launchLoginPage()"
});
formatter.result({
  "duration": 223104671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@test.com",
      "offset": 22
    }
  ],
  "location": "LoginPageStepDef.enterUserName(String)"
});
formatter.result({
  "duration": 193033453,
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
  "duration": 201547781,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.userClicksOnLoginButton()"
});
formatter.result({
  "duration": 276513184,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.verifyIncorrectEmailPasswordCombinationTextIsDisplayedForInvalidMailID()"
});
formatter.result({
  "duration": 35421715,
  "status": "passed"
});
formatter.after({
  "duration": 53333,
  "status": "passed"
});
formatter.before({
  "duration": 130320,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Verify error message \"Incorrect password\" is displayed when user enters incorrect password",
  "description": "",
  "id": "login-page;verify-error-message-\"incorrect-password\"-is-displayed-when-user-enters-incorrect-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@Login"
    },
    {
      "line": 48,
      "name": "@na"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "User launches the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "User enter user name \"quality@jukinmedia.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "User enter password \"A@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Verify on Login page Incorrect password message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDef.launchLoginPage()"
});
formatter.result({
  "duration": 256172296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality@jukinmedia.com",
      "offset": 22
    }
  ],
  "location": "LoginPageStepDef.enterUserName(String)"
});
formatter.result({
  "duration": 193612700,
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
  "duration": 183957504,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.userClicksOnLoginButton()"
});
formatter.result({
  "duration": 306610370,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDef.verifyIncorrectPasswordMessageIsDisplayed()"
});
formatter.result({
  "duration": 40108558,
  "status": "passed"
});
formatter.after({
  "duration": 63071,
  "status": "passed"
});
});