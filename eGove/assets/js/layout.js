/* ==========================================
   ملف تخطيط الواجهة (Layout.js) - النسخة النهائية
   ========================================== */

const Layout = {
    rootPath: (function() {
        const path = window.location.pathname;
        const subFolders = ['admin', 'board', 'ceo', 'cfo', 'cto', 'hr', 'sales', 'audit', 'secretary', 'shareholder'];
        const isSub = subFolders.some(f => path.includes('/' + f + '/'));
        return isSub ? '../' : '';
    })(),
   policies.html
    // بيانات القائمة (اختصرتها هنا لعدم التكرار، لكن الكود سيعمل مع القوائم الكاملة لديك)
    menus: {
        'admin': [
            { icon: 'fa-home', key: 'menu_dashboard', link: 'index.html' },
            { icon: 'fa-users-cog', key: 'menu_users', link: 'users.html' },
            { icon: 'fa-shield-alt', key: 'menu_audit_logs', link: 'audit.html' },
            { icon: 'fa-cogs', key: 'menu_settings', link: 'settings.html' },
            { icon: 'fa-signature', key: 'menu_forms', link: 'forms.html' },
            { icon: 'fa-sitemap', key: 'menu_policies', link: 'policies.html' },
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

    userName: localStorage.getItem('userName') || 'مسؤول النظام',
    role: localStorage.getItem('userRole') || 'admin',

    init: function() {
        console.log("🎨 Layout Init...");
        this.injectSidebar();
        this.injectTopbar();
        this.injectBot();
        this.restoreSettings();
    },

    // 1. القائمة الجانبية
    injectSidebar: function() {
        const sidebar = document.getElementById('appSidebar');
        if (!sidebar) return;

        const menuItems = this.menus[this.role] || this.menus['admin'];
        let menuHTML = menuItems.map(item => {
            const isActive = window.location.href.includes(item.link) ? 'active' : '';
            return `<a href="${item.link}" class="menu-item ${isActive}"><i class="fas ${item.icon}"></i><span data-i18n="${item.key}">...</span></a>`;
        }).join('');

        sidebar.innerHTML = `
            <div class="sidebar-header">
                <div class="brand-text"><h3>eGov</h3><span style="font-size: 11px; color: var(--lavender-light);">${this.role}</span></div>
            </div>
            <nav class="sidebar-nav"><div class="menu-category" data-i18n="menu_home">القائمة</div>${menuHTML}</nav>
            <div class="sidebar-footer">
                <a href="#" onclick="Layout.logout()" class="menu-item logout-btn" style="color: var(--coral-pink);"><i class="fas fa-sign-out-alt"></i><span data-i18n="logout">خروج</span></a>
            </div>
        `;
    },

    // 2. الشريط العلوي
    injectTopbar: function() {
        const topbar = document.getElementById('appTopbar');
        if (!topbar) return;
        const currentLang = localStorage.getItem('eGov_Lang') === 'en' ? 'EN' : 'عربي';

        topbar.innerHTML = `
            <div class="topbar-left">
                <button class="toggle-btn" onclick="Layout.toggleSidebar()"><i class="fas fa-bars"></i></button>
                <h2 class="page-title">${document.title}</h2>
            </div>
            <div class="topbar-right">
                
                <div class="notification-wrapper">
                    <button class="icon-btn" onclick="Layout.toggleNotifs()">
                        <i class="fas fa-bell"></i><span class="badge-dot"></span>
                    </button>
                    <div class="dropdown-menu" id="notifDropdown">
                        <div class="dropdown-header">التنبيهات</div>
                        <div class="dropdown-body">
                            <div class="notif-item"><i class="fas fa-check-circle text-success"></i><div><p style="margin:0">النظام يعمل</p><span style="font-size:10px">الآن</span></div></div>
                        </div>
                    </div>
                </div>

                <button class="icon-btn" onclick="Layout.toggleLanguage()">
                    <span id="langText" style="font-weight:bold;font-size:12px;">${currentLang}</span>
                </button>

                <button class="icon-btn" onclick="Layout.toggleTheme()"><i class="fas fa-moon" id="themeIcon"></i></button>
                
                <div class="user-profile">
                    <div class="user-info"><span class="name" id="adminName">${this.userName}</span></div>
                    <div class="user-avatar"><i class="fas fa-user-circle fa-2x"></i></div>
                </div>
            </div>
        `;
        this.restoreSettings();
    },

    // 3. البوت
    injectBot: function() {
        if (!document.getElementById('chatWindow')) {
            document.body.insertAdjacentHTML('beforeend', `
                <div class="chat-widget-btn" onclick="Layout.toggleChat()">
                    <i class="fas fa-robot"></i>
                </div>
                
                <div class="chat-window" id="chatWindow" style="display:none;">
                    
                    <div class="chat-header">
                        <h4 data-i18n="bot_title">المساعد الذكي</h4>
                        <i class="fas fa-times" onclick="Layout.toggleChat()" style="cursor:pointer;"></i>
                    </div>
                    
                    <div class="chat-body" id="chatMessages">
                        <div class="chat-msg msg-bot">
                            <span data-i18n="bot_welcome">مرحباً بك</span> ${this.userName} 👋
                            <br>
                            <span data-i18n="bot_intro" style="font-size:12px; opacity:0.8;">كيف يمكنني مساعدتك؟</span>
                        </div>
                    </div>
                    
                    <div class="chat-footer">
                        <input type="text" class="chat-input" id="userInput" data-i18n="bot_placeholder" placeholder="اكتب رسالتك هنا..." onkeypress="if(event.key==='Enter') Layout.sendMessage()">
                        <button class="btn-primary" onclick="Layout.sendMessage()" style="padding:5px;width:40px;height:40px;border-radius:50%">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>

                </div>
            `);

            // تحديث فوري للغة بعد الحقن (لضمان ظهور الإنجليزي إذا كان مفعل)
            const currentLang = localStorage.getItem('eGov_Lang') || 'ar';
            if (window.updateLanguage) window.updateLanguage(currentLang);
        }
    },
   
    // --- الوظائف التفاعلية ---

    toggleSidebar: function() { 
        document.getElementById('appSidebar')?.classList.toggle('active');
        document.getElementById('sidebarOverlay')?.classList.toggle('active');
    },

    toggleNotifs: function() {
        document.getElementById('notifDropdown')?.classList.toggle('show');
    },

    // استدعاء الدوال من system.js و bot.js
    toggleLanguage: function() { if(window.toggleLanguage) window.toggleLanguage(); },
    toggleChat: function() { if(window.toggleChat) window.toggleChat(); else { const w=document.getElementById('chatWindow'); if(w) w.style.display = w.style.display==='none'?'flex':'none'; } },
    sendMessage: function() { if(window.sendMessage) window.sendMessage(); },

    toggleTheme: function() {
        const html = document.documentElement;
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        const icon = document.getElementById('themeIcon');
        if(icon) icon.className = next === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    },

    logout: function() { if(confirm('خروج؟')) { localStorage.clear(); window.location.href = this.rootPath + 'index.html'; } },
    
    getRoleName: function(role) { const n={'admin':'مدير'}; return n[role]||role; },

    restoreSettings: function() {
        const saved = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', saved);
        const icon = document.getElementById('themeIcon');
        if(icon) icon.className = saved === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }
};

if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', () => Layout.init()); } else { Layout.init(); }
