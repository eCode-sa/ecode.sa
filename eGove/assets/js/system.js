/**
 * eGov System Loader v2.0
 * النسخة الذكية: تكتب المسار المختصر وهو يكمل الباقي
 */

(function() {
    // 1. تحديد مكاننا (هل نحن في مجلد فرعي؟)
    const path = window.location.pathname;
    const isSubPage = path.includes('/admin/') || path.includes('/board/') || 
                      path.includes('/ceo/') || path.includes('/hr/') || 
                      path.includes('/cfo/') || path.includes('/cto/') || 
                      path.includes('/sales/') || path.includes('/audit/') || 
                      path.includes('/secretary/') || path.includes('/shareholder/');
    
    // تحديد "بادئة" المسار (Prefix)
    const base = isSubPage ? '../' : '';
    
    // مسار مجلد الـ JS ومجلد الـ CSS
    const jsRoot = base + 'assets/js/';
    const cssRoot = base + 'assets/css/';

    // 2. دالة التحميل
    function loadCSS(filename) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        // إذا كان رابط خارجي (http) خذه كما هو، وإلا أضف المسار الخاص بنا
        link.href = filename.startsWith('http') ? filename : cssRoot + filename;
        document.head.appendChild(link);
    }

    function loadScripts(scripts) {
        if (scripts.length === 0) return;
        
        const filename = scripts[0];
        const script = document.createElement('script');
        // هنا السحر: نضيف jsRoot تلقائياً للملفات المحلية
        script.src = filename.startsWith('http') ? filename : jsRoot + filename;
        
        script.onload = () => loadScripts(scripts.slice(1));
        document.body.appendChild(script);
    }

    // === التنفيذ (بالمسارات المختصة التي طلبتها) ===

    // أ. الستايلات
    loadCSS('style.css'); // هو سيعرف أنها في assets/css/style.css
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css');

    // ب. السكربتات (أصبحت نظيفة الآن)
    const appScripts = [
        'core/config.js',   // بدلاً من assets/js/core/config.js
        'core/i18n.js',
        'core/auth.js',
        'layout.js',        // موجود مباشرة في assets/js/
        'components/bot.js' // موجود في assets/js/components/
    ];

    // التحميل
    document.addEventListener('DOMContentLoaded', () => {
        loadScripts(appScripts);
    });

})();
