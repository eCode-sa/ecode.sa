/* ==========================================
   ملف الذكاء الاصطناعي (Bot Logic)
   ========================================== */

// دالة فتح/إغلاق نافذة المحادثة
window.toggleChat = function() {
    const chatWindow = document.getElementById('chatWindow');
    // إذا لم يجد العنصر، لا يفعل شيئاً
    if (!chatWindow) {
        console.error("عنصر chatWindow غير موجود في HTML");
        return;
    }
    
    if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
        chatWindow.style.display = 'flex';
        // تركيز المؤشر في مربع النص تلقائياً
        setTimeout(() => document.getElementById('userInput')?.focus(), 100);
    } else {
        chatWindow.style.display = 'none';
    }
};

// دالة إرسال الرسالة
window.sendMessage = async function() {
    const inputField = document.getElementById('userInput');
    const messagesContainer = document.getElementById('chatMessages');
    const userText = inputField.value.trim();

    if (!userText) return;

    // 1. عرض رسالة المستخدم
    addMessage(userText, 'user-message');
    inputField.value = '';

    // 2. إظهار مؤشر الكتابة (Typing...)
    const loadingId = addMessage('جاري التحليل...', 'bot-message', true);

    // 3. محاكاة رد الذكاء الاصطناعي (هنا يمكنك ربطه بـ API حقيقي لاحقاً)
    setTimeout(() => {
        // حذف رسالة التحميل
        const loadingMsg = document.getElementById(loadingId);
        if(loadingMsg) loadingMsg.remove();

        // الرد البسيط (يمكن تطويره ليكون أذكى)
        let reply = "أهلاً بك، بصفتي مساعد الحوكمة الذكي، يمكنني مساعدتك في البحث في السياسات واللوائح.";
        
        if(userText.includes("سياسة") || userText.includes("policy")) {
            reply = "يمكنك العثور على السياسات في قسم 'المكتبة الرقمية'. هل ترغب في الانتقال إليها؟";
        } else if (userText.includes("خسارة") || userText.includes("أرباح")) {
            reply = "بناءً على البيانات المالية، يرجى مراجعة قسم 'الحوكمة المالية' للحصول على التقارير الدقيقة.";
        }

        addMessage(reply, 'bot-message');
    }, 1500);
};

// دالة مساعدة لإضافة الرسائل في HTML
function addMessage(text, className, isLoading = false) {
    const messagesContainer = document.getElementById('chatMessages');
    if(!messagesContainer) return;

    const div = document.createElement('div');
    div.className = `message ${className}`;
    div.innerText = text;
    
    // إنشاء ID عشوائي لرسالة التحميل لكي نستطيع حذفها
    const id = 'msg-' + Math.random().toString(36).substr(2, 9);
    div.id = id;

    messagesContainer.appendChild(div);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // النزول لأسفل
    
    return id;
}

// دعم الارسال بالضغط على Enter
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('userInput');
    if(inputField) {
        inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') window.sendMessage();
        });
    }
});
