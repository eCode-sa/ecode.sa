/* ==========================================================================
   eGov System Core (Unified)
   يجمع هذا الملف:
   1. البنية التحتية (Loaders & Paths)
   2. منطق لوحة القيادة والبيانات (Dashboard & Data)
   3. تفاعلات الواجهة والذكاء الاصطناعي (UI & AI)
   ========================================================================== */

// ==========================================
// 1. استيراد البيانات (Imports)
// ==========================================
import COMPANY_DATA from './data/company_data.js';
import HR_POLICIES from './data/hr-policies.js';
import { egovFormsTemplates } from './data/FormsTemplates.js';
import FINANCIAL_GOVERNANCE from './data/financial-governance.js';
import { governanceTexts } from './data/board_governance.js';

// ==========================================
// 2. إعدادات النظام والمسارات (System Config)
// ==========================================
const path = window.location.pathname;
const subFolders = ['admin', 'board', 'ceo', 'cfo', 'cto', 'hr', 'sales', 'audit', 'secretary', 'shareholder'];
const isSubPage = subFolders.some(f => path.includes('/' + f + '/'));
const base = isSubPage ? '../' : '';
const jsRoot = base + 'assets/js/';
const cssRoot = base + 'assets/css/';

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
    if (scripts.length === 0) {
        initDashboard(); // تشغيل الداشبورد بعد تحميل الملفات
        return;
    }
    const filename = scripts[0];
    const script = document.createElement('script');
    script.src = filename.startsWith('http') ? filename : jsRoot + filename;
    script.onload = () => loadScripts(scripts.slice(1));
    document.body.appendChild(script);
}

// ==========================================
// 4. منطق لوحة القيادة (Dashboard Logic)
// ==========================================
export function initDashboard() {
    // تفعيل الأنيميشن العام للصفحة
    initScrollAnimations();

    // التحقق من وجود عناصر الداشبورد لتجنب الأخطاء في الصفحات الأخرى
    if (!document.getElementById('companyNameDisplay')) return;

    console.log("Initializing Dashboard Real Data...");

    // التاريخ
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateEl = document.getElementById('currentDate');
    if(dateEl) dateEl.textContent = new Date().toLocaleDateString('ar-SA', dateOptions);

    // اسم الشركة
    const compNameEl = document.getElementById('companyNameDisplay');
    if(compNameEl) compNameEl.textContent = COMPANY_DATA.basic.nameAr;
    
    // اسم المستخدم
    const adminNameEl = document.getElementById('adminName');
    if(adminNameEl && localStorage.getItem('userName')) {
        adminNameEl.textContent = localStorage.getItem('userName');
    }

    calculateStats();
    renderDepartmentsTable();
    renderCharts();
}

// ------------------------------------------
// دوال مساعدة للإحصائيات (Stats Helpers)
// ------------------------------------------
function calculateStats() {
    const deptCount = COMPANY_DATA.departments.length;
    animateValue("deptCount", 0, deptCount, 1000);

    let totalPolicies = 0;
    if(HR_POLICIES.sections) HR_POLICIES.sections.forEach(sec => totalPolicies += sec.policies.length);
    if(FINANCIAL_GOVERNANCE.sections) FINANCIAL_GOVERNANCE.sections.forEach(sec => totalPolicies += sec.policies.length);
    if(governanceTexts) totalPolicies += governanceTexts.length;
    
    animateValue("policiesCount", 0, totalPolicies, 1500);

    const formsCount = egovFormsTemplates.forms.length;
    animateValue("formsCount", 0, formsCount, 1200);
}

function renderDepartmentsTable() {
    const tableBody = document.getElementById('departmentsTableBody');
    if(!tableBody) return;

    tableBody.innerHTML = ''; 
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
// 5. وظائف الذكاء الاصطناعي والتفاعل (AI & Interactions)
// ==========================================

// جعل الدوال متاحة للنطاق العام (Global Scope) لكي تعمل مع أزرار HTML onclick
window.analyzeProjectWithAI = async function() {
    const input = document.getElementById('ai-project-desc').value;
    const resultBox = document.getElementById('ai-result');
    const resultContent = document.getElementById('ai-result-content');
    const btn = document.getElementById('ai-btn');
    
    if (!input || input.trim() === "") {
        alert("الرجاء إدخال تفاصيل الاستشارة أو المشروع أولاً.");
        return;
    }

    // حالة التحميل
    const originalBtnText = btn.innerHTML;
    btn.innerHTML = '<span>جاري التحليل...</span> <i class="fas fa-spinner fa-spin"></i>';
    btn.disabled = true;
    if(resultBox) resultBox.style.display = 'none';

    // ⚠️ ضع مفتاح API الخاص بك هنا
    const apiKey = "YOUR_GEMINI_API_KEY_HERE"; 

    const prompt = `
    بصفتك مستشار حوكمة ومخاطر وامتثال (GRC Consultant) معتمد في المملكة العربية السعودية:
    قم بتحليل المدخلات التالية: "${input}"
    
    المطلوب:
    1. حدد المخاطر التشغيلية أو القانونية المحتملة باختصار.
    2. اقترح 3 خطوات عملية لتحقيق الامتثال (Compliance) وفقاً للأنظمة السعودية.
    3. كيف يمكن لنظام eGov التقني المساعدة في أتمتة هذا الإجراء؟
    
    الرجاء الرد بنقاط مختصرة وواضحة باللغة العربية.
    `;

    try {
        // محاكاة (Demo Mode) في حال عدم وجود المفتاح
        if (apiKey === "YOUR_GEMINI_API_KEY_HERE" || apiKey === "") {
            setTimeout(() => {
                if(resultContent) {
                    resultContent.innerHTML = `
                    <strong>⚠️ ملاحظة: هذا تحليل تجريبي (Demo Analysis):</strong><br><br>
                     بناءً على وصفك، يوصى بالآتي:<br>
                    • <strong>الحوكمة:</strong> توثيق محاضر الاجتماعات إلكترونياً لضمان الحجية القانونية.<br>
                    • <strong>الامتثال:</strong> التأكد من توافق الإجراءات مع نظام حماية البيانات الشخصية.<br>
                    • <strong>دور eGov:</strong> يمكن للنظام أتمتة هذه العملية بالكامل عبر وحدة "Board Mgmt".
                    `;
                }
                if(resultBox) resultBox.style.display = 'block';
                btn.innerHTML = originalBtnText;
                btn.disabled = false;
            }, 2000);
            return; 
        }

        // الاتصال الحقيقي بـ Gemini API
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (text && resultContent) {
            resultContent.innerHTML = text.replace(/\n/g, '<br>').replace(/\*/g, '');
            if(resultBox) resultBox.style.display = 'block';
        }

    } catch (error) {
        console.error("AI Error:", error);
        alert("عذراً، الخدمة غير متاحة حالياً. يرجى التحقق من المفتاح أو الاتصال بالدعم.");
    } finally {
        if(apiKey !== "YOUR_GEMINI_API_KEY_HERE" && apiKey !== "") {
            btn.innerHTML = originalBtnText;
            btn.disabled = false;
        }
    }
};

window.handleFormSubmit = function(event) {
    event.preventDefault();
    const btn = event.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = 'جاري الإرسال... <i class="fas fa-spinner fa-spin"></i>';
    btn.disabled = true;

    // محاكاة الإرسال
    setTimeout(() => {
        btn.innerHTML = 'تم الاستلام بنجاح <i class="fas fa-check"></i>';
        btn.style.background = '#10b981'; // Mint Green
        btn.style.color = '#fff';
        event.target.reset();
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            btn.style.background = '';
            btn.style.color = '';
        }, 3000);
    }, 1500);
};

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, .stat-card, .section-card').forEach(section => {
        section.style.opacity = '0'; // إعداد أولي
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
}

// ==========================================
// 6. التنفيذ الرئيسي (Execution)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // تحميل الستايل
    loadCSS('style.css'); 
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css');

    // تحميل السكربتات الأساسية (Layout, Auth, etc)
    // عند الانتهاء سيتم استدعاء initDashboard() تلقائياً
    loadScripts(appScripts);
});
