Cypress.Commands.add('login', (email, senha) => {
    cy.xpath('//*[@id="__next"]/div/div[2]/div/div[1]/form/div[1]/input').type(email, {log: false});
    cy.xpath('//*[@id="__next"]/div/div[2]/div/div[1]/form/div[2]/div/input').type(senha, {log: false});
    cy.xpath('//*[@id="__next"]/div/div[2]/div/div[1]/form/div[3]/button[1]').click();
})

