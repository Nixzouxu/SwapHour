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
  // TES 2: Pemesanan Nyata & Alur Redirect (Fase 3 Poin 3 / UX-001)
  it('Harus berhasil mengirimkan permintaan swap dan otomatis pindah ke halaman riwayat', () => {
    cy.visit('/login');
    // Login sebagai Budi Santoso (Pencari Jasa)
    cy.contains('label', /email/i).parent().find('input').type('budi@swaphour.com');
    cy.contains('label', /sandi|password/i).parent().find('input').type('password123');
    cy.contains('button', /masuk|login/i).click();

    // Membuka kartu jasa milik Siti Desainer
    cy.visit('/catalog/siti-skill-id'); 
    cy.contains('label', /catatan|notes/i).parent().find('textarea').type('Halo Siti, mari bertukar waktu.');
    
    // Klik Kirim Permintaan
    cy.contains('button', /kirim|request/i).click(); 

    // VALIDASI UX-001: Memastikan setelah sukses, user otomatis dialihkan ke halaman Riwayat Swap
    cy.url().should('include', '/riwayat-swap'); 
  });
});