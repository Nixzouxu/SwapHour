describe('Fase 1: Pendaftaran dan Validasi UI', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it('Harus menampilkan pesan peringatan jika form kosong', () => {
    cy.contains('button', /daftar/i).click();
    cy.get('body').should('contain.text', 'wajib');
  });
  it('Harus berhasil melakukan pendaftaran akun baru', () => {
    cy.contains('label', /nama/i).parent().find('input').type('Budi Santoso'); // Input nama dummy Budi
    cy.contains('label', /email/i).parent().find('input').type('budi@swaphour.com'); // Input email dummy Budi[cite: 1]
    cy.contains('label', /sandi|password/i).parent().find('input').type('password123'); // Input password dummy Budi[cite: 1]
    
    cy.contains('button', /daftar/i).click(); // Klik tombol daftar[cite: 1]
    cy.url().should('include', '/login'); // Memastikan sistem beralih ke halaman login[cite: 1]
  });
});