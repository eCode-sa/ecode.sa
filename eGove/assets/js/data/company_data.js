/* * بيانات الشركة وهيكل الصلاحيات (Static Data Layer)
 * هذا الملف يحدد الأقسام والأدوار الوظيفية داخل نظام eGov
 */

const COMPANY_DATA = {
    basic: {
        name: "Electronic Code Co.",
        nameAr: "شركة إلكترونيك كود",
        cr: "7050139125",
        vat: "3130161102",
        founded: "2025"
    },
    
    // الهيكل التنظيمي (Organizational Chart)
    // يستخدم لتوزيع الصلاحيات (RBAC) وتوجيه المستخدمين
    departments: [
        { 
            id: 1, 
            name: "Board of Directors", 
            head: "Chairman", 
            role: "board",
            desc: "مجلس الإدارة"
        },
        { 
            id: 2, 
            name: "Executive Management", 
            head: "CEO", 
            role: "ceo",
            desc: "الإدارة التنفيذية"
        },
        { 
            id: 3, 
            name: "Internal Audit", 
            head: "Audit Committee", 
            role: "audit",
            desc: "لجنة المراجعة والتدقيق"
        },
        { 
            id: 4, 
            name: "Finance", 
            head: "CFO", 
            role: "finance",
            desc: "الإدارة المالية"
        },
        { 
            id: 5, 
            name: "Human Resources", 
            head: "CAO", // Chief Administrative Officer
            role: "hr",
            desc: "الموارد البشرية والشؤون الإدارية"
        },
        { 
            id: 6, 
            name: "Information Technology", 
            head: "CTO", 
            role: "it",
            desc: "تقنية المعلومات"
        },
        { 
            id: 7, 
            name: "Sales", 
            head: "Sales Manager", 
            role: "sales",
            desc: "المبيعات"
        },
        { 
            id: 8, 
            name: "Shareholders", 
            head: "Shareholder", 
            role: "shareholder",
            desc: "المساهمين والجمعية العمومية"
        },
        { 
            id: 9, 
            name: "Secretary", 
            head: "Board Secretary", 
            role: "secretary",
            desc: "أمانة سر المجلس"
        },
        { 
            id: 10, 
            name: "Governance Admin", 
            head: "GRC Officer", 
            role: "admin",
            desc: "مسؤول الحوكمة والمخاطر"
        }
    ],

    services: [
        "Governance Automation",
        "Digital Transformation",
        "Cybersecurity Compliance"
    ]
};

// تصدير البيانات للاستخدام العام
if (typeof module !== 'undefined') module.exports = COMPANY_DATA;
