describe('Teste falha proposital: idade menor que 18', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8000/testes/index.html');
    });
  
    it('tenta calcular orçamento com idade menor que 18 e espera resultado incorreto (força falha)', () => {
      cy.get('#valorPassagem').type('500');
      cy.get('#numeroPessoas').type('1');
      cy.get('#diasHospedagem').type('2');
      // Data de nascimento < 18 anos (ex: 2010-01-01)
      cy.get('#dataNascimento').type('2010-01-01');
  
      // Escuta o alerta e confirma mensagem correta (idade insuficiente)
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Você deve ter pelo menos 18 anos para fazer uma reserva.');
      });
  
      // Agora tenta verificar se o resultado do orçamento aparece (não deve)
      // Espera um texto que não vai aparecer, forçando falha
      cy.get('#resultadoOrcamento').should('contain.text', 'Orçamento total: R$ 0.00');
    });
  });
  