describe('Teste completo - Codex Travel', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8000/testes/index.html');
    });
    
    //1 - Verifica a disposição de elementos da página
    it('Verifica exibição de elementos da página', () => { 
      cy.get('header').should('be.visible');
      cy.get('nav').should('be.visible');
      cy.get('#home').should('be.visible');
      cy.get('#sobre').should('be.visible');
      cy.get('#destinos').should('be.visible');
    });

    //2 - Valida o destino do clique de cada elemento da navbar e seu conteúdo
    it('Navega para cada seção e valida o conteúdo esperado', () => {
      cy.contains('nav a', 'Início').click(); //Clica em Inicio e valida o conteúdo
      cy.get('#home').should('include.text', 'Bem-vindo ao Codex Travel'); 
    
      cy.contains('nav a', 'Sobre Nós').click(); //Clica em Sobre nós e valida o conteúdo
      cy.get('#sobre > :nth-child(2)').should('include.text', 'Somos uma empreza dedicada a tornar suas férias inesquecíveis. Com mais de 10 anos de esperiência, garantimos a melhor experincia de viagem para você e sua família.'); 
    
      cy.contains('nav a', 'Depoimentos').click(); //Clica em depoimentos e valida o conteúdo
      cy.get('#depoimentos').should('include.text', 'Viagem incrível! Recomendo a todos.'); 
    
      cy.contains('nav a', 'Calculadora').click(); //Clica em Calculadora e valida o conteúdo
      cy.get('[for="valorPassagem"]').should('include.text', 'Valor da passagem:');

      cy.contains('nav a', 'Contato').click();  //Clica em contato e valida o conteúdo
      cy.get('[for="nome"]').should('include.text', 'Nome:');
    });

    //3 - Validação simples do cálculo
    it('Preenche e faz cálculo simples do orçamento', () => { 
      cy.get('#valorPassagem').type('1000');
      cy.get('#numeroPessoas').type('2');
      cy.get('#diasHospedagem').type('3');
      cy.get('#dataNascimento').type('1990-01-01');
      cy.get('#orcamentoForm button[type="submit"]').click();
      cy.get('#resultadoOrcamento').should('contain.text', 'Orçamento total: R$');
    });

    //4 - Valida se ao inserir determinados valores a saída corresponde com o esperado (9510)
    it('Preenche e calcula o orçamento com valor esperado', () => { 
      cy.get('#valorPassagem').type('1670');
      cy.get('#numeroPessoas').type('3');
      cy.get('#diasHospedagem').type('7');
      cy.get('#dataNascimento').type('2002-02-01');
      cy.get('#orcamentoForm button[type="submit"]').click();
      cy.get('#resultadoOrcamento').should('contain.text', 'Orçamento total: R$');
      cy.get('#resultadoOrcamento').should('contain.text', 'R$ 9510.00');
    });

    //5 - Preenchimento e envio do formulário
    it('Preenche o fomulário de contato e envia', () => { 
      cy.get('#nome').type('Brenno Rabelo');
      cy.get('#email').type('brenno@tester.com');
      cy.get('#mensagem').type('Preenchimento de mensagem do fomrulário de contato');
      cy.get('#contatoForm button[type="submit"]').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Mensagem enviada com sucesso'); //Aguarda exibição da mensagem retornada ao usuário
      });
    });
  });
  