/**
 * eGov Layout Engine v5.0 (Loader Safe)
 */

const Layout = {
    // تحديد المسار ديناميكياً
    rootPath: (function() {
        const path = window.location.pathname;
        const subFolders = ['admin', 'board', 'ceo', 'cfo', 'cto', 'hr', 'sales', 'audit', 'secretary', 'shareholder'];
        const isSub = subFolders.some(f => path.includes('/' + f + '/'));
        return isSub ? '../' : '';
    })(),

    menus: {
        'admin': [
            { icon: 'fa-home', key: 'menu_dashboard', link: 'index.html' },
            { icon: 'fa-users-cog', key: 'menu_users', link: 'users.html' },
            { icon: 'fa-shield-alt', key: 'menu_audit_logs', link: 'audit.html' },
            { icon: 'fa-cogs', key: 'menu_settings', link: 'settings.html' },
            { icon: 'fa-briefcase', key: 'menu_profile', link: 'profile.html' }
        ],
        'board': [
            { icon: 'fa-gavel', key: 'menu_board_summary', link: 'index.html' },
            { icon: 'fa-calendar-check', key: 'menu_meetings', link: 'meetings.html' },
            { icon: 'fa-file-signature', key: 'menu_decisions', link: 'decisions.html' },
            { icon: 'fa-briefcase', key: 'menu_profile', link: 'profile.html' }
        ],
        'ceo': [
            { icon: 'fa-chart-line', key: 'menu_overview', link: 'index.html' },
            { icon: 'fa-sitemap', key: 'menu_strategy', link: 'strategy.html' },
            { icon: 'fa-file-invoice-dollar', key: 'menu_finance_rep', link: 'finance.html' },
            { icon: 'fa-envelope-open-text', key: 'menu_circulars', link: 'circulars.html' },
            { icon: 'fa-user-circle', key: 'menu_profile', link: 'profile.html' }
        ],
        'hr': [
            { icon: 'fa-users', key: 'menu_employees', link: 'index.html' },
            { icon: 'fa-money-check-alt', key: 'menu_payroll', link: 'payroll.html' },
            { icon: 'fa-clock', key: 'menu_attendance', link: 'attendance.html' },
            { icon: 'fa-user-plus', key: 'menu_recruitment', link: 'recruitment.html' },
            { icon: 'fa-user-circle', key: 'menu_profile', link: 'profile.html' }
        ],
        'cfo': [
            { icon: 'fa-coins', key: 'menu_finance_center', link: 'index.html' },
            { icon: 'fa-file-invoice', key: 'menu_invoices', link: 'invoices.html' },
            { icon: 'fa-calculator', key: 'menu_budget', link: 'budget.html' },
            { icon: 'fa-receipt', key: 'menu_zakat', link: 'tax.html' },
            { icon: 'fa-user-circle', key: 'menu_profile', link: 'profile.html' }
        ],
        'cto': [
            { icon: 'fa-server', key: 'menu_systems', link: 'index.html' },
            { icon: 'fa-headset', key: 'menu_support', link: 'tickets.html' },
            { icon: 'fa-laptop', key: 'menu_assets', link: 'assets.html' },
            { icon: 'fa-lock', key: 'menu_security', link: 'security.html' },
            { icon: 'fa-user-circle', key: 'menu_profile', link: 'profile.html' }
        ],
        'sales': [
            { icon: 'fa-chart-pie', key: 'menu_sales', link: 'index.html' },
            { icon: 'fa-handshake', key: 'menu_crm', link: 'clients.html' },
            { icon: 'fa-bullseye', key: 'menu_targets', link: 'targets.html' },
            { icon: 'fa-file-contract', key: 'menu_contracts', link: 'contracts.html' },
            { icon: 'fa-user-circle', key: 'menu_profile', link: 'profile.html' }
        ],
        'audit': [
            { icon: 'fa-search', key: 'menu_audit_plan', link: 'index.html' },
            { icon: 'fa-exclamation-triangle', key: 'menu_risks', link: 'risks.html' },
            { icon: 'fa-clipboard-check', key: 'menu_compliance', link: 'compliance.html' },
            { icon: 'fa-user-circle', key: 'menu_profile', link: 'profile.html' }
        ],
        'secretary': [
            { icon: 'fa-pen-fancy', key: 'menu_sessions', link: 'index.html' },
            { icon: 'fa-book', key: 'menu_minutes', link: 'minutes.html' },
            { icon: 'fa-tasks', key: 'menu_tasks', link: 'tasks.html' },
            { icon: 'fa-user-circle', key: 'menu_profile', link: 'profile.html' }
        ],
        'shareholder': [
            { icon: 'fa-wallet', key: 'menu_wallet', link: 'index.html' },
            { icon: 'fa-hand-holding-usd', key: 'menu_dividends', link: 'dividends.html' },
            { icon: 'fa-file-pdf', key: 'menu_reports', link: 'reports.html' },
            { icon: 'fa-vote-yea', key: 'menu_voting', link: 'voting.html' },
            { icon: 'fa-user-circle', key: 'menu_profile', link: 'profile.html' }
        ]
    },

    init: function() {
        this.role = localStorage.getItem('userRole') || 'guest';
        this.userName = localStorage.getItem('userName') || 'مستخدم';
        
        // التحقق من الجلسة
        if (!localStorage.getItem('authToken') && !window.location.href.includes('index.html')) {
            window.location.href = this.rootPath + 'index.html';
            return;
        }

        this.buildStructure();
        this.injectSidebar();
        this.injectTopbar();
        this.injectBot();
        this.restoreSettings();
    },

    buildStructure: function() {
        const originalContent = document.body.innerHTML;
        document.body.innerHTML = ''; 

        const appContainer = document.createElement('div');
        appContainer.className = 'app-container';

        const sidebar = document.createElement('aside');
        sidebar.id = 'appSidebar';
        sidebar.className = 'sidebar';

        const mainContent = document.createElement('div');
        mainContent.className = 'main-content';

        const topbar = document.createElement('header');
        topbar.id = 'appTopbar';
        topbar.className = 'topbar';

        const pageContent = document.createElement('main');
        pageContent.className = 'dashboard-container'; 
        pageContent.id = 'workspace';
        pageContent.innerHTML = originalContent;

        mainContent.appendChild(topbar);
        mainContent.appendChild(pageContent);
        
        appContainer.appendChild(sidebar);
        appContainer.appendChild(mainContent);

        document.body.appendChild(appContainer);
    },

    injectSidebar: function() {
        const menuItems = this.menus[this.role] || this.menus['admin'];
        let menuHTML = menuItems.map(item => {
            const isActive = window.location.href.includes(item.link) ? 'active' : '';
            return `
                <a href="${item.link}" class="menu-item ${isActive}">
                    <i class="fas ${item.icon}"></i>
                    <span data-i18n="${item.key}">...</span> 
                </a>
            `;
        }).join('');

        const sidebarHTML = `
            <div class="sidebar-header">
                <img src="${this.rootPath}partners-slider/favicon.png" alt="Logo" class="logo-img">
                <div class="brand-text">
                    <h3 data-i18n="brand">eGov</h3>
                    <span style="font-size: 11px; color: var(--lavender-light);" data-i18n="${roleKey}">${this.role}</span>
                </div>
            </div>
            <nav class="sidebar-nav">
                <div class="menu-category" data-i18n="menu_home">القائمة</div>
                ${menuHTML}
            </nav>
            <div class="sidebar-footer">
                <a href="#" onclick="Layout.logout()" class="menu-item logout-btn" style="color: var(--coral-pink);">
                    <i class="fas fa-sign-out-alt"></i>
                    <span data-i18n="logout">خروج</span>
                </a>
            </div>
        `;
        document.getElementById('appSidebar').innerHTML = sidebarHTML;
        
        if(typeof I18n !== 'undefined') I18n.updateContent();
    },

    injectTopbar: function() {
        const topbarHTML = `
            <div class="topbar-left">
                <button class="toggle-btn" onclick="Layout.toggleSidebar()"><i class="fas fa-bars"></i></button>
                <h2 class="page-title">${document.title}</h2>
            </div>
            <div class="topbar-right">
                <button class="icon-btn" onclick="Layout.toggleLanguage()" title="Language">
                    <span id="langText" style="font-weight: bold; font-size: 12px;">EN</span>
                </button>
                <button class="icon-btn" onclick="Layout.toggleTheme()" title="Theme">
                    <i class="fas fa-moon" id="themeIcon"></i>
                </button>
                <div class="notification-wrapper">
                    <button class="icon-btn" onclick="Layout.toggleNotifs()"><i class="fas fa-bell"></i><span class="badge-dot"></span></button>
                    <div class="dropdown-menu" id="notifDropdown">
                        <div class="dropdown-header">الإشعارات</div>
                        <div class="dropdown-body">
                            <div class="notif-item"><i class="fas fa-info-circle text-info"></i><div><p>مرحباً بك في eGov</p><span>الآن</span></div></div>
                        </div>
                    </div>
                </div>
                <div class="user-profile">
                    <div class="user-info">
                        <span class="name">${this.userName}</span>
                        <span class="role" style="font-size: 10px; color: var(--text-secondary);" data-i18n="role_${this.role}">${this.getRoleName(this.role)}</span>
                    </div>
                    <div class="user-avatar">
                        <img src="${this.rootPath}partners-slider/favicon.png" alt="User">
                    </div>
                </div>
            </div>
        `;
        document.getElementById('appTopbar').innerHTML = topbarHTML;
        
        this.restoreSettings();
    },

    injectBot: function() {
        if (!document.getElementById('chatWindow')) {
            const botHTML = `
                <div class="chat-widget-btn" onclick="toggleChat()"><i class="fas fa-robot"></i></div>
                <div class="chat-window" id="chatWindow" style="display:none;">
                    <div class="chat-header"><h4>المساعد الذكي</h4><i class="fas fa-times" onclick="toggleChat()" style="cursor:pointer;"></i></div>
                    <div class="chat-body" id="chatBody"><div class="chat-msg msg-bot">مرحباً ${this.userName} 👋 كيف أساعدك؟</div></div>
                    <div class="chat-footer">
                        <input type="text" class="chat-input" id="userMsg" placeholder="..." onkeypress="handleEnter(event)">
                        <button class="btn-primary" onclick="sendMsg()" style="padding:5px 10px;display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%"><i class="fas fa-paper-plane"></i></button>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', botHTML);
        }
    },

    getRoleName: function(role) {
        const names = { 'board': 'رئيس المجلس', 'ceo': 'الرئيس التنفيذي', 'hr': 'الموارد البشرية', 'cfo': 'المدير المالي', 'cto': 'المدير التقني', 'sales': 'مدير المبيعات', 'audit': 'التدقيق', 'secretary': 'أمين السر', 'shareholder': 'مساهم', 'admin': 'مدير النظام' };
        return names[role] || role;
    },

    // --- الوظائف التفاعلية ---
    
    toggleTheme: function() {
        const html = document.documentElement;
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        const icon = document.getElementById('themeIcon');
        if(icon) icon.className = next === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    },

    toggleLanguage: function() {
        if (typeof I18n !== 'undefined') I18n.toggleLang();
    },

    restoreSettings: function() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        const icon = document.getElementById('themeIcon');
        if(icon) icon.className = savedTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        
        if(typeof I18n !== 'undefined') I18n.init();
    },

    toggleSidebar: function() { document.getElementById('appSidebar').classList.toggle('collapsed'); },
    toggleNotifs: function() { document.getElementById('notifDropdown').classList.toggle('show'); },
    logout: function() { localStorage.clear(); window.location.href = this.rootPath + 'index.html'; }
};

// === [إصلاح التشغيل] تأكد من تشغيل الكود سواء كانت الصفحة محملة مسبقاً أو لا ===
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Layout.init());
} else {
    Layout.init(); // الصفحة محملة بالفعل، شغل فوراً
}

// إغلاق القوائم عند النقر خارجها
document.addEventListener('click', (e) => {
    if (!e.target.closest('.notification-wrapper')) {
        const dd = document.getElementById('notifDropdown');
        if(dd) dd.classList.remove('show');
    }
});
