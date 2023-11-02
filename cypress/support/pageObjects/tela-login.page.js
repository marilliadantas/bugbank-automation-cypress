const elements = require('../elements/tela-login.elements').ElementsLogin

class telaLogin {
    preencheCampoEmail(){
        cy.get(elements.inputEmail).type("teste@teste.com")
    }

    preencheCampoSenha(){
        cy.get(elements.inputSenha).type("Teste123@")
    }

    preencheCampoEmailInvalido(){
        cy.get(elements.inputEmail).type("teste@co")
    }

    preencheCampoSenhaInvalid(){
        cy.get(elements.inputSenha).type("1223")
    }

    clicaBtnAcessar(){
        cy.get(elements.btnAcessar).click()
    }

    campoEmailEmBranco(){
        cy.get(elements.inputEmail).clear()
    }

    campoSenhaEmBranco(){
        cy.get(elements.inputSenha).clear()
    }

    preencheCampoEmailNaoCadastrado(){
        cy.get(elements.inputEmail).type("teste131249721841294@teste.com")
    }

    validarAlertLabel(){
        cy.get(elements.msgAlertLabel)
        .should("exist")
        .and("contain", "Formato inválido");

        cy.wait(2000)
        cy.screenshot()
    }

    validarAlertModal(){
        cy.get(elements.msgAlertModal)
        .should("exist")
        .and("contain", "Usuário ou senha inválido.");

        cy.wait(2000)
        cy.screenshot()
    }

    validarAlertCampoObrigatorio(){
        cy.get(elements.msgAlertLabel)
        .should("exist")
        .and("contain", "É campo obrigatório");

        cy.wait(2000)
        cy.screenshot()
    }

    validarTxtUser(){
        cy.get(elements.txtUser)
        .should("exist")
        .and("contain", "Olá Mari QA,");

        cy.wait(2000)
        cy.screenshot()
    }

    validarMsgWelcome(){
        cy.get(elements.msgWelcome)
        .should("exist")
        .and("contain", "bem vindo ao BugBank :)");

        cy.wait(2000)
        cy.screenshot()
    }
}
    
export default new telaLogin();