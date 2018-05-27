// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("http://localhost:8080");
    cy.contains("h1", "Welcome to Your Vue.js App");
  });

  it("check counter", () => {
    cy.visit("http://localhost:8080");
    cy.get("button").click();
    cy.get("h2").contains("h2", "1");
  });
});
