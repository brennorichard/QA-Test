describe('Teste falhas propositais - Codex Travel', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8000/testes/index.html');
    });

    it('Navega até a seção Destinos e redireciona para pagina404 (falha intencional)', () => {
      cy.contains('nav a', 'Destinos').click(); //Clica em destinos
      cy.wait(500);
      cy.url().should('include', '#destinos'); // Teste que vai falhar devido ao redirecionamento para /pagina404
      cy.get('#destinos h1').should('contain.text', 'Destinos'); // Verifica o título da seção destinos (não será encontrado se o redirecionamento ocorrer)
    });

    it('Tenta calcular o orçamento com idade menor que 18 e espera resultado incorreto (falha intencional)', () => {
      cy.get('#valorPassagem').type('500');
      cy.get('#numeroPessoas').type('1');
      cy.get('#diasHospedagem').type('2');
      cy.get('#dataNascimento').type('2010-01-01'); // Data de nascimento < 18 anos (ex: 2010-01-01)
  
      // Verifica o alerta e confirma mensagem (idade insuficiente)
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Você deve ter pelo menos 18 anos para fazer uma reserva.');
      });
  
      // Agora verifica se o resultado do orçamento aparece (não deve aparecer) e espera um texto que não vai aparecer, ocasionando uma falha
      cy.get('#resultadoOrcamento').should('contain.text', 'Orçamento total: R$ 0.00');
    });
  });



    
  