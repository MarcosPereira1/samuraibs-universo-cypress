/// <reference types="Cypress" />

import signupPage from "../support/pages/signup";

describe("cadastro", () => {
  context("quando o usuário é novato", () => {
    const user = {
      name: "marquinho",
      email: "marcos@gmail.com",
      password: "pwd123",
    };

    it("deve cadastrar um novo usuário", () => {
      signupPage.go();
      signupPage.form(user);
      signupPage.router();
      signupPage.submit();
      signupPage.referenceRouter();
      signupPage.toast.shouldHaveText(
        "Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!"
      );
    });
  });

  context("quando o email já é cadastrado", () => {
    const user = {
      name: "marquinho",
      email: "marcos@gmail.com",
      password: "pwd123",
    };
    it("deve exibir email já cadastrado", () => {
      signupPage.go();
      signupPage.form(user);
      signupPage.submit();
      signupPage.toast.shouldHaveText(
        "Email já cadastrado para outro usuário."
      );
    });

    context("quando o email é incorreto", () => {
      const user = {
        name: "Elizabeth Olsen",
        email: "liza.yahoo.com",
        password: "pwd123",
      };
      it("deve ixibir mensagem de alerta", () => {
        signupPage.go();
        signupPage.form(user);
        signupPage.submit();
        signupPage.alertHaveText("Informe um email válido");
      });
    });
  });

  context("quando a senha é muito curta", () => {
    const passwords = ["1", "2a", "ab3", "abc4", "abc#5"];

    beforeEach(function () {
      signupPage.go();
    });

    passwords.forEach(function (p) {
      it("não deve cadastrar com a senha: " + p, () => {
        const user = {
          name: "Jason Friday",
          email: "jason@gmail.com",
          password: p,
        };

        signupPage.form(user);
        signupPage.submit();
      });
    });

    afterEach(function () {
      signupPage.alertHaveText("Pelo menos 6 caracteres");
    });
  });

  context("quando não preencho nenhum dos campos obrigatorios", () => {

    const alertMessages = [
       'Nome é obrigatório',
       'E-mail é obrigatório',
       'Senha é obrigatória' 
    ];

    beforeEach(function() {
      signupPage.go()
      signupPage.submit()
    })

    alertMessages.forEach(function(alert){
      it('deve exibir ' + alert.toLowerCase(), function(){
        signupPage.alertHaveText(alert)
      })
    })

  });
});
