it(`should be able to access url`, () => {
  cy.visit(`/안녕`)
  cy.get('div').contains('test')
})