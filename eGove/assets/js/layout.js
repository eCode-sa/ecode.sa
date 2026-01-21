document.addEventListener("DOMContentLoaded", function () {
    // تحديد المسار النسبي لمجلد المكونات
    // نستخدم ./components/ لضمان العمل على أي دومين أو محلياً
    const baseURL = "components/"; 
    
    // 1. اكتشاف اللغة (يدعم التوسع مستقبلاً للغة الإنجليزية)
    const currentLang = document.documentElement.getAttribute('lang') || 'ar';
    const fileSuffix = currentLang === 'en' ? '-en' : '';

    // 2. تحميل الهيدر
    loadComponent('main-header', baseURL + 'header' + fileSuffix + '.html');

    // 3. تحميل الفوتر
    loadComponent('main-footer', baseURL + 'footer' + fileSuffix + '.html');
});

// دالة مساعدة للتحميل (لتقليل تكرار الكود)
function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error(`File not found: ${filePath}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            
            // إعادة تفعيل أي سكربتات تعتمد على وجود الهيدر/الفوتر
            if(elementId === 'main-header') {
                initializeTheme();
                highlightActivePage();
            }
        })
        .catch(err => console.error(`Error loading ${elementId}:`, err));
}

// --- دوال الثيم (Dark/Light) ---
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('themeIcon');
    if (icon) {
        icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
}

// --- تمييز الصفحة الحالية في القائمة ---
function highlightActivePage() {
    const currentPath = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
            link.style.color = 'var(--lavender-light)';
        }
    });
}
