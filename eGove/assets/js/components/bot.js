const eGovBot = {
    isOpen: false,
    
    toggle: function() {
        const win = document.getElementById('chatWindow');
        this.isOpen = !this.isOpen;
        win.style.display = this.isOpen ? 'flex' : 'none';
        if(this.isOpen) document.getElementById('userMsg').focus();
    },

    send: function() {
        const input = document.getElementById('userMsg');
        const text = input.value.trim();
        if (!text) return;

        this.addMessage(text, 'user');
        input.value = '';

        // محاكاة التفكير والرد
        this.showTyping();
        
        setTimeout(() => {
            this.removeTyping();
            const reply = this.getReply(text);
            this.addMessage(reply, 'bot');
        }, 1000);
    },

    addMessage: function(text, sender) {
        const body = document.getElementById('chatBody');
        const div = document.createElement('div');
        div.className = `chat-msg msg-${sender}`;
        div.innerHTML = text; // innerHTML للسماح بالروابط أو التنسيق
        body.appendChild(div);
        body.scrollTop = body.scrollHeight;
    },

    showTyping: function() {
        const body = document.getElementById('chatBody');
        const div = document.createElement('div');
        div.id = 'typingIndicator';
        div.className = 'chat-msg msg-bot';
        div.innerHTML = '<i class="fas fa-ellipsis-h fa-beat"></i>';
        body.appendChild(div);
        body.scrollTop = body.scrollHeight;
    },

    removeTyping: function() {
        const el = document.getElementById('typingIndicator');
        if(el) el.remove();
    },

    // قاعدة معرفة بسيطة (Knowledge Base)
    getReply: function(question) {
        const q = question.toLowerCase();
        
        if (q.includes('سعر') || q.includes('باقة') || q.includes('تكلفة')) {
            return "نقدم باقات مرنة تبدأ للشركات الناشئة والكبرى. هل ترغب في تزويدك بملف الأسعار عبر الواتساب؟";
        }
        if (q.includes('عنوان') || q.includes('موقع') || q.includes('مكان')) {
            return "مقرنا الرئيسي في الرياض، حي قرطبة، طريق الأمير محمد بن سلمان.";
        }
        if (q.includes('سجل') || q.includes('رخصة') || q.includes('قانوني')) {
            return "نحن شركة نظامية بسجل تجاري رقم (7050139125) ومرخصة من هيئة الزكاة.";
        }
        if (q.includes('demo') || q.includes('تجربة') || q.includes('نظام')) {
            return "يمكنك طلب نسخة تجريبية (Demo) لنظام eGov عبر نموذج التواصل في الصفحة الرئيسية.";
        }
        
        return "سؤال ممتاز! سيقوم أحد مستشارينا بالرد عليك تفصيلياً. يمكنك أيضاً التواصل معنا عبر الواتساب 0503666316.";
    }
};

// ربط الأحداث عالمياً
window.toggleChat = () => eGovBot.toggle();
window.sendMsg = () => eGovBot.send();
window.handleEnter = (e) => { if(e.key === 'Enter') eGovBot.send(); };
