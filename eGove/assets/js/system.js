// ==========================================
// 1. مُحمل النظام والبيانات (System Loader)
// ==========================================
(function() {
    const path = window.location.pathname;
    const subFolders = ['admin', 'board', 'ceo', 'cfo', 'cto', 'hr', 'sales', 'audit', 'secretary', 'shareholder'];
    const isSubPage = subFolders.some(f => path.includes('/' + f + '/'));
    const base = isSubPage ? '../' : ''; 
    
    // مسارات الأصول
    const jsRoot = base + 'assets/js/';
    const cssRoot = base + 'assets/css/';

    window.loadCSS = function(filename) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = filename.startsWith('http') ? filename : cssRoot + filename;
        document.head.appendChild(link);
    };

    function loadScript(relativePath, callback) {
        const script = document.createElement('script');
        // نستخدم jsRoot كمسار أساسي
        script.src = relativePath.startsWith('http') ? relativePath : jsRoot + relativePath;
        
        script.onload = () => {
            // console.log(`✅ Loaded: ${relativePath}`);
            if (callback) callback();
        };
        script.onerror = () => {
            console.error(`❌ Failed to load: ${relativePath}`);
            if (callback) callback(); 
        };
        document.body.appendChild(script);
    }

    loadCSS('style.css');
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css');

    // === قائمة الملفات (الترتيب مهم جداً) ===
    const scriptsToLoad = [
        // 1. ملفات الكور (الأساسية)
        'core/i18n.js',              // ✅ هنا يتم تحميل ملف الترجمة الخاص بك

        // 2. ملفات البيانات (Data)
        'data/company_data.js',
        'data/hr-policies.js',
        'data/financial-governance.js',
        'data/board_governance.js',
        'data/assemblies_policies.js',
        'data/digital_governance.js',
        'data/monitoring_mechanisms.js',
        'data/forms_templates.js'
    ];

    // دالة التحميل المتسلسل
    function loadChain(index) {
        if (index >= scriptsToLoad.length) {
            console.log("🚀 System Ready. Initializing Dashboard...");
            if (typeof window.initDashboard === 'function') {
                window.initDashboard();
            }
            return;
        }
        loadScript(scriptsToLoad[index], () => loadChain(index + 1));
    }

    document.addEventListener('DOMContentLoaded', () => {
        loadChain(0);
    });

})();

// ==========================================
// 2. منطق لوحة القيادة (Dashboard Logic)
// ==========================================
window.initDashboard = function() {
    // ننتظر تحميل ملفي البيانات والترجمة
    if (typeof COMPANY_DATA === 'undefined' || typeof SYSTEM_TRANSLATIONS === 'undefined') {
        console.warn("⚠️ جاري انتظار تحميل البيانات والترجمة...");
        setTimeout(window.initDashboard, 500); 
        return;
    }

    const compNameEl = document.getElementById('companyNameDisplay');
    if (!compNameEl) return;

    // 1. تطبيق اللغة
    const savedLang = localStorage.getItem('eGov_Lang') || 'ar';
    updateLanguage(savedLang);

    // 2. اسم المستخدم
    const adminNameEl = document.getElementById('adminName');
    if(adminNameEl) {
        adminNameEl.textContent = localStorage.getItem('userName') || (savedLang === 'ar' ? 'مسؤول النظام' : 'System Admin');
    }

    // 3. الأنيميشن
    initScrollAnimations();
};


// --- دالة تحديث اللغة ---
window.updateLanguage = function(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // استخدام SYSTEM_TRANSLATIONS القادم من ملف core/i18n.js
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (SYSTEM_TRANSLATIONS[lang] && SYSTEM_TRANSLATIONS[lang][key]) {
            el.textContent = SYSTEM_TRANSLATIONS[lang][key];
        }
    });

    const compNameEl = document.getElementById('companyNameDisplay');
    if(compNameEl && typeof COMPANY_DATA !== 'undefined') {
        compNameEl.textContent = lang === 'ar' ? COMPANY_DATA.basic.nameAr : COMPANY_DATA.basic.name;
    }

    const dateEl = document.getElementById('currentDate');
    if(dateEl) {
        const locale = lang === 'ar' ? 'ar-SA' : 'en-US';
        dateEl.textContent = new Date().toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }

    calculateStats();
    renderDepartmentsTable();
    renderCharts();
    
    localStorage.setItem('eGov_Lang', lang);
};


// --- الإحصائيات ---
function calculateStats() {
    if (typeof COMPANY_DATA === 'undefined') return;

    animateValue("deptCount", 0, COMPANY_DATA.departments.length, 1000);

    let totalPolicies = 0;
    if (typeof HR_POLICIES !== 'undefined') HR_POLICIES.sections.forEach(sec => totalPolicies += sec.policies.length);
    if (typeof FINANCIAL_GOVERNANCE !== 'undefined') FINANCIAL_GOVERNANCE.sections.forEach(sec => totalPolicies += sec.policies.length);
    if (typeof governanceTexts !== 'undefined') totalPolicies += governanceTexts.length;
    
    animateValue("policiesCount", 0, totalPolicies, 1500);

    if (typeof egovFormsTemplates !== 'undefined') {
        animateValue("formsCount", 0, egovFormsTemplates.forms.length, 1200);
    }
}


// --- جدول الإدارات ---
function renderDepartmentsTable() {
    const tableBody = document.getElementById('departmentsTableBody');
    if(!tableBody || typeof COMPANY_DATA === 'undefined') return;

    const lang = document.documentElement.lang || 'ar';
    // التأكد من وجود القاموس قبل استخدامه
    const t = (typeof SYSTEM_TRANSLATIONS !== 'undefined') ? (SYSTEM_TRANSLATIONS[lang] || SYSTEM_TRANSLATIONS['ar']) : {};

    tableBody.innerHTML = ''; 
    COMPANY_DATA.departments.slice(0, 5).forEach((dept) => {
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


// --- الرسم البياني ---
function renderCharts() {
    const ctx = document.getElementById('assetsChart');
    if(!ctx || typeof Chart === 'undefined') return;
    if (typeof HR_POLICIES === 'undefined' || typeof FINANCIAL_GOVERNANCE === 'undefined') return;

    const hrCount = HR_POLICIES.sections.reduce((acc, sec) => acc + sec.policies.length, 0);
    const finCount = FINANCIAL_GOVERNANCE.sections.reduce((acc, sec) => acc + sec.policies.length, 0);
    const boardCount = (typeof governanceTexts !== 'undefined') ? governanceTexts.length : 0;
    const formsCount = (typeof egovFormsTemplates !== 'undefined') ? egovFormsTemplates.forms.length : 0;
    
    const lang = document.documentElement.lang || 'ar';
    // استخدام النصوص من ملف الترجمة إذا توفرت، أو استخدام نصوص افتراضية
    const t = (typeof SYSTEM_TRANSLATIONS !== 'undefined' && SYSTEM_TRANSLATIONS[lang]) ? SYSTEM_TRANSLATIONS[lang] : {};
    
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

// --- الأنيميشن ---
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
