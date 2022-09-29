import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open {string} page", (route) => {
  const base = "http://localhost:3000";
  let path;

  switch (route) {
    case "home":
      path = "/";
      break;
    case "eddiejoude":
      path = "/eddiejoude";
      break;
    default:
      path = undefined;
  }

  cy.visit(base + path);
});
