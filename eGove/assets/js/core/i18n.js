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
        
        // Roles
        role_board: "رئيس المجلس",
        role_sec: "أمين السر",
        role_ceo: "الرئيس التنفيذي",
        role_cfo: "المالية",
        role_hr: "الموارد البشرية",
        role_it: "التقنية (IT)",
        role_sales: "المبيعات",
        role_audit: "التدقيق الداخلي",
        role_share: "المساهمين",
        role_admin: "مسؤول النظام",

        // --- Dashboard General ---
        welcome: "مرحباً بك",
        logout: "تسجيل الخروج",
        notifications: "الإشعارات",
        search: "بحث...",
        
        // --- Sidebar Menu ---
        menu_home: "الرئيسية",
        menu_tasks: "المهام",
        menu_reports: "التقارير",
        menu_settings: "الإعدادات"
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
        
        // Roles
        role_board: "Chairman",
        role_sec: "Secretary",
        role_ceo: "CEO",
        role_cfo: "Finance (CFO)",
        role_hr: "HR Manager",
        role_it: "IT Manager",
        role_sales: "Sales Manager",
        role_audit: "Internal Audit",
        role_share: "Shareholder",
        role_admin: "System Admin",

        // --- Dashboard General ---
        welcome: "Welcome",
        logout: "Logout",
        notifications: "Notifications",
        search: "Search...",
        
        // --- Sidebar Menu ---
        menu_home: "Dashboard",
        menu_tasks: "Tasks",
        menu_reports: "Reports",
        menu_settings: "Settings"
    }
};

const I18n = {
    // اللغة الافتراضية
    currentLang: localStorage.getItem('lang') || 'ar',

    init: function() {
        // تطبيق اللغة
        document.documentElement.setAttribute('lang', this.currentLang);
        document.documentElement.setAttribute('dir', this.currentLang === 'ar' ? 'rtl' : 'ltr');
        
        // تحديث زر اللغة
        const btn = document.getElementById('langText');
        if(btn) btn.innerText = this.currentLang === 'ar' ? 'EN' : 'عربي';

        this.updateContent();
    },

    toggleLang: function() {
        this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('lang', this.currentLang);
        this.init();
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
