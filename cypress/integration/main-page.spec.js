let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorageCache", () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorageCache", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

describe("main page", function() {
  it("main page displayed successfully", function() {
    cy.visit("http://localhost:3000/");
    cy.get(".app-title").should("be.visible");
    cy.get(".app-title")
      .find("img")
      .should("be.visible");
    cy.get(".app-title")
      .find("img")
      .should("have.attr", "alt");
    cy.get(".film-list").should("be.visible");
    cy.get(".film-list").scrollTo("bottom");
    cy.get(".card-item").should("be.visible");
    cy.get(".card-item")
      .eq(0)
      .click();
  });
});

beforeEach(() => {
  cy.restoreLocalStorageCache();
});

afterEach(() => {
  cy.saveLocalStorageCache();
});
