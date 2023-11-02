/// <reference types = "cypress" />

import telaCadastro from "../../support/pageObjects/tela-cadastro.page";

describe("Cadastro", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Cadastro com sucesso", () => {
    telaCadastro.clicaEmRegistrar()
    telaCadastro.inputEmail("teste@teste.com")
    telaCadastro.inputNome("João Da Silva")
    telaCadastro.inputSenha("Teste123@")
    telaCadastro.inputConfirmacaoSenha("Teste123@")
    telaCadastro.clicarButtonCadastrar()

    telaCadastro.validarMsgAlertModal()
  });

  it("Cadastro com email inválido", () => {
    telaCadastro.clicaEmRegistrar()
    telaCadastro.inputEmail("teste@co")
    telaCadastro.inputNome("João Da Silva")
    telaCadastro.inputSenha("Teste123@")
    telaCadastro.inputConfirmacaoSenha("Teste123@")
    telaCadastro.clicarButtonCadastrar()

    telaCadastro.validarAlertFormatoInvalid()
  });

  it("Cadastro com campo email vazio", () => {
    telaCadastro.clicaEmRegistrar()
    telaCadastro.inputEmail(" ")
    telaCadastro.inputNome("João Da Silva")
    telaCadastro.inputSenha("Teste123@")
    telaCadastro.inputConfirmacaoSenha("Teste123@")
    telaCadastro.clicarButtonCadastrar()

    telaCadastro.validarAlertCampoObrigatorio()
  });

  it("Cadastro com nome vazio", () => {
    telaCadastro.clicaEmRegistrar()
    telaCadastro.inputEmail("teste@teste.com")
    telaCadastro.inputNome(" ")
    telaCadastro.inputSenha("Teste123@")
    telaCadastro.inputConfirmacaoSenha("Teste123@")
    telaCadastro.clicarButtonCadastrar()

    telaCadastro.validarAlertCampoObrigatorio()
  });

  it("Cadastro com campo senha vazio", () => {
    telaCadastro.clicaEmRegistrar()
    telaCadastro.inputEmail("teste@teste.com")
    telaCadastro.inputNome("João Da Silva")
    telaCadastro.inputSenhaVazio()
    telaCadastro.inputConfirmacaoSenha("Teste123@")
    telaCadastro.clicarButtonCadastrar()

    telaCadastro.validarAlertCampoObrigatorio()
  });

  it("Cadastro com campo confirmação de senha vazio", () => {
    telaCadastro.clicaEmRegistrar()
    telaCadastro.inputEmail("teste@teste.com")
    telaCadastro.inputNome("João Da Silva")
    telaCadastro.inputSenha("Teste123@")
    telaCadastro.inputConfirmacaoSenhaVazio()
    telaCadastro.clicarButtonCadastrar()

    telaCadastro.validarAlertCampoObrigatorio()
  });

  it("Cadastro com campos obrigatórios em branco", () => {
    telaCadastro.clicaEmRegistrar()
    telaCadastro.inputEmail(" ")
    telaCadastro.inputNome(" ")
    telaCadastro.inputSenhaVazio()
    telaCadastro.inputConfirmacaoSenhaVazio()
    telaCadastro.clicarButtonCadastrar()

    telaCadastro.validarAlertCampoObrigatorio()
  });

  it("Cadastro com senha e confirmação de senha diferentes", () => {
    telaCadastro.clicaEmRegistrar()
    telaCadastro.inputEmail("teste@teste.com")
    telaCadastro.inputNome("João Da Silva")
    telaCadastro.inputSenha("teste3812738912")
    telaCadastro.inputConfirmacaoSenha("Teste12232342")
    telaCadastro.clicarButtonCadastrar()

    telaCadastro.validarMsgAlertModal()
  });

//   it("Cadastro com a opção Criar conta com saldo ativa", () => {
//     telaCadastro.clicaEmRegistrar()
//     telaCadastro.preencheCampoEmail()
//     telaCadastro.preencheCampoNome()
//     telaCadastro.preencheCampoSenha()
//     telaCadastro.preencheSenhaConfirmacao()
//     telaCadastro.clicarButtonCadastrar()

//     telaCadastro.validarMsgModal()
//     telaCadastro.fecharModal()
//   });

//   it("Cadastro com a opção Criar conta com saldo inativo", () => {
//     telaCadastro.clicaEmRegistrar()
//     telaCadastro.preencheCampoEmail()
//     telaCadastro.preencheCampoNome()
//     telaCadastro.preencheCampoSenha()
//     telaCadastro.preencheSenhaConfirmacao()
//     telaCadastro.clicarButtonCadastrar()

//     telaCadastro.validarMsgModal()
//     telaCadastro.fecharModal()
//   });
});