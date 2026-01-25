/* ==========================================================================
   eGov System Core (Merged)
   يجمع هذا الملف بين:
   1. البنية التحتية (تحميل CSS/JS والمسارات) - كان سابقاً main.js
   2. المنطق الذكي (البيانات، الإحصائيات، الرسوم) - كان سابقاً system.js
   ========================================================================== */

// ==========================================
// 1. استيراد البيانات (ES Modules Import)
// ==========================================
import COMPANY_DATA from './data/company_data.js';
import HR_POLICIES from './data/hr-policies.js';
import { egovFormsTemplates } from './data/FormsTemplates.js';
import FINANCIAL_GOVERNANCE from './data/financial-governance.js';
import { governanceTexts } from './data/board_governance.js';

// ==========================================
// 2. إعدادات النظام والمسارات (Infrastructure)
// ==========================================
const path = window.location.pathname;
const subFolders = ['admin', 'board', 'ceo', 'cfo', 'cto', 'hr', 'sales', 'audit', 'secretary', 'shareholder'];
const isSubPage = subFolders.some(f => path.includes('/' + f + '/'));
const base = isSubPage ? '../' : '';
const jsRoot = base + 'assets/js/';
const cssRoot = base + 'assets/css/';

// قائمة الملفات الأساسية التي سيتم تحميلها في كل الصفحات
const appScripts = [
    'core/config.js',
    'core/i18n.js',
    'core/auth.js',
    'components/bot.js',
    'layout.js'
];

// ==========================================
// 3. دوال التحميل (Loaders)
// ==========================================
function loadCSS(filename) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = filename.startsWith('http') ? filename : cssRoot + filename;
    document.head.appendChild(link);
}

function loadScripts(scripts) {
    // شرط التوقف: إذا انتهت القائمة، شغل لوحة القيادة
    if (scripts.length === 0) {
        initDashboard(); 
        return;
    }

    const filename = scripts[0];
    const script = document.createElement('script');
    script.src = filename.startsWith('http') ? filename : jsRoot + filename;
    
    // التحميل المتسلسل (Recursive Loading) لضمان الترتيب
    script.onload = () => loadScripts(scripts.slice(1));
    document.body.appendChild(script);
}

// ==========================================
// 4. المنطق الذكي للوحة القيادة (Dashboard Logic)
// ==========================================
export function initDashboard() {
    console.log("System & Dashboard Initialized with Real Data...");

    // أ. التحقق من وجود عناصر الصفحة (عشان ما يعطي خطأ في الصفحات الفرعية اللي ما فيها شارت)
    if (!document.getElementById('companyNameDisplay')) return;

    // ب. تحديث التاريخ
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateEl = document.getElementById('currentDate');
    if(dateEl) dateEl.textContent = new Date().toLocaleDateString('ar-SA', dateOptions);

    // ج. تحديث اسم الشركة من ملف البيانات
    const compNameEl = document.getElementById('companyNameDisplay');
    if(compNameEl) compNameEl.textContent = COMPANY_DATA.basic.nameAr;
    
    // د. تحديث اسم المستخدم (اختياري من LocalStorage)
    const adminNameEl = document.getElementById('adminName');
    if(adminNameEl && localStorage.getItem('userName')) {
        adminNameEl.textContent = localStorage.getItem('userName');
    }

    // هـ. تشغيل الحسابات والرسوم
    calculateStats();
    renderDepartmentsTable();
    renderCharts();
}

// ------------------------------------------
// دوال مساعدة للحسابات (Helpers)
// ------------------------------------------
function calculateStats() {
    // 1. عدد الأقسام
    const deptCount = COMPANY_DATA.departments.length;
    animateValue("deptCount", 0, deptCount, 1000);

    // 2. عدد السياسات (تجميع من كل الملفات)
    let totalPolicies = 0;
    if(HR_POLICIES.sections) HR_POLICIES.sections.forEach(sec => totalPolicies += sec.policies.length);
    if(FINANCIAL_GOVERNANCE.sections) FINANCIAL_GOVERNANCE.sections.forEach(sec => totalPolicies += sec.policies.length);
    if(governanceTexts) totalPolicies += governanceTexts.length;
    
    animateValue("policiesCount", 0, totalPolicies, 1500);

    // 3. عدد النماذج
    const formsCount = egovFormsTemplates.forms.length;
    animateValue("formsCount", 0, formsCount, 1200);
}

function renderDepartmentsTable() {
    const tableBody = document.getElementById('departmentsTableBody');
    if(!tableBody) return;

    tableBody.innerHTML = ''; // تنظيف الجدول
    // عرض أول 5 أقسام فقط في الصفحة الرئيسية
    COMPANY_DATA.departments.slice(0, 5).forEach((dept) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="padding: 10px; background: rgba(255,255,255,0.03); border-radius: 0 8px 8px 0;">${dept.id}</td>
            <td style="padding: 10px; background: rgba(255,255,255,0.03); font-weight:bold;">${dept.desc}</td>
            <td style="padding: 10px; background: rgba(255,255,255,0.03); color: var(--sky-blue);">${dept.head}</td>
            <td style="padding: 10px; background: rgba(255,255,255,0.03); border-radius: 8px 0 0 8px;">
                <span class="badge bg-success" style="padding: 5px 10px; border-radius: 12px; font-size: 0.8em;">نشط</span>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function renderCharts() {
    const ctx = document.getElementById('assetsChart');
    if(!ctx) return;

    // تجميع البيانات للشارت
    const hrCount = HR_POLICIES.sections ? HR_POLICIES.sections.length * 5 : 10;
    const formsCount = egovFormsTemplates.forms.length;
    const govCount = governanceTexts.length;
    const finCount = FINANCIAL_GOVERNANCE.sections ? FINANCIAL_GOVERNANCE.sections.length * 3 : 5;

    new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['سياسات HR', 'نماذج إلكترونية', 'حوكمة مجلس الإدارة', 'حوكمة مالية'],
            datasets: [{
                data: [hrCount, formsCount, govCount, finCount],
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

function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    if(!obj) return;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// ==========================================
// 5. التنفيذ (Execution)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. تحميل الستايل
    loadCSS('style.css'); 
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css');

    // 2. تحميل السكربتات الأساسية (وعند الانتهاء سيتم استدعاء initDashboard تلقائياً)
    loadScripts(appScripts);
});
