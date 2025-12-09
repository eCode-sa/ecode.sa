document.addEventListener("DOMContentLoaded", function () {
    // تأكد من صحة هذا الرابط لموقعك
    const baseURL = "https://ecode.sa/components/"; 
    
    // 1. اكتشاف لغة الصفحة الحالية من وسم html
    // إذا كانت en نستخدم اللاحقة -en، غير ذلك نتركها فارغة للعربي
    const currentLang = document.documentElement.getAttribute('lang') || 'ar';
    const fileSuffix = currentLang === 'en' ? '-en' : '';

    // 2. جلب الهيدر المناسب (header.html أو header-en.html)
    fetch(baseURL + 'header' + fileSuffix + '.html')
        .then(response => {
            if (!response.ok) throw new Error("Header file not found");
            return response.text();
        })
        .then(data => {
            document.getElementById('main-header').innerHTML = data;
            initializeTheme();
            highlightActivePage();
        })
        .catch(err => console.error('Error loading header:', err));

    // 3. جلب الفوتر المناسب (footer.html أو footer-en.html)
    fetch(baseURL + 'footer' + fileSuffix + '.html')
        .then(response => {
            if (!response.ok) throw new Error("Footer file not found");
            return response.text();
        })
        .then(data => {
            document.getElementById('main-footer').innerHTML = data;
        })
        .catch(err => console.error('Error loading footer:', err));
});

// --- دوال الثيم وتلوين الروابط ---
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
        if (link.href === currentPath) {
            link.style.color = 'var(--lavender-light)';
        }
    });
}
