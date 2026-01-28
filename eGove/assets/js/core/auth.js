/* * نظام المصادقة والتوجيه الذكي (Smart Routing Auth)
 */

const Auth = {
    // 1. تعريف المستخدمين ومساراتهم
    DEMO_ACCOUNTS: {
        // --- القيادة العليا ---
        'board': { 
            email: 'chairman@ecode.sa', pass: '123456', role: 'board', label: 'رئيس المجلس',
            path: 'board/index.html' // المسار الخاص
        },
        'secretary': { 
            email: 'secretary@ecode.sa', pass: '123456', role: 'secretary', label: 'أمين السر',
            path: 'secretary/index.html'
        },
        'ceo': { 
            email: 'ceo@ecode.sa', pass: '123456', role: 'ceo', label: 'الرئيس التنفيذي',
            path: 'ceo/index.html'
        },
        
        // --- الإدارات التنفيذية ---
        'cfo': { 
            email: 'cfo@ecode.sa', pass: '123456', role: 'cfo', label: 'المدير المالي',
            path: 'cfo/index.html'
        },
        'hr': { 
            email: 'hr@ecode.sa', pass: '123456', role: 'hr', label: 'الموارد البشرية',
            path: 'hr/index.html'
        },
        'cto': { 
            email: 'cto@ecode.sa', pass: '123456', role: 'cto', label: 'تقنية المعلومات',
            path: 'cto/index.html'
        },
        'sales': { 
            email: 'sales@ecode.sa', pass: '123456', role: 'sales', label: 'مدير المبيعات',
            path: 'sales/index.html'
        },
        
        // --- الرقابة والملاك ---
        'audit': { 
            email: 'audit@ecode.sa', pass: '123456', role: 'audit', label: 'التدقيق الداخلي',
            path: 'audit/index.html'
        },
        'shareholder': { 
            email: 'ir@ecode.sa', pass: '123456', role: 'shareholder', label: 'مساهم',
            path: 'shareholder/index.html'
        },
        
        // --- إدارة النظام ---
        'admin': { 
            email: 'admin@ecode.sa', pass: '123456', role: 'admin', label: 'GRCO',
            path: 'admin/index.html'
        }
    },

    // 2. تسجيل الدخول والتوجيه
    login: function(email, password) {
        const btn = document.querySelector('button[type="submit"]');
        const originalText = btn.innerText;
        
        btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> جاري التحقق...';
        btn.disabled = true;

        setTimeout(() => {
            const user = Object.values(this.DEMO_ACCOUNTS).find(u => u.email === email && u.pass === password);

            if (user) {
                // حفظ بيانات الجلسة
                localStorage.setItem('authToken', 'token_' + Date.now());
                localStorage.setItem('userRole', user.role);
                localStorage.setItem('userName', user.label);
                
                // التوجيه إلى المسار المحدد
                window.location.href = user.path; 
            } else {
                this.showError('بيانات الدخول غير صحيحة');
                btn.innerText = originalText;
                btn.disabled = false;
            }
        }, 1000);
    },

    fillDemo: function(role) {
        const account = this.DEMO_ACCOUNTS[role];
        if (account) {
            document.getElementById('email').value = account.email;
            document.getElementById('password').value = account.pass;
            document.getElementById('loginForm').style.opacity = '0.7';
            setTimeout(() => document.getElementById('loginForm').style.opacity = '1', 200);
        }
    },

    logout: function() {
        localStorage.clear();
        // العودة لمجلد الجذر (نقطتين للخلف لأننا سنكون داخل مجلد فرعي)
        window.location.href = '../login.html';
    },

    checkSession: function() {
        if (!localStorage.getItem('authToken')) {
            window.location.href = '../login.html';
        }
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
