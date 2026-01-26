/* ==========================================
   ملف منطق النظام (system.js) - النسخة النهائية والشاملة
   ========================================== */

window.initDashboard = function() {
    console.log("🚀 System Logic Started.");

    // فحص وجود البيانات
    if (typeof window.COMPANY_DATA === 'undefined') {
        console.error("❌ Critical: Company Data is missing.");
        return;
    }

    // تطبيق اللغة المحفوظة
    const savedLang = localStorage.getItem('eGov_Lang') || 'ar';
    updateLanguage(savedLang);

    // تشغيل الأنيميشن
    initScrollAnimations();
};

// --- 1. دالة زر تبديل اللغة ---
window.toggleLanguage = function() {
    const currentLang = localStorage.getItem('eGov_Lang') || 'ar';
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    updateLanguage(newLang);
};

// --- 2. دالة تحديث النصوص والاتجاه ---
window.updateLanguage = function(lang) {
    // تحديث الاتجاه في HTML
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // جلب القاموس
    const translations = window.SYSTEM_TRANSLATIONS || window.DICTIONARY || {}; 

    // تحديث كل النصوص في الصفحة
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // ✅ تحديث خاص للبوت (Placeholder)
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key]; // innerHTML لدعم التنسيق داخل النص
            }
        }
    });

    // تحديث نص زر اللغة في الهيدر
    const langText = document.getElementById('langText');
    if(langText) langText.textContent = lang === 'ar' ? 'EN' : 'عربي';

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
    
    // إعادة تشغيل الحسابات والرسم البياني
    calculateStats();
    renderDepartmentsTable();
    renderCharts();
    
    // حفظ اللغة
    localStorage.setItem('eGov_Lang', lang);
};

// --- 3. دالة الحسابات (مصححة للنماذج) ---
function calculateStats() {
    if (!window.COMPANY_DATA) return;

    // أ. عدد الأقسام
    animateValue("deptCount", 0, window.COMPANY_DATA.departments.length, 1000);

    // ب. عدد السياسات
    let totalPolicies = 0;
    if (window.HR_POLICIES?.sections) window.HR_POLICIES.sections.forEach(s => totalPolicies += s.policies.length);
    if (window.FINANCIAL_GOVERNANCE?.sections) window.FINANCIAL_GOVERNANCE.sections.forEach(s => totalPolicies += s.policies.length);
    if (window.governanceTexts) totalPolicies += window.governanceTexts.length;
    animateValue("policiesCount", 0, totalPolicies, 1500);

    // ج. عدد النماذج (✅ التصحيح هنا)
    let formsCount = 0;
    if (window.egovFormsTemplates) {
        if (window.egovFormsTemplates.forms && Array.isArray(window.egovFormsTemplates.forms)) {
            formsCount = window.egovFormsTemplates.forms.length;
        } else if (Array.isArray(window.egovFormsTemplates)) {
            formsCount = window.egovFormsTemplates.length;
        }
    }
    animateValue("formsCount", 0, formsCount, 1200);
}

// --- 4. دالة رسم الجدول ---
function renderDepartmentsTable() {
    const tableBody = document.getElementById('departmentsTableBody');
    if(!tableBody || !window.COMPANY_DATA) return;
    
    const lang = document.documentElement.lang || 'ar';
    const t = (window.SYSTEM_TRANSLATIONS || {})[lang] || {};

    tableBody.innerHTML = ''; 
    window.COMPANY_DATA.departments.slice(0, 5).forEach((dept) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${dept.id}</td>
            <td style="font-weight:bold;">${t[dept.name] || dept.name}</td>
            <td style="color:var(--sky-blue);">${t[dept.role] || dept.role}</td>
            <td><span class="badge" style="background:rgba(126, 221, 163, 0.15); color:#7EDDA3; padding:5px 10px; border-radius:12px; font-size:12px;">Active</span></td>
        `;
        tableBody.appendChild(row);
    });
}

// --- 5. دالة الرسم البياني ---
function renderCharts() {
    const ctx = document.getElementById('assetsChart');
    if(!ctx || typeof Chart === 'undefined') return;
    
    if(window.myChartInstance) window.myChartInstance.destroy();
    
    // تجميع البيانات
    const hr = (window.HR_POLICIES?.sections || []).reduce((a, b) => a + b.policies.length, 0);
    const fin = (window.FINANCIAL_GOVERNANCE?.sections || []).reduce((a, b) => a + b.policies.length, 0);
    const board = window.governanceTexts?.length || 0;
    
    let forms = 0;
    if(window.egovFormsTemplates?.forms) forms = window.egovFormsTemplates.forms.length;
    else if(Array.isArray(window.egovFormsTemplates)) forms = window.egovFormsTemplates.length;

    const lang = document.documentElement.lang || 'ar';
    const labels = lang === 'ar' 
        ? ['سياسات HR', 'نماذج', 'حوكمة', 'مالية'] 
        : ['HR Policies', 'Forms', 'Board', 'Finance'];

    window.myChartInstance = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: [hr, forms, board, fin],
                backgroundColor: ['#8B7FFF', '#FFB86C', '#7EDDA3', '#5BC0F8'], // نفس ألوان الثيم الجديد
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { 
                    position: 'bottom', 
                    labels: { color: '#9DA5B4', font: { family: 'Tajawal' }, padding: 20 } 
                }
            },
            cutout: '75%' // حلقة أنحف وأجمل
        }
    });
}

// --- 6. دوال مساعدة ---
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

// تشغيل النظام
document.addEventListener('DOMContentLoaded', window.initDashboard);
