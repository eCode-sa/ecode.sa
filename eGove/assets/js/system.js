/* ==========================================
   ملف منطق النظام (system.js)
   ========================================== */

window.initDashboard = function() {
    console.log("🚀 System Started.");

    if (typeof window.COMPANY_DATA === 'undefined') {
        console.error("❌ Data missing.");
        return;
    }

    // تهيئة اللغة
    const savedLang = localStorage.getItem('eGov_Lang') || 'ar';
    updateLanguage(savedLang);

    initScrollAnimations();
};

// --- دالة تبديل اللغة (الزر ينادي هذه) ---
window.toggleLanguage = function() {
    const currentLang = localStorage.getItem('eGov_Lang') || 'ar';
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    updateLanguage(newLang);
};

// --- دالة التحديث ---
window.updateLanguage = function(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const translations = window.SYSTEM_TRANSLATIONS || window.DICTIONARY || {}; 

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // تحديث نص الزر في الهيدر
    const langText = document.getElementById('langText');
    if(langText) langText.textContent = lang === 'ar' ? 'EN' : 'عربي';

    const compNameEl = document.getElementById('companyNameDisplay');
    if(compNameEl && window.COMPANY_DATA) {
        compNameEl.textContent = lang === 'ar' ? window.COMPANY_DATA.basic.nameAr : window.COMPANY_DATA.basic.name;
    }
    
    // إعادة الحساب
    calculateStats();
    renderDepartmentsTable();
    renderCharts();
    
    localStorage.setItem('eGov_Lang', lang);
};

function calculateStats() {
    if (!window.COMPANY_DATA) return;
    animateValue("deptCount", 0, window.COMPANY_DATA.departments.length, 1000);

    let totalPolicies = 0;
    if (window.HR_POLICIES?.sections) window.HR_POLICIES.sections.forEach(s => totalPolicies += s.policies.length);
    if (window.FINANCIAL_GOVERNANCE?.sections) window.FINANCIAL_GOVERNANCE.sections.forEach(s => totalPolicies += s.policies.length);
    if (window.governanceTexts) totalPolicies += window.governanceTexts.length;
    animateValue("policiesCount", 0, totalPolicies, 1500);

    // حساب النماذج
    let forms = 0;
    if(window.egovformstemplates?.forms) forms = window.egovformstemplates.forms.length;
    else if(Array.isArray(window.egovformstemplates)) forms = window.egovformstemplates.length;
    animateValue("formsCount", 0, forms, 1200);
}

function renderDepartmentsTable() {
    const tableBody = document.getElementById('departmentsTableBody');
    if(!tableBody || !window.COMPANY_DATA) return;
    const lang = document.documentElement.lang || 'ar';
    const t = (window.SYSTEM_TRANSLATIONS || {})[lang] || {};

    tableBody.innerHTML = ''; 
    window.COMPANY_DATA.departments.slice(0, 5).forEach((dept) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td style="padding:10px;">${dept.id}</td><td style="padding:10px;font-weight:bold;">${t[dept.name]||dept.name}</td><td style="padding:10px;color:var(--sky-blue);">${t[dept.role]||dept.role}</td><td style="padding:10px;"><span class="badge bg-success">Active</span></td>`;
        tableBody.appendChild(row);
    });
}

function renderCharts() {
    const ctx = document.getElementById('assetsChart');
    if(!ctx || typeof Chart === 'undefined') return;
    if(window.myChartInstance) window.myChartInstance.destroy();
    
    const hr = (window.HR_POLICIES?.sections || []).reduce((a, b) => a + b.policies.length, 0);
    const fin = (window.FINANCIAL_GOVERNANCE?.sections || []).reduce((a, b) => a + b.policies.length, 0);
    const board = window.governanceTexts?.length || 0;
    let forms = 0;
    if(window.egovformstemplates?.forms) forms = window.egovformstemplates.forms.length;

    const lang = document.documentElement.lang || 'ar';
    const labels = lang === 'ar' ? ['سياسات', 'نماذج', 'حوكمة', 'مالية'] : ['HR', 'Forms', 'Board', 'Finance'];

    window.myChartInstance = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{ data: [hr, forms, board, fin], backgroundColor: ['#3b82f6', '#f59e0b', '#10b981', '#8b5cf6'], borderWidth: 0 }]
        },
        options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });
}

function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    if(!obj) return;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

function initScrollAnimations() {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; } });
        }, { threshold: 0.1 });
        document.querySelectorAll('.stat-card, .section-card').forEach(s => { s.style.opacity = '0'; s.style.transform = 'translateY(20px)'; s.style.transition = 'all 0.6s ease-out'; observer.observe(s); });
    }
}

document.addEventListener('DOMContentLoaded', window.initDashboard);
