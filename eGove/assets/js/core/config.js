/* * ملف الإعدادات العامة للنظام
 * يحفظ الثوابت، مفاتيح الربط، ومعلومات الشركة
 */

const CONFIG = {
    // هوية النظام
    app: {
        name: "eGov Platform",
        version: "1.0.2",
        env: "development" // development | production
    },

    // بيانات الشركة (مأخوذة من وثائقك الرسمية)
    company: {
        nameAr: "شركة إلكترونيك كود",
        nameEn: "Electronic Code Co.",
        crNumber: "7050139125",  // السجل التجاري
        vatNumber: "3130161102", // الرقم الضريبي
        address: "الرياض، حي قرطبة، طريق الأمير محمد بن سلمان",
        email: "info@ecode.sa",
        phone: "0503666316"
    },

    // إعدادات الربط الخارجي (APIs)
    api: {
        baseUrl: "https://api.ecode.sa/v1", // رابط السيرفر الافتراضي
        geminiKey: "", // مفتاح الذكاء الاصطناعي (يوضع هنا)
        timeout: 5000
    },

    // روابط السوشيال ميديا
    social: {
        twitter: "https://x.com/eCode_sa",
        linkedin: "https://www.linkedin.com/company/ecode-sa",
        instagram: "https://www.instagram.com/ecode_sa"
    }
};

// منع التعديل على هذا الملف أثناء التشغيل
Object.freeze(CONFIG);
