/* * دوال مساعدة عامة (Utilities)
 * تستخدم في جميع أنحاء النظام
 */

const Utils = {
    // 1. تنسيق التاريخ (للعقود والمحاضر)
    formatDate: function(date = new Date()) {
        return new Intl.DateTimeFormat('ar-SA', {
            year: 'numeric', month: 'long', day: 'numeric'
        }).format(date);
    },

    // 2. التحقق من البريد الإلكتروني
    isValidEmail: function(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    // 3. نسخ نص للحافظة (مفيد لنسخ أرقام القرارات)
    copyToClipboard: function(text) {
        navigator.clipboard.writeText(text).then(() => {
            alert("تم النسخ: " + text); // يمكن استبدالها بـ Toast Message
        });
    },

    // 4. تنسيق العملة (للرواتب والعقود)
    formatCurrency: function(amount) {
        return new Intl.NumberFormat('ar-SA', {
            style: 'currency', currency: 'SAR'
        }).format(amount);
    }
};
