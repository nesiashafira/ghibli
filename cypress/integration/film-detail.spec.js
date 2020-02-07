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

describe("film detail", function() {
  it("film detail page displayed successfully", function() {
    cy.visit("http://localhost:3000/");
    cy.get(".card-item")
      .eq(0)
      .click();
    cy.url().should("include", "http://localhost:3000/film");
    cy.get(".desc-container").should("be.visible");
    cy.get(".desc-title").should("be.visible");
    cy.get(".film-frame")
      .find("button")
      .click();
    cy.get(".film-trailer").should("be.visible");
    cy.get(".back-btn").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});

beforeEach(() => {
  cy.restoreLocalStorageCache();
});

afterEach(() => {
  cy.saveLocalStorageCache();
});
