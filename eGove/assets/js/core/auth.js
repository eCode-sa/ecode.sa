/* * نظام المصادقة والأمان (Authentication Logic)
 * يدير صلاحيات المستخدمين وحسابات الديمو
 */

const Auth = {
    // 1. حسابات الديمو (شاملة لكافة الأقسام)
    DEMO_ACCOUNTS: {
        // القيادة العليا
        'board':       { email: 'chairman@ecode.sa', pass: '123456', role: 'board', label: 'رئيس المجلس' },
        'secretary':   { email: 'secretary@ecode.sa', pass: '123456', role: 'secretary', label: 'أمين السر' },
        'ceo':         { email: 'ceo@ecode.sa', pass: '123456', role: 'ceo', label: 'الرئيس التنفيذي' },
        
        // الإدارات المساندة
        'cfo':     { email: 'cfo@ecode.sa', pass: '123456', role: 'cfo', label: 'المدير المالي' },
        'hr':          { email: 'hr@ecode.sa', pass: '123456', role: 'hr', label: 'الموارد البشرية' },
        'cto':          { email: 'cto@ecode.sa', pass: '123456', role: 'cto', label: 'تقنية المعلومات' },
        'sales':       { email: 'sales@ecode.sa', pass: '123456', role: 'sales', label: 'مدير المبيعات' },
        
        // الرقابة والمساهمين
        'audit':       { email: 'audit@ecode.sa', pass: '123456', role: 'audit', label: 'التدقيق الداخلي' },
        'shareholder': { email: 'ir@ecode.sa', pass: '123456', role: 'shareholder', label: 'مساهم' },
        
        // أدمن النظام
        'admin':       { email: 'admin@ecode.sa', pass: '123456', role: 'admin', label: 'مسؤول الحوكمة' }
    },

    // 2. دالة تسجيل الدخول
    login: function(email, password) {
        const btn = document.querySelector('button[type="submit"]');
        const originalText = btn.innerText;
        
        btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> جاري التحقق...';
        btn.disabled = true;

        setTimeout(() => {
            // البحث عن المستخدم المطابق
            const user = Object.values(this.DEMO_ACCOUNTS).find(u => u.email === email && u.pass === password);

            if (user) {
                localStorage.setItem('authToken', 'demo_token_' + Date.now());
                localStorage.setItem('userRole', user.role);
                localStorage.setItem('userName', user.label);
                
                // توجيه ذكي حسب الدور (يمكن تفعيله لاحقاً)
                // if (user.role === 'board') window.location.href = 'board_dashboard.html';
                window.location.href = 'index.html'; 
            } else {
                this.showError('بيانات الدخول غير صحيحة');
                btn.innerText = originalText;
                btn.disabled = false;
            }
        }, 800);
    },

    // 3. تعبئة البيانات تلقائياً
    fillDemo: function(role) {
        const account = this.DEMO_ACCOUNTS[role];
        if (account) {
            document.getElementById('email').value = account.email;
            document.getElementById('password').value = account.pass;
            
            // تأثير بصري
            const form = document.getElementById('loginForm');
            form.style.transform = 'scale(0.98)';
            setTimeout(() => form.style.transform = 'scale(1)', 150);
        }
    },

    logout: function() {
        localStorage.clear();
        window.location.href = 'login.html';
    },

    showError: function(msg) {
        const alertBox = document.getElementById('loginAlert');
        if(alertBox) {
            alertBox.innerText = msg;
            alertBox.style.display = 'block';
            setTimeout(() => alertBox.style.display = 'none', 3000);
        } else {
            alert(msg);
        }
    }
};
