describe('Login Sauce Demo', () => {
  it('Login Succesfully', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    cy.get('.title').should('have.text', 'Products');
  })

  it('Login unsuccesfully', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    cy.get('.title').should('have.text', 'Products');
  })
})