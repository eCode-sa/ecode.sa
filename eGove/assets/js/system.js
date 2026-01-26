// ==========================================
// ملف منطق النظام (System Logic Only)
// لا يحتوي على أكواد تحميل، لأنه يعتمد على HTML
// ==========================================

// 1. منطق لوحة القيادة (Dashboard Logic)
window.initDashboard = function() {
    console.log("🚀 System JS Started.");

    // فحص أمان أخير: هل البيانات موجودة؟
    if (typeof window.COMPANY_DATA === 'undefined') {
        console.error("❌ Critical Error: COMPANY_DATA is missing. Check script tags in HTML.");
        return;
    }

    const compNameEl = document.getElementById('companyNameDisplay');
    // إذا لم نجد العنصر، نحن لسنا في لوحة القيادة، نخرج بهدوء
    if (!compNameEl) return;

    console.log("✅ Dashboard Initializing with Data...");

    // أ. تطبيق اللغة والإعدادات
    const savedLang = localStorage.getItem('eGov_Lang') || 'ar';
    updateLanguage(savedLang);

    // ب. اسم المستخدم
    const adminNameEl = document.getElementById('adminName');
    if(adminNameEl) {
        adminNameEl.textContent = localStorage.getItem('userName') || (savedLang === 'ar' ? 'مسؤول النظام' : 'System Admin');
    }

    // ج. تشغيل الأنيميشن
    initScrollAnimations();
};

// 2. دالة تحديث اللغة
window.updateLanguage = function(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // استخدام الترجمات من المتغير العام (الذي تم تحميله من i18n.js)
    // افترضنا أن ملف i18n.js يعرف متغيراً اسمه window.SYSTEM_TRANSLATIONS أو window.DICTIONARY
    // تأكد من اسم المتغير في ملف i18n.js (حسب رسالة الخطأ عندك اسمه DICTIONARY)
    const translations = window.SYSTEM_TRANSLATIONS || window.DICTIONARY || {}; 

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // تحديث اسم الشركة
    const compNameEl = document.getElementById('companyNameDisplay');
    if(compNameEl && window.COMPANY_DATA) {
        compNameEl.textContent = lang === 'ar' ? window.COMPANY_DATA.basic.nameAr : window.COMPANY_DATA.basic.name;
    }

    // تحديث التاريخ
    const dateEl = document.getElementById('currentDate');
    if(dateEl) {
        const locale = lang === 'ar' ? 'ar-SA' : 'en-US';
        dateEl.textContent = new Date().toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }

    // إعادة الحساب والرسم
    calculateStats();
    renderDepartmentsTable();
    renderCharts();
    
    localStorage.setItem('eGov_Lang', lang);
};

// 3. الإحصائيات
function calculateStats() {
    if (!window.COMPANY_DATA) return;

    animateValue("deptCount", 0, window.COMPANY_DATA.departments.length, 1000);

    let totalPolicies = 0;
    // التحقق من وجود المتغيرات قبل الجمع
    if (window.HR_POLICIES && window.HR_POLICIES.sections) {
        window.HR_POLICIES.sections.forEach(sec => totalPolicies += sec.policies.length);
    }
    if (window.FINANCIAL_GOVERNANCE && window.FINANCIAL_GOVERNANCE.sections) {
        window.FINANCIAL_GOVERNANCE.sections.forEach(sec => totalPolicies += sec.policies.length);
    }
    if (window.governanceTexts) {
        totalPolicies += window.governanceTexts.length;
    }
    
    animateValue("policiesCount", 0, totalPolicies, 1500);

    if (window.egovFormsTemplates) {
        animateValue("formsCount", 0, window.egovFormsTemplates.forms.length, 1200);
    }
}

// 4. جدول الإدارات
function renderDepartmentsTable() {
    const tableBody = document.getElementById('departmentsTableBody');
    if(!tableBody || !window.COMPANY_DATA) return;

    const lang = document.documentElement.lang || 'ar';
    const translations = window.SYSTEM_TRANSLATIONS || window.DICTIONARY || {}; 
    const t = translations[lang] || {};

    tableBody.innerHTML = ''; 
    window.COMPANY_DATA.departments.slice(0, 5).forEach((dept) => {
        const deptName = t[dept.name] || dept.name; 
        const roleName = t[dept.role] || dept.role;
        const statusText = t['active'] || 'Active';

        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="padding: 10px; background: rgba(255,255,255,0.03); border-radius: 0 8px 8px 0;">${dept.id}</td>
            <td style="padding: 10px; background: rgba(255,255,255,0.03); font-weight:bold;">${deptName}</td>
            <td style="padding: 10px; background: rgba(255,255,255,0.03); color: var(--sky-blue);">${roleName}</td>
            <td style="padding: 10px; background: rgba(255,255,255,0.03); border-radius: 8px 0 0 8px;">
                <span class="badge bg-success" style="padding: 5px 10px; border-radius: 12px; font-size: 0.8em;">${statusText}</span>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// 5. الشارت
function renderCharts() {
    const ctx = document.getElementById('assetsChart');
    if(!ctx || typeof Chart === 'undefined') return;
    
    const hrCount = (window.HR_POLICIES && window.HR_POLICIES.sections) ? window.HR_POLICIES.sections.reduce((acc, sec) => acc + sec.policies.length, 0) : 0;
    const finCount = (window.FINANCIAL_GOVERNANCE && window.FINANCIAL_GOVERNANCE.sections) ? window.FINANCIAL_GOVERNANCE.sections.reduce((acc, sec) => acc + sec.policies.length, 0) : 0;
    const boardCount = window.governanceTexts ? window.governanceTexts.length : 0;
    const formsCount = (window.egovFormsTemplates && window.egovFormsTemplates.forms) ? window.egovFormsTemplates.forms.length : 0;
    
    const lang = document.documentElement.lang || 'ar';
    const labels = lang === 'ar' 
        ? ['سياسات HR', 'نماذج إلكترونية', 'حوكمة المجلس', 'حوكمة مالية']
        : ['HR Policies', 'E-Forms', 'Board Gov', 'Financial Gov'];

    if (window.myChartInstance) window.myChartInstance.destroy();

    window.myChartInstance = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: [hrCount, formsCount, boardCount, finCount],
                backgroundColor: ['#3b82f6', '#f59e0b', '#10b981', '#8b5cf6'],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { color: '#a0aec0', font: { family: 'Tajawal' } } }
            }
        }
    });
}

// 6. دوال مساعدة
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
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.stat-card, .section-card').forEach(s => {
            s.style.opacity = '0';
            s.style.transform = 'translateY(20px)';
            s.style.transition = 'all 0.6s ease-out';
            observer.observe(s);
        });
    }
}
// 6. دوال مساعدة
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
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.stat-card, .section-card').forEach(s => {
            s.style.opacity = '0';
            s.style.transform = 'translateY(20px)';
            s.style.transition = 'all 0.6s ease-out';
            observer.observe(s);
        });
    }
}
// 7. دالة زر تبديل اللغة (يتم استدعاؤها من HTML)
window.toggleLanguage = function() {
    const currentLang = localStorage.getItem('eGov_Lang') || 'ar';
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    
    // استدعاء دالة التحديث الموجودة مسبقاً
    updateLanguage(newLang);
};

// التشغيل التلقائي عند جاهزية الصفحة (لأن HTML قام بتحميل البيانات مسبقاً)
document.addEventListener('DOMContentLoaded', window.initDashboard);
