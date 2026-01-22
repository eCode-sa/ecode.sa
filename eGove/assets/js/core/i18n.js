const DICTIONARY = {
    ar: {
        // --- Portal / Login ---
        brand: "eCode",
        portal_desc: "نظام الحوكمة الرقمية والامتثال المؤسسي",
        email_placeholder: "البريد الإلكتروني المهني",
        pass_placeholder: "كلمة المرور",
        login_btn: "تسجيل الدخول الآمن",
        demo_label: "✨ اختر شخصية لتجربة النظام (Live Demo):",
        copyright: "© 2026 شركة إلكترونيك كود. جميع الحقوق محفوظة.",
        
        // --- Roles ---
        role_board: "رئيس المجلس", role_sec: "أمين السر", role_ceo: "الرئيس التنفيذي",
        role_cfo: "المدير المالي", role_hr: "مدير الموارد", role_it: "المدير التقني",
        role_sales: "مدير المبيعات", role_audit: "التدقيق الداخلي", role_share: "مساهم",
        role_admin: "مدير النظام",

        // --- Sidebar Menus (Keys matches layout.js) ---
        // Admin
        menu_dashboard: "لوحة القيادة",
        menu_users: "إدارة المستخدمين",
        menu_audit_logs: "سجلات التدقيق",
        menu_settings: "إعدادات النظام",
        menu_profile: "الملف الشخصي",
        // Board
        menu_board_summary: "ملخص المجلس",
        menu_meetings: "الاجتماعات",
        menu_decisions: "القرارات",
        // CEO
        menu_overview: "نظرة عامة",
        menu_strategy: "الاستراتيجية",
        menu_finance_rep: "التقارير المالية",
        menu_circulars: "التعاميم",
        // HR
        menu_employees: "الموظفين",
        menu_payroll: "الرواتب",
        menu_attendance: "الحضور",
        menu_recruitment: "الطلبات والتوظيف",
        // Finance
        menu_finance_center: "المركز المالي",
        menu_invoices: "الفواتير",
        menu_budget: "الميزانية",
        menu_zakat: "الزكاة والضريبة",
        // Tech
        menu_systems: "حالة الأنظمة",
        menu_support: "الدعم الفني",
        menu_assets: "الأصول التقنية",
        menu_security: "الأمن السيبراني",
        // Sales
        menu_sales: "المبيعات",
        menu_crm: "العملاء (CRM)",
        menu_targets: "الأهداف",
        menu_contracts: "العقود",
        // Audit
        menu_audit_plan: "خطة التدقيق",
        menu_risks: "المخاطر",
        menu_compliance: "الامتثال",
        // Secretary
        menu_sessions: "إدارة الجلسات",
        menu_minutes: "سجل المحاضر",
        menu_tasks: "التوصيات",
        // Shareholder
        menu_wallet: "محفظتي",
        menu_dividends: "الأرباح",
        menu_reports: "التقارير",
        menu_voting: "التصويت",

        // --- الداش بورد للدمن --- 
        compliance_index: "مؤشر الامتثال العام",
        active_users: "مستخدم نشط",
        all_working: "الكل يعمل",
        critical_alerts: "تنبيهات حرجة",
        review_needed: "يرجى المراجعة",
        system_status: "حالة الأنظمة",
        recent_activities: "آخر النشاطات",
        task_budget_approval: "اعتماد الميزانية",
        task_policy_update: "تحديث سياسة الإجازات",
        status_completed: "مكتمل",
        status_pending: "قيد المراجعة",
        compliance_status: "حالة الامتثال",
        gov_rating: "تصنيف الحوكمة: ممتاز",

        // --- General ---
        welcome: "مرحباً بك",
        logout: "تسجيل الخروج",
        notifications: "الإشعارات"
    },
    
    en: {
        // --- Portal / Login ---
        brand: "eCode",
        portal_desc: "Digital Governance & Corporate Compliance System",
        email_placeholder: "Professional Email",
        pass_placeholder: "Password",
        login_btn: "Secure Login",
        demo_label: "✨ Select a Persona for Live Demo:",
        copyright: "© 2026 Electronic Code Co. All Rights Reserved.",
        
        // --- Roles ---
        role_board: "Chairman", role_sec: "Secretary", role_ceo: "CEO",
        role_cfo: "CFO", role_hr: "HR Manager", role_it: "CTO",
        role_sales: "Sales Manager", role_audit: "Internal Audit", role_share: "Shareholder",
        role_admin: "System Admin",

        // --- Sidebar Menus ---
        // Admin
        menu_dashboard: "Dashboard",
        menu_users: "User Management",
        menu_audit_logs: "Audit Logs",
        menu_settings: "System Settings",
        menu_profile: "My Profile",
        // Board
        menu_board_summary: "Board Summary",
        menu_meetings: "Meetings",
        menu_decisions: "Decisions",
        // CEO
        menu_overview: "Overview",
        menu_strategy: "Strategy",
        menu_finance_rep: "Financial Reports",
        menu_circulars: "Circulars",
        // HR
        menu_employees: "Employees",
        menu_payroll: "Payroll",
        menu_attendance: "Attendance",
        menu_recruitment: "Recruitment",
        // Finance
        menu_finance_center: "Financial Center",
        menu_invoices: "Invoices",
        menu_budget: "Budget",
        menu_zakat: "Zakat & Tax",
        // Tech
        menu_systems: "System Status",
        menu_support: "Tech Support",
        menu_assets: "IT Assets",
        menu_security: "Cybersecurity",
        // Sales
        menu_sales: "Sales",
        menu_crm: "Clients (CRM)",
        menu_targets: "Targets",
        menu_contracts: "Contracts",
        // Audit
        menu_audit_plan: "Audit Plan",
        menu_risks: "Risks",
        menu_compliance: "Compliance",
        // Secretary
        menu_sessions: "Session Mgmt",
        menu_minutes: "Minutes Registry",
        menu_tasks: "Recommendations",
        // Shareholder
        menu_wallet: "My Wallet",
        menu_dividends: "Dividends",
        menu_reports: "Reports",
        menu_voting: "Voting",

        // --- الداش بورد للدمن --- 
        compliance_index: "General Compliance Index",
        active_users: "Active Users",
        all_working: "All Operational",
        critical_alerts: "Critical Alerts",
        review_needed: "Action Required",
        system_status: "System Status",
        recent_activities: "Recent Activities",
        task_budget_approval: "Budget Approval",
        task_policy_update: "Leave Policy Update",
        status_completed: "Completed",
        status_pending: "Pending Review",
        compliance_status: "Compliance Status",
        gov_rating: "Governance Rating: Excellent",

        // --- General ---
        welcome: "Welcome",
        logout: "Logout",
        notifications: "Notifications"
    }
};

const I18n = {
    currentLang: localStorage.getItem('lang') || 'ar',

    init: function() {
        // تطبيق اللغة والاتجاه
        document.documentElement.setAttribute('lang', this.currentLang);
        document.documentElement.setAttribute('dir', this.currentLang === 'ar' ? 'rtl' : 'ltr');
        
        // تحديث زر اللغة (إذا وجد)
        const btn = document.getElementById('langText'); // تأكد من وجود span بهذا الآيدي داخل الزر
        if(btn) btn.innerText = this.currentLang === 'ar' ? 'EN' : 'عربي';

        this.updateContent();
    },

    toggleLang: function() {
        this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('lang', this.currentLang);
        
        // إعادة تحميل الصفحة لتطبيق التغييرات على الـ Layout بالكامل
        // هذا أضمن حل لأن الـ Layout يبنى بالجافاسكريبت
        location.reload(); 
    },

    t: function(key) {
        return DICTIONARY[this.currentLang][key] || key;
    },

    updateContent: function() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = this.t(key);
            
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = text;
            } else {
                el.innerHTML = text;
            }
        });
    }
};

// تشغيل عند التحميل
document.addEventListener('DOMContentLoaded', () => I18n.init());
