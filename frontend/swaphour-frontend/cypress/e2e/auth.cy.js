describe('Fase 1: Pendaftaran dan Validasi UI', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it('Harus menampilkan pesan peringatan jika form kosong', () => {
    cy.contains('button', /daftar/i).click();
    cy.get('body').should('contain.text', 'wajib');
  });
});