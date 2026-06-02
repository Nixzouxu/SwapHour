describe('Fase 3, 4 & 5: Alur Transaksi Pertukaran Waktu (Swap)', () => {
  
  // TES 1: Validasi Pemesanan Mandiri (Fase 3 Poin 2)
  it('Penyedia jasa tidak boleh dapat memesan jasanya sendiri', () => {
    cy.visit('/login');
    // Login sebagai Siti Desainer
    cy.contains('label', /email/i).parent().find('input').type('siti@swaphour.com');
    cy.contains('label', /sandi|password/i).parent().find('input').type('password123');
    cy.contains('button', /masuk|login/i).click();

    // Mengunjungi halaman detail skill milik Siti sendiri
    cy.visit('/catalog/my-own-skill'); 

    // VALIDASI: Memastikan tombol request swap dalam posisi dinonaktifkan (disabled)
    cy.contains('button', /request|swap/i).should('be.disabled');
  });
});