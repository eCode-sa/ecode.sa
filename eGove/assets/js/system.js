/**
 * eGov System Loader
 * ملف واحد لإدارة واستدعاء جميع ملفات النظام
 */

(function() {
    // 1. تحديد مسار الجذر تلقائياً
    // إذا كنا داخل مجلد فرعي (مثل admin, ceo)، نعود للخلف خطوة، وإلا نبقى في الجذر
    const path = window.location.pathname;
    const isSubFolder = path.includes('/admin/') || path.includes('/board/') || 
                        path.includes('/ceo/') || path.includes('/hr/') || 
                        path.includes('/cfo/') || path.includes('/cto/') || 
                        path.includes('/sales/') || path.includes('/audit/') || 
                        path.includes('/secretary/') || path.includes('/shareholder/');
    
    const rootPath = isSubFolder ? '../assets/' : 'assets/';

    // 2. دالة لحقن ملفات CSS
    function loadCSS(href) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }

    // 3. دالة لحقن ملفات JS بالتسلسل (لضمان الترتيب)
    function loadScripts(scripts) {
        if (scripts.length === 0) return;
        
        const src = scripts[0];
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => loadScripts(scripts.slice(1)); // تحميل التالي بعد الانتهاء
        document.body.appendChild(script);
    }

    // === التنفيذ ===

    // أ. تحميل الستايلات
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css');
    loadCSS(rootPath + 'css/style.css');

    // ب. تحميل السكربتات بالترتيب الصحيح
    const coreScripts = [
        rootPath + 'js/core/config.js',
        rootPath + 'js/core/i18n.js',
        rootPath + 'js/core/auth.js',
        rootPath + 'js/layout.js', // Layout سيقوم بتشغيل نفسه عند التحميل
        rootPath + 'js/components/bot.js'
    ];

    // انتظر تحميل الصفحة ثم ابدأ
    document.addEventListener('DOMContentLoaded', () => {
        loadScripts(coreScripts);
    });

})();
