describe('Fase 2 & 3: Manajemen Profil dan Katalog Jasa', () => {
  // Setiap sebelum memulai tes, sistem otomatis login sebagai Siti Desainer
  beforeEach(() => {
    cy.visit('/login'); 
    
    // Skenario dummy login Siti Desainer sesuai dokumen UAT
    cy.contains('label', /email/i).parent().find('input').type('siti@swaphour.com'); 
    cy.contains('label', /sandi|password/i).parent().find('input').type('password123'); 
    cy.contains('button', /masuk|login/i).click(); 
  });

  // TES 1: Validasi Bug Reaktivitas Layar saat tambah katalog (BUG-002)
  it('Harus reaktif menampilkan jasa baru di katalog setelah sukses publish', () => {
    // 1. Menemukan dan mengeklik menu/tombol tambah jasa baru
    cy.contains(/tambah|post|skill/i).click(); 
    
    // 2. Mengisi formulir "Post a Skill" sesuai data pengujian Fase 2
    cy.contains('label', /judul|title/i).parent().find('input').type('Jasa Pembuatan Desain UI Aplikasi'); 
    cy.contains('label', /kategori|category/i).parent().find('select').select('Desain'); 
    cy.contains('label', /deskripsi|description/i).parent().find('textarea').type('Purwarupa tiga halaman'); 
    cy.contains('label', /durasi|duration/i).parent().find('input').type('2'); 
    
    // 3. Klik tombol Publikasikan
    cy.contains('button', /publikasikan|publish|kirim/i).click(); 

    // 4. VALIDASI BUG-002: Memastikan item baru langsung muncul secara reaktif di layar utama tanpa hard refresh
    cy.get('body').should('contain.text', 'Jasa Pembuatan Desain UI Aplikasi'); 
  });
});