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
    cy.contains('label', /email/i).parent().find('input').type('budi@swaphour.com'); // Input email dummy Budi
    cy.contains('label', /sandi|password/i).parent().find('input').type('password123'); // Input password dummy Budi
    
    cy.contains('button', /daftar/i).click(); // Klik tombol daftar
    cy.url().should('include', '/login'); // Memastikan sistem beralih ke halaman login
  });
  it('Harus menampilkan nama pengguna di dasbor setelah login berhasil', () => {
    cy.visit('/login'); // Buka halaman login
    cy.contains('label', /email/i).parent().find('input').type('siti@swaphour.com'); // Skenario login Siti
    cy.contains('label', /sandi|password/i).parent().find('input').type('password123'); // Kata sandi Siti
    cy.contains('button', /masuk|login/i).click();

    cy.get('body').should('contain.text', 'Siti'); // Memastikan profil Siti langsung terender di layar
  });
});