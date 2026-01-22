/**
 * eGov Layout Engine
 * المحرك المسؤول عن بناء الواجهة الموحدة (Sidebar + Topbar) وتكييفها حسب الدور الوظيفي
 */

const Layout = {
    // المسار الجذري (يفترض أن الملفات داخل مجلدات فرعية مثل /admin/index.html)
    rootPath: '../../', 

    // تعريف قوائم التنقل لكل دور وظيفي (10 شخصيات)
    menus: {
        'admin': [
            { icon: 'fa-home', text: 'لوحة القيادة', link: 'index.html' },
            { icon: 'fa-users-cog', text: 'إدارة المستخدمين', link: 'users.html' },
            { icon: 'fa-shield-alt', text: 'سجلات التدقيق', link: 'audit.html' },
            { icon: 'fa-cogs', text: 'إعدادات النظام', link: 'settings.html' },
            { icon: 'fa-briefcase', text: 'ملفي الشخصي', link: 'profile.html' }
        ],
        'board': [
            { icon: 'fa-gavel', text: 'ملخص المجلس', link: 'index.html' },
            { icon: 'fa-calendar-check', text: 'الاجتماعات', link: 'meetings.html' },
            { icon: 'fa-file-signature', text: 'القرارات والتصويت', link: 'decisions.html' },
            { icon: 'fa-briefcase', text: 'ملفي الشخصي', link: 'profile.html' }
        ],
        'ceo': [
            { icon: 'fa-chart-line', text: 'نظرة عامة', link: 'index.html' },
            { icon: 'fa-sitemap', text: 'الأداء الاستراتيجي', link: 'strategy.html' },
            { icon: 'fa-file-invoice-dollar', text: 'التقارير المالية', link: 'finance.html' },
            { icon: 'fa-envelope-open-text', text: 'التعاميم', link: 'circulars.html' },
            { icon: 'fa-user-circle', text: 'ملفي الشخصي', link: 'profile.html' }
        ],
        'hr': [
            { icon: 'fa-users', text: 'الموظفين', link: 'index.html' },
            { icon: 'fa-money-check-alt', text: 'مسير الرواتب', link: 'payroll.html' },
            { icon: 'fa-clock', text: 'الحضور والانصراف', link: 'attendance.html' },
            { icon: 'fa-user-plus', text: 'الطلبات والتوظيف', link: 'recruitment.html' },
            { icon: 'fa-user-circle', text: 'ملفي الشخصي', link: 'profile.html' }
        ],
        'ceo': [ 
            { icon: 'fa-coins', text: 'المركز المالي', link: 'index.html' },
            { icon: 'fa-file-invoice', text: 'الفواتير والمدفوعات', link: 'invoices.html' },
            { icon: 'fa-calculator', text: 'الميزانية', link: 'budget.html' },
            { icon: 'fa-receipt', text: 'الضريبة والزكاة', link: 'tax.html' },
            { icon: 'fa-user-circle', text: 'ملفي الشخصي', link: 'profile.html' }
        ],
        'cto': [ 
            { icon: 'fa-server', text: 'حالة الأنظمة', link: 'index.html' },
            { icon: 'fa-headset', text: 'تذاكر الدعم', link: 'tickets.html' },
            { icon: 'fa-laptop', text: 'الأصول التقنية', link: 'assets.html' },
            { icon: 'fa-lock', text: 'الأمن السيبراني', link: 'security.html' },
            { icon: 'fa-user-circle', text: 'ملفي الشخصي', link: 'profile.html' }
        ],
        'sales': [
            { icon: 'fa-chart-pie', text: 'المبيعات', link: 'index.html' },
            { icon: 'fa-handshake', text: 'العملاء (CRM)', link: 'clients.html' },
            { icon: 'fa-bullseye', text: 'الأهداف', link: 'targets.html' },
            { icon: 'fa-file-contract', text: 'العقود', link: 'contracts.html' },
            { icon: 'fa-user-circle', text: 'ملفي الشخصي', link: 'profile.html' }
        ],
        'audit': [
            { icon: 'fa-search', text: 'خطة التدقيق', link: 'index.html' },
            { icon: 'fa-exclamation-triangle', text: 'المخاطر', link: 'risks.html' },
            { icon: 'fa-clipboard-check', text: 'الامتثال', link: 'compliance.html' },
            { icon: 'fa-user-circle', text: 'ملفي الشخصي', link: 'profile.html' }
        ],
        'secretary': [
            { icon: 'fa-pen-fancy', text: 'إدارة الجلسات', link: 'index.html' },
            { icon: 'fa-book', text: 'سجل المحاضر', link: 'minutes.html' },
            { icon: 'fa-tasks', text: 'متابعة التوصيات', link: 'tasks.html' },
            { icon: 'fa-user-circle', text: 'ملفي الشخصي', link: 'profile.html' }
        ],
        'shareholder': [
            { icon: 'fa-wallet', text: 'محفظتي', link: 'index.html' },
            { icon: 'fa-hand-holding-usd', text: 'توزيعات الأرباح', link: 'dividends.html' },
            { icon: 'fa-file-pdf', text: 'التقارير السنوية', link: 'reports.html' },
            { icon: 'fa-vote-yea', text: 'التصويت', link: 'voting.html' },
            { icon: 'fa-briefcase', text: 'ملفي الشخصي', link: 'profile.html' }
        ]
    },

    // تهيئة النظام
    init: function() {
        this.role = localStorage.getItem('userRole') || 'guest';
        this.userName = localStorage.getItem('userName') || 'مستخدم';
        
        // التحقق من تسجيل الدخول
        if (!localStorage.getItem('authToken')) {
            window.location.href = this.rootPath + 'index.html';
            return;
        }

        this.buildStructure();
        this.injectSidebar();
        this.injectTopbar();
        this.injectBot();
        this.handleResponsive();
    },

    // بناء الهيكل الأساسي (تغليف المحتوى الموجود)
    buildStructure: function() {
        const bodyContent = document.body.innerHTML;
        document.body.innerHTML = ''; 

        const appContainer = document.createElement('div');
        appContainer.className = 'app-container';
        
        // 1. القائمة الجانبية
        const sidebar = document.createElement('aside');
        sidebar.id = 'appSidebar';
        sidebar.className = 'sidebar';
        
        // 2. المحتوى الرئيسي
        const mainContent = document.createElement('div');
        mainContent.className = 'main-content';
        
        const topbar = document.createElement('header');
        topbar.id = 'appTopbar';
        topbar.className = 'topbar';

        const pageContent = document.createElement('main');
        pageContent.className = 'page-content workspace'; 
        pageContent.innerHTML = bodyContent; 

        mainContent.appendChild(topbar);
        mainContent.appendChild(pageContent);

        appContainer.appendChild(sidebar);
        appContainer.appendChild(mainContent);
        
        document.body.appendChild(appContainer);
    },

    // حقن القائمة الجانبية
    injectSidebar: function() {
        const menuItems = this.menus[this.role] || this.menus['admin']; // Fallback
        
        let menuHTML = menuItems.map(item => {
            const isActive = window.location.href.includes(item.link) ? 'active' : '';
            return `
                <a href="${item.link}" class="menu-item ${isActive}">
                    <i class="fas ${item.icon}"></i>
                    <span>${item.text}</span>
                </a>
            `;
        }).join('');

        const sidebarHTML = `
            <div class="sidebar-header">
                <img src="${this.rootPath}partners-slider/favicon.png" alt="Logo" class="logo-img">
                <div class="brand-text">
                    <h3>eGov</h3>
                    <span>${this.getRoleName(this.role)}</span>
                </div>
            </div>
            <nav class="sidebar-nav">
                <div class="menu-category">القائمة الرئيسية</div>
                ${menuHTML}
            </nav>
            <div class="sidebar-footer">
                <a href="#" onclick="Layout.logout()" class="menu-item logout-btn" style="color: var(--coral-pink);">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>تسجيل الخروج</span>
                </a>
            </div>
        `;
        document.getElementById('appSidebar').innerHTML = sidebarHTML;
    },

    // حقن الشريط العلوي
    injectTopbar: function() {
        const topbarHTML = `
            <div class="topbar-left">
                <button class="toggle-btn" onclick="Layout.toggleSidebar()">
                    <i class="fas fa-bars"></i>
                </button>
                <h2 class="page-title">${document.title.split('|')[0]}</h2>
            </div>
            
            <div class="topbar-right">
                <button class="icon-btn" onclick="I18n.toggleLang()" title="تغيير اللغة">
                    <span style="font-weight: bold; font-size: 12px;">EN</span>
                </button>

                <button class="icon-btn" onclick="toggleTheme()" title="تغيير الثيم">
                    <i class="fas fa-moon" id="themeIcon"></i>
                </button>

                <div class="notification-wrapper">
                    <button class="icon-btn" onclick="Layout.toggleNotifs()">
                        <i class="fas fa-bell"></i>
                        <span class="badge-dot"></span>
                    </button>
                    <div class="dropdown-menu" id="notifDropdown">
                        <div class="dropdown-header">الإشعارات</div>
                        <div class="dropdown-body">
                            ${this.getNotifications(this.role)}
                        </div>
                    </div>
                </div>

                <div class="user-profile">
                    <div class="user-info">
                        <span class="name">${this.userName}</span>
                        <span class="role">${this.getRoleName(this.role)}</span>
                    </div>
                    <div class="user-avatar">
                        <img src="${this.rootPath}partners-slider/favicon.png" alt="User">
                    </div>
                </div>
            </div>
        `;
        document.getElementById('appTopbar').innerHTML = topbarHTML;
        
        // استعادة حالة الثيم
        if(typeof updateThemeIcon === 'function') {
            const savedTheme = localStorage.getItem('theme') || 'dark';
            updateThemeIcon(savedTheme);
        }
    },

    // حقن البوت
    injectBot: function() {
        const botHTML = `
            <div class="chat-widget-btn" onclick="toggleChat()">
                <i class="fas fa-robot"></i>
            </div>
            <div class="chat-window" id="chatWindow">
                <div class="chat-header">
                    <h4><i class="fas fa-sparkles"></i> المساعد الذكي</h4>
                    <i class="fas fa-times" onclick="toggleChat()" style="cursor: pointer;"></i>
                </div>
                <div class="chat-body" id="chatBody">
                    <div class="chat-msg msg-bot">مرحباً ${this.userName} 👋<br>أنا مساعدك الذكي في نظام eGov. كيف يمكنني مساعدتك في مهام ${this.getRoleName(this.role)} اليوم؟</div>
                </div>
                <div class="chat-footer">
                    <input type="text" class="chat-input" id="userMsg" placeholder="اكتب سؤالك..." onkeypress="handleEnter(event)">
                    <button class="send-btn" onclick="sendMsg()"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', botHTML);
    },

    // --- Helper Functions ---

    getRoleName: function(role) {
        const names = {
            'board': 'رئيس المجلس', 'ceo': 'الرئيس التنفيذي', 'hr': 'الموارد البشرية',
            'cfo': 'المالية', 'cto': 'تقنية المعلومات', 'sales': 'المبيعات',
            'audit': 'التدقيق', 'secretary': 'أمانة السر', 'shareholder': 'مساهم',
            'admin': 'مدير النظام'
        };
        return names[role] || 'مستخدم';
    },

    getNotifications: function(role) {
        const common = `
            <div class="notif-item unread">
                <i class="fas fa-info-circle text-info"></i>
                <div>
                    <p>تم تحديث سياسة الخصوصية</p>
                    <span>منذ 2 ساعة</span>
                </div>
            </div>`;
            
        let specific = '';
        if(role === 'ceo' || role === 'board') {
            specific = `
            <div class="notif-item unread">
                <i class="fas fa-file-signature text-warning"></i>
                <div>
                    <p>محضر اجتماع بانتظار التوقيع</p>
                    <span>منذ 30 دقيقة</span>
                </div>
            </div>`;
        } else if (role === 'hr') {
            specific = `
            <div class="notif-item unread">
                <i class="fas fa-user-plus text-success"></i>
                <div>
                    <p>طلب توظيف جديد (مطور)</p>
                    <span>منذ 15 دقيقة</span>
                </div>
            </div>`;
        }
        return specific + common;
    },

    toggleSidebar: function() {
        document.getElementById('appSidebar').classList.toggle('collapsed');
        document.querySelector('.main-content').classList.toggle('expanded');
    },

    toggleNotifs: function() {
        document.getElementById('notifDropdown').classList.toggle('show');
    },

    logout: function() {
        localStorage.clear();
        // العودة للبوابة الرئيسية (جذر المشروع)
        window.location.href = this.rootPath + 'index.html';
    },

    handleResponsive: function() {
        if(window.innerWidth <= 768) {
            document.getElementById('appSidebar').classList.add('collapsed');
        }
    }
};

// تشغيل المحرك عند التحميل
document.addEventListener('DOMContentLoaded', () => Layout.init());

// إغلاق القوائم عند الضغط خارجها
document.addEventListener('click', (e) => {
    if (!e.target.closest('.notification-wrapper')) {
        const dropdown = document.getElementById('notifDropdown');
        if(dropdown) dropdown.classList.remove('show');
    }
});
