// --- eGov AI Consultant Logic (Governance Focus) ---
async function analyzeProjectWithAI() {
    const input = document.getElementById('ai-project-desc').value;
    const resultBox = document.getElementById('ai-result');
    const resultContent = document.getElementById('ai-result-content');
    const btn = document.getElementById('ai-btn');
    
    if (!input || input.trim() === "") {
        alert("الرجاء إدخال تفاصيل الاستشارة أو المشروع أولاً.");
        return;
    }

    // حالة التحميل
    const originalBtnText = btn.innerHTML;
    btn.innerHTML = '<span>جاري التحليل...</span> <i class="fas fa-spinner fa-spin"></i>';
    btn.disabled = true;
    resultBox.style.display = 'none';

    // مفتاح API (يجب وضعه هنا أو جلبه من البيئة)
    const apiKey = "YOUR_GEMINI_API_KEY_HERE"; 

    // البرومبت المعدل ليتناسب مع الحوكمة
    const prompt = `
    بصفتك مستشار حوكمة ومخاطر وامتثال (GRC Consultant) معتمد في المملكة العربية السعودية:
    قم بتحليل المدخلات التالية: "${input}"
    
    المطلوب:
    1. حدد المخاطر التشغيلية أو القانونية المحتملة باختصار.
    2. اقترح 3 خطوات عملية لتحقيق الامتثال (Compliance) وفقاً للأنظمة السعودية.
    3. كيف يمكن لنظام eGov التقني المساعدة في أتمتة هذا الإجراء؟
    
    الرجاء الرد بنقاط مختصرة وواضحة باللغة العربية.
    `;

    try {
        // محاكاة للرد في حال عدم وجود API Key (للتجربة)
        if (apiKey === "YOUR_GEMINI_API_KEY_HERE" || apiKey === "") {
            setTimeout(() => {
                resultContent.innerHTML = `
                <strong>⚠️ ملاحظة: هذا تحليل تجريبي (Demo Analysis):</strong><br><br>
                 بناءً على وصفك، يوصى بالآتي:<br>
                • <strong>الحوكمة:</strong> توثيق محاضر الاجتماعات إلكترونياً لضمان الحجية القانونية.<br>
                • <strong>الامتثال:</strong> التأكد من توافق الإجراءات مع نظام حماية البيانات الشخصية.<br>
                • <strong>دور eGov:</strong> يمكن للنظام أتمتة هذه العملية بالكامل عبر وحدة "Board Mgmt".
                `;
                resultBox.style.display = 'block';
                btn.innerHTML = originalBtnText;
                btn.disabled = false;
            }, 2000);
            return; 
        }

        // الاتصال الحقيقي بـ Gemini API
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (text) {
            resultContent.innerHTML = text.replace(/\n/g, '<br>').replace(/\*/g, '');
            resultBox.style.display = 'block';
        }

    } catch (error) {
        console.error("AI Error:", error);
        alert("عذراً، الخدمة غير متاحة حالياً. يرجى التواصل مع فريق المبيعات.");
    } finally {
        if(apiKey !== "YOUR_GEMINI_API_KEY_HERE" && apiKey !== "") {
            btn.innerHTML = originalBtnText;
            btn.disabled = false;
        }
    }
}

// --- التعامل مع نماذج التواصل (Governance Forms) ---
async function handleFormSubmit(event) {
    event.preventDefault();
    const btn = event.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = 'جاري الإرسال... <i class="fas fa-spinner fa-spin"></i>';
    btn.disabled = true;

    // تجميع البيانات
    const formData = {
        name: event.target.querySelector('input[type="text"]').value,
        contact: event.target.querySelector('input[placeholder*="البريد"]').value,
        type: "eGov System Request"
    };

    // محاكاة الإرسال
    setTimeout(() => {
        btn.innerHTML = 'تم الاستلام بنجاح <i class="fas fa-check"></i>';
        btn.style.background = 'var(--mint-green)';
        btn.style.color = '#000';
        event.target.reset();
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            btn.style.background = '';
            btn.style.color = '';
        }, 3000);
    }, 1500);
}

// --- تفعيل الأنيميشن عند السكرول ---
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});
