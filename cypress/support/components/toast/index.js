import { el } from "./elements";

class Toast {
    shouldHaveText(expectText) {
    cy.get(el.toast, { timeout: 5000 })
      .should("be.visible")
      .find("p")
      .should("have.text", expectText);
  }
}

export default new Toast();
