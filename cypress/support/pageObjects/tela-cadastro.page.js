const elements = require('../elements/tela-cadastro.elements').ElementsCadastro


class telaCadastro {
    clicaEmRegistrar(){
        cy.get(elements.btnRegistrar).click()
    }

    inputEmail(email){
        cy.get(elements.inputEmail).type(email, {force : true})
    }

    inputNome(nome){
        cy.get(elements.inputNome).type(nome, {force : true})
    }

    inputSenha(senha){
        cy.get(elements.inputSenha).type(senha, {force : true})
    }

    inputSenhaVazio(){
        cy.get(elements.inputSenha).clear({force : true})
    }

    inputConfirmacaoSenhaVazio(){
        cy.get(elements.inputSenhaConfirmacao).clear({force : true})
    }

    inputConfirmacaoSenha(confirmacaoSenha){
        cy.get(elements.inputSenhaConfirmacao).type(confirmacaoSenha, {force : true})
    }

    clicarButtonCadastrar(){
        cy.get(elements.btnCadastrar).click({force : true})
    }

    fecharModal(){
        cy.get(elements.btnFecharModal).click({force : true})
    }

    validarMsgAlertModal(){
        cy.get(elements.msgModalAlert)
        .invoke("text")
        .should("not.be.empty")

        cy.wait(2000)
        cy.screenshot()
    }

    validarAlertCampoObrigatorio(){
        cy.get(elements.msgAlertLabel)
        .invoke("text")
        .should("not.be.empty")

        cy.wait(2000)
        cy.screenshot()
    }

    validarAlertFormatoInvalid(){
        cy.get(elements.msgAlertLabel)
        .invoke("text")
        .should("not.be.empty")

        cy.wait(2000)
        cy.screenshot()
    }
}
    
export default new telaCadastro();