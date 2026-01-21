/* * نظام الترجمة واللغات (Internationalization)
 */

const DICTIONARY = {
    ar: {
        brand: "eCode",
        tagline: "تصنع الأثر",
        nav_home: "الرئيسية",
        nav_services: "الخدمات",
        hero_title: "الحوكمة الرقمية<br>بمفهوم الابتكار",
        btn_demo: "اطلب عرض فني",
        contact_us: "تواصل معنا",
        footer_desc: "شركة تقنية سعودية رائدة في حلول الحوكمة الرقمية.",
        copyright: "© 2026 شركة إلكترونيك كود. جميع الحقوق محفوظة."
    },
    en: {
        brand: "eCode",
        tagline: "Making Impact",
        nav_home: "Home",
        nav_services: "Services",
        hero_title: "Digital Governance<br>Reimagined",
        btn_demo: "Request Demo",
        contact_us: "Contact Us",
        footer_desc: "Leading Saudi Tech Company in Digital Governance.",
        copyright: "© 2026 Electronic Code Co. All Rights Reserved."
    }
};

const I18n = {
    // اللغة الحالية
    currentLang: document.documentElement.getAttribute('lang') || 'ar',

    // دالة جلب النص
    t: function(key) {
        return DICTIONARY[this.currentLang][key] || key;
    },

    // دالة تغيير اللغة
    switchLang: function() {
        const newLang = this.currentLang === 'ar' ? 'en' : 'ar';
        this.currentLang = newLang;
        
        // تحديث الـ HTML
        document.documentElement.setAttribute('lang', newLang);
        document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
        
        // تحديث النصوص في الصفحة
        this.updatePageContent();
        
        // حفظ التفضيل
        localStorage.setItem('preferredLang', newLang);
    },

    // تحديث النصوص الموجودة في الصفحة بناءً على data-i18n
    updatePageContent: function() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.innerHTML = this.t(key);
        });
    }
};

// عند التحميل، تأكد من اللغة المحفوظة
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && savedLang !== I18n.currentLang) {
        I18n.switchLang(); // التبديل للغة المحفوظة
    }
});
