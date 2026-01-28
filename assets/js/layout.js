document.addEventListener("DOMContentLoaded", function () {
    // يمكنك استخدام رابط كامل أو نسبي. للأمان في التجربة المحلية نفضل النسبي:
    // تأكد أن ملفات header.html و footer.html موجودة داخل مجلد components
    const baseURL = "/components/"; 
    // أو استخدم الرابط الخاص بك إذا كانت الملفات مرفوعة: "https://ecode.sa/components/"

    // 1. جلب الهيدر الموحد (header.html)
    fetch(baseURL + 'header.html')
        .then(response => {
            if (!response.ok) throw new Error("Header file not found");
            return response.text();
        })
        .then(data => {
            document.getElementById('main-header').innerHTML = data;
            
            // تهيئة الثيم (Dark/Light)
            initializeTheme();
            
            // تلوين الرابط النشط
            highlightActivePage();

            // هام جداً: تطبيق اللغة المختارة فور تحميل الهيدر
            const savedLang = localStorage.getItem('userLanguage') || 'ar';
            if (typeof applyLanguage === 'function') {
                applyLanguage(savedLang);
            }
        })
        .catch(err => console.error('Error loading header:', err));

    // 2. جلب الفوتر الموحد (footer.html)
    fetch(baseURL + 'footer.html')
        .then(response => {
            if (!response.ok) throw new Error("Footer file not found");
            return response.text();
        })
        .then(data => {
            document.getElementById('main-footer').innerHTML = data;

            // هام جداً: تطبيق اللغة المختارة فور تحميل الفوتر
            const savedLang = localStorage.getItem('userLanguage') || 'ar';
            if (typeof applyLanguage === 'function') {
                applyLanguage(savedLang);
            }
        })
        .catch(err => console.error('Error loading footer:', err));
});

// --- دوال الثيم وتلوين الروابط (كما هي لم تتغير) ---
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
}

function highlightActivePage() {
    const currentPath = window.location.href;
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        // مقارنة الرابط الحالي بروابط القائمة
        if (link.href === currentPath) {
            link.style.color = 'var(--lavender-light)';
        }
    });
}
