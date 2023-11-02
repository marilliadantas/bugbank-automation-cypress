const elements = require('../elements/tela-login.elements').ElementsLogin


class telaLogin {
    inserirEmaileSenhaValidos(){
        cy.login(Cypress.env("email"), Cypress.env("senha"));
    }

    inputEmailEmBranco(){
        cy.get(elements.inputEmail).clear()
    }

    inputEmail(email){
        cy.get(elements.inputEmail).type(email)
    }

    inputPassword(password){
        cy.get(elements.inputPassword).type(password)
    }

    inputPasswordEmBranco(){
        cy.get(elements.inputPassword).clear()
    }

    clickBtnAcessar(){
        cy.get(elements.buttonEntrar).click()
    }

    
    validarLabelUser(){
        cy.get(".name > b")
        .invoke("text")
        .should("not.be.empty")
        cy.url().should("include", "/");

        cy.wait(2000)
        cy.screenshot()
    }

    validarAlertEmailInvalid(){
        cy.get(elements.alertErroLoginUser)
        .should("exist")
        .and("contain", "Erro no login do usuário.");

        cy.wait(2000)
        cy.screenshot()
    }

    validarAlertEmailBlank(){
        cy.get(elements.alertEmailObrigatorio)
        .should("exist")
        .and("contain", "Obrigatório.");

        cy.wait(2000)
        cy.screenshot()
    }

    validarAlertPasswordBlank(){
        cy.get(elements.alertPasswordObrigatorio)
        .should("exist")
        .and("contain", "Obrigatório.");

        cy.wait(2000)
        cy.screenshot()
    }

    validarAlertPasswordInvalid(){
        cy.get(".alert")
        .should("exist")
        .and("contain", "Erro no login do usuário.");

        cy.wait(2000)
        cy.screenshot()
    }

    validarAlertLogout(){
        cy.get(elements.textLogout)
        .should("exist")
        .and("contain", "Logout")

        cy.wait(2000)
        cy.screenshot()
    }

    validarMsgLogout(){
        cy.get(elements.textMsgLogout)
        .should("exist")
        .and('contain', 'Deseja realmente sair do Comunique-se 360?')

        cy.wait(2000)
        cy.screenshot()
    }

    validarButtonEntrar(){
        cy.get(elements.buttonEntrar)
        .should("be.visible")
        .and("contain", "Entrar")

        cy.wait(2000)
        cy.screenshot()
    }
}
    
export default new telaLogin();