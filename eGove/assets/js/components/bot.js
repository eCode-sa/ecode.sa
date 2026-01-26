/* ==========================================
   eGov AI Assistant Logic (Bilingual & Fixed)
   File: assets/js/components/bot.js
   ========================================== */

const eGovBot = {
    // تحديد اللغة الحالية
    getLang: function() {
        return localStorage.getItem('eGov_Lang') || 'ar';
    },

    // فتح/إغلاق النافذة
    toggle: function() {
        const win = document.getElementById('chatWindow');
        if (!win) return;
        
        const isHidden = win.style.display === 'none' || win.style.display === '';
        win.style.display = isHidden ? 'flex' : 'none';
        
        if (isHidden) {
            setTimeout(() => document.getElementById('userInput')?.focus(), 100);
        }
    },

    // إرسال الرسالة
    send: function() {
        const input = document.getElementById('userInput'); // تم تعديل ID ليطابق Layout.js
        const text = input.value.trim();
        if (!text) return;

        // 1. عرض رسالة المستخدم
        this.addMessage(text, 'user');
        input.value = '';

        // 2. إظهار جاري الكتابة...
        this.showTyping();
        
        // 3. الرد بعد ثانية
        setTimeout(() => {
            this.removeTyping();
            const lang = this.getLang();
            const reply = this.getReply(text, lang);
            this.addMessage(reply, 'bot');
        }, 1000);
    },

    // إضافة الرسالة للواجهة
    addMessage: function(text, sender) {
        const container = document.getElementById('chatMessages'); // تم تعديل ID ليطابق Layout.js
        if (!container) return;

        const div = document.createElement('div');
        div.className = `chat-msg msg-${sender}`;
        div.innerHTML = text; 
        
        container.appendChild(div);
        container.scrollTop = container.scrollHeight; // التمرير للأسفل
    },

    // مؤشر الكتابة
    showTyping: function() {
        const container = document.getElementById('chatMessages');
        if (!container) return;

        const div = document.createElement('div');
        div.id = 'typingIndicator';
        div.className = 'chat-msg msg-bot';
        div.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'; // أيقونة تحميل
        
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    },

    // إزالة مؤشر الكتابة
    removeTyping: function() {
        const el = document.getElementById('typingIndicator');
        if (el) el.remove();
    },

    // منطق الردود الذكي (عربي / إنجليزي)
    getReply: function(question, lang) {
        const q = question.toLowerCase();

        // --- الردود العربية ---
        if (lang === 'ar') {
            if (q.includes('سعر') || q.includes('باقة') || q.includes('تكلفة') || q.includes('فلوس')) {
                return "نقدم باقات مرنة تناسب الشركات الناشئة والكبرى. هل ترغب في تزويدك بملف الأسعار؟";
            }
            if (q.includes('عنوان') || q.includes('موقع') || q.includes('مكان') || q.includes('وين')) {
                return "مقرنا الرئيسي في الرياض، حي قرطبة، طريق الأمير محمد بن سلمان.";
            }
            if (q.includes('سجل') || q.includes('رخصة') || q.includes('قانوني')) {
                return "نحن شركة نظامية بسجل تجاري رقم (7050139125) ومرخصة من هيئة الزكاة.";
            }
            if (q.includes('demo') || q.includes('تجربة') || q.includes('نظام')) {
                return "أنت الآن تستخدم النسخة التجريبية الحية لنظام eGov.";
            }
            if (q.includes('مرحبا') || q.includes('هلا') || q.includes('السلام')) {
                return "أهلاً بك! أنا مساعدك الذكي، اسألني عن السياسات أو الأسعار.";
            }
            return "سؤال ممتاز! لا أملك الإجابة حالياً، لكن يمكنك التواصل معنا عبر الواتساب: 0503666316.";
        } 
        
        // --- English Responses ---
        else {
            if (q.includes('price') || q.includes('cost') || q.includes('package')) {
                return "We offer flexible packages for startups and enterprises. Would you like the price list?";
            }
            if (q.includes('location') || q.includes('address') || q.includes('where')) {
                return "Our HQ is in Riyadh, Qurtubah District, Prince Mohammed Bin Salman Rd.";
            }
            if (q.includes('license') || q.includes('legal') || q.includes('cr')) {
                return "We are a registered entity with CR (7050139125) and licensed by ZATCA.";
            }
            if (q.includes('demo') || q.includes('try') || q.includes('system')) {
                return "You are currently exploring the live demo version of eGov.";
            }
            if (q.includes('hi') || q.includes('hello') || q.includes('welcome')) {
                return "Welcome! I am your AI assistant. Ask me about policies or pricing.";
            }
            return "Good question! I don't have the answer right now, but you can contact us via WhatsApp: 0503666316.";
        }
    }
};

// === ربط الدوال بالنطاق العام (Global Scope) ===
// هذا ما يجعله يعمل مع Layout.js والـ HTML
window.toggleChat = function() { eGovBot.toggle(); };
window.sendMessage = function() { eGovBot.send(); }; // تأكدنا من تسميتها sendMessage لتطابق Layout.js
