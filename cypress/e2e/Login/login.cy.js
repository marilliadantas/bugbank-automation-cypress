/// <reference types = "cypress" />

import telaLogin from "../../support/pageObjects/tela-login.page";

describe("Cadastro", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.only("Login com sucesso", () => {
    telaLogin.preencheCampoEmail()
    telaLogin.preencheCampoSenha()
    telaLogin.clicaBtnAcessar()

    telaLogin.validarTxtUser()
    telaLogin.validarMsgWelcome()
  });

  it("Login com email inválido", () => {
    telaLogin.preencheCampoEmailInvalido()
    telaLogin.preencheCampoSenha()
    telaLogin.clicaBtnAcessar()

    telaLogin.validarAlertLabel()
  });

  it("Login com senha inválida", () => {
    telaLogin.preencheCampoEmail()
    telaLogin.preencheCampoSenhaInvalid()
    telaLogin.clicaBtnAcessar()

    telaLogin.validarAlertModal()
  });

  it("Login com campo email em branco", () => {
    telaLogin.campoEmailEmBranco()
    telaLogin.preencheCampoSenha()
    telaLogin.clicaBtnAcessar()

    telaLogin.validarAlertCampoObrigatorio()
  });

  it("Login com campo senha em branco", () => {
    telaLogin.preencheCampoEmail()
    telaLogin.campoSenhaEmBranco()
    telaLogin.clicaBtnAcessar()

    telaLogin.validarAlertCampoObrigatorio()
  });

  it("Login com campo email e senha em branco", () => {
    telaLogin.campoEmailEmBranco()
    telaLogin.campoSenhaEmBranco()
    telaLogin.clicaBtnAcessar()

    telaLogin.validarAlertCampoObrigatorio()
  });

  it("Login com usuário não cadastrado", () => {
    telaLogin.preencheCampoEmailNaoCadastrado()
    telaLogin.preencheCampoSenha()
    telaLogin.clicaBtnAcessar()

    telaLogin.validarAlertModal()
  });
});