import { el } from "./element";

import toast from "../../components/toast";

class SignupPage {
  constructor() {
    this.toast = toast;
  }

  go() {
    cy.visit("/signup");
  }

  form(user) {
    cy.get(el.name).type(user.name);
    cy.get(el.email).type(user.email);
    cy.get(el.password).type(user.password);
  }

  router() {
    cy.intercept("POST", "/users", {
      statusCode: 200,
    }).as("postUser");
  }

  submit() {
    cy.contains(el.signupButton).click();
  }

  referenceRouter() {
    cy.wait("@postUser");
  }

  alertHaveText(expectText) {
    cy.contains(el.alertError, expectText).should('be.visible');
  }
}

export default new SignupPage();
