document.getElementById("site-header").innerHTML = `
  <header class="main-header">
    <div class="header-inner">
      <a href="/ar/" class="logo-container">
        <div class="logo-icon">
          <img src="/assets/images/favicon.png" alt="eCode Logo">
        </div>
        <div class="logo-text">
          <div class="brand-name">eCode</div>
          <div class="brand-tagline">تصنع الأثر</div>
        </div>
      </a>

      <nav class="nav">
        <a href="/ar/">الرئيسية</a>
        <a href="/ar/services/">خدماتنا</a>
        <a href="/ar/plans/">الباقات</a>
        <a href="/ar/portfolio/">أعمالنا</a>

        <button id="themeToggle" class="theme-btn">
          <i class="fas fa-moon"></i>
        </button>

        <a href="/en/" class="lang-switcher">
          <i class="fas fa-globe"></i> English
        </a>

        <a href="/ar/contact/" class="btn-primary" style="padding: 10px 20px;">
          تواصل معنا
        </a>
      </nav>
    </div>
  </header>
`;