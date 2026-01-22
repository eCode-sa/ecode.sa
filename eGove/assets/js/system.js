(function() {
    const path = window.location.pathname;
    const subFolders = ['admin', 'board', 'ceo', 'cfo', 'cto', 'hr', 'sales', 'audit', 'secretary', 'shareholder'];
    const isSubPage = subFolders.some(f => path.includes('/' + f + '/'));
    const base = isSubPage ? '../' : '';
    const jsRoot = base + 'assets/js/';
    const cssRoot = base + 'assets/css/';

    function loadCSS(filename) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = filename.startsWith('http') ? filename : cssRoot + filename;
        document.head.appendChild(link);
    }

    function loadScripts(scripts) {
        if (scripts.length === 0) return;
        const filename = scripts[0];
        const script = document.createElement('script');
        script.src = filename.startsWith('http') ? filename : jsRoot + filename;
        script.onload = () => loadScripts(scripts.slice(1));
        document.body.appendChild(script);
    }

    loadCSS('style.css'); 
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css');

    const appScripts = [
        'core/config.js',
        'core/i18n.js',
        'core/auth.js',
        'components/bot.js', 
        'layout.js'         
    ];
    
document.addEventListener('DOMContentLoaded', () => {
        loadScripts(appScripts);
    });
})();
