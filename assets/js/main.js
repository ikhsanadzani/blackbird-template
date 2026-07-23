document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav-overlay');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
  }

  // Scroll Interpolation (Fade Up)
  const fadeElements = document.querySelectorAll('.fade-up');
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  });

  fadeElements.forEach(el => fadeObserver.observe(el));

  // --- I18N Translation Logic ---
  const translations = {
    id: {
      "nav-download": "Unduh OS (ISO)",
      "hero-eyebrow": "Edisi Perpustakaan & Arsip",
      "hero-title": "Kedaulatan Arsip Dimulai dari Level Sistem Operasi.",
      "hero-subtitle": "Bukan sekadar aplikasi perangkat lunak. Ini adalah infrastruktur OS mandiri dengan arsitektur file system tahan banting, dirancang khusus untuk integritas data jangka panjang dan keamanan tingkat enterprise.",
      "hero-alert-bold": "v2.4.0 Dirilis:",
      "hero-alert-text": "Logging CLI tingkat lanjut diaktifkan secara default untuk Evaluasi Akademik.",
      "hero-btn-primary": "Unduh OS (ISO)",
      "hero-btn-secondary": "Baca Dokumentasi Teknis",
      "features-heading": "Keunggulan Sistem Inti",
      "pilar-1-title": "Arsitektur Penyimpanan & Keamanan Berlapis",
      "pilar-1-desc": "Menggunakan stabilitas kernel khusus dan enkripsi tingkat tinggi (hardware-backed encryption) untuk mencegah korupsi data dan intrusi akses secara mutlak.",
      "pilar-2-title": "Performa Indexing Bawaan Sistem",
      "pilar-2-desc": "Pemrosesan metadata dan pencarian arsip dieksekusi secara langsung (bare-metal) di level sistem operasi untuk menghasilkan throughput kecepatan maksimal.",
      "pilar-3-title": "Dukungan Bilingual Terintegrasi (Native)",
      "pilar-3-desc": "Dirancang dengan struktur antarmuka dan log sistem dwibahasa (Indonesia & Inggris) langsung dari inti OS, memudahkan adaptasi operasional global maupun lokal.",
      "footer-copyright": "© 2026 Hak Cipta Dilindungi. Sistem Operasi Kedaulatan Data.",
      "footer-compliance": "Dibangun dengan kepatuhan terhadap standar keamanan arsip tingkat nasional dan protokol retensi data internasional.",
      "footer-link-1": "Kebijakan Privasi",
      "footer-link-2": "Syarat Penggunaan",
      "footer-link-3": "Lisensi Kernel"
    },
    en: {
      "nav-download": "Download OS (ISO)",
      "hero-eyebrow": "Library & Archive Edition",
      "hero-title": "Archive Sovereignty Starts at the Operating System Level.",
      "hero-subtitle": "Not just a software layer. This is a standalone OS infrastructure with a resilient file system architecture, engineered specifically for long-term data integrity and enterprise-grade security.",
      "hero-alert-bold": "v2.4.0 Released:",
      "hero-alert-text": "Advanced CLI logging enabled by default for Academic Evaluation.",
      "hero-btn-primary": "Download OS (ISO)",
      "hero-btn-secondary": "Read Technical Docs",
      "features-heading": "Core System Identity",
      "pilar-1-title": "Layered Storage & Security Architecture",
      "pilar-1-desc": "Utilizing specialized kernel stability and hardware-backed encryption to completely prevent data corruption and access intrusion.",
      "pilar-2-title": "Native System-Level Indexing Performance",
      "pilar-2-desc": "Metadata processing and archive retrieval are executed on bare-metal directly at the OS level to deliver maximum throughput speed.",
      "pilar-3-title": "Integrated Bilingual Support (Native)",
      "pilar-3-desc": "Engineered with dual-language interfaces and system logs (Indonesian & English) directly from the OS core, streamlining both global and local operational adoption.",
      "footer-copyright": "© 2026 All Rights Reserved. Data Sovereignty Operating System.",
      "footer-compliance": "Built in compliance with national archive security standards and international data retention protocols.",
      "footer-link-1": "Privacy Policy",
      "footer-link-2": "Terms of Use",
      "footer-link-3": "Kernel License"
    }
  };

  const langButtons = document.querySelectorAll('[data-set-lang]');
  
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.target.getAttribute('data-set-lang');
      
      // Update active state of buttons
      langButtons.forEach(b => b.classList.remove('active'));
      document.querySelectorAll(`[data-set-lang="${selectedLang}"]`).forEach(b => b.classList.add('active'));

      // Translate all data-i18n elements
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[selectedLang] && translations[selectedLang][key]) {
          element.textContent = translations[selectedLang][key];
        }
      });
      
      // Update html lang attribute
      document.documentElement.lang = selectedLang;
    });
  });
});
