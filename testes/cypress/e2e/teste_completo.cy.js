describe('Teste completo - Codex Travel', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8000/testes/index.html');
    });
  
    it('Verifica exibição de elementos da página', () => {
      cy.get('header').should('be.visible');
      cy.get('nav').should('be.visible');
      cy.get('#home').should('be.visible');
      cy.get('#sobre').should('be.visible');
      cy.get('#destinos').should('be.visible');
    });
  
    it('Navega para cada seção e valida o conteúdo esperado', () => {
      cy.contains('nav a', 'Início').click();
      cy.get('#home').should('include.text', 'Bem-vindo ao Codex Travel');
    
      cy.contains('nav a', 'Sobre Nós').click();
      cy.get('#sobre > :nth-child(2)').should('include.text', 'Somos uma empreza dedicada a tornar suas férias inesquecíveis. Com mais de 10 anos de esperiência, garantimos a melhor experincia de viagem para você e sua família.');
    
      cy.contains('nav a', 'Depoimentos').click();
      cy.get('#depoimentos').should('include.text', 'Viagem incrível! Recomendo a todos.');
    
      cy.contains('nav a', 'Calculadora').click();
      cy.get('[for="valorPassagem"]').should('include.text', 'Valor da passagem:');
    
      cy.contains('nav a', 'Contato').click();
      cy.get('[for="nome"]').should('include.text', 'Nome:');
    });

    it('Preenchimento e cálculo do orçamento', () => {
      cy.get('#valorPassagem').type('1000');
      cy.get('#numeroPessoas').type('2');
      cy.get('#diasHospedagem').type('3');
      cy.get('#dataNascimento').type('1990-01-01');
      cy.get('#orcamentoForm button[type="submit"]').click();
      cy.get('#resultadoOrcamento').should('contain.text', 'Orçamento total: R$');
    });
  
    it('Preenche o fomulário de contato e envia', () => {
      cy.get('#nome').type('Brenno Richard');
      cy.get('#email').type('brenno@tester.com');
      cy.get('#mensagem').type('Teste de input');
      cy.get('#contatoForm button[type="submit"]').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Mensagem enviada com sucesso');
      });
    });
  });
  