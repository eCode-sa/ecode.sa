document.addEventListener("DOMContentLoaded", function () {
    // 1. تحميل الهيدر
    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-header').innerHTML = data;
            
            // بعد تحميل الهيدر، يجب تفعيل زر الثيم لأنه لم يكن موجوداً
            initializeTheme();
            
            // تحديد الصفحة الحالية في القائمة (Active State)
            highlightActivePage();
        });

    // 2. تحميل الفوتر
    fetch('/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-footer').innerHTML = data;
        });
});

// --- منطق الثيم (Dark/Light) ---
// تم نقله هنا ليعمل مع الهيدر المحمل ديناميكياً
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    updateThemeIcon(nextTheme);
}

function updateThemeIcon(theme) {
    // نبحث عن الأيقونة داخل الهيدر المحمل
    const icon = document.querySelector('.theme-toggle i');
    if (!icon) return; 
    
    if (theme === 'light') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// دالة لتلوين الرابط النشط في القائمة
function highlightActivePage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.color = 'var(--lavender-light)'; // أو إضافة كلاس active
        }
    });
}
