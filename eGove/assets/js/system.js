/* ==========================================================================
   eGov System Core (All-in-One / No-Server Version)
   يحتوي هذا الملف على البيانات والمنطق البرمجي ليعمل النظام محلياً بدون سيرفر
   ========================================================================== */

// ==========================================
// 1. قسم البيانات (Data Section)
// ==========================================

// --- 1. بيانات الشركة (من company_data.js) ---
const COMPANY_DATA = {
    basic: {
        name: "Electronic Code Co.",
        nameAr: "شركة إلكترونيك كود",
        cr: "7050139125",
        vat: "3130161102",
        founded: "2025"
    },
    departments: [
        { id: 1, name: "dept_board", head: "chairman", role: "role_chairman", desc: "dept_board" },
        { id: 2, name: "dept_executive", head: "ceo", role: "role_ceo", desc: "dept_executive" },
        { id: 3, name: "dept_audit", head: "audit", role: "role_audit", desc: "dept_audit" },
        { id: 4, name: "dept_finance", head: "cfo", role: "role_cfo", desc: "dept_finance" },
        { id: 5, name: "dept_hr", head: "cao", role: "role_hr", desc: "dept_hr" },
        { id: 6, name: "dept_it", head: "cto", role: "role_cto", desc: "dept_it" },
        { id: 7, name: "dept_sales", head: "Sales", role: "role_sales", desc: "dept_sales" },
        { id: 8, name: "dept_share", head: "Shareholder", role: "role_share", desc: "dept_share" },
        { id: 9, name: "dept_secretary", head: "Secretary", role: "role_sec", desc: "dept_secretary" },
        { id: 10, name: "dept_gov", head: "admin", role: "role_grc", desc: "dept_gov" }
    ]
};

// --- 2. سياسات الموارد البشرية (مقتطف للتشغيل - من hr-policies.js) ---
// ملاحظة: تم اختصار المحتوى لضمان عمل الكود، يمكنك إضافة باقي السياسات هنا لاحقاً
const HR_POLICIES = {
    metadata: { system: "eGov", module: "HR_POLICIES" },
    sections: [
        {
            id: "HR-SECTION-01",
      title: {
        ar: "إدارة الموارد البشرية والتوظيف",
        en: "Human Resources Management & Employment"
      },
      policies: [

        {
          code: "HR-001",
          title: { ar: "مقدمة إدارة الموارد البشرية", en: "HR Introduction" },
          content: {
            ar: `
تحدد إدارة الموارد البشرية أنواع الوظائف ومسؤولياتها والشروط الواجب توافرها في شاغليها، 
كما يحدد النظام الداخلي للموارد البشرية الرواتب والعلاوات والترقيات والمكافآت وبدلات الانتقال.

تكون قرارات التعيين أو الانتداب بقرار من الرئيس التنفيذي، مع رفع تقرير بذلك لمجلس الإدارة بعد:
- تحديد الوظائف التي تحتاجها الشركة للتشغيل اليومي أو لتنفيذ المشروعات.
- الإعلان عن الوظائف داخليًا وخارجيًا وفق الإمكانات المتاحة وبما يتفق مع بطاقة الوصف الوظيفي.
- تشكيل لجنة لفرز الطلبات وإجراء المقابلات وإخطار المرشحين.
- عرض نتائج المقابلات والاختيار المبدئي على الرئيس التنفيذي لاعتمادها.
- إعداد عقود العمل واستكمال إجراءات التعيين وتسكين الموظف على الوظيفة المناسبة.
            `,
            en: `
The HR Department defines job types, responsibilities, and the qualifications required for each position.  
The internal HR framework also governs salaries, allowances, promotions, bonuses, and transportation allowances.

Hiring or secondment decisions are made by the CEO, with a report submitted to the Board of Directors after:
- Identifying positions required for daily operations or projects.
- Publishing internal and external job postings in line with the job description.
- Forming a committee to shortlist candidates, conduct interviews, and notify applicants.
- Submitting interview outcomes and preliminary selections to the CEO for approval.
- Preparing employment contracts and completing all onboarding and job placement procedures.
            `
          }
        },

        {
          code: "HR-002",
          title: { ar: "التوظيف وشروطه", en: "Employment Conditions" },
          content: {
            ar: `
يتم التوظيف على وظائف محددة المسميات وواضحة المواصفات، ويراعى ما يلي:
- أن يكون طالب العمل سعودي الجنسية، ويجوز استثناءً توظيف غير السعودي وفقًا لنظام العمل.
- أن يكون حائزًا على المؤهلات العلمية والخبرات المطلوبة للوظيفة.
- أن يجتاز بنجاح الاختبارات والمقابلات التي تقررها الشركة.
- أن يكون لائقًا طبيًا بموجب شهادة طبية معتمدة من جهة تحددها الشركة.
            `,
            en: `
Employment is based on clearly defined job titles and specifications, subject to:
- Saudi nationality as the default, with non-Saudis hired only as allowed by the Labor Law.
- Possession of the required academic qualifications and relevant experience.
- Successfully passing all required tests and interviews.
- Medical fitness confirmed by a certificate from a company-approved medical provider.
            `
          }
        },

        {
          code: "HR-003",
          title: { ar: "مسوغات التوظيف", en: "Required Hiring Documents" },
          content: {
            ar: `
على من يرغب في العمل لدى الشركة تقديم المستندات التالية:
- صورة من الهوية الوطنية (للسعوديين).
- صورة من الإقامة ورخصة العمل وجواز السفر (لغير السعوديين).
- صورة مصدقة من المؤهلات العلمية والخبرات العملية.
- شهادة طبية تثبت اللياقة الصحية من جهة تحددها الشركة.
- تحفظ جميع الوثائق في ملف خدمة العامل.
            `,
            en: `
Any applicant wishing to work for the company must provide:
- A copy of the national ID (for Saudis).
- A copy of the residency permit, work permit, and passport (for non-Saudis).
- Certified copies of academic qualifications and experience certificates.
- A medical certificate of fitness from a company-designated provider.
All documents are kept in the employee's personnel file.
            `
          }
        },

        {
          code: "HR-004",
          title: { ar: "معايير تقييم الأداء", en: "Performance Rating Scale" },
          content: {
            ar: `
تتم عملية تقييم الأداء وفق خمسة مستويات رئيسية:
- غير مرضي: لا يفي الأداء العام بمتطلبات الوظيفة.
- يحتاج للتحسين: يفي ببعض المتطلبات مع الحاجة للتحسين.
- مرضي: يفي بجميع متطلبات الوظيفة ويتجاوز البعض منها.
- جيد جدًا: يتجاوز متطلبات الوظيفة في العديد من الجوانب.
- ممتاز: أداء استثنائي مستمر بكفاءة وتكلفة مناسبة.
            `,
            en: `
Performance is evaluated using a five-level scale:
- Unsatisfactory: Overall performance does not meet job requirements.
- Needs Improvement: Meets some requirements but needs development.
- Satisfactory: Meets all requirements and exceeds some of them.
- Very Good: Exceeds requirements in many aspects.
- Excellent: Consistently exceptional performance at efficient cost.
            `
          }
        },

        {
          code: "HR-005",
          title: { ar: "عقد العمل وشروطه", en: "Employment Contract" },
          content: {
            ar: `
يتم توظيف العامل بموجب عقد عمل يحرر من نسختين باللغة العربية وفق النموذج الموحد المعتمد من الوزارة، 
وتسلم نسخة للعامل وتحفظ الأخرى في ملفه لدى الشركة.

يتضمن العقد على الأقل:
- اسم صاحب العمل والعامل وجنسيتهما وعنوانهما.
- نوع العمل ومكانه.
- الأجر الأساسي والبدلات والمزايا الأخرى.
- نوع العقد (محدد المدة/غير محدد المدة/لعمل معين).
- مدة التجربة إن وجدت.
- تاريخ مباشرة العمل.

يجوز تحرير العقد بلغة أخرى بجانب العربية، على أن تكون العربية هي المرجع عند التعارض.
تحتفظ الشركة بحق إلغاء العقد إذا لم يباشر العامل عمله خلال سبعة أيام عمل دون عذر مشروع.
            `,
            en: `
Employees are hired under a bilingual employment contract (Arabic as the primary language)  
based on the unified template issued by the Ministry. One copy is given to the employee and the other  
is retained in the company’s records.

The contract must include at least:
- Employer and employee names, nationality, and addresses.
- Job type and workplace.
- Basic salary, allowances, and other agreed benefits.
- Contract type (fixed-term, indefinite, or for a specific task).
- Probation period, if agreed.
- Work commencement date.

A secondary language (e.g. English) may be added, but Arabic prevails in case of conflict.  
The company may cancel the contract if the employee does not report to work within seven business days  
without a valid reason.
            `
          }
        },

        {
          code: "HR-006",
          title: { ar: "الإركاب وتذاكر السفر", en: "Travel & Air Tickets" },
          content: {
            ar: `
يتم تحديد الالتزام بمصروفات إركاب العامل وأفراد أسرته وفقًا لما يلي:
- عند بداية التعاقد (حسب ما يتم النص عليه في العقد).
- عند تمتع العامل بإجازته السنوية (إذا نص العقد على ذلك).
- عند انتهاء الخدمة، وفقًا لنظام العمل.

لا تتحمل الشركة تكاليف عودة العامل في الحالات التالية:
- عدم صلاحيته للعمل خلال فترة التجربة.
- إذا رغب في العودة بدون سبب مشروع.
- إذا تم ترحيله بقرار إداري أو حكم قضائي.
            `,
            en: `
The company’s obligation to cover employee and family travel expenses is governed by:
- Start-of-contract tickets (as per the employment contract).
- Annual leave tickets (if stipulated in the contract).
- End-of-service tickets in line with the Labor Law.

The company is not liable for return tickets if:
- The employee is found unfit for work during the probation period.
- The employee chooses to return home without a valid reason.
- The employee is deported under an administrative or judicial decision.
            `
          }
        },

        {
          code: "HR-007",
          title: { ar: "التدريب والتأهيل", en: "Training & Qualification" },
          content: {
            ar: `
تتحمل الشركة عند تدريب أو تأهيل العاملين السعوديين:
- كافة تكاليف التدريب أو التأهيل.
- تذاكر السفر في حالة التدريب خارج المدينة.
- السكن ووسائل المعيشة أو صرف بدل مناسب.
- استمرار صرف الأجر طوال فترة التدريب.

يجوز إنهاء عقد التدريب أو التأهيل إذا ثبت:
- عدم قابلية المتدرب للاستفادة من البرنامج.
- عدم التزامه بشروط التدريب.

ويجوز إلزام المتدرب بالعمل لدى الشركة مدة مماثلة لمدة التدريب أو رد تكاليف التدريب كليًا أو جزئيًا وفقًا للمدة المتبقية.
            `,
            en: `
When training or qualifying Saudi employees, the company:
- Bears all training and qualification costs.
- Provides travel tickets for out-of-city training.
- Provides accommodation and living expenses or pays an equivalent allowance.
- Continues paying the employee's salary during the training period.

The training/qualification agreement may be terminated if:
- The trainee cannot benefit from the program.
- The trainee breaches training terms.

The company may require the trainee to work for a period equal to the training duration  
or reimburse training costs in full or in part based on the remaining commitment period.
            `
          }
        }

      ]
    },

    /* ============================================
     * القسم 2 – الرواتب والأجور والمزايا
     * ============================================ */
    {
      id: "HR-SECTION-02",
      title: {
        ar: "الرواتب والأجور والمزايا",
        en: "Salaries, Wages & Benefits"
      },
      policies: [

        {
          code: "PAY-001",
          title: { ar: "مقدمة الرواتب والأجور", en: "Introduction to Compensation" },
          content: {
            ar: `
تعمل شركة إلكترونيك كود على توفير بيئة عمل تساعد على تحقيق مستوى متميز من الأداء 
من خلال تطبيق نظام عادل للرواتب والأجور والحوافز، يهدف إلى:
- تحقيق العدالة والشفافية بين الموظفين.
- ربط الأجر بأهمية الوظيفة ومحتواها.
- تعزيز الدافعية والانتماء لدى الموظفين.
- دعم التطوير المستمر للأداء الفردي والجماعي.
            `,
            en: `
Electronic Code Company strives to provide a work environment that supports high performance  
through a fair and transparent compensation system aimed at:
- Ensuring internal equity and transparency among employees.
- Linking pay to job importance and content.
- Enhancing motivation and organizational loyalty.
- Supporting continuous improvement of individual and team performance.
            `
          }
        },

        {
          code: "PAY-002",
          title: { ar: "تعريفات أساسية", en: "Key Definitions" },
          content: {
            ar: `
- الشركة: شركة إلكترونيك كود.
- المجلس: مجلس إدارة الشركة.
- المدير التنفيذي: المدير التنفيذي للشركة.
- إدارة الموارد البشرية: الجهة المسؤولة عن تطبيق هذه اللائحة.
- اللائحة: لائحة الرواتب والأجور والبدلات النقدية الخاصة بالشركة.
- الموظف: كل من يعمل لدى الشركة أو تحت إدارتها وإشرافها مقابل راتب شهري.
- الراتب الأساسي: الراتب المحدد ضمن سلم الرواتب.
- الأجر: كل ما يُدفع للموظف مقابل عمله بموجب عقد العمل أيا كان نوعه.
            `,
            en: `
- Company: Electronic Code Company.
- Board: The Company’s Board of Directors.
- CEO: The Company’s Chief Executive Officer.
- HR Department: The department responsible for applying this policy.
- Regulations: The company’s salary, wage, and cash allowance regulations.
- Employee: Any person working for the company under its supervision for a monthly salary.
- Basic Salary: The salary defined in the company’s salary scale.
- Wage: Any amount paid to the employee for work performed under the employment contract.
            `
          }
        },

        {
          code: "PAY-003",
          title: { ar: "أحكام عامة لسلم الرواتب", en: "General Rules for Salary Scale" },
          content: {
            ar: `
- يطبق سلم الرواتب على جميع الموظفين بعقود محددة أو غير محددة المدة.
- لا يخل السلم بما للموظف من حقوق مكتسبة.
- يحتسب الشهر (30) يومًا لجميع حقوق الموظف والشركة.
- يكون التعيين كقاعدة عامة على أول مربوط المرتبة، ويجوز التعيين على راتب أعلى بقرار من صاحب الصلاحية.
- إذا بلغ الموظف آخر مربوط مرتبته تتوقف العلاوة السنوية إلا في حالة الترقية.
            `,
            en: `
- The salary scale applies to all employees under fixed-term or indefinite contracts.
- The salary scale does not affect any acquired rights of employees.
- For all calculations, the month is considered as 30 days.
- As a general rule, employees are appointed at the minimum of the grade; higher steps require proper approval.
- When an employee reaches the maximum step of their grade, annual increments stop unless promoted.
            `
          }
        },

        {
          code: "PAY-004",
          title: { ar: "المستويات الوظيفية وسلّم الرواتب", en: "Job Levels & Salary Structure" },
          content: {
            ar: `
تم تقسيم الوظائف إلى أربعة مستويات رئيسية:
1) الإدارة التنفيذية
2) الإشراف الإداري
3) الوظائف التنفيذية
4) الوظائف الخدمية

وتم ربط كل مستوى بمراتب ودرجات ورواتب دنيا وعليا، مع إمكانية منح 5 درجات لكل مرتبة 
وفق نسب علاوة سنوية تتراوح بين 5% و10%، حسب تقييم الأداء.
            `,
            en: `
Jobs are grouped into four main levels:
1) Executive Management
2) Administrative Supervision
3) Operational / Professional Roles
4) Service / Support Roles

Each level is linked to grades and steps with defined minimum and maximum salaries.  
Each grade has five steps, with annual increments between 5% and 10% depending on performance ratings.
            `
          }
        },

        {
          code: "PAY-005",
          title: { ar: "العلاوة السنوية", en: "Annual Increment" },
          content: {
            ar: `
تتراوح نسبة العلاوة السنوية من 5% إلى 10% من الراتب الأساسي وفقًا لتقدير الأداء:
- ممتاز جدًا: 10%
- ممتاز: 7%
- جيد جدًا: 6%
- جيد: 5%
- ضعيف: لا يستحق علاوة

ويجوز للإدارة العليا تعليق أو تقييد العلاوات السنوية استنادًا إلى المركز المالي للشركة.
            `,
            en: `
Annual salary increments range from 5% to 10% of the basic salary based on performance:
- Outstanding: 10%
- Excellent: 7%
- Very Good: 6%
- Good: 5%
- Poor: No increment

Top management may suspend or limit annual increments based on the company’s financial position.
            `
          }
        },

        {
          code: "PAY-006",
          title: { ar: "بدل السيارة", en: "Car Allowance" },
          content: {
            ar: `
يمنح بدل السيارة في حال تطلب العمل خروج الموظف المتكرر خارج مقر الشركة دون توفير سيارة من الشركة، 
وذلك حسب التكرار الأسبوعي:
- خروج متكرر (أكثر من 3 مرات أسبوعيًا): 750 ريال.
- خروج شبه متكرر (2–3 مرات أسبوعيًا): 450 ريال.
- خروج قليل (مرة واحدة أسبوعيًا): 150 ريال.
            `,
            en: `
A car allowance is granted when the job requires frequent external movement without a company vehicle,  
according to weekly frequency:
- Frequent (more than 3 times per week): 750 SAR
- Semi-frequent (2–3 times per week): 450 SAR
- Rare (once per week): 150 SAR
            `
          }
        },

        {
          code: "PAY-007",
          title: { ar: "بدل السكن", en: "Housing Allowance" },
          content: {
            ar: `
إذا لم توفر الشركة سكنًا مناسبًا، فيُمنح الموظف بدل سكن وفقًا لما يلي:
- الموظف السعودي: بدل سكن يعادل ثلاثة رواتب أساسية سنويًا.
- الموظف غير السعودي: بدل سكن حسب ما ينص عليه العقد على ألا يتجاوز ثلاثة رواتب أساسية.
لا يسترد بدل السكن المصروف مقدمًا إذا انتهت الخدمة بسبب عجز صحي أو إنهاء من طرف الشركة بدون سبب يعود للموظف.
            `,
            en: `
If the company does not provide housing, the employee is granted housing allowance as follows:
- Saudi employees: Housing allowance equal to three basic monthly salaries per year.
- Non-Saudi employees: Housing allowance as per the employment contract, not exceeding three basic salaries.
Paid-in-advance housing allowances are not recovered if the service ends due to medical disability  
or termination by the company without cause attributable to the employee.
            `
          }
        },

        {
          code: "PAY-008",
          title: { ar: "التأمين الطبي", en: "Medical Insurance" },
          content: {
            ar: `
توفر الشركة تأمينًا طبيًا للموظفين المسجلين في التأمينات الاجتماعية وفقًا لما يلي:
- يشترط ألا يتجاوز عمر الموظف 60 سنة (ما لم ينص على غير ذلك في عقد استقطاب خاص).
- يمكن للموظف إضافة الزوج/الزوجة والأبناء على الوثيقة مع تحمل تكاليف الإضافة.
يتم تقسيم الفئات التأمينية عادة إلى:
- الإدارة التنفيذية: فئة VIP
- باقي الموظفين: فئة SILVER أو ما يعادلها بحسب عقد التأمين.
            `,
            en: `
The company provides medical insurance for employees registered in the social insurance system, subject to:
- Employee age not exceeding 60 years (unless otherwise agreed in special recruitment contracts).
- The employee may add spouse and children to the policy at their own cost.

Insurance tiers include for example:
- Executive Management: VIP
- Other Employees: SILVER (or equivalent based on the insurance contract).
            `
          }
        }

      ]
    },

    /* ============================================
     * القسم 3 – أوقات العمل والإجازات والاستئذان
     * ============================================ */
    {
      id: "HR-SECTION-03",
      title: {
        ar: "أيام وساعات العمل والإجازات والاستئذان",
        en: "Working Time, Leaves & Excuses"
      },
      policies: [

        {
          code: "TIME-001",
          title: { ar: "أيام وساعات العمل", en: "Working Days & Hours" },
          content: {
            ar: `
- عدد أيام العمل: 5 أيام في الأسبوع.
- يومي الجمعة والسبت: راحة أسبوعية بأجر كامل، ما لم يتم الاتفاق نظاميًا على غير ذلك لبعض الفئات مع تعويض مناسب.
- ساعات العمل اليومية: 8 ساعات عمل في الأيام العادية، تُخفّض إلى 6 ساعات عمل للمسلمين في شهر رمضان.
لا يجوز استبدال يوم الراحة الأسبوعية بمقابل نقدي.
            `,
            en: `
- Working days: 5 days per week.
- Friday and Saturday: Weekly rest days with full pay, unless otherwise arranged for specific roles with proper compensation.
- Daily working hours: 8 hours on regular days, reduced to 6 hours for Muslim employees during Ramadan.
Weekly rest days may not be replaced with cash.
            `
          }
        },

        {
          code: "TIME-002",
          title: { ar: "العمل الإضافي", en: "Overtime Work" },
          content: {
            ar: `
- يتم التكليف بالعمل الإضافي بموجب أمر كتابي أو إلكتروني صادر من الجهة المختصة.
- يُدفع للعامل أجر إضافي يساوي أجر الساعة مضافًا إليه 50% من الأجر الأساسي.
- تُحسب ساعات العمل الإضافي وفقًا لنظام العمل السعودي المعمول به.
            `,
            en: `
- Overtime must be requested through a written or electronic order issued by the authorized department.
- Employees are paid overtime at an hourly wage plus 50% of their basic hourly rate.
- Overtime calculations follow the applicable Saudi Labor Law.
            `
          }
        },

        {
          code: "LEAVE-001",
          title: { ar: "الإجازة السنوية", en: "Annual Leave" },
          content: {
            ar: `
- يستحق العامل إجازة سنوية لا تقل عن 21 يومًا بأجر كامل، تزداد إلى 30 يومًا إذا بلغت خدمته 5 سنوات متصلة.
- يجوز تجزئة الإجازة أو ترحيل جزء منها وفقًا لمتطلبات العمل وبعد موافقة الشركة.
- يمكن الاتفاق في عقد العمل على إجازة سنوية أطول من الحد الأدنى النظامي.
            `,
            en: `
- Employees are entitled to annual leave of at least 21 days with full pay, increasing to 30 days after 5 consecutive years of service.
- Annual leave may be split or partially carried forward subject to business needs and company approval.
- Longer annual leave entitlements may be agreed in the employment contract.
            `
          }
        },

        {
          code: "LEAVE-002",
          title: { ar: "الإجازات الرسمية والمناسبات", en: "Official & Special Leaves" },
          content: {
            ar: `
يستحق العامل إجازات بأجر كامل في:
- إجازة عيد الفطر (4 أيام).
- إجازة عيد الأضحى (4 أيام).
- اليوم الوطني للمملكة (يوم واحد).

كما يستحق العامل:
- 5 أيام عند الزواج.
- 3 أيام عند ولادة مولود له.
- 5 أيام عند وفاة الزوجة أو أحد الأصول أو الفروع.
- 3 أيام عند وفاة الأخ أو الأخت.

تُطبّق أحكام العدة للعاملة المسلمة والغير مسلمة حسب نظام العمل.
            `,
            en: `
Employees are entitled to fully paid leave for:
- Eid Al-Fitr (4 days).
- Eid Al-Adha (4 days).
- Saudi National Day (1 day).

Additionally:
- 5 days for marriage.
- 3 days for the birth of a child.
- 5 days upon the death of a spouse, parent, or child.
- 3 days upon the death of a sibling.

Iddah (mourning leave) for Muslim and non-Muslim women is applied according to the Labor Law.
            `
          }
        },

        {
          code: "LEAVE-003",
          title: { ar: "الإجازة المرضية", en: "Sick Leave" },
          content: {
            ar: `
يستحق العامل إجازات مرضية عن كل سنة كما يلي:
- 30 يومًا بأجر كامل.
- 60 يومًا بثلاثة أرباع الأجر.
- 30 يومًا بدون أجر.
وذلك وفقًا للتقارير الطبية المعتمدة، مع إمكانية وصل الإجازة المرضية بالإجازة السنوية.
            `,
            en: `
Employees are entitled to sick leave per year as follows:
- 30 days with full pay.
- 60 days with 75% pay.
- 30 days without pay.
This is based on approved medical reports, and sick leave may be combined with annual leave.
            `
          }
        },

        {
          code: "LEAVE-004",
          title: { ar: "سياسة الإجازات – نظام الطلب الإلكتروني", en: "Leave Request Process" },
          content: {
            ar: `
- يتم تقديم طلب الإجازة عبر النظام الإلكتروني المعتمد.
- يتضمن الطلب: نوع الإجازة، تواريخ البداية والنهاية، الموظف البديل (إن وجد)، والمرفقات الداعمة.
- يجب تقديم طلب الإجازة السنوية قبل 3 أيام على الأقل.
- يتم اعتماد الطلب من المدير المباشر ثم الموارد البشرية.
            `,
            en: `
- Leave requests must be submitted through the approved electronic system.
- The request must include: leave type, start and end dates, backup employee (if any), and supporting attachments.
- Annual leave requests must be submitted at least 3 days in advance.
- Requests are approved by the line manager and then HR.
            `
          }
        },

        {
          code: "EXCUSE-001",
          title: { ar: "سياسة الاستئذان", en: "Excuse / Time-Off Policy" },
          content: {
            ar: `
تشمل طلبات الاستئذان:
- الانصراف المبكر.
- التأخر عن الحضور.
- الإعفاء من بصمة الحضور أو الانصراف.

الأسباب المقبولة للاستئذان:
- أسباب طبية طارئة.
- حالات عائلية طارئة.
- ارتباطات رسمية متعلقة بالعمل.
- أسباب أخرى يقدرها المدير المباشر.

يُقدم الطلب عبر النظام، ويُسجل وقت الخروج والعودة بدقة.
            `,
            en: `
Excuse requests cover:
- Early departure.
- Late arrival.
- Exemption from attendance check-in/out.

Accepted reasons include:
- Medical emergencies.
- Urgent family matters.
- Official business-related commitments.
- Other reasonable causes approved by the line manager.

Requests must be submitted via the system, with accurate time-in/time-out records.
            `
          }
        }

      ]
    },

    /* ============================================
     * القسم 4 – الانتداب والسفر وحماية الأصول
     * ============================================ */
    {
      id: "HR-SECTION-04",
      title: {
        ar: "الانتداب والسفر وحماية الأصول",
        en: "Delegation, Travel & Asset Protection"
      },
      policies: [

        {
          code: "DELEG-001",
          title: { ar: "سياسة الانتداب", en: "Delegation Policy" },
          content: {
            ar: `
يتم الانتداب لأداء مهام عمل خارج مقر الشركة وفق ضوابط محددة، وتشمل التزامات الشركة:
- توفير وسيلة النقل أو صرف بدل مناسب.
- صرف بدل انتداب يومي يغطي السكن والطعام والنثريات وفق المستوى الوظيفي.
- تحديد مدة الانتداب والغرض منه في قرار الانتداب الرسمي.
            `,
            en: `
Delegation assignments for work outside the company’s main office are governed by:
- Providing transportation or paying an equivalent allowance.
- Paying a daily delegation allowance covering accommodation, meals, and incidentals based on job level.
- Defining the delegation duration and purpose in an official delegation order.
            `
          }
        },

        {
          code: "DELEG-002",
          title: { ar: "الدورة المستندية للانتداب", en: "Delegation Documentation Cycle" },
          content: {
            ar: `
قبل الانتداب:
- وجود خطة مالية معتمدة.
- إصدار طلب انتداب يتضمن: اسم الموظف، الجهة المنتدب إليها، المدة، الغرض، وطريقة السفر.
- اعتماد الطلب من المدير المالي والمدير المختص.

بعد الانتداب:
- تقديم نموذج تسوية مصروفات مرفقًا به التذاكر، وفواتير الفنادق، وبيان تفصيلي للرحلة.
- تسوية الدفعات المقدمة إن وجدت، وصرف المستحق النهائي أو استرداد الفائض.
            `,
            en: `
Before delegation:
- An approved financial plan must exist.
- A delegation request must include: employee name, delegation location, duration, purpose, and travel method.
- Approval by the Finance Manager and relevant Department Manager is required.

After delegation:
- Submission of an expense settlement form with tickets, hotel invoices, and a detailed trip statement.
- Settlement of any advances and payment of net entitlements or recovery of excess amounts.
            `
          }
        },

        {
          code: "ASSET-001",
          title: { ar: "العهد وحماية الأصول", en: "Custodies & Asset Protection" },
          content: {
            ar: `
العهدة: هي أي أموال أو ممتلكات تسلم للموظف لأداء مهامه (مثل أجهزة، سيارات، معدات).

مسؤوليات المستلم:
- المحافظة على العهدة وعدم استخدامها لأغراض شخصية.
- الإبلاغ الفوري عن أي تلف أو فقدان.
- إعادة العهدة عند انتهاء الحاجة أو انتهاء الخدمة.

في حال الإهمال أو سوء الاستخدام، يحق للشركة اتخاذ إجراءات تأديبية والمطالبة بالتعويض المالي.
            `,
            en: `
Custody: Any funds or assets entrusted to an employee (e.g., devices, vehicles, equipment).

Custodian responsibilities:
- Safeguard assets and avoid using them for personal purposes.
- Immediately report any damage or loss.
- Return all assets when no longer needed or upon termination.

In cases of negligence or misuse, the company may apply disciplinary measures  
and seek financial compensation.
            `
          }
        }

      ]
    },

    /* ============================================
     * القسم 5 – المشتريات والعهد
     * ============================================ */
    {
      id: "HR-SECTION-05",
      title: {
        ar: "المشتريات والعهد",
        en: "Procurement & Custodies"
      },
      policies: [

        {
          code: "PROC-001",
          title: { ar: "سياسة المشتريات", en: "Procurement Policy" },
          content: {
            ar: `
تهدف لائحة المشتريات إلى:
- ضمان الشفافية والعدالة في اختيار الموردين.
- الحصول على أفضل الأسعار والجودة.
- توثيق عمليات الشراء بشكل منظم.

المهام الرئيسية لقسم المشتريات:
- اقتراح خطط الشراء السنوية والشهرية.
- البحث عن الموردين وتقييم عروضهم.
- إصدار أوامر الشراء ومتابعتها.
- استلام المواد والتأكد من مطابقتها للمواصفات.
            `,
            en: `
The procurement policy aims to:
- Ensure transparency and fairness in supplier selection.
- Obtain the best prices and quality.
- Properly document all purchasing processes.

Key responsibilities of the Procurement Department:
- Propose annual and monthly procurement plans.
- Identify and evaluate suppliers.
- Issue and follow up on purchase orders.
- Receive goods and verify compliance with specifications.
            `
          }
        },

        {
          code: "PROC-002",
          title: { ar: "حدود صلاحيات الشراء", en: "Purchase Authority Limits" },
          content: {
            ar: `
- يجوز إصدار أوامر شراء شهرية بما لا يتجاوز 5,000 ريال دون الرجوع للإدارة العليا ضمن الميزانية المعتمدة.
- في حال تجاوز الحد لأسباب طارئة، يجب رفع تقرير للإدارة العليا واعتماد الصرف.
            `,
            en: `
- Monthly purchase orders up to 5,000 SAR may be issued without top management approval, within the approved budget.
- If this limit is exceeded for emergency reasons, a report must be submitted to top management for approval.
            `
          }
        }

      ]
    },

    /* ============================================
     * القسم 6 – السلوك الأخلاقي والمواطنة والمسؤولية
     * ============================================ */
    {
      id: "HR-SECTION-06",
      title: {
        ar: "السلوك الأخلاقي ومسؤولية الشركة",
        en: "Ethical Conduct & Corporate Citizenship"
      },
      policies: [

        {
          code: "ETHICS-001",
          title: { ar: "السلوك الأخلاقي", en: "Ethical Conduct" },
          content: {
            ar: `
تلتزم الشركة ومجلس إدارتها ومنسوبوها بأعلى معايير السلوك الأخلاقي، ويشمل ذلك:
- الالتزام بالقوانين والأنظمة السارية.
- النزاهة والشفافية في جميع التعاملات.
- تجنب أي شكل من أشكال الاحتيال أو إساءة استخدام السلطة.
- حماية المعلومات السرية وعدم استخدامها لأغراض شخصية.
            `,
            en: `
The company, its Board, and all employees are committed to the highest ethical standards, including:
- Compliance with all applicable laws and regulations.
- Integrity and transparency in all dealings.
- Avoiding any form of fraud or abuse of power.
- Protecting confidential information and refraining from using it for personal gain.
            `
          }
        },

        {
          code: "CSR-001",
          title: { ar: "مواطنة الشركة والمسؤولية المجتمعية", en: "Corporate Citizenship & Social Responsibility" },
          content: {
            ar: `
تلتزم الشركة:
- بالامتثال لمتطلبات الصحة والسلامة والبيئة.
- بالمساهمة في التنمية الاقتصادية مع تحسين جودة حياة موظفيها والمجتمع.
- بدعم الفرص الوظيفية للسعوديين وذوي الإعاقة.
- بالمشاركة في المبادرات الخيرية والمجتمعية والتجارية ذات الأثر الإيجابي.
            `,
            en: `
The company is committed to:
- Complying with health, safety, and environmental requirements.
- Contributing to economic development while improving quality of life for employees and the community.
- Supporting job opportunities for Saudis and people with disabilities.
- Participating in charitable, social, and impactful business initiatives.
            `
          }
        }

      ]
    },

    /* ============================================
     * القسم 7 – المخالفات والجزاءات والتظلم
     * ============================================ */
    {
      id: "HR-SECTION-07",
      title: {
        ar: "المخالفات والجزاءات والتظلم",
        en: "Violations, Disciplinary Actions & Grievances"
      },
      policies: [

        {
          code: "DISC-001",
          title: { ar: "أنواع الجزاءات", en: "Types of Disciplinary Actions" },
          content: {
            ar: `
تشمل الجزاءات التأديبية:
- الإنذار الكتابي.
- الغرامة المالية (حسم من الأجر ضمن حدود نظام العمل).
- الإيقاف عن العمل بدون أجر لمدد محددة.
- الحرمان من الترقية أو العلاوة لفترة محددة.
- الفصل من الخدمة مع أو بدون مكافأة نهاية خدمة وفقًا للمادة (80) من نظام العمل.

يجب أن يكون الجزاء متناسبًا مع جسامة المخالفة ولا يجوز توقيع أكثر من جزاء عن نفس المخالفة.
            `,
            en: `
Disciplinary actions include:
- Written warning.
- Financial penalty (salary deduction within Labor Law limits).
- Unpaid suspension for a specified period.
- Denial of promotion or increment for a limited period.
- Termination with or without end-of-service benefits in accordance with Article 80 of the Labor Law.

Penalties must be proportionate to the severity of the violation and only one penalty may be imposed per violation.
            `
          }
        },

        {
          code: "DISC-002",
          title: { ar: "جداول المخالفات", en: "Violation Tables (Summary)" },
          content: {
            ar: `
تحدد جداول المخالفات والجزاءات نسب الحسم أو نوع الجزاء بحسب:
- التأخر عن الحضور.
- الانصراف المبكر.
- الغياب المتقطع أو المتصل.
- التلاعب في الحضور والانصراف.
- مخالفة تعليمات السلامة أو النظام الداخلي.
مع تدرج الجزاءات من إنذار إلى حسم إلى إيقاف إلى فصل بحسب تكرار المخالفة.
            `,
            en: `
Detailed violation tables define penalty levels according to:
- Late arrival.
- Early departure.
- Intermittent or continuous absence.
- Tampering with attendance records.
- Breach of safety or internal regulations.

Penalties escalate from warning to deduction, to suspension, and ultimately termination depending on recurrence.
            `
          }
        },

        {
          code: "GRIEV-001",
          title: { ar: "سياسة التظلم", en: "Grievance Policy" },
          content: {
            ar: `
يحق للعامل التظلم من أي قرار أو جزاء خلال 3 أيام عمل من تاريخ علمه به، وذلك عبر:
- تقديم طلب تظلم كتابي أو إلكتروني لإدارة الشركة.
- تلتزم الإدارة بدراسة التظلم والرد خلال 5 أيام عمل.
لا يجوز معاقبة العامل بسبب تقديم التظلم، ولا يحول ذلك دون حقه في اللجوء للجهات الرسمية.
            `,
            en: `
Employees have the right to file a grievance against any decision or penalty within 3 business days of notification by:
- Submitting a written or electronic grievance to the company’s management.
- Management must review and respond within 5 business days.

No adverse action may be taken against an employee for filing a grievance,  
and this does not affect the employee’s right to escalate to regulatory authorities.
            `
          }
        }

      ]
    },

    /* ============================================
     * القسم 8 – الاستقالة ونهاية الخدمة
     * ============================================ */
    {
      id: "HR-SECTION-08",
      title: {
        ar: "الاستقالة ونهاية الخدمة",
        en: "Resignation & End of Service"
      },
      policies: [

        {
          code: "TERM-001",
          title: { ar: "الاستقالة", en: "Resignation" },
          content: {
            ar: `
- تُعد الاستقالة مقبولة إذا مضى 30 يومًا من تاريخ تقديمها دون رد من صاحب العمل.
- يجوز لصاحب العمل تأجيل قبول الاستقالة مدة لا تزيد عن 60 يومًا لأسباب عمل موضحة كتابيًا.
- يبدأ سريان إنهاء العقد من تاريخ قبول الاستقالة أو مضي 30 يومًا دون رد.
- يجوز للعامل العدول عن الاستقالة خلال 7 أيام من تاريخ تقديمها ما لم تُقبل قبل العدول.
            `,
            en: `
- Resignation is deemed accepted if 30 days pass from submission without a response from the employer.
- The employer may defer acceptance for up to 60 days for justified business reasons communicated in writing.
- Contract termination takes effect from the date of acceptance or the lapse of 30 days without response.
- The employee may withdraw their resignation within 7 days of submission unless acceptance occurs earlier.
            `
          }
        },

        {
          code: "TERM-002",
          title: { ar: "مكافأة نهاية الخدمة", en: "End of Service Benefit" },
          content: {
            ar: `
تُحتسب مكافأة نهاية الخدمة وفقًا لنظام العمل السعودي:
- نصف أجر شهر عن كل سنة من السنوات الخمس الأولى.
- أجر شهر عن كل سنة من السنوات التالية.
- تُحتسب أجزاء السنة بنسبة ما قُضي منها في العمل.
وتختلف استحقاقات الاستقالة حسب مدة الخدمة:
- أقل من سنتين: لا يستحق مكافأة.
- من 2 إلى أقل من 5 سنوات: ثلث المكافأة.
- من 5 إلى أقل من 10 سنوات: ثلثا المكافأة.
- 10 سنوات فأكثر: المكافأة كاملة.
            `,
            en: `
End of service benefits are calculated in accordance with Saudi Labor Law:
- Half a month's wage for each of the first 5 years of service.
- One month's wage for each subsequent year.
- Partial years are prorated.

Resignation entitlement depends on service length:
- Less than 2 years: No entitlement.
- 2 to <5 years: One-third of the benefit.
- 5 to <10 years: Two-thirds of the benefit.
- 10 years or more: Full benefit.
            `
          }
        }

      ]
    },

    /* ============================================
     * القسم 9 – أحكام خاصة بالمرأة العاملة
     * ============================================ */
    {
      id: "HR-SECTION-09",
      title: {
        ar: "أحكام خاصة بالمرأة العاملة",
        en: "Special Provisions for Female Employees"
      },
      policies: [

        {
          code: "FEM-001",
          title: { ar: "إجازة الوضع والعدة", en: "Maternity & Iddah Leave" },
          content: {
            ar: `
- للعاملة إجازة وضع بأجر كامل لمدة 12 أسبوعًا، تبدأ بحد أقصى 4 أسابيع قبل التاريخ المرجح للوضع.
- يحظر تشغيل العاملة خلال الأسابيع الستة التالية للوضع.
- للعاملة المسلمة المتوفى عنها زوجها إجازة عدة بأجر كامل لا تقل عن 4 أشهر و10 أيام.
- للعاملة غير المسلمة المتوفى عنها زوجها إجازة 15 يومًا بأجر كامل.
            `,
            en: `
- Female employees are entitled to 12 weeks of fully paid maternity leave, starting up to 4 weeks before the expected delivery date.
- Female employees may not be employed during the 6 weeks following delivery.
- Muslim widows are entitled to Iddah leave with full pay of at least 4 months and 10 days.
- Non-Muslim widows are entitled to 15 days of fully paid leave.
            `
          }
        },

        {
          code: "FEM-002",
          title: { ar: "فترات الرضاعة ومرافق الأطفال", en: "Breastfeeding Breaks & Childcare" },
          content: {
            ar: `
- يحق للعاملة الحصول على فترات للرضاعة لا تزيد في مجموعها عن ساعة يوميًا محسوبة من ساعات العمل.
- على صاحب العمل الذي يشغل عددًا معينًا من العاملات توفير مكان مناسب لرعاية أطفالهن حسب ما يقرره النظام.
            `,
            en: `
- Female employees are entitled to up to one hour per day for breastfeeding, counted within working hours.
- Employers with a certain number of female employees must provide suitable childcare arrangements as per regulations.
            `
          }
        }

      ]
    },

    /* ============================================
     * القسم 10 – تعارض المصالح وعدم التداول والإفصاح
     * ============================================ */
    {
      id: "HR-SECTION-10",
      title: {
        ar: "تعارض المصالح وعدم التداول والإفصاح",
        en: "Conflict of Interest, Non-Trading & Disclosure"
      },
      policies: [

        {
          code: "COI-001",
          title: { ar: "الإفصاح عن تعارض المصالح", en: "Conflict of Interest Disclosure" },
          content: {
            ar: `
يجب على أعضاء مجلس الإدارة وكبار التنفيذيين والموظفين:
- الإفصاح عن أي مصلحة مباشرة أو غير مباشرة لهم أو لأقاربهم في أي عقد أو تعامل مع الشركة.
- الامتناع عن المشاركة في أي قرار تتعارض فيه المصلحة الشخصية مع مصلحة الشركة.
- تحديث إقرارات تعارض المصالح بشكل دوري أو عند حدوث أي تغيير جوهري.
            `,
            en: `
Board members, senior executives, and employees must:
- Disclose any direct or indirect interest for themselves or their relatives in any contract or transaction with the company.
- Refrain from participating in decisions where personal interests conflict with the company’s interest.
- Periodically update conflict of interest disclosures or when material changes occur.
            `
          }
        },

        {
          code: "TRAD-001",
          title: { ar: "سياسة عدم التداول بالمعلومات الداخلية", en: "Insider Non-Trading Policy" },
          content: {
            ar: `
يحظر على الأشخاص المطلعين استخدام المعلومات غير المعلنة للتداول في أي أوراق مالية ذات صلة بالشركة أو الشركات المرتبطة بها. 
يشمل الحظر:
- الشراء أو البيع المباشر.
- تمرير المعلومة لطرف ثالث.
- تقديم نصيحة استثمارية مبنية على معلومات داخلية.
            `,
            en: `
Insiders are prohibited from using non-public information to trade in any securities related to the company or its affiliates.  
The prohibition includes:
- Direct buying or selling.
- Tipping or passing the information to others.
- Providing investment advice based on inside information.
            `
          }
        },

        {
          code: "DISCLOS-001",
          title: { ar: "حظر التصريح ببيانات غير صحيحة", en: "Prohibition of False Statements" },
          content: {
            ar: `
يحظر التصريح أو الترويج لأي بيان غير صحيح أو مضلل يتعلق بواقعة جوهرية، 
إذا كان الهدف التأثير على قرارات الآخرين أو على قيمة الشركة أو أي تعامل معها.

يعد الشخص مسؤولًا عن الأضرار إذا:
- أدلى ببيان غير صحيح بشأن واقعة جوهرية.
- كان يعلم أو يفترض أن يعلم بعدم صحة البيان.
            `,
            en: `
It is prohibited to issue or promote any false or misleading statement about a material fact  
for the purpose of influencing others’ decisions or the company’s value or transactions.

A person is liable for damages if:
- They make a false statement about a material fact.
- They knew or should have known that the statement was false.
            `
          }
        }

      ]
    }

  ]
};

// --- 3. نماذج النماذج (مقتطف للتشغيل - من FormsTemplates.js) ---
const egovFormsTemplates = {
    forms: [
        { id: "code_of_conduct",
      category: "governance",
      name: {
        ar: "ميثاق الشرف",
        en: "Code of Conduct"
      },
      fields: [
        { name: "employee_name", type: "text", required: true,
          label: { ar: "اسم الموظف", en: "Employee Name" } },
        { name: "employee_id", type: "text", required: false,
          label: { ar: "رقم الموظف", en: "Employee ID" } },
        { name: "position", type: "text", required: true,
          label: { ar: "المسمى الوظيفي", en: "Job Title" } },
        { name: "department", type: "text", required: false,
          label: { ar: "الإدارة", en: "Department" } },
        { name: "sign_date", type: "date", required: true,
          label: { ar: "تاريخ التوقيع", en: "Signing Date" } }
      ],
      templates: {
        ar: `
ميثاق الشرف المهني
أنا الموقع أدناه: {{employee_name}}
المسمى الوظيفي: {{position}}
الإدارة: {{department}}

أقرّ بأنني اطلعت على ميثاق الشرف المهني المعتمد في الشركة والتزمت بما يلي:
- الالتزام بالقيم والمبادئ الأخلاقية والنزاهة في جميع تعاملاتي.
- المحافظة على ممتلكات الشركة ومعلوماتها ومواردها وعدم استغلالها لغير مصلحة العمل.
- تجنب أي تعارض مصالح وإبلاغ الإدارة المختصة عن أي حالة يحتمل أن تشكل تعارض مصالح.
- احترام الأنظمة واللوائح والتعليمات والسياسات الداخلية المعتمدة.
- الالتزام بسرية المعلومات وحمايتها وعدم الإفصاح عنها إلا في الحدود النظامية.
- التعامل مع الزملاء والعملاء والشركاء باحترام ومهنية.

وأقر بأن أي مخالفة لما ورد أعلاه قد تعرضني للإجراءات النظامية المنصوص عليها في لوائح الشركة ونظام العمل.

اسم الموظف: {{employee_name}}
المسمى الوظيفي: {{position}}
التوقيع: ___________________
التاريخ: {{sign_date}}
        `.trim(),
        en: `
Code of Conduct Acknowledgment
I, the undersigned: {{employee_name}}
Job Title: {{position}}
Department: {{department}}

Hereby acknowledge that I have read and understood the Company’s Code of Conduct and I undertake the following:
- To adhere to the Company’s values, ethics, and integrity in all my dealings.
- To preserve the Company’s assets, information, and resources and not to misuse them.
- To avoid any conflict of interest and to disclose any potential conflict to the relevant authority.
- To comply with all approved internal policies, procedures, and applicable laws.
- To maintain the confidentiality of information and not to disclose it except as legally permitted.
- To treat colleagues, clients, and partners with respect and professionalism.

I acknowledge that any violation of the above may subject me to disciplinary actions in accordance with the Company’s policies and the Labor Law.

Employee Name: {{employee_name}}
Job Title: {{position}}
Signature: ___________________
Date: {{sign_date}}
        `.trim()
      }
    },

    /* =========================
       2) تعهد وإقرار - General Undertaking
       ========================= */
    {
      id: "general_undertaking",
      category: "governance",
      name: {
        ar: "تعهد وإقرار",
        en: "General Undertaking & Declaration"
      },
      fields: [
        { name: "party_name", type: "text", required: true,
          label: { ar: "الاسم", en: "Name" } },
        { name: "national_id", type: "text", required: false,
          label: { ar: "رقم الهوية / الإقامة", en: "National ID / Iqama" } },
        { name: "relation_to_company", type: "text", required: true,
          label: { ar: "الصفة", en: "Capacity / Role" } },
        { name: "sign_date", type: "date", required: true,
          label: { ar: "تاريخ التوقيع", en: "Signing Date" } }
      ],
      templates: {
        ar: `
تعهد وإقرار

أنا الموقع أدناه: {{party_name}}
رقم الهوية / الإقامة: {{national_id}}
الصفة: {{relation_to_company}}

أتعهد وأقر بما يلي:
1- أن جميع البيانات والمعلومات والمستندات التي قدمتها للشركة صحيحة وكاملة وتعكس الواقع.
2- الالتزام بجميع السياسات والإجراءات واللوائح المعتمدة لدى الشركة.
3- إبلاغ الشركة فورًا بأي تغيير جوهري في البيانات أو المعلومات المقدمة.
4- تحمّل المسؤولية الكاملة عن أي معلومات غير صحيحة أو مضللة يتم تقديمها.

وبهذا أقر أن هذا التعهد والإقرار قد تم مني بكامل أهليتي الشرعية والنظامية ودون أي إكراه.

الاسم: {{party_name}}
التوقيع: ___________________
التاريخ: {{sign_date}}
        `.trim(),
        en: `
Undertaking & Declaration

I, the undersigned: {{party_name}}
National ID / Iqama No.: {{national_id}}
Capacity / Role: {{relation_to_company}}

Hereby undertake and declare that:
1. All data, information, and documents I have provided to the Company are true, complete, and accurate.
2. I shall comply with all approved Company policies, procedures, and regulations.
3. I will promptly notify the Company of any material change in the provided information.
4. I bear full responsibility for any incorrect or misleading information submitted.

This undertaking and declaration has been executed by me of my own free will and full legal capacity.

Name: {{party_name}}
Signature: ___________________
Date: {{sign_date}}
        `.trim()
      }
    },

    /* =========================
       3) نموذج طلب ترشيح لشغل عضوية
       ========================= */
    {
      id: "board_nomination_form",
      category: "board",
      name: {
        ar: "نموذج طلب ترشيح لشغل عضوية",
        en: "Board / Committee Nomination Form"
      },
      fields: [
        { name: "candidate_name", type: "text", required: true,
          label: { ar: "اسم المرشح", en: "Candidate Name" } },
        { name: "national_id", type: "text", required: true,
          label: { ar: "رقم الهوية / الإقامة", en: "National ID / Iqama" } },
        { name: "mobile", type: "text", required: true,
          label: { ar: "رقم الجوال", en: "Mobile Number" } },
        { name: "email", type: "text", required: true,
          label: { ar: "البريد الإلكتروني", en: "Email" } },
        { name: "target_position", type: "text", required: true,
          label: { ar: "العضوية المطلوبة", en: "Target Position (Board / Committee)" } },
        { name: "qualification", type: "text", required: false,
          label: { ar: "المؤهل العلمي", en: "Academic Qualification" } },
        { name: "experience_summary", type: "textarea", required: false,
          label: { ar: "ملخص الخبرات", en: "Summary of Experience" } },
        { name: "conflict_of_interest", type: "textarea", required: false,
          label: { ar: "الإفصاح عن تعارض المصالح (إن وجد)", en: "Conflict of Interest Disclosure (if any)" } },
        { name: "sign_date", type: "date", required: true,
          label: { ar: "تاريخ التقديم", en: "Application Date" } }
      ],
      templates: {
        ar: `
نموذج طلب ترشيح لشغل عضوية

السادة/ مجلس إدارة الشركة المحترمين

السلام عليكم ورحمة الله وبركاته،،

أتقدم أنا: {{candidate_name}}، سعودي/غير سعودي، رقم الهوية/الإقامة: {{national_id}}،
بهذا الطلب للترشيح لشغل عضوية: {{target_position}}.

بيانات الاتصال:
رقم الجوال: {{mobile}}
البريد الإلكتروني: {{email}}

المؤهل العلمي:
{{qualification}}

ملخص الخبرات العملية ذات الصلة:
{{experience_summary}}

الإفصاح عن أي حالات تعارض مصالح (إن وجدت):
{{conflict_of_interest}}

أقرّ بصحة جميع البيانات الواردة في هذا النموذج، وبالتزامي بجميع الأنظمة واللوائح والتعليمات ذات العلاقة في حال قبول ترشيحي.

اسم المتقدم: {{candidate_name}}
التوقيع: ___________________
تاريخ التقديم: {{sign_date}}
        `.trim(),
        en: `
Nomination Application Form

To: The Board of Directors

Dear Sirs,

I, {{candidate_name}}, National ID / Iqama No. {{national_id}}, hereby submit this application to be nominated for:
{{target_position}}.

Contact Details:
Mobile: {{mobile}}
Email: {{email}}

Academic Qualification:
{{qualification}}

Summary of Relevant Experience:
{{experience_summary}}

Conflict of Interest Disclosure (if any):
{{conflict_of_interest}}

I hereby confirm that all information provided in this form is true and accurate, and I undertake to comply with all applicable laws, regulations, and Company policies if my nomination is accepted.

Applicant Name: {{candidate_name}}
Signature: ___________________
Application Date: {{sign_date}}
        `.trim()
      }
    },

    /* =========================
       4) تعهد الالتزام بسرية المعلومات
       ========================= */
    {
      id: "confidentiality_undertaking",
      category: "governance",
      name: {
        ar: "تعهد الالتزام بسرية المعلومات",
        en: "Confidentiality Undertaking"
      },
      fields: [
        { name: "employee_name", type: "text", required: true,
          label: { ar: "اسم الموظف", en: "Employee Name" } },
        { name: "employee_id", type: "text", required: false,
          label: { ar: "رقم الموظف", en: "Employee ID" } },
        { name: "position", type: "text", required: true,
          label: { ar: "المسمى الوظيفي", en: "Job Title" } },
        { name: "sign_date", type: "date", required: true,
          label: { ar: "تاريخ التوقيع", en: "Signing Date" } }
      ],
      templates: {
        ar: `
تعهد الالتزام بسرية المعلومات

أنا الموظف/ {{employee_name}}
المسمى الوظيفي: {{position}}

أتعهد بالمحافظة التامة على سرية جميع المعلومات والبيانات والوثائق والمراسلات المتعلقة بالشركة أو عملائها أو مورديها أو شركائها، وعدم استخدامها أو إفشائها أو مشاركتها مع أي طرف غير مخول، سواء أثناء فترة عملي أو بعد انتهائها.

كما أتعهد بما يلي:
- عدم الاحتفاظ بنسخ شخصية من أي مستندات سرية دون تصريح.
- عدم مشاركة كلمات المرور أو وسائل الدخول للأنظمة مع أي شخص.
- الإبلاغ فورًا عن أي خرق أو شك في خرق سرية المعلومات.

وأدرك أن مخالفة هذا التعهد قد يعرّضني لإجراءات تأديبية ونظامية وفقًا للأنظمة المعمول بها.

اسم الموظف: {{employee_name}}
التوقيع: ___________________
التاريخ: {{sign_date}}
        `.trim(),
        en: `
Confidentiality Undertaking

I, {{employee_name}}
Job Title: {{position}}

Hereby undertake to fully maintain the confidentiality of all information, data, documents, and correspondence related to the Company, its clients, suppliers, or partners, and not to use, disclose, or share such information with any unauthorized party during or after my employment.

I further undertake to:
- Not keep any personal copies of confidential documents without authorization.
- Not share system passwords or access credentials with any person.
- Immediately report any actual or suspected breach of information confidentiality.

I understand that any violation of this undertaking may subject me to disciplinary and legal actions in accordance with applicable laws and Company policies.

Employee Name: {{employee_name}}
Signature: ___________________
Date: {{sign_date}}
        `.trim()
      }
    },

    /* =========================
       5) إقرار خاص بأعضاء مجلس الإدارة
       ========================= */
    {
      id: "board_members_declaration",
      category: "board",
      name: {
        ar: "إقرار خاص بأعضاء مجلس الإدارة",
        en: "Board Member Declaration"
      },
      fields: [
        { name: "member_name", type: "text", required: true,
          label: { ar: "اسم عضو المجلس", en: "Board Member Name" } },
        { name: "national_id", type: "text", required: true,
          label: { ar: "رقم الهوية / الإقامة", en: "National ID / Iqama" } },
        { name: "sign_date", type: "date", required: true,
          label: { ar: "تاريخ التوقيع", en: "Signing Date" } }
      ],
      templates: {
        ar: `
إقرار عضو مجلس الإدارة

أنا الموقع أدناه: {{member_name}}
رقم الهوية/الإقامة: {{national_id}}

أقرّ بما يلي:
1- عدم صدور أي حكم نهائي ضدي في جريمة مخلة بالشرف أو الأمانة.
2- عدم صدور حكم بإفلاسي أو إعساري أو شطبي من السجل التجاري (إن كان عضوًا تنفيذيًا/تجارياً).
3- عدم وجود تعارض مصالح جوهري غير مفصح عنه مع الشركة.
4- التزامي التام بأحكام نظام الشركات، ولوائح الحوكمة، وميثاق مجلس الإدارة واللجان المنبثقة عنه.
5- المحافظة على سرية المعلومات التي أطلع عليها بحكم عضويتي في المجلس.

الاسم: {{member_name}}
التوقيع: ___________________
التاريخ: {{sign_date}}
        `.trim(),
        en: `
Board Member Declaration

I, {{member_name}}
National ID / Iqama No.: {{national_id}}

Hereby declare that:
1. No final judgment has been issued against me in an offense involving dishonesty or breach of trust.
2. I have not been declared bankrupt or insolvent, nor have I been struck off any relevant commercial register (where applicable).
3. I have no material undisclosed conflict of interest with the Company.
4. I shall fully comply with the Companies Law, Governance Regulations, and the Board and Committees Charters.
5. I shall maintain the confidentiality of all information accessed by virtue of my board membership.

Name: {{member_name}}
Signature: ___________________
Date: {{sign_date}}
        `.trim()
      }
    },

    /* =========================
       6) نموذج توظيف - Job Application
       ========================= */
    {
      id: "job_application",
      category: "hr",
      name: {
        ar: "نموذج توظيف",
        en: "Job Application Form"
      },
      fields: [
        { name: "applicant_name", type: "text", required: true,
          label: { ar: "اسم المتقدم", en: "Applicant Name" } },
        { name: "national_id", type: "text", required: true,
          label: { ar: "رقم الهوية / الإقامة", en: "National ID / Iqama" } },
        { name: "mobile", type: "text", required: true,
          label: { ar: "رقم الجوال", en: "Mobile Number" } },
        { name: "email", type: "text", required: true,
          label: { ar: "البريد الإلكتروني", en: "Email" } },
        { name: "applied_position", type: "text", required: true,
          label: { ar: "الوظيفة المتقدم لها", en: "Position Applied For" } },
        { name: "qualification", type: "textarea", required: true,
          label: { ar: "المؤهلات العلمية", en: "Academic Qualifications" } },
        { name: "experience", type: "textarea", required: false,
          label: { ar: "الخبرات العملية", en: "Work Experience" } },
        { name: "skills", type: "textarea", required: false,
          label: { ar: "المهارات", en: "Skills" } },
        { name: "expected_salary", type: "text", required: false,
          label: { ar: "الراتب المتوقع", en: "Expected Salary" } },
        { name: "available_from", type: "date", required: false,
          label: { ar: "تاريخ التفرغ", en: "Available From" } }
      ],
      templates: {
        ar: `
نموذج طلب توظيف

بيانات المتقدم:
الاسم الكامل: {{applicant_name}}
رقم الهوية / الإقامة: {{national_id}}
رقم الجوال: {{mobile}}
البريد الإلكتروني: {{email}}

الوظيفة المتقدم لها:
{{applied_position}}

المؤهلات العلمية:
{{qualification}}

الخبرات العملية:
{{experience}}

المهارات:
{{skills}}

الراتب المتوقع: {{expected_salary}}
تاريخ التفرغ المتوقع: {{available_from}}

أقرّ بأن جميع البيانات أعلاه صحيحة، وأن أي معلومات غير صحيحة قد تؤثر على فرصة قبولي أو استمرار عملي لدى الشركة.

اسم المتقدم: {{applicant_name}}
التوقيع: ___________________
        `.trim(),
        en: `
Job Application Form

Applicant Details:
Full Name: {{applicant_name}}
National ID / Iqama No.: {{national_id}}
Mobile: {{mobile}}
Email: {{email}}

Position Applied For:
{{applied_position}}

Academic Qualifications:
{{qualification}}

Work Experience:
{{experience}}

Skills:
{{skills}}

Expected Salary: {{expected_salary}}
Available From: {{available_from}}

I hereby confirm that all information provided above is true and accurate. I understand that any false information may affect my employment opportunity or continuation with the Company.

Applicant Name: {{applicant_name}}
Signature: ___________________
        `.trim()
      }
    },

    /* =========================
       7) نموذج تقييم المقابلة الشخصية
       ========================= */
    {
      id: "interview_evaluation",
      category: "hr",
      name: {
        ar: "نموذج تقييم المقابلة الشخصية",
        en: "Interview Evaluation Form"
      },
      fields: [
        { name: "candidate_name", type: "text", required: true,
          label: { ar: "اسم المرشح", en: "Candidate Name" } },
        { name: "applied_position", type: "text", required: true,
          label: { ar: "الوظيفة المتقدم لها", en: "Position Applied For" } },
        { name: "interview_date", type: "date", required: true,
          label: { ar: "تاريخ المقابلة", en: "Interview Date" } },
        { name: "panel_member", type: "text", required: true,
          label: { ar: "اسم المقابل", en: "Interviewer Name" } },
        { name: "technical_score", type: "number", required: false,
          label: { ar: "التقييم الفني (من 10)", en: "Technical Score (out of 10)" } },
        { name: "behavioral_score", type: "number", required: false,
          label: { ar: "التقييم السلوكي (من 10)", en: "Behavioral Score (out of 10)" } },
        { name: "communication_score", type: "number", required: false,
          label: { ar: "مهارات التواصل (من 10)", en: "Communication Skills (out of 10)" } },
        { name: "overall_comment", type: "textarea", required: false,
          label: { ar: "ملاحظات عامة", en: "Overall Comments" } },
        { name: "recommendation", type: "select", required: true,
          options: ["accept", "reserve", "reject"],
          label: { ar: "التوصية", en: "Recommendation" } }
      ],
      templates: {
        ar: `
نموذج تقييم المقابلة الشخصية

اسم المرشح: {{candidate_name}}
الوظيفة المتقدم لها: {{applied_position}}
تاريخ المقابلة: {{interview_date}}
اسم المقابل: {{panel_member}}

التقييم:
- التقييم الفني (من 10): {{technical_score}}
- التقييم السلوكي (من 10): {{behavioral_score}}
- مهارات التواصل (من 10): {{communication_score}}

الملاحظات العامة:
{{overall_comment}}

التوصية:
{{recommendation}}

اسم المقابل: {{panel_member}}
التوقيع: ___________________
        `.trim(),
        en: `
Interview Evaluation Form

Candidate Name: {{candidate_name}}
Position Applied For: {{applied_position}}
Interview Date: {{interview_date}}
Interviewer Name: {{panel_member}}

Evaluation:
- Technical Score (out of 10): {{technical_score}}
- Behavioral Score (out of 10): {{behavioral_score}}
- Communication Skills (out of 10): {{communication_score}}

Overall Comments:
{{overall_comment}}

Recommendation:
{{recommendation}}

Interviewer Name: {{panel_member}}
Signature: ___________________
        `.trim()
      }
    },

    /* =========================
       8) نموذج تقييم أداء الموظف
       ========================= */
    {
      id: "performance_evaluation",
      category: "hr",
      name: {
        ar: "نموذج تقييم أداء الموظف",
        en: "Employee Performance Evaluation"
      },
      fields: [
        { name: "employee_name", type: "text", required: true,
          label: { ar: "اسم الموظف", en: "Employee Name" } },
        { name: "employee_id", type: "text", required: false,
          label: { ar: "رقم الموظف", en: "Employee ID" } },
        { name: "position", type: "text", required: true,
          label: { ar: "المسمى الوظيفي", en: "Job Title" } },
        { name: "department", type: "text", required: false,
          label: { ar: "الإدارة", en: "Department" } },
        { name: "period_from", type: "date", required: true,
          label: { ar: "فترة التقييم من", en: "Evaluation Period From" } },
        { name: "period_to", type: "date", required: true,
          label: { ar: "فترة التقييم إلى", en: "Evaluation Period To" } },
        { name: "kpi_score", type: "number", required: false,
          label: { ar: "تحقيق الأهداف (من 10)", en: "KPI Achievement (out of 10)" } },
        { name: "behavior_score", type: "number", required: false,
          label: { ar: "السلوك والانضباط (من 10)", en: "Behavior & Discipline (out of 10)" } },
        { name: "teamwork_score", type: "number", required: false,
          label: { ar: "العمل الجماعي (من 10)", en: "Teamwork (out of 10)" } },
        { name: "development_needs", type: "textarea", required: false,
          label: { ar: "الاحتياجات التدريبية", en: "Development Needs" } },
        { name: "manager_comments", type: "textarea", required: false,
          label: { ar: "ملاحظات المدير المباشر", en: "Line Manager Comments" } },
        { name: "overall_rating", type: "select", required: true,
          options: ["excellent", "very_good", "good", "needs_improvement", "weak"],
          label: { ar: "التقييم العام", en: "Overall Rating" } }
      ],
      templates: {
        ar: `
نموذج تقييم أداء الموظف

بيانات الموظف:
الاسم: {{employee_name}}
رقم الموظف: {{employee_id}}
المسمى الوظيفي: {{position}}
الإدارة: {{department}}

فترة التقييم:
من: {{period_from}} إلى: {{period_to}}

نتائج التقييم (من 10):
- تحقيق الأهداف: {{kpi_score}}
- السلوك والانضباط: {{behavior_score}}
- العمل الجماعي: {{teamwork_score}}

الاحتياجات التدريبية:
{{development_needs}}

ملاحظات المدير المباشر:
{{manager_comments}}

التقييم العام:
{{overall_rating}}

اسم المدير المباشر: ___________________
التوقيع: ___________________
تاريخ التقييم: ___________________
        `.trim(),
        en: `
Employee Performance Evaluation

Employee Details:
Name: {{employee_name}}
Employee ID: {{employee_id}}
Job Title: {{position}}
Department: {{department}}

Evaluation Period:
From: {{period_from}} To: {{period_to}}

Scores (out of 10):
- KPI Achievement: {{kpi_score}}
- Behavior & Discipline: {{behavior_score}}
- Teamwork: {{teamwork_score}}

Development Needs:
{{development_needs}}

Line Manager Comments:
{{manager_comments}}

Overall Rating:
{{overall_rating}}

Line Manager Name: ___________________
Signature: ___________________
Evaluation Date: ___________________
        `.trim()
      }
    },

    /* =========================
       9) قرار إداري - Administrative Decision
       ========================= */
    {
      id: "administrative_decision",
      category: "admin",
      name: {
        ar: "قرار إداري",
        en: "Administrative Decision"
      },
      fields: [
        { name: "decision_number", type: "text", required: false,
          label: { ar: "رقم القرار", en: "Decision No." } },
        { name: "decision_date", type: "date", required: true,
          label: { ar: "تاريخ القرار", en: "Decision Date" } },
        { name: "subject", type: "text", required: true,
          label: { ar: "موضوع القرار", en: "Decision Subject" } },
        { name: "decision_body", type: "textarea", required: true,
          label: { ar: "نص القرار", en: "Decision Text" } },
        { name: "issuer_name", type: "text", required: true,
          label: { ar: "اسم مصدر القرار", en: "Issuer Name" } },
        { name: "issuer_position", type: "text", required: true,
          label: { ar: "المنصب", en: "Issuer Position" } }
      ],
      templates: {
        ar: `
قرار إداري رقم: {{decision_number}}

تاريخ: {{decision_date}}

الموضوع: {{subject}}

استنادًا إلى الصلاحيات المخولة لنا، وبعد الاطلاع على ما يلزم، تقرر ما يلي:

{{decision_body}}

يعمل بهذا القرار من تاريخه، وعلى جميع الجهات المعنية تنفيذه كلٌ فيما يخصه.

{{issuer_name}}
{{issuer_position}}
التوقيع: ___________________
        `.trim(),
        en: `
Administrative Decision No.: {{decision_number}}

Date: {{decision_date}}

Subject: {{subject}}

Based on the authorities vested in us and after reviewing the relevant matters, it has been decided as follows:

{{decision_body}}

This decision shall be effective as of its date, and all concerned parties shall implement it within their respective scope.

{{issuer_name}}
{{issuer_position}}
Signature: ___________________
        `.trim()
      }
    },

    /* =========================
       10) عرض وظيفي - Job Offer
       ========================= */
    {
      id: "job_offer",
      category: "hr",
      name: {
        ar: "عرض وظيفي",
        en: "Job Offer"
      },
      fields: [
        { name: "candidate_name", type: "text", required: true,
          label: { ar: "اسم المرشح", en: "Candidate Name" } },
        { name: "position", type: "text", required: true,
          label: { ar: "المسمى الوظيفي", en: "Job Title" } },
        { name: "department", type: "text", required: false,
          label: { ar: "الإدارة", en: "Department" } },
        { name: "basic_salary", type: "text", required: true,
          label: { ar: "الراتب الأساسي", en: "Basic Salary" } },
        { name: "allowances", type: "textarea", required: false,
          label: { ar: "البدلات", en: "Allowances" } },
        { name: "start_date", type: "date", required: true,
          label: { ar: "تاريخ المباشرة المتوقع", en: "Expected Joining Date" } },
        { name: "offer_date", type: "date", required: true,
          label: { ar: "تاريخ العرض", en: "Offer Date" } }
      ],
      templates: {
        ar: `
عرض وظيفي

السيد/ {{candidate_name}} المحترم
السلام عليكم ورحمة الله وبركاته،،

يسر الشركة أن تتقدم لكم بهذا العرض الوظيفي للعمل لديها بمسمى:
{{position}}
الإدارة: {{department}}

وفق الشروط المالية التالية:
- الراتب الأساسي: {{basic_salary}}
- البدلات: {{allowances}}

تاريخ المباشرة المتوقع: {{start_date}}

يخضع هذا العرض لأنظمة العمل المعمول بها في المملكة، ولوائح الشركة الداخلية، واجتياز الفترة التجريبية بنجاح.

نرجو منكم التكرم بالتوقيع أدناه للدلالة على قبولكم لهذا العرض خلال مدة لا تتجاوز (7) أيام من تاريخه.

تاريخ العرض: {{offer_date}}

توقيع المرشح بالقبول:
الاسم: {{candidate_name}}
التوقيع: ___________________
التاريخ: ___________________

توقيع ممثل الشركة:
الاسم: ___________________
المنصب: ___________________
التوقيع: ___________________
        `.trim(),
        en: `
Job Offer

Dear Mr./Ms. {{candidate_name}},

We are pleased to extend this job offer to you to join the Company in the position of:
{{position}}
Department: {{department}}

Compensation details:
- Basic Salary: {{basic_salary}}
- Allowances: {{allowances}}

Expected Joining Date: {{start_date}}

This offer is subject to the applicable Labor Law, Company internal policies, and successful completion of the probation period.

Please sign below to indicate your acceptance of this offer within seven (7) days from the offer date.

Offer Date: {{offer_date}}

Candidate Acceptance:
Name: {{candidate_name}}
Signature: ___________________
Date: ___________________

Company Representative:
Name: ___________________
Position: ___________________
Signature: ___________________
        `.trim()
      }
    },

    /* =========================
       11) إشعار مباشرة عمل - Work Commencement
       ========================= */
    {
      id: "work_commencement_notice",
      category: "hr",
      name: {
        ar: "إشعار مباشرة عمل",
        en: "Work Commencement Notice"
      },
      fields: [
        { name: "employee_name", type: "text", required: true,
          label: { ar: "اسم الموظف", en: "Employee Name" } },
        { name: "employee_id", type: "text", required: false,
          label: { ar: "رقم الموظف", en: "Employee ID" } },
        { name: "position", type: "text", required: true,
          label: { ar: "المسمى الوظيفي", en: "Job Title" } },
        { name: "department", type: "text", required: false,
          label: { ar: "الإدارة", en: "Department" } },
        { name: "join_date", type: "date", required: true,
          label: { ar: "تاريخ المباشرة", en: "Joining Date" } }
      ],
      templates: {
        ar: `
إشعار مباشرة عمل

نفيدكم بأن الموظف:
الاسم: {{employee_name}}
رقم الموظف: {{employee_id}}
المسمى الوظيفي: {{position}}
الإدارة: {{department}}

قد باشر عمله اعتبارًا من تاريخ: {{join_date}}

وعليه يرجى استكمال ما يلزم من إجراءات مالية وإدارية.

مسؤول الموارد البشرية:
الاسم: ___________________
التوقيع: ___________________
التاريخ: ___________________
        `.trim(),
        en: `
Work Commencement Notice

This is to confirm that the employee:
Name: {{employee_name}}
Employee ID: {{employee_id}}
Job Title: {{position}}
Department: {{department}}

Has officially commenced work as of: {{join_date}}.

Please proceed with the necessary administrative and payroll procedures.

HR Officer:
Name: ___________________
Signature: ___________________
Date: ___________________
        `.trim()
      }
    },

    /* =========================
       12) نموذج غياب موظف - Absence Form
       ========================= */
    {
      id: "employee_absence_form",
      category: "hr",
      name: {
        ar: "نموذج غياب موظف",
        en: "Employee Absence Form"
      },
      fields: [
        { name: "employee_name", type: "text", required: true,
          label: { ar: "اسم الموظف", en: "Employee Name" } },
        { name: "employee_id", type: "text", required: false,
          label: { ar: "رقم الموظف", en: "Employee ID" } },
        { name: "department", type: "text", required: false,
          label: { ar: "الإدارة", en: "Department" } },
        { name: "absence_date", type: "date", required: true,
          label: { ar: "تاريخ الغياب", en: "Date of Absence" } },
        { name: "absence_type", type: "select", required: true,
          options: ["unexcused", "excused", "medical"],
          label: { ar: "نوع الغياب", en: "Absence Type" } },
        { name: "reason", type: "textarea", required: false,
          label: { ar: "سبب الغياب", en: "Reason" } }
      ],
      templates: {
        ar: `
نموذج غياب موظف

اسم الموظف: {{employee_name}}
رقم الموظف: {{employee_id}}
الإدارة: {{department}}

تاريخ الغياب: {{absence_date}}
نوع الغياب: {{absence_type}}

سبب الغياب:
{{reason}}

ملاحظات مسؤول القسم:
___________________

اسم المدير المباشر: ___________________
التوقيع: ___________________
        `.trim(),
        en: `
Employee Absence Form

Employee Name: {{employee_name}}
Employee ID: {{employee_id}}
Department: {{department}}

Date of Absence: {{absence_date}}
Absence Type: {{absence_type}}

Reason:
{{reason}}

Supervisor Comments:
___________________

Line Manager Name: ___________________
Signature: ___________________
        `.trim()
      }
    },

    /* =========================
       13) نموذج تأخر موظف - Lateness Form
       ========================= */
    {
      id: "employee_lateness_form",
      category: "hr",
      name: {
        ar: "نموذج تأخر موظف",
        en: "Employee Lateness Form"
      },
      fields: [
        { name: "employee_name", type: "text", required: true,
          label: { ar: "اسم الموظف", en: "Employee Name" } },
        { name: "employee_id", type: "text", required: false,
          label: { ar: "رقم الموظف", en: "Employee ID" } },
        { name: "department", type: "text", required: false,
          label: { ar: "الإدارة", en: "Department" } },
        { name: "date", type: "date", required: true,
          label: { ar: "تاريخ الحالة", en: "Date" } },
        { name: "arrival_time", type: "text", required: true,
          label: { ar: "وقت الحضور", en: "Arrival Time" } },
        { name: "reason", type: "textarea", required: false,
          label: { ar: "سبب التأخر", en: "Reason for Lateness" } }
      ],
      templates: {
        ar: `
نموذج تأخر موظف

اسم الموظف: {{employee_name}}
رقم الموظف: {{employee_id}}
الإدارة: {{department}}

تاريخ الحالة: {{date}}
وقت الحضور: {{arrival_time}}

سبب التأخر:
{{reason}}

ملاحظات المدير المباشر:
___________________

التوقيع: ___________________
        `.trim(),
        en: `
Employee Lateness Form

Employee Name: {{employee_name}}
Employee ID: {{employee_id}}
Department: {{department}}

Date: {{date}}
Arrival Time: {{arrival_time}}

Reason for Lateness:
{{reason}}

Supervisor Comments:
___________________

Signature: ___________________
        `.trim()
      }
    },

    /* =========================
       14) نموذج إنذار موظف - Warning Form
       ========================= */
    {
      id: "employee_warning_form",
      category: "hr",
      name: {
        ar: "نموذج إنذار موظف",
        en: "Employee Warning Form"
      },
      fields: [
        { name: "employee_name", type: "text", required: true,
          label: { ar: "اسم الموظف", en: "Employee Name" } },
        { name: "employee_id", type: "text", required: false,
          label: { ar: "رقم الموظف", en: "Employee ID" } },
        { name: "department", type: "text", required: false,
          label: { ar: "الإدارة", en: "Department" } },
        { name: "warning_date", type: "date", required: true,
          label: { ar: "تاريخ الإنذار", en: "Warning Date" } },
        { name: "violation_description", type: "textarea", required: true,
          label: { ar: "وصف المخالفة", en: "Violation Description" } },
        { name: "previous_warnings", type: "textarea", required: false,
          label: { ar: "إنذارات سابقة", en: "Previous Warnings" } }
      ],
      templates: {
        ar: `
نموذج إنذار موظف

اسم الموظف: {{employee_name}}
رقم الموظف: {{employee_id}}
الإدارة: {{department}}
تاريخ الإنذار: {{warning_date}}

وصف المخالفة:
{{violation_description}}

الإنذارات السابقة (إن وجدت):
{{previous_warnings}}

نود إحاطتكم بأن تكرار هذه المخالفة قد يعرضكم لإجراءات تأديبية أشد وفقًا للائحة الداخلية ونظام العمل.

اسم المدير المباشر: ___________________
التوقيع: ___________________
        `.trim(),
        en: `
Employee Warning Form

Employee Name: {{employee_name}}
Employee ID: {{employee_id}}
Department: {{department}}
Warning Date: {{warning_date}}

Violation Description:
{{violation_description}}

Previous Warnings (if any):
{{previous_warnings}}

Please be informed that repetition of this violation may subject you to more severe disciplinary actions in accordance with Company policy and the Labor Law.

Line Manager Name: ___________________
Signature: ___________________
        `.trim()
      }
    },

    /* =========================
       15) محضر استلام مركبة - Vehicle Handover
       ========================= */
    {
      id: "vehicle_handover_report",
      category: "assets",
      name: {
        ar: "محضر استلام مركبة",
        en: "Vehicle Handover Report"
      },
      fields: [
        { name: "employee_name", type: "text", required: true,
          label: { ar: "اسم المستلم", en: "Recipient Name" } },
        { name: "employee_id", type: "text", required: false,
          label: { ar: "رقم الموظف", en: "Employee ID" } },
        { name: "vehicle_type", type: "text", required: true,
          label: { ar: "نوع المركبة", en: "Vehicle Type" } },
        { name: "plate_number", type: "text", required: true,
          label: { ar: "رقم اللوحة", en: "Plate Number" } },
        { name: "handover_date", type: "date", required: true,
          label: { ar: "تاريخ الاستلام", en: "Handover Date" } },
        { name: "condition_notes", type: "textarea", required: false,
          label: { ar: "ملاحظات الحالة", en: "Condition Notes" } }
      ],
      templates: {
        ar: `
محضر استلام مركبة

نحن الموقعون أدناه نقر بأن الموظف:
الاسم: {{employee_name}}
رقم الموظف: {{employee_id}}

قد استلم المركبة التالية:
نوع المركبة: {{vehicle_type}}
رقم اللوحة: {{plate_number}}

وذلك بتاريخ: {{handover_date}}

حالة المركبة عند التسليم:
{{condition_notes}}

يتعهد الموظف بالمحافظة على المركبة واستعمالها للأغراض الوظيفية فقط، وتحمل أي أضرار ناتجة عن سوء الاستخدام أو الإهمال وفقًا للأنظمة المعمول بها.

توقيع الموظف المستلم: ___________________
توقيع مسؤول القسم: ___________________
        `.trim(),
        en: `
Vehicle Handover Report

We hereby confirm that the employee:
Name: {{employee_name}}
Employee ID: {{employee_id}}

Has received the following vehicle:
Vehicle Type: {{vehicle_type}}
Plate Number: {{plate_number}}

On the date: {{handover_date}}

Vehicle condition upon handover:
{{condition_notes}}

The employee undertakes to preserve the vehicle, use it only for work-related purposes, and shall be liable for any damages resulting from misuse or negligence in accordance with applicable policies.

Employee Signature: ___________________
Department Manager Signature: ___________________
        `.trim()
      }
    },

    /* =========================
       16) طلب صرف مبلغ عهدة - Petty Cash Request
       ========================= */
    {
      id: "petty_cash_request",
      category: "finance",
      name: {
        ar: "طلب صرف مبلغ عهدة",
        en: "Petty Cash / Custody Amount Request"
      },
      fields: [
        { name: "employee_name", type: "text", required: true,
          label: { ar: "اسم الموظف", en: "Employee Name" } },
        { name: "department", type: "text", required: false,
          label: { ar: "الإدارة", en: "Department" } },
        { name: "amount", type: "text", required: true,
          label: { ar: "المبلغ المطلوب", en: "Requested Amount" } },
        { name: "purpose", type: "textarea", required: true,
          label: { ar: "الغرض من العهدة", en: "Purpose of Custody" } },
        { name: "request_date", type: "date", required: true,
          label: { ar: "تاريخ الطلب", en: "Request Date" } }
      ],
      templates: {
        ar: `
طلب صرف مبلغ عهدة

اسم الموظف: {{employee_name}}
الإدارة: {{department}}

أطلب صرف مبلغ وقدره: {{amount}}

الغرض من العهدة:
{{purpose}}

أتعهد بصرف المبلغ في الغرض المحدد أعلاه، وتقديم المستندات المؤيدة، وإعادة أي مبالغ متبقية فور انتهاء المهمة.

تاريخ الطلب: {{request_date}}

توقيع الموظف: ___________________
اعتماد المدير المباشر: ___________________
اعتماد المالية: ___________________
        `.trim(),
        en: `
Petty Cash / Custody Amount Request

Employee Name: {{employee_name}}
Department: {{department}}

I hereby request the amount of: {{amount}}

Purpose of the custody:
{{purpose}}

I undertake to use the amount solely for the above purpose, submit all supporting documents, and return any remaining balance upon completion of the task.

Request Date: {{request_date}}

Employee Signature: ___________________
Line Manager Approval: ___________________
Finance Approval: ___________________
        `.trim()
      }
    },

    /* =========================
       17) أمر شراء - Purchase Order
       ========================= */
    {
      id: "purchase_order",
      category: "procurement",
      name: {
        ar: "أمر شراء",
        en: "Purchase Order"
      },
      fields: [
        { name: "po_number", type: "text", required: true,
          label: { ar: "رقم أمر الشراء", en: "PO Number" } },
        { name: "po_date", type: "date", required: true,
          label: { ar: "تاريخ أمر الشراء", en: "PO Date" } },
        { name: "vendor_name", type: "text", required: true,
          label: { ar: "اسم المورد", en: "Vendor Name" } },
        { name: "items", type: "textarea", required: true,
          label: { ar: "تفاصيل الأصناف / الخدمات", en: "Items / Services Details" } },
        { name: "total_amount", type: "text", required: true,
          label: { ar: "إجمالي المبلغ", en: "Total Amount" } }
      ],
      templates: {
        ar: `
أمر شراء رقم: {{po_number}}
تاريخ: {{po_date}}

اسم المورد: {{vendor_name}}

تفاصيل الأصناف / الخدمات:
{{items}}

إجمالي المبلغ: {{total_amount}}

يرجى التكرم بتوريد الأصناف / الخدمات الموضحة أعلاه وفقًا للشروط المتفق عليها.

اعتماد المشتريات: ___________________
اعتماد المالية: ___________________
        `.trim(),
        en: `
Purchase Order No.: {{po_number}}
Date: {{po_date}}

Vendor Name: {{vendor_name}}

Items / Services Details:
{{items}}

Total Amount: {{total_amount}}

Please proceed with supplying the above items / services in accordance with the agreed terms and conditions.

Procurement Approval: ___________________
Finance Approval: ___________________
        `.trim()
      }
    },

    /* =========================
       18) طلب شراء - Purchase Requisition
       ========================= */
    {
      id: "purchase_requisition",
      category: "procurement",
      name: {
        ar: "طلب شراء",
        en: "Purchase Requisition"
      },
      fields: [
        { name: "requester_name", type: "text", required: true,
          label: { ar: "اسم مقدم الطلب", en: "Requester Name" } },
        { name: "department", type: "text", required: false,
          label: { ar: "الإدارة", en: "Department" } },
        { name: "request_date", type: "date", required: true,
          label: { ar: "تاريخ الطلب", en: "Request Date" } },
        { name: "items", type: "textarea", required: true,
          label: { ar: "تفاصيل الطلب", en: "Request Details" } },
        { name: "estimated_amount", type: "text", required: false,
          label: { ar: "التكلفة التقديرية", en: "Estimated Cost" } },
        { name: "reason", type: "textarea", required: false,
          label: { ar: "مبررات الطلب", en: "Justification" } }
      ],
      templates: {
        ar: `
طلب شراء

اسم مقدم الطلب: {{requester_name}}
الإدارة: {{department}}

تاريخ الطلب: {{request_date}}

تفاصيل الطلب:
{{items}}

التكلفة التقديرية: {{estimated_amount}}

مبررات الطلب:
{{reason}}

توقيع مقدم الطلب: ___________________
اعتماد المدير المباشر: ___________________
اعتماد المشتريات: ___________________
        `.trim(),
        en: `
Purchase Requisition

Requester Name: {{requester_name}}
Department: {{department}}

Request Date: {{request_date}}

Request Details:
{{items}}

Estimated Cost: {{estimated_amount}}

Justification:
{{reason}}

Requester Signature: ___________________
Line Manager Approval: ___________________
Procurement Approval: ___________________
        `.trim()
      }
    },

    /* =========================
       19) طلب تأجيل سلفة - Advance Postponement
       ========================= */
    {
      id: "advance_postponement_request",
      category: "finance",
      name: {
        ar: "طلب تأجيل سلفة",
        en: "Advance Postponement Request"
      },
      fields: [
        { name: "employee_name", type: "text", required: true,
          label: { ar: "اسم الموظف", en: "Employee Name" } },
        { name: "employee_id", type: "text", required: false,
          label: { ar: "رقم الموظف", en: "Employee ID" } },
        { name: "advance_amount", type: "text", required: true,
          label: { ar: "مبلغ السلفة", en: "Advance Amount" } },
        { name: "current_installment", type: "text", required: false,
          label: { ar: "القسط الحالي", en: "Current Installment" } },
        { name: "postpone_reason", type: "textarea", required: true,
          label: { ar: "سبب طلب التأجيل", en: "Reason for Postponement" } }
      ],
      templates: {
        ar: `
طلب تأجيل سلفة

اسم الموظف: {{employee_name}}
رقم الموظف: {{employee_id}}

مبلغ السلفة: {{advance_amount}}
القسط الحالي: {{current_installment}}

سبب طلب التأجيل:
{{postpone_reason}}

أرجو منكم التكرم بالموافقة على تأجيل استقطاع القسط أعلاه إلى الشهر التالي، علمًا بأنني أتحمل كافة الالتزامات المترتبة على ذلك.

توقيع الموظف: ___________________
اعتماد المدير المباشر: ___________________
اعتماد المالية: ___________________
        `.trim(),
        en: `
Advance Postponement Request

Employee Name: {{employee_name}}
Employee ID: {{employee_id}}

Advance Amount: {{advance_amount}}
Current Installment: {{current_installment}}

Reason for Postponement:
{{postpone_reason}}

Kindly approve postponing the above installment to the next month. I acknowledge my full responsibility for any obligations arising therefrom.

Employee Signature: ___________________
Line Manager Approval: ___________________
Finance Approval: ___________________
        `.trim()
      }
    },

    /* =========================
       20) إرجاع عهدة - Custody Return
       ========================= */
    {
      id: "custody_return",
      category: "finance",
      name: {
        ar: "إرجاع عهدة",
        en: "Custody Return Form"
      },
      fields: [
        { name: "employee_name", type: "text", required: true,
          label: { ar: "اسم الموظف", en: "Employee Name" } },
        { name: "custody_type", type: "text", required: true,
          label: { ar: "نوع العهدة", en: "Type of Custody" } },
        { name: "amount_or_assets", type: "textarea", required: true,
          label: { ar: "المبلغ / الأصول المرفوعة", en: "Returned Amount / Assets" } },
        { name: "return_date", type: "date", required: true,
          label: { ar: "تاريخ الإرجاع", en: "Return Date" } }
      ],
      templates: {
        ar: `
نموذج إرجاع عهدة

اسم الموظف: {{employee_name}}

نوع العهدة:
{{custody_type}}

تفاصيل المبالغ / الأصول المُرجعة:
{{amount_or_assets}}

تاريخ الإرجاع: {{return_date}}

أقرّ بأنني قمت بإرجاع العهدة المذكورة أعلاه إلى خزينة/مستودع الشركة.

توقيع الموظف: ___________________
توقيع مسؤول المالية/المستودع: ___________________
        `.trim(),
        en: `
Custody Return Form

Employee Name: {{employee_name}}

Type of Custody:
{{custody_type}}

Details of Returned Amount / Assets:
{{amount_or_assets}}

Return Date: {{return_date}}

I hereby confirm that I have returned the above-mentioned custody items to the Company.

Employee Signature: ___________________
Finance / Storekeeper Signature: ___________________
        `.trim()
      }
    },

    /* =========================
       21) تسليم عهدة - Custody Handover
       ========================= */
    {
      id: "custody_handover",
      category: "finance",
      name: {
        ar: "تسليم عهدة",
        en: "Custody Handover Form"
      },
      fields: [
        { name: "employee_name", type: "text", required: true,
          label: { ar: "اسم الموظف", en: "Employee Name" } },
        { name: "custody_type", type: "text", required: true,
          label: { ar: "نوع العهدة", en: "Type of Custody" } },
        { name: "description", type: "textarea", required: true,
          label: { ar: "وصف العهدة", en: "Custody Description" } },
        { name: "handover_date", type: "date", required: true,
          label: { ar: "تاريخ التسليم", en: "Handover Date" } }
      ],
      templates: {
        ar: `
نموذج تسليم عهدة

اسم الموظف: {{employee_name}}

نوع العهدة:
{{custody_type}}

وصف العهدة:
{{description}}

تاريخ التسليم: {{handover_date}}

أقرّ باستلام العهدة الموضحة أعلاه، وأتعهد بالمحافظة عليها واستعمالها فيما خصصت له، وإعادتها عند طلب الشركة أو عند انتهاء الغرض أو العقد.

توقيع الموظف: ___________________
توقيع مسؤول المالية/المستودع: ___________________
        `.trim(),
        en: `
Custody Handover Form

Employee Name: {{employee_name}}

Type of Custody:
{{custody_type}}

Custody Description:
{{description}}

Handover Date: {{handover_date}}

I hereby acknowledge receipt of the above custody items and undertake to preserve and use them for business purposes only, and to return them upon Company request or upon termination of the employment/assignment.

Employee Signature: ___________________
Finance / Storekeeper Signature: ___________________
        `.trim()
      }
    },

    /* =========================
       22) طلب سلفة - Advance Request
       ========================= */
    {
      id: "advance_request",
      category: "finance",
      name: {
        ar: "طلب سلفة",
        en: "Salary Advance Request"
      },
      fields: [
        { name: "employee_name", type: "text", required: true,
          label: { ar: "اسم الموظف", en: "Employee Name" } },
        { name: "employee_id", type: "text", required: false,
          label: { ar: "رقم الموظف", en: "Employee ID" } },
        { name: "department", type: "text", required: false,
          label: { ar: "الإدارة", en: "Department" } },
        { name: "advance_amount", type: "text", required: true,
          label: { ar: "مبلغ السلفة المطلوب", en: "Requested Advance Amount" } },
        { name: "reason", type: "textarea", required: true,
          label: { ar: "سبب طلب السلفة", en: "Reason for Advance" } }
      ],
      templates: {
        ar: `
طلب سلفة

اسم الموظف: {{employee_name}}
رقم الموظف: {{employee_id}}
الإدارة: {{department}}

أطلب منكم التكرم بالموافقة على منحي سلفة قدرها: {{advance_amount}}

سبب طلب السلفة:
{{reason}}

أوافق على استقطاع قيمة السلفة من راتبي وفقًا للجدول الذي تقره إدارة المالية.

توقيع الموظف: ___________________
اعتماد المدير المباشر: ___________________
اعتماد الموارد البشرية: ___________________
اعتماد المالية: ___________________
        `.trim(),
        en: `
Salary Advance Request

Employee Name: {{employee_name}}
Employee ID: {{employee_id}}
Department: {{department}}

I kindly request your approval to grant me a salary advance in the amount of: {{advance_amount}}

Reason for the advance:
{{reason}}

I agree that the advance amount will be deducted from my salary according to a schedule determined by the Finance Department.

Employee Signature: ___________________
Line Manager Approval: ___________________
HR Approval: ___________________
Finance Approval: ___________________
        `.trim()
      }
    },

    /* =========================
       23) استئذان موظف - Permission Request
       ========================= */
    {
      id: "employee_permission_request",
      category: "hr",
      name: {
        ar: "استئذان موظف",
        en: "Employee Permission Request"
      },
      fields: [
        { name: "employee_name", type: "text", required: true,
          label: { ar: "اسم الموظف", en: "Employee Name" } },
        { name: "department", type: "text", required: false,
          label: { ar: "الإدارة", en: "Department" } },
        { name: "date", type: "date", required: true,
          label: { ar: "تاريخ الاستئذان", en: "Permission Date" } },
        { name: "from_time", type: "text", required: true,
          label: { ar: "من الساعة", en: "From Time" } },
        { name: "to_time", type: "text", required: true,
          label: { ar: "إلى الساعة", en: "To Time" } },
        { name: "reason", type: "textarea", required: true,
          label: { ar: "سبب الاستئذان", en: "Reason" } }
      ],
      templates: {
        ar: `
استمارة استئذان موظف

اسم الموظف: {{employee_name}}
الإدارة: {{department}}

تاريخ الاستئذان: {{date}}
من الساعة: {{from_time}} إلى الساعة: {{to_time}}

سبب الاستئذان:
{{reason}}

توقيع الموظف: ___________________
اعتماد المدير المباشر: ___________________
        `.trim(),
        en: `
Employee Permission Request

Employee Name: {{employee_name}}
Department: {{department}}

Permission Date: {{date}}
From: {{from_time}} To: {{to_time}}

Reason:
{{reason}}

Employee Signature: ___________________
Line Manager Approval: ___________________
        `.trim()
      }
    },

  /* =========================
     24) طلب إجازة - Leave Request
     ========================= */
  {
    id: "leave_request",
    category: "hr",
    name: {
      ar: "طلب إجازة",
      en: "Leave Request"
    },
    fields: [
      { name: "employee_name", type: "text", required: true,
        label: { ar: "اسم الموظف", en: "Employee Name" } },
      { name: "employee_id", type: "text", required: false,
        label: { ar: "رقم الموظف", en: "Employee ID" } },
      { name: "position", type: "text", required: false,
        label: { ar: "المسمى الوظيفي", en: "Job Title" } },
      { name: "department", type: "text", required: false,
        label: { ar: "الإدارة", en: "Department" } },
      { name: "leave_type", type: "select", required: true,
        options: ["annual", "sick", "emergency", "unpaid", "other"],
        label: { ar: "نوع الإجازة", en: "Leave Type" } },
      { name: "start_date", type: "date", required: true,
        label: { ar: "تاريخ بداية الإجازة", en: "Start Date" } },
      { name: "end_date", type: "date", required: true,
        label: { ar: "تاريخ نهاية الإجازة", en: "End Date" } },
      { name: "reason", type: "textarea", required: false,
        label: { ar: "سبب الإجازة (إن وجد)", en: "Reason (if any)" } }
    ],
    templates: {
      ar: `
طلب إجازة

اسم الموظف: {{employee_name}}
رقم الموظف: {{employee_id}}
المسمى الوظيفي: {{position}}
الإدارة: {{department}}

نوع الإجازة: {{leave_type}}
تاريخ بداية الإجازة: {{start_date}}
تاريخ نهاية الإجازة: {{end_date}}

سبب الإجازة (إن وجد):
{{reason}}

أقرّ بأن رصيدي من الإجازات يغطي المدة المطلوبة (في حال الإجازة السنوية)،
وألتزم بالعودة للعمل في الموعد المحدد.

توقيع الموظف: ___________________
اعتماد المدير المباشر: ___________________
اعتماد الموارد البشرية: ___________________
      `.trim(),
      en: `
Leave Request

Employee Name: {{employee_name}}
Employee ID: {{employee_id}}
Job Title: {{position}}
Department: {{department}}

Leave Type: {{leave_type}}
Start Date: {{start_date}}
End Date: {{end_date}}

Reason (if any):
{{reason}}

I hereby confirm that my leave balance covers the requested period (for annual leave),
and I undertake to resume work on the specified return date.

Employee Signature: ___________________
Line Manager Approval: ___________________
HR Approval: ___________________
      `.trim()
    }
  },

  /* =========================
     25) سند صرف - Payment Voucher
     ========================= */
  {
    id: "payment_voucher",
    category: "finance",
    name: {
      ar: "سند صرف",
      en: "Payment Voucher"
    },
    fields: [
      { name: "voucher_number", type: "text", required: true,
        label: { ar: "رقم السند", en: "Voucher No." } },
      { name: "voucher_date", type: "date", required: true,
        label: { ar: "تاريخ السند", en: "Date" } },
      { name: "payee_name", type: "text", required: true,
        label: { ar: "اسم المستفيد", en: "Payee Name" } },
      { name: "amount_number", type: "number", required: true,
        label: { ar: "المبلغ بالأرقام", en: "Amount (Number)" } },
      { name: "amount_words", type: "text", required: true,
        label: { ar: "المبلغ كتابة", en: "Amount (In Words)" } },
      { name: "payment_method", type: "select", required: true,
        options: ["cash", "bank_transfer", "cheque", "other"],
        label: { ar: "طريقة الدفع", en: "Payment Method" } },
      { name: "cost_center", type: "text", required: false,
        label: { ar: "مركز التكلفة (إن وجد)", en: "Cost Center (if any)" } },
      { name: "description", type: "textarea", required: true,
        label: { ar: "بيان الصرف / الغرض", en: "Payment Description / Purpose" } },
      { name: "reference_docs", type: "textarea", required: false,
        label: { ar: "المستندات المؤيدة", en: "Supporting Documents" } },
      { name: "prepared_by", type: "text", required: false,
        label: { ar: "إعداد", en: "Prepared By" } },
      { name: "approved_by", type: "text", required: false,
        label: { ar: "اعتماد", en: "Approved By" } },
      { name: "received_by", type: "text", required: false,
        label: { ar: "استلمت بواسطة", en: "Received By" } },
      { name: "notes", type: "textarea", required: false,
        label: { ar: "ملاحظات", en: "Notes" } }
    ],
    templates: {
      ar: `
سند صرف

رقم السند: {{voucher_number}}
تاريخ السند: {{voucher_date}}

اسم المستفيد: {{payee_name}}

المبلغ بالأرقام: {{amount_number}}
المبلغ كتابة: {{amount_words}}

طريقة الدفع: {{payment_method}}
مركز التكلفة (إن وجد): {{cost_center}}

بيان الصرف / الغرض:
{{description}}

المستندات المؤيدة:
{{reference_docs}}

إعداد: {{prepared_by}}
اعتماد: {{approved_by}}
استلمت المبلغ الموضح أعلاه كاملًا:
اسم المستلم: {{received_by}}
توقيع المستلم: ___________________

ملاحظات:
{{notes}}
      `.trim(),
      en: `
Payment Voucher

Voucher No.: {{voucher_number}}
Date: {{voucher_date}}

Payee Name: {{payee_name}}

Amount (Number): {{amount_number}}
Amount (In Words): {{amount_words}}

Payment Method: {{payment_method}}
Cost Center (if any): {{cost_center}}

Payment Description / Purpose:
{{description}}

Supporting Documents:
{{reference_docs}}

Prepared By: {{prepared_by}}
Approved By: {{approved_by}}

I hereby acknowledge receipt of the full amount stated above:
Received By: {{received_by}}
Recipient Signature: ___________________

Notes:
{{notes}}
      `.trim()
    }
  },

  /* =========================
     26) خطاب تعريف - Employment / Salary Certificate
     ========================= */
  {
    id: "employment_certificate",
    category: "hr",
    name: {
      ar: "خطاب تعريف",
      en: "Employment / Salary Certificate"
    },
    fields: [
      { name: "issue_date", type: "date", required: true,
        label: { ar: "تاريخ الإصدار", en: "Issue Date" } },
      { name: "to_whom", type: "text", required: false,
        label: { ar: "موجه إلى", en: "To (Recipient)" } },
      { name: "employee_name", type: "text", required: true,
        label: { ar: "اسم الموظف", en: "Employee Name" } },
      { name: "national_id", type: "text", required: false,
        label: { ar: "رقم الهوية / الإقامة", en: "National ID / Iqama No." } },
      { name: "nationality", type: "text", required: false,
        label: { ar: "الجنسية", en: "Nationality" } },
      { name: "position", type: "text", required: true,
        label: { ar: "المسمى الوظيفي", en: "Job Title" } },
      { name: "department", type: "text", required: false,
        label: { ar: "الإدارة", en: "Department" } },
      { name: "joining_date", type: "date", required: true,
        label: { ar: "تاريخ الالتحاق بالعمل", en: "Joining Date" } },
      { name: "basic_salary", type: "number", required: true,
        label: { ar: "الراتب الأساسي", en: "Basic Salary" } },
      { name: "allowances", type: "number", required: false,
        label: { ar: "البدلات", en: "Allowances" } },
      { name: "total_salary", type: "number", required: true,
        label: { ar: "إجمالي الراتب", en: "Total Salary" } },
      { name: "purpose", type: "textarea", required: false,
        label: { ar: "الغرض من الخطاب", en: "Purpose of Letter" } }
    ],
    templates: {
      ar: `
التاريخ: {{issue_date}}

السادة / {{to_whom}}
المحترمين

السلام عليكم ورحمة الله وبركاته،،، وبعد:

نفيدكم بأن السيد / السيدة: {{employee_name}}
رقم الهوية / الإقامة: {{national_id}}
الجنسية: {{nationality}}
يشغل وظيفة: {{position}}
بالإدارة: {{department}}
لدى شركة ____________________________
وذلك منذ تاريخ: {{joining_date}} وحتى تاريخه.

وأن إجمالي راتبه الشهري هو كما يلي:
الراتب الأساسي: {{basic_salary}} ريال سعودي
البدلات: {{allowances}} ريال سعودي
إجمالي الراتب: {{total_salary}} ريال سعودي

وقد تم إصدار هذا الخطاب بناءً على طلبه / طلبها
لغرض: {{purpose}}
دون أدنى مسؤولية على الشركة تجاه الغير.

وتفضلوا بقبول فائق الاحترام والتقدير،،،

اسم الموظف المختص: ___________________
المسمى الوظيفي: ______________________
التوقيع والختم: _______________________
      `.trim(),
      en: `
Date: {{issue_date}}

To: {{to_whom}}

Dear Sir / Madam,

This is to certify that Mr. / Ms. {{employee_name}},
National ID / Iqama No.: {{national_id}},
Nationality: {{nationality}},
is employed by ____________________________
as a {{position}} in the {{department}} department,
since {{joining_date}} and is still in service to date.

His / Her monthly salary details are as follows:
Basic Salary: {{basic_salary}} SAR
Allowances: {{allowances}} SAR
Total Monthly Salary: {{total_salary}} SAR

This letter has been issued upon his / her request
for the purpose of: {{purpose}},
without any responsibility whatsoever on the Company.

Sincerely,

Authorized Signatory: ___________________
Job Title: _____________________________
Signature & Company Seal: ______________
      `.trim()
    }
  },

  /* =========================
     27) شهادة خبرة - Experience Certificate
     ========================= */
  {
    id: "experience_certificate",
    category: "hr",
    name: {
      ar: "شهادة خبرة",
      en: "Experience Certificate"
    },
    fields: [
      { name: "issue_date", type: "date", required: true,
        label: { ar: "تاريخ الإصدار", en: "Issue Date" } },
      { name: "employee_name", type: "text", required: true,
        label: { ar: "اسم الموظف", en: "Employee Name" } },
      { name: "national_id", type: "text", required: false,
        label: { ar: "رقم الهوية / الإقامة", en: "National ID / Iqama No." } },
      { name: "nationality", type: "text", required: false,
        label: { ar: "الجنسية", en: "Nationality" } },
      { name: "position", type: "text", required: true,
        label: { ar: "المسمى الوظيفي", en: "Job Title" } },
      { name: "department", type: "text", required: false,
        label: { ar: "الإدارة", en: "Department" } },
      { name: "start_date", type: "date", required: true,
        label: { ar: "تاريخ بدء العمل", en: "Start Date" } },
      { name: "end_date", type: "date", required: true,
        label: { ar: "تاريخ انتهاء العمل", en: "End Date" } },
      { name: "performance_notes", type: "textarea", required: false,
        label: { ar: "ملاحظات عن الأداء", en: "Performance Notes" } }
    ],
    templates: {
      ar: `
التاريخ: {{issue_date}}

شهادة خبرة

تشهد شركة ____________________________ بأن:
السيد / السيدة: {{employee_name}}
رقم الهوية / الإقامة: {{national_id}}
الجنسية: {{nationality}}

قد عمل لدينا بوظيفة: {{position}}
بالإدارة: {{department}}
وذلك خلال الفترة من {{start_date}} حتى {{end_date}}.

وخلال فترة عمله / عملها لدينا، كان / كانت مثالًا للالتزام والانضباط، وأدى / أدت المهام الموكلة إليه / إليها بكفاءة واقتدار.

ملاحظات عن الأداء (إن وجدت):
{{performance_notes}}

وقد أعطي هذا الخطاب بناءً على طلبه / طلبها، دون أدنى مسؤولية على الشركة تجاه الغير.

وتفضلوا بقبول فائق الاحترام والتقدير،،،

اسم المسؤول: _________________________
المسمى الوظيفي: ______________________
التوقيع والختم: _______________________
      `.trim(),
      en: `
Date: {{issue_date}}

Experience Certificate

This is to certify that Mr. / Ms. {{employee_name}},
National ID / Iqama No.: {{national_id}},
Nationality: {{nationality}},

has worked with ____________________________
as {{position}} in the {{department}} department
from {{start_date}} to {{end_date}}.

During his / her employment with us, he / she has been
a dedicated and committed employee and has performed
the assigned duties in a professional and efficient manner.

Performance Notes (if any):
{{performance_notes}}

This certificate is issued upon his / her request
without any responsibility whatsoever on the Company.

Best regards,

Authorized Person: ______________________
Job Title: _____________________________
Signature & Company Seal: ______________
      `.trim()
    }
  },

  /* =========================
     28) مخالصة - Final Settlement
     ========================= */
  {
    id: "final_settlement",
    category: "hr",
    name: {
      ar: "مخالصة نهائية",
      en: "Final Settlement"
    },
    fields: [
      { name: "settlement_date", type: "date", required: true,
        label: { ar: "تاريخ المخالصة", en: "Settlement Date" } },
      { name: "employee_name", type: "text", required: true,
        label: { ar: "اسم الموظف", en: "Employee Name" } },
      { name: "national_id", type: "text", required: false,
        label: { ar: "رقم الهوية / الإقامة", en: "National ID / Iqama No." } },
      { name: "position", type: "text", required: true,
        label: { ar: "المسمى الوظيفي", en: "Job Title" } },
      { name: "department", type: "text", required: false,
        label: { ar: "الإدارة", en: "Department" } },
      { name: "start_date", type: "date", required: true,
        label: { ar: "تاريخ مباشرة العمل", en: "Start Date" } },
      { name: "end_date", type: "date", required: true,
        label: { ar: "تاريخ انتهاء الخدمة", en: "End Date" } },
      { name: "last_salary", type: "number", required: false,
        label: { ar: "أجر آخر شهر", en: "Last Month Salary" } },
      { name: "due_leave_days", type: "number", required: false,
        label: { ar: "رصيد الإجازات (أيام)", en: "Leave Balance (Days)" } },
      { name: "due_leave_amount", type: "number", required: false,
        label: { ar: "بدل رصيد الإجازات", en: "Leave Balance Amount" } },
      { name: "other_dues", type: "textarea", required: false,
        label: { ar: "مستحقات أخرى", en: "Other Dues" } },
      { name: "loans_deduction", type: "number", required: false,
        label: { ar: "سلف / قروض مستقطعة", en: "Loans / Advances Deduction" } },
      { name: "other_deductions", type: "textarea", required: false,
        label: { ar: "استقطاعات أخرى", en: "Other Deductions" } },
      { name: "net_amount", type: "number", required: true,
        label: { ar: "صافي المستحق", en: "Net Amount Payable" } }
    ],
    templates: {
      ar: `
مخالصة نهائية

التاريخ: {{settlement_date}}

أنا الموقع أدناه:
الاسم: {{employee_name}}
رقم الهوية / الإقامة: {{national_id}}
المسمى الوظيفي: {{position}}
الإدارة: {{department}}

أقر بأنني قد عملت لدى شركة ____________________________
خلال الفترة من {{start_date}} حتى {{end_date}}، وقد تم إنهاء خدماتي / استقالتي
واستلمت كافة مستحقاتي على النحو التالي:

أجر آخر شهر: {{last_salary}} ريال سعودي
بدل رصيد الإجازات: {{due_leave_amount}} ريال سعودي
رصيد الإجازات (أيام): {{due_leave_days}} يوم

مستحقات أخرى:
{{other_dues}}

سلف / قروض مستقطعة: {{loans_deduction}} ريال سعودي
استقطاعات أخرى:
{{other_deductions}}

صافي المستحق لي: {{net_amount}} ريال سعودي فقط لا غير.

وأقرّ بأنه لا يحق لي بعد استلامي للمبلغ المذكور أعلاه
المطالبة بأي حقوق مالية أخرى لدى الشركة عن فترة عملي السابقة.

اسم الموظف: {{employee_name}}
توقيع الموظف: ______________________
تاريخ التوقيع: {{settlement_date}}

اعتماد الموارد البشرية: ___________________
اعتماد المالية: __________________________
      `.trim(),
      en: `
Final Settlement

Date: {{settlement_date}}

I, the undersigned:
Name: {{employee_name}}
National ID / Iqama No.: {{national_id}}
Job Title: {{position}}
Department: {{department}}

hereby acknowledge that I have worked for ____________________________
from {{start_date}} until {{end_date}}, and that my services have been terminated / I have resigned,
and I have received all my dues as follows:

Last Month Salary: {{last_salary}} SAR
Leave Balance Amount: {{due_leave_amount}} SAR
Leave Balance (Days): {{due_leave_days}} days

Other Dues:
{{other_dues}}

Loans / Advances Deduction: {{loans_deduction}} SAR
Other Deductions:
{{other_deductions}}

Net Amount Payable to me: {{net_amount}} SAR only.

I further confirm that after receiving the above-mentioned amount,
I have no further financial claims whatsoever against the Company
for the entire period of my employment.

Employee Name: {{employee_name}}
Employee Signature: ___________________
Signature Date: {{settlement_date}}

HR Approval: __________________________
Finance Approval: ______________________
      `.trim()
    }
  },

  /* =========================
     29) نموذج انتداب - Business Trip Assignment
     ========================= */
  {
    id: "business_trip",
    category: "hr",
    name: {
      ar: "نموذج انتداب",
      en: "Business Trip Assignment"
    },
    fields: [
      { name: "request_date", type: "date", required: true,
        label: { ar: "تاريخ الطلب", en: "Request Date" } },
      { name: "employee_name", type: "text", required: true,
        label: { ar: "اسم الموظف", en: "Employee Name" } },
      { name: "employee_id", type: "text", required: false,
        label: { ar: "رقم الموظف", en: "Employee ID" } },
      { name: "position", type: "text", required: true,
        label: { ar: "المسمى الوظيفي", en: "Job Title" } },
      { name: "department", type: "text", required: false,
        label: { ar: "الإدارة", en: "Department" } },
      { name: "destination", type: "text", required: true,
        label: { ar: "جهة الانتداب / المدينة", en: "Destination / City" } },
      { name: "trip_purpose", type: "textarea", required: true,
        label: { ar: "الغرض من الانتداب", en: "Purpose of Trip" } },
      { name: "start_date", type: "date", required: true,
        label: { ar: "تاريخ بداية الانتداب", en: "Trip Start Date" } },
      { name: "end_date", type: "date", required: true,
        label: { ar: "تاريخ نهاية الانتداب", en: "Trip End Date" } },
      { name: "days_count", type: "number", required: false,
        label: { ar: "عدد أيام الانتداب", en: "Number of Days" } },
      { name: "allowance_per_day", type: "number", required: false,
        label: { ar: "بدل الانتداب اليومي", en: "Daily Allowance" } },
      { name: "total_allowance", type: "number", required: false,
        label: { ar: "إجمالي بدل الانتداب", en: "Total Allowance" } },
      { name: "transportation_details", type: "textarea", required: false,
        label: { ar: "تفاصيل وسيلة النقل", en: "Transportation Details" } },
      { name: "accommodation_details", type: "textarea", required: false,
        label: { ar: "تفاصيل السكن", en: "Accommodation Details" } },
      { name: "advance_amount", type: "number", required: false,
        label: { ar: "مبلغ السلفة (إن وجد)", en: "Advance Amount (if any)" } }
    ],
    templates: {
      ar: `
نموذج انتداب

تاريخ الطلب: {{request_date}}

بيانات الموظف:
اسم الموظف: {{employee_name}}
رقم الموظف: {{employee_id}}
المسمى الوظيفي: {{position}}
الإدارة: {{department}}

جهة الانتداب / المدينة: {{destination}}

الغرض من الانتداب:
{{trip_purpose}}

فترة الانتداب:
تاريخ البداية: {{start_date}}
تاريخ النهاية: {{end_date}}
عدد الأيام: {{days_count}} يوم

بدل الانتداب:
البدل اليومي: {{allowance_per_day}} ريال سعودي
إجمالي البدل: {{total_allowance}} ريال سعودي

تفاصيل وسيلة النقل:
{{transportation_details}}

تفاصيل السكن:
{{accommodation_details}}

مبلغ السلفة (إن وجد): {{advance_amount}} ريال سعودي

توقيع الموظف: ______________________
اعتماد المدير المباشر: ______________________
اعتماد الإدارة المالية: ______________________
اعتماد الموارد البشرية: ______________________
      `.trim(),
      en: `
Business Trip Assignment

Request Date: {{request_date}}

Employee Details:
Employee Name: {{employee_name}}
Employee ID: {{employee_id}}
Job Title: {{position}}
Department: {{department}}

Destination / City: {{destination}}

Purpose of Trip:
{{trip_purpose}}

Trip Duration:
Start Date: {{start_date}}
End Date: {{end_date}}
Number of Days: {{days_count}}

Per Diem:
Daily Allowance: {{allowance_per_day}} SAR
Total Allowance: {{total_allowance}} SAR

Transportation Details:
{{transportation_details}}

Accommodation Details:
{{accommodation_details}}

Advance Amount (if any): {{advance_amount}} SAR

Employee Signature: ______________________
Line Manager Approval: ____________________
Finance Approval: ________________________
HR Approval: _____________________________
      `.trim()
    }
  }
  ]
};

// --- 4. الحوكمة المالية (مقتطف للتشغيل - من financial-governance.js) ---
const FINANCIAL_GOVERNANCE = {
    sections: [
        { id: "FIN-SECTION-01",
      title: {
        ar: "مقدمة وأهمية الحوكمة المالية",
        en: "Introduction & Importance of Financial Governance"
      },
      policies: [

        {
          code: "FIN-001",
          title: {
            ar: "مقدمة الحوكمة المالية",
            en: "Introduction to Financial Governance"
          },
          content: {
            ar: `
الحوكمة المالية هي بمثابة الهيكل الذي يُبنى عليه النظام المالي للشركة، 
وهي مجموعة القواعد والإجراءات والعمليات التي تضمن إدارة الموارد المالية للشركة بشكل فعّال وشفاف ومسؤول.

تهدف الحوكمة المالية إلى:
- تحقيق الاستخدام الأمثل للموارد المالية.
- تحقيق التوازن بين الأهداف المالية والاجتماعية والبيئية للشركة.
- ضمان استدامة الشركة وحماية أصولها.
- تعزيز ثقة أصحاب المصلحة في المعلومات والتقارير المالية الصادرة عن الشركة.
            `,
            en: `
Financial governance is the framework upon which the company’s financial system is built.  
It consists of the rules, procedures, and processes that ensure the company’s financial resources  
are managed in an efficient, transparent, and responsible manner.

Financial governance aims to:
- Optimize the use of financial resources.
- Balance the company’s financial, social, and environmental objectives.
- Ensure the company’s sustainability and protect its assets.
- Strengthen stakeholders’ trust in the company’s financial information and reports.
            `
          }
        },

        {
          code: "FIN-002",
          title: {
            ar: "أهمية الحوكمة المالية",
            en: "Importance of Financial Governance"
          },
          content: {
            ar: `
تبرز أهمية الحوكمة المالية من خلال عدد من الفوائد الجوهرية:

1) زيادة الثقة:
- تعزز الحوكمة المالية ثقة المستثمرين والعملاء والموردين في الشركة.
- تدعم قدرة الشركة على جذب الاستثمارات والتمويل وتوسيع أنشطتها.

2) تحسين الأداء المالي:
- تساعد على تحسين جودة القرارات المالية.
- ترفع من كفاءة استخدام الموارد وتخفض الهدر المالي.
- تنعكس على تحسن الأداء المالي والمؤشرات الرئيسية للشركة.

3) الحد من المخاطر:
- تساهم في الحد من المخاطر المالية والقانونية التي قد تواجهها الشركة.
- تدعم استمرارية الأعمال وحماية أصول الشركة وحقوق المساهمين.

4) الامتثال للقوانين واللوائح:
- تضمن التزام الشركة بالأنظمة واللوائح المالية المعمول بها.
- تقلل من احتمالية الغرامات والعقوبات النظامية.

5) تحسين السمعة:
- تعزز سمعة الشركة كشركة ملتزمة بالممارسات الأخلاقية والمسؤولة.
- تزيد من جاذبية الشركة كشريك موثوق للمستثمرين والعملاء والجهات الرقابية.
            `,
            en: `
The importance of financial governance appears through several key benefits:

1) Increased Trust:
- Enhances the confidence of investors, customers, and suppliers in the company.
- Supports the company’s ability to attract investments and financing and to expand operations.

2) Improved Financial Performance:
- Improves the quality of financial decision-making.
- Increases efficiency in resource utilization and reduces financial waste.
- Positively impacts the company’s financial performance and key indicators.

3) Risk Mitigation:
- Helps reduce financial and legal risks facing the company.
- Supports business continuity and protects company assets and shareholders’ rights.

4) Regulatory Compliance:
- Ensures compliance with applicable financial laws and regulations.
- Reduces the likelihood of penalties and regulatory sanctions.

5) Reputation Enhancement:
- Strengthens the company’s reputation as an ethical and responsible organization.
- Increases its attractiveness as a trusted partner for investors, clients, and regulators.
            `
          }
        }

      ]
    },

    /* ============================================
     * FIN-SECTION-02 – أركان الحوكمة المالية الأساسية
     * ============================================ */
    {
      id: "FIN-SECTION-02",
      title: {
        ar: "أركان الحوكمة المالية الأساسية",
        en: "Core Pillars of Financial Governance"
      },
      policies: [

        {
          code: "FIN-003",
          title: {
            ar: "الإعداد المالي",
            en: "Financial Preparation"
          },
          content: {
            ar: `
يشمل الإعداد المالي العناصر التالية:

1) معايير المحاسبة:
- تحدد المعايير المحاسبية كيفية تسجيل المعاملات المالية وإعداد القوائم المالية.
- تهدف إلى ضمان إمكانية مقارنة القوائم المالية بين الشركات المختلفة.
- تعزز الثقة في المعلومات المالية.
- يتم استخدام المعايير المحاسبية المعتمدة في المملكة العربية السعودية لإعداد التقارير المالية.

2) المراجعة الداخلية:
- تقييم فعالية أنظمة الرقابة الداخلية المتعلقة بالعمليات المالية.
- التأكد من دقة البيانات المالية وامتثالها للسياسات والإجراءات المعتمدة.
- تهدف إلى اكتشاف الأخطاء والاحتيال وتقليل فرص حدوثها.
- تساهم في تحسين العمليات المالية ورفع كفاءتها.

3) المراجعة الخارجية:
- إجراء تقييم مستقل للقوائم المالية من قبل مدقق خارجي مستقل.
- التأكد من صحة وسلامة القوائم المالية وامتثالها للمعايير المحاسبية.
- تهدف إلى تعزيز الثقة لدى المساهمين وأصحاب المصلحة في المعلومات المالية المنشورة.
            `,
            en: `
Financial preparation includes the following elements:

1) Accounting Standards:
- Define how financial transactions are recorded and how financial statements are prepared.
- Aim to ensure comparability of financial statements across companies.
- Enhance confidence in financial information.
- Financial reports are prepared in accordance with accounting standards adopted in Saudi Arabia.

2) Internal Audit:
- Assesses the effectiveness of internal controls related to financial operations.
- Ensures the accuracy of financial data and its compliance with approved policies and procedures.
- Aims to detect and reduce errors and fraud.
- Contributes to improving financial processes and increasing their efficiency.

3) External Audit:
- Involves an independent assessment of the financial statements by an external auditor.
- Ensures the accuracy and fairness of financial statements and their compliance with accounting standards.
- Aims to strengthen shareholders’ and stakeholders’ confidence in the published financial information.
            `
          }
        },

        {
          code: "FIN-004",
          title: {
            ar: "الإفصاح المالي",
            en: "Financial Disclosure"
          },
          content: {
            ar: `
يرتكز الإفصاح المالي على عدة مبادئ أساسية:

1) الشفافية:
- الكشف عن جميع المعلومات المالية الجوهرية ذات الأهمية للمستثمرين وأصحاب المصلحة.
- تمكين أصحاب المصلحة من فهم الوضع المالي الحقيقي للشركة.

2) التوقيت:
- الإفصاح عن المعلومات المالية في الوقت المناسب.
- تمكين المستثمرين من الحصول على البيانات اللازمة لاتخاذ قراراتهم الاستثمارية في حينها.

3) الدقة:
- التأكد من أن المعلومات المالية دقيقة وكاملة وغير مضللة.
- تجنب التقديرات غير المبررة أو العبارات التي قد تُفهم بشكل خاطئ.

4) القنوات:
- استخدام قنوات متعددة للإفصاح المالي مثل:
  - القوائم المالية السنوية والربع سنوية.
  - التقارير الإدارية وتقارير مجلس الإدارة.
  - بيانات الصحافة والإعلانات الرسمية.
  - الاجتماعات العامة للمساهمين.
            `,
            en: `
Financial disclosure is based on several key principles:

1) Transparency:
- Disclosing all material financial information relevant to investors and stakeholders.
- Enabling stakeholders to understand the company’s true financial position.

2) Timeliness:
- Providing financial information in a timely manner.
- Allowing investors to obtain the data they need to make their investment decisions when needed.

3) Accuracy:
- Ensuring that financial information is accurate, complete, and not misleading.
- Avoiding unjustified estimates or wording that could be misinterpreted.

4) Channels:
- Using multiple channels for financial disclosure, such as:
  - Annual and quarterly financial statements.
  - Management reports and Board reports.
  - Press releases and official announcements.
  - General meetings of shareholders.
            `
          }
        },

        {
          code: "FIN-005",
          title: {
            ar: "إدارة المخاطر المالية",
            en: "Financial Risk Management"
          },
          content: {
            ar: `
تشمل إدارة المخاطر المالية المراحل التالية:

1) التعرف على المخاطر:
- تحديد جميع المخاطر التي قد تؤثر على الأداء المالي للشركة.
- أمثلة: مخاطر السوق، مخاطر الائتمان، مخاطر التشغيل، مخاطر السيولة.

2) التقييم:
- تقييم كل خطر من حيث احتمالية الحدوث وحجم التأثير.
- ترتيب المخاطر حسب الأولوية بناءً على مستوى الخطورة.

3) السيطرة:
- وضع خطط وسياسات للحد من المخاطر وتقليل آثارها السلبية.
- استخدام استراتيجيات مثل التنويع، التأمين، ووضع حدود ائتمانية.

4) الرصد المستمر:
- مراقبة المخاطر بشكل مستمر.
- تحديث خطط إدارة المخاطر وفقًا للتغيرات في البيئة الداخلية والخارجية للشركة.
            `,
            en: `
Financial risk management includes the following phases:

1) Risk Identification:
- Identifying all risks that may affect the company’s financial performance.
- Examples: market risk, credit risk, operational risk, liquidity risk.

2) Risk Assessment:
- Evaluating each risk in terms of likelihood and impact.
- Prioritizing risks based on their level of severity.

3) Risk Control:
- Developing plans and policies to mitigate risks and minimize their negative impacts.
- Using strategies such as diversification, insurance, and setting credit limits.

4) Continuous Monitoring:
- Continuously monitoring risk levels.
- Updating risk management plans to reflect changes in the company’s internal and external environment.
            `
          }
        },

        {
          code: "FIN-006",
          title: {
            ar: "مكونات أخرى للحوكمة المالية",
            en: "Additional Components of Financial Governance"
          },
          content: {
            ar: `
تشمل الحوكمة المالية كذلك عددًا من المكونات المكملة، من أهمها:

1) مجلس إدارة فعّال:
- يلعب دورًا حيويًا في الرقابة على الأداء المالي للشركة.
- يتخذ القرارات الاستراتيجية ذات الأثر المالي.
- يضمن توافر الموارد اللازمة لتحقيق الأهداف المالية.

2) لجنة مراجعة الحسابات:
- تشرف على العمليات المالية والمحاسبية.
- تراجع القوائم المالية والتقارير ذات الصلة.
- تقيّم أداء المدقق الخارجي واستقلاليته.

3) نظام معلومات مالي قوي:
- يوفر بيانات مالية دقيقة وحديثة لصناع القرار.
- يدعم إعداد التقارير المالية والإدارية.
- يساهم في أتمتة العمليات المالية وتقليل الأخطاء اليدوية.

4) ثقافة الشفافية والمساءلة:
- وجود ثقافة مؤسسية تشجع على الإفصاح والالتزام.
- وضوح المسؤوليات المالية لكل مستوى وظيفي.
- تفعيل قنوات الإبلاغ عن المخالفات المالية.
            `,
            en: `
Financial governance also includes several complementary components, notably:

1) Effective Board of Directors:
- Plays a vital role in overseeing the company’s financial performance.
- Makes strategic decisions with financial impact.
- Ensures that the resources needed to achieve financial objectives are available.

2) Audit Committee:
- Oversees financial and accounting processes.
- Reviews financial statements and related reports.
- Evaluates the external auditor’s performance and independence.

3) Robust Financial Information System:
- Provides accurate and up-to-date financial data to decision-makers.
- Supports the preparation of financial and managerial reports.
- Helps automate financial processes and reduces manual errors.

4) Culture of Transparency and Accountability:
- A corporate culture that encourages disclosure and compliance.
- Clear financial responsibilities at all organizational levels.
- Active channels for reporting financial irregularities.
            `
          }
        }

      ]
    },

    /* ============================================
     * FIN-SECTION-03 – المهام والمسؤوليات حسب الوظائف
     * ============================================ */
    {
      id: "FIN-SECTION-03",
      title: {
        ar: "المهام والمسؤوليات في الحوكمة المالية",
        en: "Roles & Responsibilities in Financial Governance"
      },
      policies: [

        {
          code: "ROLE-BOARD",
          title: {
            ar: "مجلس الإدارة – المهام والمسؤوليات",
            en: "Board of Directors – Roles & Responsibilities"
          },
          content: {
            ar: `
يتحمّل مجلس الإدارة المسؤوليات المالية والرقابية العليا، ومن أبرز مهامه:

- وضع الاستراتيجية المالية:
  - تحديد الأهداف المالية طويلة الأجل للشركة.
  - اعتماد الخطط والاستراتيجيات اللازمة لتحقيق هذه الأهداف.

- المراجعة والإشراف:
  - مراجعة الأداء المالي للشركة بانتظام.
  - التأكد من أن القوائم المالية دقيقة وشفافة وتعرض بصورة عادلة.

- تعيين المدير المالي:
  - تعيين المدير المالي أو من يقوم مقامه.
  - تقييم أدائه وضمان توافر الكفاءات اللازمة في الإدارة المالية.

- تحديد سياسات الحوكمة المالية:
  - اعتماد السياسات المتعلقة بالإفصاح والشفافية وإدارة المخاطر والنزاهة.
  - متابعة تنفيذ هذه السياسات والتأكد من فاعليتها.

- الرقابة على المخاطر:
  - التأكد من وجود نظام متكامل لإدارة المخاطر المالية.
  - الحصول على تقارير دورية حول المخاطر والإجراءات المتخذة لمعالجتها.

- ضمان الامتثال:
  - ضمان التزام الشركة بالقوانين واللوائح المالية المعمول بها.
  - متابعة التقارير الرقابية والجهات التنظيمية ذات العلاقة.

- حماية مصالح المساهمين:
  - تمثيل مصالح جميع المساهمين بشكل عادل.
  - اتخاذ القرارات التي تخدم مصلحة الشركة على المدى الطويل.

- تشكيل لجنة مالية (عند الحاجة):
  - تشكيل لجنة مالية أو لجنة استثمار من أعضاء ذوي خبرة.
  - تكليفها بمراجعة المسائل المالية المعقدة وتقديم التوصيات للمجلس.

- تعيين مدقق خارجي مستقل:
  - اختيار وتعيين المدقق الخارجي المستقل.
  - تحديد نطاق عمله وتقييم أدائه بشكل دوري.

- توفير التدريب:
  - توفير التدريب والبرامج التأهيلية لأعضاء المجلس حول القضايا المالية والحوكمة.

- التواصل مع المستثمرين:
  - التواصل المنتظم مع المستثمرين وأصحاب المصلحة.
  - الإجابة على استفساراتهم وتزويدهم بالمعلومات المالية اللازمة.
            `,
            en: `
The Board of Directors bears the highest financial and oversight responsibilities. Key duties include:

- Setting Financial Strategy:
  - Defining the company’s long-term financial objectives.
  - Approving plans and strategies required to achieve these objectives.

- Review and Oversight:
  - Regularly reviewing the company’s financial performance.
  - Ensuring that financial statements are accurate, transparent, and fairly presented.

- Appointment of the CFO:
  - Appointing the Chief Financial Officer or equivalent.
  - Evaluating the CFO’s performance and ensuring that the finance function has the required competencies.

- Defining Financial Governance Policies:
  - Approving policies related to disclosure, transparency, risk management, and integrity.
  - Monitoring the implementation of these policies and ensuring their effectiveness.

- Risk Oversight:
  - Ensuring the existence of a comprehensive financial risk management system.
  - Receiving periodic reports on risks and the actions taken to address them.

- Compliance Assurance:
  - Ensuring the company’s compliance with applicable financial laws and regulations.
  - Following up on reports from regulators and supervisory bodies.

- Protecting Shareholders’ Interests:
  - Fairly representing the interests of all shareholders.
  - Making decisions that serve the long-term interests of the company.

- Establishing a Finance Committee (when needed):
  - Forming a finance or investment committee composed of experienced members.
  - Assigning it to review complex financial matters and provide recommendations to the Board.

- Appointment of an Independent External Auditor:
  - Selecting and appointing an independent external auditor.
  - Defining the audit scope and periodically evaluating the auditor’s performance.

- Training:
  - Providing training and development programs for Board members on financial and governance issues.

- Investor Communication:
  - Maintaining regular communication with investors and stakeholders.
  - Responding to their inquiries and providing necessary financial information.
            `
          }
        },

        {
          code: "ROLE-AUDIT-COMMITTEE",
          title: {
            ar: "لجنة المراجعة – المهام والمسؤوليات",
            en: "Audit Committee – Roles & Responsibilities"
          },
          content: {
            ar: `
تضطلع لجنة المراجعة بدور رئيسي في دعم الحوكمة المالية، وتشمل مهامها:

- ضمان دقة القوائم المالية:
  - التأكد من أن القوائم المالية تعكس الحقيقة المالية للشركة بشكل عادل ودقيق.
  - مراجعة السياسات المحاسبية المستخدمة وتقييم مدى ملاءمتها.

- تعزيز الرقابة الداخلية:
  - تقييم فعالية نظام الرقابة الداخلية المتعلق بالعمليات المالية.
  - التأكد من كفاءة النظام في منع الاحتيال والخطأ.

- تقييم أداء المدقق الخارجي:
  - تقييم استقلالية وكفاءة المدقق الخارجي.
  - التوصية لمجلس الإدارة بتجديد التعاقد أو تغييره.

- الإشراف على الإبلاغ المالي:
  - متابعة عملية إعداد التقارير المالية الدورية.
  - التأكد من أن الإبلاغ المالي يتم بشكل منتظم وشفاف.

- تعزيز الامتثال:
  - ضمان امتثال الشركة للقوانين واللوائح المالية المعمول بها.
  - مراجعة أي ملاحظات صادرة عن الجهات الرقابية.

- مراجعة القوائم المالية:
  - مراجعة القوائم المالية السنوية والربع سنوية قبل عرضها على المجلس.
  - مناقشة أي بنود جوهرية أو تقديرات محاسبية هامة.

- تقييم نظام الرقابة الداخلية:
  - مراجعة تقارير المراجعة الداخلية.
  - متابعة تنفيذ التوصيات المتعلقة بتحسين الرقابة.

- اختيار المدقق الخارجي:
  - المشاركة في عملية اختيار المدقق الخارجي.
  - دراسة عروض المدققين والتوصية بالمفاضلة بينهم.

- مناقشة القضايا المالية الهامة:
  - مناقشة المخاطر المالية الكبيرة والتغيرات في المعايير أو السياسات المحاسبية مع الإدارة.
  - متابعة تأثير هذه التغيرات على القوائم المالية.

- الإبلاغ إلى مجلس الإدارة:
  - تقديم تقارير دورية إلى مجلس الإدارة حول نتائج أعمال اللجنة.
  - رفع التوصيات اللازمة لمعالجة أية ملاحظات أو مخاطر.
            `,
            en: `
The Audit Committee plays a key role in supporting financial governance. Its responsibilities include:

- Ensuring the Accuracy of Financial Statements:
  - Ensuring that the financial statements fairly and accurately reflect the company’s financial position.
  - Reviewing accounting policies and assessing their appropriateness.

- Enhancing Internal Control:
  - Evaluating the effectiveness of the internal control system related to financial operations.
  - Ensuring that controls are sufficient to prevent fraud and error.

- Evaluating External Auditor Performance:
  - Assessing the independence and effectiveness of the external auditor.
  - Recommending to the Board whether to renew or change the audit appointment.

- Overseeing Financial Reporting:
  - Monitoring the preparation of periodic financial reports.
  - Ensuring that financial reporting is regular and transparent.

- Promoting Compliance:
  - Ensuring the company’s compliance with applicable financial laws and regulations.
  - Reviewing observations from regulators and supervisory authorities.

- Reviewing Financial Statements:
  - Reviewing annual and quarterly financial statements before submission to the Board.
  - Discussing material items and key accounting estimates.

- Assessing Internal Control System:
  - Reviewing internal audit reports.
  - Following up on the implementation of recommendations to improve controls.

- Selecting the External Auditor:
  - Participating in the process of selecting the external auditor.
  - Reviewing proposals and recommending the preferred candidate.

- Discussing Important Financial Matters:
  - Discussing major financial risks and changes in accounting standards or policies with management.
  - Following up on the impact of such changes on the financial statements.

- Reporting to the Board:
  - Submitting periodic reports to the Board on the Committee’s work.
  - Raising recommendations to address any identified issues or risks.
            `
          }
        },

        {
          code: "ROLE-CFO",
          title: {
            ar: "المدير المالي – المهام والمسؤوليات والمهارات",
            en: "Chief Financial Officer (CFO) – Roles & Skills"
          },
          content: {
            ar: `
يتولى المدير المالي قيادة الإدارة المالية ومسؤوليات الحوكمة المالية التنفيذية، ومن مهامه:

- الرؤية الاستراتيجية:
  - وضع الرؤية المالية طويلة الأجل للشركة.
  - تحديد الأهداف المالية وتطوير الاستراتيجيات المناسبة لتحقيقها.

- إدارة المخاطر:
  - تقييم المخاطر المالية التي تواجه الشركة.
  - وضع خطط لإدارة المخاطر وتقليل آثارها السلبية.

- العلاقات مع المستثمرين:
  - التواصل مع المستثمرين وأصحاب المصلحة الماليين.
  - تقديم تقارير مالية دقيقة وفي الوقت المناسب.
  - الإجابة على استفساراتهم المتعلقة بالأداء المالي.

- التمويل:
  - البحث عن مصادر تمويل جديدة للشركة.
  - إدارة العلاقات مع البنوك والمؤسسات المالية.
  - التفاوض حول شروط التمويل واتفاقيات القروض.

- القرارات الاستثمارية:
  - دراسة الفرص الاستثمارية الاستراتيجية.
  - تقديم التوصيات للإدارة العليا ومجلس الإدارة.
  - متابعة تنفيذ القرارات الاستثمارية المعتمدة.

- القيادة:
  - قيادة فريق العمل المالي وتوزيع المهام.
  - تطوير قدرات الفريق وبناء الكفاءات المالية داخل الشركة.

المهارات المطلوبة للمدير المالي:
- فهم عميق للمبادئ المالية والمحاسبية.
- مهارات تحليلية قوية وقدرة على بناء النماذج المالية.
- مهارات قوية في اتخاذ القرار في بيئات معقدة.
- مهارات قيادية وتواصل ممتازة مع الأطراف الداخلية والخارجية.
- معرفة واسعة بأسواق المال والمنتجات المالية.
            `,
            en: `
The Chief Financial Officer leads the finance function and holds executive responsibility for financial governance. Key duties include:

- Strategic Vision:
  - Setting the company’s long-term financial vision.
  - Defining financial objectives and developing strategies to achieve them.

- Risk Management:
  - Assessing financial risks facing the company.
  - Developing plans to manage risks and reduce their negative impacts.

- Investor Relations:
  - Communicating with investors and financial stakeholders.
  - Providing accurate and timely financial reports.
  - Responding to inquiries regarding financial performance.

- Financing:
  - Identifying new financing sources for the company.
  - Managing relationships with banks and financial institutions.
  - Negotiating financing terms and loan agreements.

- Investment Decisions:
  - Assessing strategic investment opportunities.
  - Providing recommendations to senior management and the Board.
  - Overseeing the implementation of approved investment decisions.

- Leadership:
  - Leading the finance team and assigning responsibilities.
  - Developing internal capabilities and building financial competencies.

Required skills for the CFO:
- Deep understanding of financial and accounting principles.
- Strong analytical skills and capability to build financial models.
- Strong decision-making skills in complex environments.
- Excellent leadership and communication skills with internal and external parties.
- Broad knowledge of capital markets and financial products.
            `
          }
        },

        {
          code: "ROLE-GENERAL-ACCOUNTANT",
          title: {
            ar: "المحاسب العام – المهام والمسؤوليات والمهارات",
            en: "General Accountant – Roles & Skills"
          },
          content: {
            ar: `
المحاسب العام مسؤول عن التسجيل المحاسبي اليومي وإعداد التقارير الأساسية، وتشمل مهامه:

- إعداد القوائم المالية:
  - إعداد القوائم المالية الشهرية والسنوية وفقًا للمعايير المحاسبية المعتمدة.
  - التأكد من دقة عرض الأصول والالتزامات وحقوق الملكية والإيرادات والمصروفات.

- إدارة الحسابات:
  - الإشراف على عمليات تسجيل المعاملات المالية.
  - ضمان دقة السجلات المحاسبية ومطابقتها للمستندات المؤيدة.

- الميزانية:
  - المشاركة في إعداد الميزانية السنوية.
  - متابعة الإنفاق الفعلي ومقارنته بالموازنات المعتمدة.

- الضرائب:
  - المساعدة في إعداد الإقرارات الضريبية للشركة.
  - توفير البيانات اللازمة لمستشار الضرائب أو أخصائي الضرائب.

- الرقابة الداخلية:
  - تطبيق الإجراءات المحاسبية المعتمدة.
  - المساهمة في تطوير وتنفيذ نظام رقابي داخلي قوي على المعاملات المالية.

المهارات المطلوبة:
- خبرة في تطبيق المعايير المحاسبية المعتمدة.
- مهارات تنظيمية عالية والقدرة على إدارة الأولويات.
- القدرة على العمل تحت الضغط والالتزام بالمواعيد النهائية.
- معرفة جيدة ببرامج المحاسبة والأنظمة المالية.
            `,
            en: `
The General Accountant is responsible for daily accounting entries and basic reporting. Main duties include:

- Preparing Financial Statements:
  - Preparing monthly and annual financial statements in accordance with applicable accounting standards.
  - Ensuring proper presentation of assets, liabilities, equity, revenues, and expenses.

- Accounts Management:
  - Overseeing the recording of financial transactions.
  - Ensuring the accuracy of accounting records and their alignment with supporting documents.

- Budgeting:
  - Participating in the preparation of the annual budget.
  - Monitoring actual expenditures and comparing them with approved budgets.

- Taxes:
  - Assisting in the preparation of the company’s tax returns.
  - Providing required data to the tax advisor or Tax Specialist.

- Internal Control:
  - Applying approved accounting procedures.
  - Contributing to the development and implementation of strong internal controls over financial transactions.

Required skills:
- Experience in applying recognized accounting standards.
- Strong organizational skills and the ability to manage priorities.
- Ability to work under pressure and meet deadlines.
- Good knowledge of accounting software and financial systems.
            `
          }
        },

        {
          code: "ROLE-FINANCIAL-ANALYST",
          title: {
            ar: "المحلل المالي – المهام والمسؤوليات والمهارات",
            en: "Financial Analyst – Roles & Skills"
          },
          content: {
            ar: `
المحلل المالي يدعم عملية اتخاذ القرار من خلال التحليل المالي والتشغيلي، ومن مهامه:

- تحليل البيانات:
  - تحليل البيانات المالية والتشغيلية لتحديد الاتجاهات والأنماط.
  - قياس الربحية والكفاءة والسيولة وغيرها من المؤشرات المالية.

- تقييم الاستثمارات:
  - دراسة فرص الاستثمار الجديدة.
  - إعداد دراسات جدوى وتقديم التوصيات بشأن الجدوى الاقتصادية.

- تحليل التكاليف:
  - تحليل بنود التكاليف المختلفة.
  - تحديد فرص التوفير ورفع كفاءة الإنفاق.

- إعداد التقارير:
  - إعداد تقارير مالية وتحليلية دورية للإدارة.
  - توضيح النتائج المالية وشرح الفروقات عن الموازنات.

- النمذجة المالية:
  - بناء نماذج مالية لتقييم سيناريوهات مختلفة.
  - دعم التخطيط المالي متوسط وطويل الأجل.

المهارات المطلوبة:
- مهارات تحليلية قوية والقدرة على التعامل مع كميات كبيرة من البيانات.
- إتقان برامج التحليل المالي مثل Excel وأدوات النمذجة.
- مهارات ممتازة في إعداد وتقديم العروض.
- فهم جيد للمبادئ الاقتصادية والمالية.
            `,
            en: `
The Financial Analyst supports decision-making through financial and operational analysis. Main duties include:

- Data Analysis:
  - Analyzing financial and operational data to identify trends and patterns.
  - Measuring profitability, efficiency, liquidity, and other financial indicators.

- Investment Evaluation:
  - Assessing new investment opportunities.
  - Preparing feasibility studies and recommending economically viable projects.

- Cost Analysis:
  - Analyzing different cost components.
  - Identifying cost-saving opportunities and improving spending efficiency.

- Reporting:
  - Preparing periodic financial and analytical reports for management.
  - Explaining financial results and variances from budgets.

- Financial Modeling:
  - Building financial models to assess different scenarios.
  - Supporting medium- and long-term financial planning.

Required skills:
- Strong analytical skills and ability to handle large volumes of data.
- Proficiency in financial analysis tools such as Excel and modeling tools.
- Excellent presentation and reporting skills.
- Good understanding of economic and financial principles.
            `
          }
        },

        {
          code: "ROLE-INTERNAL-AUDITOR",
          title: {
            ar: "المدقق الداخلي – المهام والمسؤوليات والمهارات",
            en: "Internal Auditor – Roles & Skills"
          },
          content: {
            ar: `
المدقق الداخلي جزء أساسي من منظومة الحوكمة المالية، وتشمل مهامه:

- التدقيق الداخلي:
  - إجراء عمليات تدقيق داخلية على العمليات المالية والإدارية.
  - التأكد من امتثال العمليات للسياسات والإجراءات المعتمدة.

- تقييم المخاطر:
  - تقييم المخاطر المالية والتشغيلية ذات الصلة.
  - اقتراح ضوابط جديدة أو تعديل القائم منها عند الحاجة.

- تقديم التوصيات:
  - تقديم توصيات لتحسين الرقابة الداخلية وكفاءة العمليات.
  - متابعة تنفيذ التوصيات مع الإدارات المعنية.

- تحقيق المخالفات:
  - التحقيق في أي مخالفات مالية أو شبهات احتيال.
  - توثيق النتائج ورفعها إلى لجنة المراجعة أو الإدارة العليا حسب السياسة المعتمدة.

المهارات المطلوبة:
- معرفة بمعايير التدقيق الداخلي والمخاطر والرقابة.
- مهارات تحليلية قوية وقدرة على قراءة وفهم القوائم المالية.
- القدرة على العمل بشكل مستقل ومحايد.
- معرفة بالقوانين واللوائح ذات الصلة بالقطاع الذي تعمل فيه الشركة.
            `,
            en: `
The Internal Auditor is a core element of financial governance. Key duties include:

- Internal Auditing:
  - Conducting internal audits on financial and administrative processes.
  - Ensuring operations comply with approved policies and procedures.

- Risk Assessment:
  - Evaluating relevant financial and operational risks.
  - Proposing new controls or adjustments to existing ones when needed.

- Recommendations:
  - Providing recommendations to improve internal controls and process efficiency.
  - Following up on the implementation of recommendations with relevant departments.

- Investigating Irregularities:
  - Investigating financial irregularities or suspected fraud.
  - Documenting findings and reporting them to the Audit Committee or senior management as per policy.

Required skills:
- Knowledge of internal auditing, risk, and control standards.
- Strong analytical skills and the ability to read and interpret financial statements.
- Ability to work independently and objectively.
- Knowledge of laws and regulations relevant to the company’s sector.
            `
          }
        },

        {
          code: "ROLE-TAX-SPECIALIST",
          title: {
            ar: "أخصائي الضرائب – المهام والمسؤوليات والمهارات",
            en: "Tax Specialist – Roles & Skills"
          },
          content: {
            ar: `
أخصائي الضرائب مسؤول عن الالتزام الضريبي والتخطيط الضريبي للشركة، وتشمل مهامه:

- الإقرارات الضريبية:
  - إعداد الإقرارات الضريبية للشركة وفق الأنظمة المعمول بها.
  - التأكد من دقة البيانات المقدمة للجهات الضريبية.

- التخطيط الضريبي:
  - تطوير استراتيجيات تخطيط ضريبي تستفيد من الإعفاءات والحوافز النظامية.
  - المساهمة في هيكلة الصفقات بما يقلل الالتزامات الضريبية ضمن الإطار النظامي.

- متابعة التغيرات التشريعية:
  - متابعة التعديلات في قوانين وأنظمة الضرائب.
  - تحليل تأثيرها على الشركة ورفع التوصيات للإدارة.

- التعامل مع الجهات الضريبية:
  - الرد على استفسارات الجهات الضريبية.
  - معالجة أي ملاحظات أو خلافات ضريبية.
  - تمثيل الشركة في الفحص الضريبي عند الحاجة.

المهارات المطلوبة:
- معرفة عميقة بقوانين وأنظمة الضرائب المعمول بها.
- مهارات تحليلية قوية والقدرة على تفسير النصوص النظامية.
- القدرة على التعامل مع الأرقام بدقة عالية.
- مهارات تواصل فعّالة مع الجهات الداخلية والخارجية.
            `,
            en: `
The Tax Specialist is responsible for tax compliance and planning. Main duties include:

- Tax Returns:
  - Preparing the company’s tax returns in accordance with applicable regulations.
  - Ensuring the accuracy of data submitted to tax authorities.

- Tax Planning:
  - Developing tax planning strategies that leverage available exemptions and incentives.
  - Supporting the structuring of transactions to minimize tax liabilities within legal boundaries.

- Monitoring Legislative Changes:
  - Tracking changes in tax laws and regulations.
  - Analyzing their impact on the company and recommending necessary actions.

- Dealing with Tax Authorities:
  - Responding to inquiries from tax authorities.
  - Handling any tax comments or disputes.
  - Representing the company in tax audits when required.

Required skills:
- Deep knowledge of applicable tax laws and regulations.
- Strong analytical skills and ability to interpret legal texts.
- High accuracy in working with numbers.
- Effective communication skills with internal and external stakeholders.
            `
          }
        }

      ]
    }

  ]
};

// --- 5. حوكمة المجلس (مقتطف للتشغيل - من board_governance.js) ---
const governanceTexts = [
  {
   id: "governance_structure",
    category: "governance",
    title: {
      ar: "هيكلة الشركة وحوكمتها",
      en: "Company Structure and Governance"
    },
    content: {
      ar: `
هيكلة الشركة وحوكمتها تهدف إلى تنظيم الصلاحيات والعلاقات بين المساهمين، مجلس الإدارة، اللجان المنبثقة، والإدارة التنفيذية، بما يضمن وضوح المسؤوليات، وسلامة القرارات، وحماية حقوق جميع الأطراف ذات العلاقة، وفقًا لأفضل ممارسات الحوكمة والأنظمة المعمول بها في المملكة العربية السعودية.
      `.trim(),
      en: `
The company’s structure and governance framework aim to organize the authorities and relationships between shareholders, the Board of Directors, board committees, and executive management, in a way that ensures clarity of responsibilities, sound decision-making, and protection of the rights of all stakeholders, in line with best corporate governance practices and applicable laws in the Kingdom of Saudi Arabia.
      `.trim()
    }
  },

  {
    id: "organizational_structure_intro",
    category: "governance",
    title: {
      ar: "الهيكل التنظيمي",
      en: "Organizational Structure"
    },
    content: {
      ar: `
الهيكل التنظيمي هو الخارطة التي تحدد العلاقات بين مختلف الوظائف والأقسام داخل المنظمة، ويحدد مسارات اتخاذ القرار وسلاسل القيادة. وهو بمثابة الهيكل الذي يدعم عمل المنظمة ويضمن سير العمل بسلاسة وكفاءة.

تم تقسيم الهيكل التنظيمي إلى أربعة أقسام رئيسية، بما يحقق وضوح خطوط السلطة، وتوزيع المهام، وتحديد المسؤوليات، ودعم كفاءة الرقابة والإشراف.
      `.trim(),
      en: `
The organizational structure represents the map that defines the relationships between the various functions and departments within the organization, as well as the decision-making paths and lines of authority. It is the framework that supports the organization’s operations and ensures that work flows smoothly and efficiently.

The organizational structure is divided into four main sections to clarify lines of authority, distribute tasks, define responsibilities, and support effective supervision and control.
      `.trim()
    }
  },

  {
    id: "board_role_intro",
    category: "board",
    title: {
      ar: "مجلس الإدارة – مقدمة",
      en: "Board of Directors – Introduction"
    },
    content: {
      ar: `
تقع على عاتق مجلس الإدارة مسؤولية أساسية لتعزيز نجاح الشركة على المدى القصير والبعيد بما يتفق مع مسؤولية المجلس تجاه المساهمين في الشركة والحكومة والجهات الرقابية والموظفين والجهات المعنية الأخرى.

يعد المجلس هيئة حاكمة تعمل بكامل صلاحياتها، ودوره ائتماني ويتضمن عددًا كبيرًا من المهام والمسؤوليات، بما في ذلك التخطيط الاستراتيجي، وإدارة المخاطر، والإشراف الإداري، وتنفيذ ضوابط الرقابة الداخلية، وتعزيز أخلاقيات وقيم الشركة.

كما أن المجلس مناط به مسؤولية الإشراف على كيفية إجراء الأعمال، ومن خلال الرئيس التنفيذي يتم وضع المعايير والإجراءات السلوكية اللازمة للقيام بأعمال الشركة.
      `.trim(),
      en: `
The Board of Directors bears a fundamental responsibility to enhance the company’s success in the short and long term, in line with its duties toward shareholders, regulators, employees, and other stakeholders.

The Board is the primary governing body with full authority. It has a fiduciary role that includes a wide range of responsibilities, such as strategic planning, risk management, oversight of management, implementation of internal control systems, and promoting the company’s values and ethics.

The Board is also responsible for overseeing how business is conducted and, through the CEO, for setting the behavioral standards and procedures that govern the company’s operations.
      `.trim()
    }
  },

  {
    id: "board_general_provisions",
    category: "board",
    title: {
      ar: "مجلس الإدارة – أحكام عامة",
      en: "Board – General Provisions"
    },
    content: {
      ar: `
ينظم دليل عمل مجلس الإدارة ما يلي:
- صلاحيات المجلس.
- حقوق وواجبات ومسؤوليات المجلس وأعضائه.
- تكوين المجلس.
- مدة عضوية أعضاء مجلس الإدارة.
- إجراءات انتخاب أعضاء مجلس الإدارة، بما في ذلك ترشيحهم.
- إجراءات عمل المجلس وعلاقته بالجهات النظامية المختصة.
- هيكل المجلس بما في ذلك اللجان المنبثقة عنه.
- مسؤولية عضو مجلس الإدارة.
- مكافآت المجلس.
- إجراءات عزل أعضاء المجلس قبل انتهاء مدة عضويتهم.

على المجلس العمل وفقًا للقانون والنظام الأساس ولوائح الشركة الداخلية. ويعمل المجلس كأمين على الشركة، ولديه الصلاحية النظامية والالتزام لإدارة شؤون الشركة وأعمالها.

مع أن الهدف الأساسي للمجلس هو العمل بما يخدم مصلحة الشركة على أفضل وجه، إلا أن المجلس مسؤول أيضًا عن ضمان الانسجام بين توقعات المساهمين وخطط الشركة وأداء الإدارة.

لا يعفي تفويض المجلس لأي لجنة من اللجان من المسؤولية الكاملة للمجلس عن أعمال تلك اللجنة وقراراتها.
      `.trim(),
      en: `
The Board Manual regulates, among other things:
- The powers of the Board.
- The rights, duties, and responsibilities of the Board and its members.
- The composition of the Board.
- The term of office of Board members.
- Procedures for nominating and electing Board members.
- The Board’s working procedures and its relationship with relevant regulatory authorities.
- The Board’s structure, including its committees.
- Board member liability.
- Board remuneration.
- Procedures for removing Board members before the end of their term.

The Board must act in accordance with applicable laws, the company’s Articles of Association, and internal policies. It acts as a trustee of the company and has the legal authority and obligation to manage its affairs.

While the Board’s primary objective is to act in the best interests of the company, it is also responsible for ensuring alignment between shareholder expectations and the company’s plans and management performance.

Delegating responsibilities to Board committees does not relieve the Board from overall responsibility for the actions and decisions of those committees.
      `.trim()
    }
  },

  {
    id: "board_appointment",
    category: "board",
    title: {
      ar: "تعيين أعضاء مجلس الإدارة",
      en: "Appointment of Board Members"
    },
    content: {
      ar: `
- يجب أن يتكون مجلس الإدارة من ثلاثة (3) أعضاء على الأقل وما لا يزيد عن أربعة (4) أعضاء، وفقًا لما يرد في النظام الأساس للشركة.
- يجب أن تكون غالبية أعضاء المجلس من الأعضاء غير التنفيذيين.
- تنتخب الجمعية العامة أعضاء مجلس الإدارة لمدة لا تتجاوز ثلاث سنوات، ويجوز إعادة انتخابهم ما لم ينص النظام الأساس على غير ذلك.
- يشترط ألا يشغل عضو مجلس الإدارة عضوية مجلس إدارة أكثر من عشر شركات مساهمة في آن واحد.
- على الشركة إشعار الجهة المختصة بأسماء أعضاء مجلس الإدارة وصفات عضويتهم خلال عشرة أيام عمل من تاريخ بدء دورة المجلس أو من تاريخ تعيينهم، وأي تغييرات تطرأ على عضويتهم خلال عشرة أيام عمل من تاريخ حدوث التغييرات.
- يراعى في المرشحين الإنجازات التي حققوها في مسيرتهم المهنية، ومدى إلمامهم بالأهداف والخطط والسياسات التشغيلية والمالية الأساسية للشركة، ووضعها المالي، وقطاعات أعمالها، ومكانتها بين منافسيها.
- يجب أن يكون العضو ملماً بالسياسات والتعهدات المتبعة في الشركة، وقابلاً للالتزام بها، مع المحافظة التامة على سرية المعلومات حمايةً لمصالح المساهمين والشركة.
      `.trim(),
      en: `
- The Board must consist of at least three (3) and no more than four (4) members, as set out in the company’s Articles of Association.
- The majority of Board members must be non-executive.
- Board members are elected by the General Assembly for a term not exceeding three years and may be re-elected unless otherwise provided in the Articles of Association.
- A Board member may not serve on the boards of more than ten joint stock companies at the same time.
- The company must notify the competent authority of the names and membership categories of Board members within ten (10) business days from the start of the Board’s term or from their appointment date, and of any changes within ten (10) business days of their occurrence.
- Candidates’ past achievements, understanding of the company’s objectives, plans, and financial and operational policies, as well as its financial position, business segments, and competitive standing, should be considered.
- Each member must be familiar with and committed to the company’s policies and undertakings and must fully respect the confidentiality of information to protect the interests of shareholders and the company.
      `.trim()
    }
  },

  {
    id: "board_composition",
    category: "board",
    title: {
      ar: "تشكيل مجلس الإدارة",
      en: "Board Composition"
    },
    content: {
      ar: `
يحرص مجلس الإدارة على تسيير الأمور بأسلوب مبني على القيم والأخلاقيات السامية، وبما يضمن الوصول إلى قرارات سليمة تحفظ حقوق المساهمين وتضمن الشفافية وتحمل المسؤولية. ويتكون المجلس من أعضاء ذوي تخصصات متنوعة تشمل التخطيط الاستراتيجي، الإدارة، المحاسبة، القانون، التسويق، الحوكمة، الموارد البشرية، إدارة المخاطر، والاندماج والاستحواذ، ومن لديهم دراية بالمعلومات المحلية والعالمية المرتبطة بمجالات عمل الشركة.

بالإضافة إلى ذلك يجب أن يتمتع كل عضو بالصفات التالية:
- القدرة على اتخاذ قرارات حكيمة ومتوافقة مع قيم وأخلاقيات الشركة.
- سمعة حسنة وعدم صدور حكم عليه في جريمة مخلة بالشرف أو الأمانة.
- القدرة على تخصيص الوقت والجهد اللازمين لخدمة مصلحة الشركة.
- امتلاك الخبرة المناسبة في المجالات ذات الصلة.
- الاستعداد لتمديد فترة العضوية إذا تطلب الأمر.

كما تلتزم الشركة فيما يتعلق بتكوين المجلس بما يلي:
- ألا يقل عدد أعضاء المجلس عن ثلاثة (3) أعضاء.
- تعيين أعضاء المجلس من قبل الجمعية العامة لمدة لا تتجاوز ثلاث (3) سنوات، مع جواز أن تكون مدة أول مجلس إدارة خمس (5) سنوات كحد أقصى.
- أن تكون أغلبية أعضاء المجلس من الأعضاء غير التنفيذيين.
- ألا يقل عدد الأعضاء المستقلين عن عضوين أو ثلث المجلس أيهما أعلى.
- عدم الجمع بين منصب رئيس مجلس الإدارة وأي منصب تنفيذي مثل العضو المنتدب أو الرئيس التنفيذي أو المدير العام.
- بيان كيفية انتهاء عضوية المجلس في النظام الأساس، ومعالجة شغور المقاعد وآلية تعيين الأعضاء البدلاء وعرض ذلك على الجمعية العامة.
- عدم جواز شغل عضو مجلس الإدارة عضوية أكثر من خمس شركات مساهمة – وفق السياسة المعتمدة – في آن واحد.
- عدم جواز تصويت الشخص ذي الصفة الاعتبارية – الذي يعيّن ممثلين له في المجلس – على اختيار الأعضاء الآخرين.
      `.trim(),
      en: `
The Board seeks to conduct its affairs based on high ethical standards and values, ensuring sound decisions that protect shareholders’ rights, promote transparency, and strengthen accountability. It is composed of members with diverse expertise in areas such as strategic planning, management, accounting, law, marketing, governance, HR, risk management, and mergers and acquisitions, as well as knowledge of local and global developments relevant to the company’s activities.

Each member should:
- Be capable of making sound decisions aligned with the company’s values and ethics.
- Have a good reputation and no prior conviction for dishonesty or breach of trust.
- Be able to dedicate sufficient time and effort to serve the company’s interests.
- Possess suitable experience in relevant fields.
- Be willing to extend his or her term if required.

The company also complies with the following in terms of Board composition:
- The Board must have at least three (3) members.
- Board members are appointed by the General Assembly for a term not exceeding three (3) years, with the first Board allowed a term of up to five (5) years.
- The majority of members must be non-executive.
- The number of independent members must be at least two or one-third of the Board, whichever is greater.
- The Chairman may not combine his position with any executive role such as Managing Director, CEO, or General Manager.
- The Articles of Association must set out how Board membership terminates, how vacancies are filled, and how replacements are presented to the General Assembly.
- A Board member may not serve on more than a limited number of other boards as per the company’s policy.
- A legal entity that appoints representatives to the Board may not vote on the election of other Board members.
      `.trim()
    }
  },

  {
    id: "board_membership_requirements",
    category: "board",
    title: {
      ar: "شروط عضوية مجلس الإدارة",
      en: "Board Membership Requirements"
    },
    content: {
      ar: `
يشترط أن يكون عضو مجلس الإدارة من ذوي الكفاية المهنية ممن تتوافر فيهم الخبرة والمعرفة والمهارة والاستقلال اللازم، بما يمكنه من ممارسة مهامه بكفاءة واقتدار، ويتعين أن يتوافر فيه على وجه الخصوص ما يأتي:
- القدرة على القيادة: التمتع بمهارات قيادية تؤهله لمنح الصلاحيات وتحفيز الأداء وتطبيق أفضل الممارسات الإدارية وبث القيم والأخلاق المهنية.
- الكفاءة: توافر المؤهلات العلمية، والمهارات المهنية والشخصية المناسبة، ومستوى التدريب والخبرات العملية ذات الصلة بأنشطة الشركة أو بالإدارة أو الاقتصاد أو المحاسبة أو القانون أو الحوكمة، مع الرغبة في التعلم والتدريب.
- القدرة على التوجيه: امتلاك القدرات الفنية والقيادية والإدارية وسرعة اتخاذ القرار واستيعاب المتطلبات الفنية لسير العمل، والقدرة على التوجيه الاستراتيجي والتخطيط والرؤية المستقبلية.
- المعرفة المالية: القدرة على قراءة البيانات والتقارير المالية وفهمها.
- اللياقة الصحية: ألا يكون لديه مانع صحي يعوق أداء مهامه.

كما يتعين:
- تمتع الأعضاء بالحياد والاستقلالية.
- إفصاح الأعضاء عن أي تغييرات جوهرية في ظروفهم أو تعارض مصالح قد يؤثر على استقلاليتهم.
- إبلاغ رئيس المجلس ولجنة الحوكمة الإدارية مسبقًا عند قبول عضوية مجلس إدارة شركة أخرى.
- الانضمام إلى اللجان المنبثقة عن المجلس وفق التخصص والملاءمة، مع إمكانية تدوير العضوية بين اللجان.
- الالتزام بأحكام تعارض المصالح، وعدم المشاركة في أعمال تنافس الشركة أو إبرام عقود لحسابه دون ترخيص من الجمعية العامة المتجدِّد سنويًا.
- عدم حصول العضو على قروض أو ضمانات من الشركة، باستثناء ما تسمح به الأنظمة الخاصة بالمؤسسات المالية.
      `.trim(),
      en: `
A Board member must possess the professional competence, experience, knowledge, skills, and independence required to perform his duties effectively. In particular, he or she should:
- Demonstrate leadership skills that enable the delegation of authority, performance motivation, and the promotion of ethical values and best management practices.
- Have appropriate academic qualifications and professional and personal skills, as well as relevant training and practical experience in the company’s activities, management, economics, accounting, law, or governance, with a genuine desire for continuous learning.
- Be capable of providing guidance, making timely decisions, understanding technical requirements, and contributing to strategic direction and planning.
- Be financially literate and able to read and understand financial statements and reports.
- Be medically fit and not prevented by health conditions from performing his duties.

In addition:
- Members must maintain neutrality and independence.
- Members must disclose any material changes in their circumstances or conflicts of interest that may affect their independence.
- Members must notify the Chairman and the governance committee before accepting directorships in other companies.
- Members are expected to serve on Board committees according to their expertise, and the Board may rotate committee assignments.
- Members must comply with conflict-of-interest rules, including not engaging in competing activities or entering into contracts with the company for their own benefit without a renewed annual authorization from the General Assembly.
- Members may not receive loans or guarantees from the company except as permitted for financial institutions under applicable regulations.
      `.trim()
    }
  },

  {
    id: "board_candidate_qualifications",
    category: "board",
    title: {
      ar: "المؤهلات المطلوبة من المرشحين لعضوية المجلس",
      en: "Required Qualifications for Board Candidates"
    },
    content: {
      ar: `
يجوز لأي مساهم يأنس في نفسه الكفاءة ويحقق الحد الأدنى من الشروط التالية أن يرشح نفسه لعضوية مجلس الإدارة:
- ألا يكون قد أُدين بجريمة مخلة بالشرف أو الأمانة.
- أن يكون لديه الوقت الكافي للمشاركة الفاعلة في أعمال المجلس ولجانه.
- تقديم بيان بالشركات أو المؤسسات التي يشارك في إدارتها أو يملك فيها حصصًا وتمارس أعمالًا شبيهة بأعمال الشركة أو لها عقود أو مصالح معها، مع بيان ما يملكه من أسهم أو أدوات دين في تلك الشركات له أو لتابعيه.
- تقديم إخطار بالترشيح لعضوية المجلس، مع السيرة الذاتية والمؤهلات والخبرات.
- تقديم بيان بعدد وتواريخ مجالس إدارات الشركات المساهمة التي تولى عضويتها، وفق متطلبات الجهة المختصة.
- التركيز على توافر الأعضاء غير التنفيذيين والمستقلين.
- تقديم طلب الترشيح قبل موعد انعقاد الجمعية العامة بخمسة وأربعين (45) يومًا على الأقل.
- إذا كان المرشح قد شغل عضوية مجلس إدارة سابقًا، فعليه تقديم:
  - عدد وتواريخ اجتماعات المجلس خلال فترة عضويته، ونسبة حضوره.
  - اللجان التي شارك فيها، وعدد وتواريخ اجتماعاتها، ونسبة حضوره.
  - ملخص بالنتائج المالية التي حققتها الشركة خلال فترة عضويته.
  - المستندات المؤيدة لذلك.
      `.trim(),
      en: `
Any shareholder who believes he meets the required competence and satisfies at least the minimum conditions below may nominate himself for Board membership:
- No prior conviction for dishonesty or breach of trust.
- Sufficient time to actively participate in Board and committee work.
- A statement of all companies or entities in which he participates in management or ownership and that engage in similar activities or have contracts or interests with the company, including the number of shares or debt instruments he or his dependents hold.
- A formal nomination notice, including a CV, qualifications, and experience.
- A list of current and previous directorships in joint stock companies, with dates, as required by the competent authority.
- Emphasis on the presence of non-executive and independent members.
- Submission of the nomination request at least forty-five (45) days before the General Assembly.
- If previously a Board member, a candidate must provide:
  - The number and dates of Board meetings and his attendance ratio.
  - The committees he served on, along with their meetings and attendance ratio.
  - A summary of the company’s financial performance during his term.
  - Supporting documentation.
      `.trim()
    }
  },

  {
    id: "board_term",
    category: "board",
    title: {
      ar: "مدة عضوية مجلس الإدارة",
      en: "Board Term of Office"
    },
    content: {
      ar: `
- تقوم الجمعية العامة بتعيين أعضاء المجلس لمدة لا تزيد عن ثلاث (3) سنوات، ما لم ينص النظام الأساس على خلاف ذلك، ويجوز إعادة تعيينهم.
- يتولى مجلس الإدارة المنتخب حديثًا المسؤولية مباشرة بعد انتهاء مدة المجلس السابق.
- على المجلس المنتهية مدته التوقيع على القوائم المالية للسنة التي انتهت تحت إشرافه، باعتبارها جزءًا من مسؤوليته الائتمانية.
- إذا لم تنعقد الجمعية العامة قبل انتهاء مدة المجلس الحالي، يستمر المجلس في أداء مهامه إلى حين انعقاد الجمعية وانتخاب مجلس جديد.
      `.trim(),
      en: `
- Board members are appointed by the General Assembly for a term not exceeding three (3) years, unless otherwise provided in the Articles of Association, and may be reappointed.
- The newly elected Board assumes responsibility immediately upon expiry of the previous Board’s term.
- The outgoing Board must sign the financial statements for the financial year that ended under its supervision as part of its fiduciary responsibility.
- If the General Assembly does not convene before the end of the Board’s term, the existing Board shall continue to perform its duties until the General Assembly meets and elects a new Board.
      `.trim()
    }
  },

  {
    id: "board_nomination_process",
    category: "board",
    title: {
      ar: "الترشيح لعضوية مجلس الإدارة",
      en: "Nomination Process for Board Membership"
    },
    content: {
      ar: `
- يطلب من جميع المرشحين تقديم معلومات أساسية وفق نموذج استبيان الاستقلالية المعتمد.
- يجب أن تُسلَّم التفاصيل والنماذج المكتملة قبل تسعين (90) يومًا تقويمياً من انتهاء مدة المجلس الحالي، لتمكين الشركة من إعداد الدعوة للجمعية العامة.
- يجب أن يتضمن عرض الترشيح:
  • الاسم الثلاثي وتاريخ الميلاد.
  • الهيئة المرشَّح لها (مجلس الإدارة).
  • اسم المساهم أو المساهمين مقدمي الترشيح.
  • عدد وأنواع وفئات الأسهم التي يملكها المساهم/المساهمون.
  • المستوى التعليمي، والخبرات المهنية، والمناصب خلال السنوات العشر السابقة.
  • قائمة الكيانات القانونية التي يساهم فيها المرشح أو له مصلحة فيها.
  • أي تبعية أو علاقة بالمرشحين أو أعضاء المجلس أو كبار التنفيذيين أو الأطراف ذوي العلاقة.
  • أي إدانات مدنية أو جزائية أو تجريد من الأهلية.
- بعد توصية لجنة الترشيحات والمكافآت، يقرر المجلس خلال خمسة (5) أيام عمل إدراج المرشحين في قائمة المرشحين من عدمه.
- للمرشح الحق في الانسحاب قبل إدراجه على قائمة المرشحين.
- يجب أن يزيد عدد المرشحين عن عدد المقاعد المتاحة، وفي حال عدم كفاية المرشحين يجوز الاستعانة بطرف خارجي للبحث عن مرشحين مناسبين.
      `.trim(),
      en: `
- All candidates must submit basic information using the approved independence questionnaire.
- Completed information must be submitted at least ninety (90) calendar days before the current Board’s term ends to allow preparation of the General Assembly call.
- The nomination submission must include:
  • Full name and date of birth.
  • The body for which the candidate is nominated (Board of Directors).
  • Name(s) of the nominating shareholder(s).
  • Number, type, and class of shares held by the nominating shareholder(s).
  • Educational background and professional experience, including positions held in the last ten years.
  • A list of legal entities in which the candidate has ownership or interest.
  • Any affiliations or relationships with current or proposed Board members, senior executives, or related parties.
  • Any prior civil or criminal convictions or disqualifications.
- Following recommendations from the Nomination and Remuneration Committee, the Board decides within five (5) business days whether to include candidates on the shortlist.
- Candidates may withdraw before their names are placed on the shortlist.
- The number of candidates presented to the General Assembly should exceed the number of available seats; if not, the Board may seek external assistance to identify suitable candidates.
      `.trim()
    }
  },

  {
    id: "board_election",
    category: "board",
    title: {
      ar: "انتخاب أعضاء مجلس الإدارة",
      en: "Election of Board Members"
    },
    content: {
      ar: `
- يُنتخب أعضاء مجلس الإدارة باستخدام نظام التصويت التراكمي.
- يجب تزويد المساهمين عند الانتخاب بالمعلومات التالية عن كل مرشح:
  • المساهم أو مجموعة المساهمين الذين رشحوه.
  • عمر المرشح ومستواه التعليمي.
  • خبرته المهنية ووظائفه خلال السنوات الخمس السابقة.
  • الوظيفة التي يشغلها وقت الترشيح.
  • طبيعة علاقة المرشح بالشركة.
  • عضوياته في مجالس إدارات منشآت أخرى.
  • علاقاته بالشركات التابعة أو الزميلة أو المقاولين الرئيسيين.
  • أي ظروف أخرى قد تؤثر على قدرته على أداء مهامه.
- إذا انخفض عدد أعضاء المجلس عن النصاب اللازم، يجب دعوة الجمعية العامة العادية خلال ستين (60) يومًا لانتخاب عضو جديد.
- في حال شغور مقعد في المجلس، يجوز تعيين عضو بديل مؤقت يكمل مدة سلفه، مع مراعاة عدم الممانعة النظامية، ويُعرض على الجمعية العامة في أول اجتماع.
- لا يجوز لعضو المجلس أن يكون عضوًا في مجلس أو لجنة أو موظفًا في شركة تقنية معلومات منافسة أو تمارس نشاطًا مماثلًا.
- يجب أن يتميز المجلس بالتنوع في المؤهلات والمعرفة والخبرات والمهارات.
- يلتزم المجلس بتقييم سنوي لاستقلال الأعضاء والتأكد من اتخاذ قرارات سليمة تحقق مصالح الشركة.
      `.trim(),
      en: `
- Board members are elected using cumulative voting.
- When voting, shareholders must be provided with key information about each candidate, including:
  • Nominating shareholder(s).
  • Age and educational background.
  • Professional experience and positions held in the last five years.
  • Current position.
  • Nature of the candidate’s relationship with the company.
  • Current directorships in other entities.
  • Relationships with subsidiaries, affiliates, or major contractors.
  • Any circumstances that may affect the candidate’s ability to perform his duties.
- If the number of Board members falls below the required quorum, the Ordinary General Assembly must be convened within sixty (60) days to elect a replacement.
- If a seat becomes vacant, the Board may appoint a temporary member to complete the predecessor’s term, subject to regulatory non-objection, and present him to the next General Assembly.
- A Board member may not simultaneously serve as a board/committee member or employee in a competing IT company or another entity engaged in similar activities.
- The Board should be diverse in terms of qualifications, knowledge, and experience.
- The Board must conduct an annual evaluation of members’ independence and ensure sound decision-making in the company’s best interests.
      `.trim()
    }
  },

  {
    id: "board_duties",
    category: "board",
    title: {
      ar: "مهام ومسؤوليات مجلس الإدارة",
      en: "Duties and Responsibilities of the Board"
    },
    content: {
      ar: `
مع مراعاة اختصاصات الجمعية العامة، يتمتع مجلس الإدارة بأوسع السلطات في إدارة الشركة والإشراف على أعمالها وأموالها وتصريف أمورها ورسم سياستها العامة لتحقيق أغراضها، ومن ذلك على وجه الخصوص دون حصر:

- وضع لائحة داخلية لأعمال المجلس.
- تمثيل الشركة أمام الغير والجهات الحكومية والقضائية والرقابية.
- إبرام جميع العقود والاتفاقيات، بما في ذلك الشراء والبيع والإيجار والوكالات والامتيازات وعقود التحوط المالي والمناقصات.
- فتح وتشغيل وإغلاق الحسابات البنكية والحصول على القروض وإصدار الضمانات وتحرير الأوراق التجارية، مع مراعاة:
  • ألا تزيد قيمة القروض طويلة الأجل عن 50% من رأس مال الشركة.
  • تحديد أوجه استخدام القروض وكيفية السداد.
  • ألا تضر شروط القروض أو الضمانات بالشركة أو مساهميها.

- بيع أو رهن عقارات الشركة وأصولها وفق ضوابط محددة، منها:
  • أن يحدد المجلس في قراره أسباب ومبررات البيع.
  • أن يكون السعر مقاربًا لثمن المثل.
  • أن يكون البيع حاضرًا إلا في حالات مبررة بضمانات كافية.
  • ألا يترتب على التصرف توقف بعض أنشطة الشركة أو تحميلها التزامات غير مبررة.

- إبراء مديني الشركة ضمن حدود وضوابط زمنية ومبالغ محددة.
- تفويض من يراه في حدود اختصاصه في مباشرة أعمال معينة، دون أن يعفي ذلك المجلس من مسؤوليته.
- أداء مهامه بحسن نية وجدية واهتمام، واستنادًا إلى معلومات كافية.
- تمثيل مصالح جميع المساهمين، وعدم الانحياز لمجموعة معينة.
- تحديد الصلاحيات المفوضة للإدارة التنفيذية، وآلية اتخاذ القرار، والموضوعات التي يحتفظ المجلس باختصاص البت فيها.
- وضع إجراءات لتعريف الأعضاء الجدد بعمل الشركة وتدريبهم عند الحاجة.
- التأكد من توفير معلومات كافية عن شؤون الشركة لجميع الأعضاء، خصوصًا غير التنفيذيين، لتمكينهم من أداء واجباتهم بكفاءة.
      `.trim(),
      en: `
Subject to the powers reserved for the General Assembly, the Board has the broadest authority to manage the company, supervise its business and funds, and set its overall strategy and policies. In particular, the Board shall:
- Adopt internal regulations governing its work.
- Represent the company before third parties and governmental, judicial, and regulatory bodies.
- Enter into all types of contracts and agreements, including purchase, sale, lease, agency, franchise, hedging contracts, and tenders.
- Open, operate, and close bank accounts, obtain loans, and issue guarantees and commercial papers, provided that:
  • Long-term borrowing does not exceed 50% of the company’s capital.
  • The use and repayment of loans are clearly defined.
  • Loan terms and guarantees do not harm the company or its shareholders.

- Sell or mortgage the company’s assets and properties under clear conditions, including:
  • Stating reasons and justifications for sale.
  • Ensuring that the price is close to market value.
  • Favoring spot sales except in justified cases with adequate guarantees.
  • Avoiding actions that would halt major activities or impose unjustified obligations.

- Grant debt waivers under defined limits and conditions.
- Delegate certain powers within its remit to others without being relieved of ultimate responsibility.
- Perform its duties in good faith, with diligence and care, based on adequate information.
- Represent all shareholders equally and not favor any particular group.
- Define authorities delegated to executive management, decision-making procedures, and matters reserved to the Board.
- Establish onboarding and, when necessary, training procedures for new Board members.
- Ensure that all members, especially non-executive ones, receive sufficient information about the company’s affairs to perform their duties effectively.
      `.trim()
    }
  },

  {
    id: "chairman_election",
    category: "board",
    title: {
      ar: "انتخاب رئيس مجلس الإدارة",
      en: "Election of the Chairman"
    },
    content: {
      ar: `
- ينتخب أعضاء مجلس الإدارة من بينهم رئيسًا للمجلس (الرئيس) بأغلبية أصوات جميع الأعضاء المنتخبين، ويكون الأعضاء غير التنفيذيين أو المستقلون هم المؤهلون للمنصب.
- لا يجوز لرئيس المجلس أن يشغل أي منصب تنفيذي في الشركة مثل الرئيس التنفيذي أو العضو المنتدب أو المدير العام.
- للمجلس حق عزل الرئيس وإعادة انتخاب رئيس آخر في أي وقت، بأغلبية أصوات جميع أعضاء المجلس.
- تُحدد مدة رئاسة المجلس بثلاث (3) سنوات قابلة للتجديد، ما لم يقرر المجلس خلاف ذلك.
- في حال غياب الرئيس، يتولى عضو آخر – يختاره المجلس – القيام بمهامه.
      `.trim(),
      en: `
- The Board elects a Chairman from among its members by a majority vote of all elected members, with non-executive or independent members being eligible for the role.
- The Chairman may not hold any executive position in the company, such as CEO, Managing Director, or General Manager.
- The Board may dismiss the Chairman and elect a replacement at any time by a majority vote of all Board members.
- The Chairman’s term is three (3) years, renewable unless the Board decides otherwise.
- In the Chairman’s absence, another Board member designated by the Board shall perform the Chairman’s duties.
      `.trim()
    }
  },

  {
    id: "chairman_role",
    category: "board",
    title: {
      ar: "دور رئيس مجلس الإدارة",
      en: "Role of the Chairman"
    },
    content: {
      ar: `
- تعزيز المعايير العليا لحوكمة الشركة وضمان التزام المجلس بالقوانين والأنظمة ذات العلاقة.
- بناء علاقة عمل وثيقة قائمة على الثقة مع رؤساء اللجان، وخصوصًا اللجنة التنفيذية، وتقديم الدعم والمشورة لهم.
- ضمان عمل المجلس بصورة فعالة، وأن يكون منظمًا ومركّزًا على الموضوعات الجوهرية.
      `.trim(),
      en: `
- Promote the highest standards of corporate governance and ensure the Board’s compliance with applicable laws and regulations.
- Build a close, trust-based working relationship with committee chairs, especially the Executive Committee, and provide them with support and advice.
- Ensure the Board operates effectively and remains focused on key strategic and governance matters.
      `.trim()
    }
  },

  {
    id: "chairman_responsibilities",
    category: "board",
    title: {
      ar: "مسؤوليات رئيس مجلس الإدارة",
      en: "Responsibilities of the Chairman"
    },
    content: {
      ar: `
تشمل مسؤوليات رئيس مجلس الإدارة، دون حصر:
- تنظيم عمل المجلس وضمان تبادل الآراء بحرية ومناقشة بنود جدول الأعمال بشكل مفتوح.
- تحديد جدول زمني للدعوة لاجتماعات المجلس، وإعداد جدول الأعمال وترؤس الاجتماعات.
- التأكد من توثيق محاضر الاجتماعات والتوقيع عليها.
- ضمان كفاءة اتخاذ القرارات، وتوفير معلومات كافية عن الموضوعات المطروحة.
- تزويد الأعضاء بالمعلومات اللازمة قبل الاجتماعات بوقت كافٍ (يفضل قبل عشرة أيام عمل على الأقل).
- المساعدة في إنشاء اللجان المنبثقة عن المجلس وتنسيق العلاقات بينها وبين الإدارة التنفيذية.
- تعزيز المشاركة الفعالة للأعضاء غير التنفيذيين.
- تمثيل الشركة أمام الجهات القضائية والخارجية عند الاقتضاء.
- إعداد تقارير عن أنشطة المجلس وإدراجها في التقرير السنوي للشركة.
- تسهيل تواصل المجلس مع المساهمين واستقبال ملاحظاتهم ومقترحاتهم.
      `.trim(),
      en: `
The Chairman’s responsibilities include, without limitation:
- Organizing the Board’s work and ensuring free exchange of views and open discussion of agenda items.
- Scheduling Board meetings, preparing agendas, and chairing the meetings.
- Ensuring that minutes of meetings are properly recorded and signed.
- Ensuring decisions are made efficiently, based on adequate information and sound deliberation.
- Providing Board members with necessary information sufficiently in advance of meetings (preferably at least ten business days).
- Assisting in establishing Board committees and coordinating their relationship with executive management.
- Encouraging active participation by non-executive members.
- Representing the company before judicial and external bodies when required.
- Preparing reports on Board activities for inclusion in the company’s annual report.
- Facilitating communication between the Board and shareholders and receiving their comments and proposals.
      `.trim()
    }
  },

  {
    id: "honesty_loyalty_principles",
    category: "board",
    title: {
      ar: "مبادئ الصدق والأمانة والولاء",
      en: "Principles of Honesty, Integrity, and Loyalty"
    },
    content: {
      ar: `
يلتزم كل عضو من أعضاء مجلس الإدارة بما يلي:
- الصدق: أن تكون علاقته بالشركة مهنية صادقة، وأن يفصح عن أي معلومات مؤثرة قبل تنفيذ أي صفقة أو عقد مع الشركة أو شركاتها التابعة.
- الولاء: تجنب التعاملات التي تنطوي على تعارض مصالح، والتحقق من عدالة التعامل، والالتزام بأحكام تعارض المصالح.
- العناية والاهتمام: أداء الواجبات والمسؤوليات الواردة في نظام الشركات ولوائحه والنظام الأساس والأنظمة واللوائح الأخرى ذات العلاقة، بما يحقق مصلحة الشركة والمساهمين.
      `.trim(),
      en: `
Each Board member must abide by the following principles:
- Honesty: Maintain a truthful professional relationship with the company and disclose any material information before entering into transactions or contracts with the company or its subsidiaries.
- Loyalty: Avoid transactions involving conflicts of interest, ensure fairness in dealings, and comply with conflict-of-interest rules.
- Care and diligence: Perform duties in accordance with the Companies Law, its implementing regulations, the Articles of Association, and other applicable laws and regulations, in the best interest of the company and its shareholders.
      `.trim()
    }
  },

  {
    id: "board_member_duties",
    category: "board",
    title: {
      ar: "مهام وواجبات عضو مجلس الإدارة",
      en: "Duties of a Board Member"
    },
    content: {
      ar: `
يؤدي كل عضو من أعضاء مجلس الإدارة المهام والواجبات الآتية:
- تقديم المقترحات لتطوير استراتيجية الشركة.
- مراقبة أداء الإدارة التنفيذية ومدى تحقيقها لأهداف الشركة.
- مراجعة التقارير الخاصة بأداء الشركة.
- التحقق من سلامة ونزاهة القوائم والمعلومات المالية.
- التحقق من جودة الرقابة المالية ونظم إدارة المخاطر.
- تحديد المستويات الملائمة لمكافآت الإدارة التنفيذية.
- إبداء الرأي في تعيين وعزل أعضاء الإدارة التنفيذية.
- المشاركة في وضع خطط التعاقب والإحلال في الوظائف التنفيذية.
- الالتزام التام بالأنظمة والنظام الأساس عند ممارسة مهام العضوية.
- حضور الاجتماعات وعدم التغيب إلا لعذر مشروع يتم إبلاغ الرئيس به مسبقًا.
- تخصيص وقت كاف للتحضير للاجتماعات والمشاركة بفعالية فيها.
- دراسة وتحليل المعلومات المتعلقة بالموضوعات المطروحة قبل التصويت.
- تمكين الأعضاء الآخرين من إبداء آرائهم بحرية وتحفيز النقاش البنّاء.
- الإفصاح عن أي مصلحة شخصية في الأعمال والعقود التي تتم لحساب الشركة، وعدم التصويت عليها.
- الإفصاح عن أي مشاركة في أعمال منافسة أو أنشطة مشابهة لنشاط الشركة.
- الحفاظ على سرية المعلومات والامتناع عن إفشاء أسرار الشركة أو استغلالها لمصلحة شخصية.
- تنمية معارفه في أنشطة الشركة والمجالات ذات الصلة.
- تقديم استقالته إذا لم يعد قادرًا على أداء واجباته على الوجه الأكمل.
      `.trim(),
      en: `
Each Board member shall:
- Contribute proposals for developing the company’s strategy.
- Monitor executive management performance and achievement of the company’s objectives.
- Review performance reports.
- Ensure the accuracy and integrity of financial statements and information.
- Ensure the quality of financial control and risk management systems.
- Determine appropriate levels of executive management remuneration.
- Give opinions on the appointment and removal of executive management.
- Participate in succession and replacement planning for key executive positions.
- Fully comply with applicable laws and the Articles of Association when exercising Board duties.
- Attend Board meetings and avoid absence except for a valid reason notified to the Chairman in advance.
- Allocate sufficient time to prepare for and participate actively in meetings.
- Study and analyze relevant information before voting.
- Enable other members to express their views freely and encourage constructive discussion.
- Disclose any personal interest in transactions carried out for the company’s account and abstain from voting on them.
- Disclose any participation in activities that compete with the company.
- Maintain confidentiality of company information and not use it for personal benefit.
- Enhance his knowledge of the company’s activities and related fields.
- Resign if no longer able to perform his duties effectively.
      `.trim()
    }
  },

  {
    id: "independent_member_duties",
    category: "board",
    title: {
      ar: "مهام العضو المستقل",
      en: "Duties of the Independent Board Member"
    },
    content: {
      ar: `
على عضو مجلس الإدارة المستقل المشاركة بفعالية في:
- إبداء الرأي المستقل في المسائل الاستراتيجية وسياسات الشركة وأدائها وتعيين الإدارة التنفيذية.
- التحقق من مراعاة مصالح الشركة ومساهميها وتقديمها عند حصول أي تعارض مصالح.
- الإشراف على تطوير قواعد الحوكمة في الشركة ومراقبة مدى تطبيق الإدارة التنفيذية لها.
      `.trim(),
      en: `
The independent Board member must actively:
- Provide an independent opinion on strategic matters, company policies, performance, and executive appointments.
- Ensure that the interests of the company and its shareholders are prioritized in cases of conflict of interest.
- Oversee the development of the company’s governance framework and monitor executive management’s implementation of it.
      `.trim()
    }
  },

  {
    id: "board_meetings",
    category: "board",
    title: {
      ar: "اجتماعات ومحاضر مجلس الإدارة",
      en: "Board Meetings and Minutes"
    },
    content: {
      ar: `
- يعقد مجلس الإدارة اجتماعاته مرتين على الأقل في السنة، بناءً على دعوة من الرئيس أو طلب خطي من اثنين من الأعضاء.
- يتم تزويد الأعضاء بخطة وجدول الاجتماعات السنوية خلال شهر ديسمبر من كل عام.
- على الأعضاء تخصيص وقت كاف للتحضير للاجتماعات، وإبلاغ الرئيس أو أمين السر في حال الاعتذار عن الحضور.
- يجب توثيق الاجتماعات وإعداد محاضر تتضمن المناقشات والمداولات وعمليات التصويت وأسماء الحاضرين وأي تحفظات.
- تُرسل الدعوة وجدول الأعمال قبل عشرة أيام على الأقل من الاجتماع، ولكل عضو الحق في إضافة بنود قبل اعتماد الجدول.
- يتم تزويد الأعضاء بمسودة المحضر خلال عشرة أيام من الاجتماع لإبداء ملاحظاتهم خلال أسبوع، ثم يُعتمد المحضر.
- لا تُستخرج القرارات من المحاضر قبل مرور أسبوع على إرسال المسودة للأعضاء.
- يُفضَّل أن يكون لكل عضو بريد إلكتروني يعتمد في إرسال الدعوات والوثائق.
      `.trim(),
      en: `
- The Board meets at least twice a year upon invitation by the Chairman or upon a written request from two members.
- Members receive the annual schedule of Board and committee meetings during December of each year.
- Members must allocate sufficient time to prepare for meetings and notify the Chairman or Secretary in case of absence.
- Meetings must be documented, with minutes including discussions, deliberations, voting results, attendees’ names, and any reservations.
- Invitations and agendas are sent at least ten days before the meeting, and each member has the right to propose additional items before the agenda is adopted.
- Draft minutes are sent to members within ten days of the meeting; comments are received within a week, after which the minutes are approved.
- Decisions are not extracted from minutes until at least one week after sending the draft to members.
- Each member should have an official email address to receive notices and documents.
      `.trim()
    }
  },

  {
    id: "board_membership_termination",
    category: "board",
    title: {
      ar: "إنهاء عضوية مجلس الإدارة",
      en: "Termination of Board Membership"
    },
    content: {
      ar: `
تنتهي عضوية مجلس الإدارة في الحالات الآتية:
- انتهاء مدة عضوية المجلس.
- استقالة عضو المجلس.
- وفاة عضو المجلس.
- إصابة العضو باعتلال جسدي أو عقلي يحد من قدرته على أداء مهامه.
- إفلاس العضو أو إعساره.
- إدانة العضو بجريمة مخلة بالأمانة أو مخالفة قوانين المملكة أو أي بلد آخر.
- عدم وفاء العضو بالتزاماته بما يلحق الضرر بالشركة، مع اشتراط موافقة الجمعية العامة على إنهاء العضوية.
- عدم حضور العضو ثلاثة (3) اجتماعات في سنة واحدة دون عذر مشروع ومقبول.
- عدم قدرة العضو على مواصلة أداء دوره استنادًا إلى القوانين والأنظمة واجبة التطبيق.
- يجوز للجمعية العامة عزل المجلس قبل انتهاء مدته، وفي هذه الحالة يستمر الأعضاء الجدد حتى انتخاب مجلس جديد في جمعية لاحقة.
- في حال استقالة أحد الأعضاء يظل مسؤولًا عن الأفعال التي ارتكبها خلال فترة عضويته، ويجب عليه إخطار المجلس خطيًا قبل ثلاثين (30) يومًا على الأقل.
- يُعوَّض العضو المستقيل أو المنتهيَة عضويته عن الفترة التي قضاها في المجلس وفق ما يقرره النظام الأساس أو قرارات الجمعية.
- يتوجب على الشركة إبلاغ الجهة المختصة عند استقالة أو إنهاء خدمات أحد الأعضاء خلال خمسة (5) أيام عمل من تاريخ الحدث.

إجراءات إنهاء العضوية تشمل:
• الإخطار الكتابي للعضو المعني.
• تبليغ الجهات المختصة خلال المدة النظامية.
• اتخاذ إجراءات تعيين عضو بديل وفقًا لأحكام النظام الأساس.
• تسوية ما يتعلق بحقوق العضو وتعويضه عن مدة خدمته، إذا كان مستحقًا لذلك.
      `.trim(),
      en: `
Board membership terminates in the following cases:
- Expiry of the Board’s term.
- Resignation of the member.
- Death of the member.
- Physical or mental incapacity preventing the member from performing his duties.
- Bankruptcy or insolvency of the member.
- Conviction for an offense involving dishonesty or breach of law in the Kingdom or elsewhere.
- Failure to fulfill duties in a manner that harms the company, subject to General Assembly approval.
- Absence from three (3) Board meetings in one year without a valid and accepted excuse.
- Inability to continue serving in accordance with applicable laws and regulations.
- The General Assembly may dismiss the Board before the end of its term; newly elected members remain until a new Board is elected at a subsequent assembly.
- A resigning member remains liable for acts committed during his term and must notify the Board in writing at least thirty (30) days before resignation.
- The member is compensated proportionally for the period served, in accordance with the Articles of Association or General Assembly resolutions.
- The company must notify the competent authority of any resignation or termination within five (5) business days.

Termination procedures include:
• Written notification to the concerned member.
• Notification of relevant authorities within statutory deadlines.
• Appointment of a replacement member in accordance with the Articles of Association.
• Settlement of the member’s entitlements and compensation for his period of service, if applicable.
      `.trim()
   }
  },

  {
id: "impairmentsـtoـindependence",
    category: "board",
    title: {
      ar: "عوارض الاستقلال",
      en: "Impairments to Independence"
    },
    content: {
      ar:`
- يجب أن يكون عضو مجلس الإدارة المستقل قادرًا على ممارسة مهامه وإبداء رأيه والتصويت على القرارات بموضوعية وحياد، دون تأثر بأي مصالح شخصية أو علاقات قد تؤثر على حكمه. ويُعد العضو مستقلاً إذا كان قادرًا على اتخاذ القرارات لمصلحة الشركة على المدى الطويل دون تفضيل مصالح شخصية أو جماعات ضيقة.
- على مجلس الإدارة أن يجري تقييمًا مستمرًا لاستقلال أعضائه، والتأكد من عدم وجود أي علاقات أو ظروف قد تؤثر على حكمهم. ويجب على الأعضاء الإفصاح عن أي معلومات قد تؤثر على استقلالهم.
- تعتبر العوامل التالية – على سبيل المثال لا الحصر – مؤشرات على عدم الاستقلال:
  • أن يكون مالكًا لما نسبته 5% أو أكثر من أسهم الشركة أو من أسهم شركة أخرى من مجموعتها، أو أن تكون له صلة قرابة مع من يملك هذه النسبة.
  • أن يكون ممثلاً لشخص ذي صفة اعتبارية يملك ما نسبته 5% أو أكثر من أسهم الشركة أو من أسهم شركة أخرى من مجموعتها.
  • أن تكون له صلة قرابة مع أي من أعضاء مجلس الإدارة في الشركة أو شركة أخرى من مجموعتها.
  • أن تكون له صلة قرابة مع أي من كبار التنفيذيين في الشركة أو في شركة أخرى من مجموعتها.
  • أن يعمل أو كان يعمل موظفًا خلال العامين الماضيين لدى الشركة أو أي طرف متعامل معها أو شركة أخرى من مجموعتها، مثل مراجعي الحسابات أو كبار الموردين، أو أن يكون مالكًا لحصص سيطرة لدى أي من تلك الأطراف خلال العامين الماضيين.
  • أن تكون له مصلحة مباشرة أو غير مباشرة في الأعمال والعقود التي تتم لحساب الشركة.
  • أن يتشارك في عمل من شأنه منافسة الشركة، أو أن يتاجر في أحد فروع النشاط الذي تزاوله الشركة.
- في حالة وجود شكوك حول استقلال عضو من الأعضاء، يجب على مجلس الإدارة التحقيق في الأمر واتخاذ الإجراءات اللازمة لضمان استقلالية عملية اتخاذ القرار.  
    `.trim(),
      en:`
- An independent Board member must be able to perform his duties and express his views and vote on decisions objectively and impartially, without being influenced by any personal interests or relationships that may affect his judgment. A member is considered independent if he can make decisions in the best long-term interest of the Company without favoring personal or narrow group interests.
- The Board of Directors shall conduct an ongoing assessment of the independence of its members and ensure that there are no relationships or circumstances that may affect their judgment. Members must disclose any information that may affect their independence.
- The following factors are considered, by way of example and not limitation, indicators of non-independence:
  • Owning 5% or more of the shares of the Company or of any other company within its group, or having a kinship relationship with someone who owns this percentage.
  • Acting as a representative of a legal person that owns 5% or more of the shares of the Company or of any other company within its group.
  • Having a kinship relationship with any member of the Board of Directors in the Company or any other company within its group.
  • Having a kinship relationship with any senior executive in the Company or any other company within its group.
  • Being employed, or having been employed during the past two years, by the Company or any related party or any other company within its group, such as external auditors or key suppliers, or owning a controlling stake in any of such parties during the past two years.
  • Having a direct or indirect interest in businesses and contracts concluded for the account of the Company.
  • Participating in an activity that competes with the Company or engaging in one of the business lines practiced by the Company.
- If there are doubts regarding the independence of any member, the Board must investigate the matter and take the necessary measures to ensure the independence of the decision-making process.
    `.trim()
       }
  },

  {
id: "meetings",
    category: "board",
    title: {
      ar: "الاجتماعات",
      en: "Meetings"
    },
    content: {
      ar: `
- يجوز أن تُوجَّه الدعوة لاجتماع مجلس الإدارة من قبل أي عضوين يقدمان طلبًا إلى رئيس المجلس، أو من قبل أمين سر المجلس بناءً على توجيه من مجلس الإدارة.
- يجب أن يتم تقديم طلب عقد اجتماع مجلس الإدارة كتابيًا إلى أمين سر المجلس. ويتم تحديد تاريخ الطلب بناءً على تاريخ استلامه من قبل أمين السر.
- يجب أن يتضمن الطلب ما يلي:
  • اسم الشخص طالب الاجتماع.
  • صيغة جدول الأعمال المقترح.
  • شكل الاجتماع (حضوري، عن بعد، أو مدمج).
- على أمين السر أن يقوم خلال عشرة (10) أيام عمل من استلام الطلب بدعوة المجلس إلى الاجتماع.
- في حال عدم حضور عضو مجلس الإدارة لأكثر من ثلاثة (3) اجتماعات متتالية، يجوز للمجلس أن ينظر في إنهاء عضوية هذا العضو بما يحقق أفضل مصلحة للشركة.
- يجب على الأعضاء غير التنفيذيين عقد جلسات مغلقة دون حضور الإدارة العليا مرة سنويًا على الأقل، ويمكن دعوة ممثلين عن أجهزة الرقابة الداخلية عند الحاجة.
- يجب عقد الاجتماع الأول لمجلس الإدارة في موعد أقصاه شهر واحد بعد انتخاب المجلس، ويتضمن جدول أعمال الاجتماع الأول على الأقل:
  • انتخاب رئيس المجلس.
  • تحديد أولويات عمل الشركة.
  • تأسيس أو إعادة تثبيت لجان المجلس.  
    `.trim(),
      en:`
- A Board meeting may be convened upon the request of any two members submitting a request to the Chair of the Board, or by the Board Secretary pursuant to a directive from the Board.
- The request to convene a Board meeting must be submitted in writing to the Board Secretary. The date of the request shall be determined based on the date the Secretary receives it.
- The request must include the following:
  • Name of the person requesting the meeting.
  • The proposed draft agenda.
  • The form of the meeting (in-person, virtual, or hybrid).
- The Secretary shall, within ten (10) business days of receiving the request, invite the Board to convene.
- If a Board member fails to attend more than three (3) consecutive meetings, the Board may consider terminating that member’s membership if it deems such action to be in the best interest of the Company.
- Non-executive Board members must hold closed sessions at least once a year without the presence of senior management, and may invite representatives from internal control functions when needed.
- The first meeting of each newly elected Board shall be held within a maximum period of one month from the election date. The agenda of the first meeting shall, at minimum, include:
  • Election of the Chair of the Board.
  • Setting the Company’s key priorities.
  • Establishing or re-confirming the Board committees.
    `.trim()
   }
  },

  {
id: "frequencyـofـboardـmeetings",
    category: "board",
    title: {
      ar: "وتيرة انعقاد اجتماعات المجلس",
      en: "Frequency of Board Meetings"
    },
    content: {
      ar: `
على مجلس الإدارة أن يعقد اجتماعاته بعدد المرات التي يعتبرها الأعضاء ضرورية للوفاء بواجباتهم ومسؤولياتهم كأعضاء في المجلس حسبما تمليه احتياجات العمل، وعلى المجلس الاجتماع – كحد أدنى – على أساس ربع سنوي في الأماكن والتواريخ التي يحددها.  
    `.trim(),
      en:`
The Board of Directors shall meet as many times as it deems necessary to enable its members to properly discharge their duties and responsibilities in light of business needs. As a minimum, the Board shall convene on a quarterly basis, at such locations and dates as it determines.
    `.trim()
}
  },

  {
id: "noticesـof boardـmeetings",
    category: "board",
    title: {
      ar: "إشعارات اجتماعات مجلس الإدارة",
      en: "Notices of Board Meetings"
    },
    content: {
      ar: `
- على أمين سر مجلس الإدارة أن يقوم بتعميم إشعار بانعقاد اجتماع المجلس على جميع الأعضاء قبل عشرة (10) أيام عمل على الأقل من تاريخ الاجتماع.
- يجب أن يرفق بإشعار الاجتماع جدول الأعمال التفصيلي مع حزمة المعلومات والوثائق اللازمة.
- يجب أن يتضمن إشعار الاجتماع ما يلي:
  • عنوان الاجتماع.
  • تاريخ الاجتماع ووقته ومكانه.
  • جدول الأعمال التفصيلي.
  • أي وثائق أو معلومات إضافية يحتاج الأعضاء إلى الاطلاع عليها قبل الاجتماع.
  • موعد نهائي لتقديم أي اقتراحات أو استفسارات.
- تُرسل الإشعارات عن طريق البريد الإلكتروني إلى عناوين البريد الإلكتروني المسجلة لدى أمين السر، مع إمكانية إرسال نسخة ورقية عند الطلب، وعلى أمين السر الحصول على تأكيد باستلام الإشعار من قبل الأعضاء.
- على أمين سر المجلس الاحتفاظ بسجل لجميع إشعارات ومراسلات المجلس المرسلة، مع إثبات للإشعارات/المراسلات التي تم الحصول على تأكيد استلام لها.  
    `.trim(),
      en:`
- The Board Secretary shall circulate a notice of each Board meeting to all members at least ten (10) business days prior to the meeting date.
- The meeting notice must be accompanied by a detailed agenda and the required information and supporting documents.
- The notice shall include:
  • The meeting title.
  • The date, time, and venue of the meeting.
  • The detailed agenda.
  • Any additional documents or information that members need to review in advance.
  • The deadline for submitting any proposals or questions.
- Notices shall be sent via email to the addresses registered with the Secretary, with the option of sending a hard copy upon request. The Secretary must obtain confirmation of receipt from the members.
- The Board Secretary shall maintain a register of all notices and correspondence sent to the Board, including evidence of those notices/correspondence for which receipt has been confirmed.
    `.trim()
  }
  },

  {
id: "provisionـofـinformationـtoـtheـboard",
    category: "board",
    title: {
      ar: "تقديم المعلومات إلى مجلس الإدارة",
      en: "Provision of Information to the Board"
    },
    content: {
      ar: `
يجوز أن تتضمن المعلومات التي تقدم إلى مجلس الإدارة ما يلي – على سبيل المثال لا الحصر:
- جدول الأعمال.
- محضر آخر اجتماع لمجلس الإدارة.
- حالة تنفيذ الإجراءات والخطوات المتخذة إزاء قرارات المجلس.
- محاضر اجتماعات لجنة المراجعة ولجان المجلس الأخرى.
- مؤشرات أداء الشركة المالية وغير المالية حسبما حددها المجلس وأعدها الرئيس التنفيذي.
- المعلومات المتعلقة بتوظيف واستقالة وانتهاء خدمات كبار الموظفين ومكافآتهم.
- الإشعارات الهامة المتعلقة بإدارة المخاطر بما في ذلك الأمور المالية والتشغيلية والالتزام بالأنظمة.
- أي إخلال جوهري بالتزامات الشركة المالية تجاه الأطراف الأخرى أو عدم استرداد الشركة لمستحقاتها.
- الأمور الهامة المتعلقة بالإجراءات القضائية النهائية أو القضايا المرفوعة أمام المحاكم والمتعلقة بأنشطة الشركة.
- أي معلومات أخرى ذات صلة يراها مجلس الإدارة ضرورية لاتخاذ قراراته.

على أمين سر مجلس الإدارة – بالتنسيق مع رئيس المجلس أو لجنة التعيينات والمكافآت – تحديد المعلومات التي يجب تقديمها إلى الأعضاء، مع التأكد من تحديثها بشكل مستمر.

على أمين السر التأكد من تزويد جميع أعضاء المجلس بكافة المعلومات الضرورية قبل ما لا يقل عن عشرة (10) أيام عمل من تاريخ الاجتماع.  
    `.trim(),
      en:`
Information provided to the Board of Directors may include, by way of example and not limitation:
- The agenda.
- Minutes of the last Board meeting.
- Status updates on the implementation of decisions and actions previously taken by the Board.
- Minutes of meetings of the Audit Committee and other Board committees.
- The Company’s financial and non-financial performance indicators as defined by the Board and prepared by the Chief Executive Officer.
- Information related to the hiring, resignation, termination, and remuneration of senior employees.
- Significant notifications relating to risk management, including financial, operational, and regulatory compliance matters.
- Any material breaches of the Company’s financial obligations towards third parties, or failure to collect its receivables.
- Significant matters related to final judicial procedures or cases filed before courts that concern the Company’s business.
- Any other relevant information that the Board deems necessary for decision-making.

In coordination with the Chair of the Board or the Nominations and Remuneration Committee, the Board Secretary shall determine which information must be provided to the members and ensure that it is kept up to date.

The Secretary shall ensure that all necessary information is provided to Board members at least ten (10) business days prior to the meeting date.
    `.trim()
  }
  },

  {
id: "participation",
    category: "board",
    title: {
      ar: "المشاركة",
      en: "Participation"
    },
    content: {
      ar: `
يجب أن يترأس رئيس مجلس الإدارة – أو نائب الرئيس في حال غيابه – اجتماعات المجلس.  
    `.trim(),
      en:`
The Chair of the Board, or the Vice-Chair in his absence, shall preside over Board meetings.
    `.trim()
  }
  },

  {
id: "quorum",
    category: "board",
    title: {
      ar: "النصاب",
      en: "Quorum"
    },
    content: {
      ar: `
- لا يكون اجتماع مجلس الإدارة صحيحًا ما لم يحضره على الأقل ثلثا (2/3) أعضاء المجلس.
- يجوز لعضو المجلس انتداب عضو آخر في المجلس لحضور الاجتماعات نيابة عنه عن طريق تقديم وكالة مكتوبة إلى العضو المنتدب. ويجب تقديم الوكالة إلى أمين سر المجلس في موعد أقصاه بداية اجتماع المجلس.
- لا يجوز لأي شخص آخر غير عضو في مجلس الإدارة حضور الاجتماع نيابة عن أحد الأعضاء.  
    `.trim(),
      en:`
- A Board meeting shall not be valid unless at least two-thirds (2/3) of the Board members are present.
- A Board member may delegate another Board member to attend meetings on his behalf by submitting a written proxy to the delegated member. The proxy must be submitted to the Board Secretary no later than the start of the meeting.
- No person who is not a Board member may attend a meeting on behalf of any Board member.
    `.trim()
  }
  },

  {
id: "voting",
    category: "board",
    title: {
      ar: "التصويت",
      en: "Voting"
    },
    content: {
      ar: `
- تُصدر قرارات مجلس الإدارة بالتصويت الإيجابي بأغلبية أصوات الأعضاء الحاضرين في الاجتماع، ويكون لكل عضو صوت واحد.
- في حالة تعادل الأصوات يكون للرئيس صوتٌ مرجح لكسر حالة التعادل.  
    `.trim(),
      en:`
- Board resolutions shall be passed by an affirmative vote of the majority of members present at the meeting, with each member having one vote.
- In the event of a tie, the Chair shall have a casting vote to break the tie.
    `.trim()
  }
  },

  {
id: "meetingـagenda",
    category: "board",
    title: {
      ar: "جدول أعمال الاجتماع",
      en: "Meeting Agenda"
   },
    content: {
      ar: `
- بعد تعميم جدول أعمال الاجتماع على جميع الأعضاء، يكون لكل عضو الحق في إضافة بنود إلى جدول الأعمال، شريطة إرسال تلك البنود إلى أمين السر قبل ستة (6) أيام عمل على الأقل من تاريخ الاجتماع.
- يقوم أمين السر بجمع ملاحظات الأعضاء وإرسال جدول أعمال معدل إلى أعضاء المجلس قبل خمسة (5) أيام عمل على الأقل من تاريخ الاجتماع.
- عند انعقاد الاجتماع، يقر المجلس جدول الأعمال، وفي حال اعتراض أي عضو على الجدول تُثبت تفاصيل هذا الاعتراض في محضر الاجتماع.
- يجوز تقديم العروض والتقارير خلال الاجتماعات من قبل الرئيس التنفيذي أو عضو المجلس المسؤول عن الموضوع، أو خبير مختص، وبعد العرض والرد على الاستفسارات، يجوز للمجلس مناقشة الموضوع دون حضور الإدارة التنفيذية إن رأى ذلك مناسبًا.  
    `.trim(),
      en:`
- Once the meeting agenda has been circulated to all members, each member has the right to propose additional items, provided such items are submitted to the Secretary at least six (6) business days before the meeting date.
- The Secretary shall compile the members’ comments and send a revised agenda to all Board members at least five (5) business days prior to the meeting.
- At the start of the meeting, the Board shall approve the agenda. If any member objects to the agenda, the details of that objection must be recorded in the minutes.
- Presentations and reports may be delivered during the meeting by the Chief Executive Officer, the Board member responsible for the subject, or an external expert. Following the presentation and responses to questions, the Board may choose to discuss the matter in the absence of the executive management if it deems that appropriate.
    `.trim()
  }
  },

  {
id: "minutes_of_meetings",
    category: "board",
    title: {
      ar: "محاضر الاجتماعات",
      en: "Minutes of Meetings"
    },
    content: {
      ar: `
- يتوجب على أمين سر المجلس إعداد وتوزيع مسودة محضر الاجتماع خلال خمسة عشر (15) يوم عمل بعد الاجتماع.
- يجب أن تتضمن محاضر اجتماعات المجلس – على الأقل – المعلومات التالية:
  • الاسم الكامل للشركة ومقرها.
  • مكان وتاريخ ووقت الاجتماع.
  • جدول أعمال الاجتماع.
  • أسماء الأشخاص الحاضرين في الاجتماع وبيان تحقق النصاب.
  • أسماء أعضاء المجلس غير الحاضرين الذين أرسلوا آراء خطية – إن وجدت.
  • المواضيع التي تم التصويت عليها ونتائج التصويت على أساس فردي، بما في ذلك الاعتراضات والامتناع عن التصويت (مع بيان الأسباب عند وجودها).
  • القرارات المتخذة.
  • إرفاق جميع الوثائق المقدمة خلال الاجتماع.
  • تحديد الشخص أو الأشخاص المسؤولين عن تنفيذ القرارات المتخذة من قبل المجلس.
- تُسجّل محاضر اجتماعات المجلس وتوقَّع من رئيس المجلس وأمين السر وجميع الأعضاء المشاركين في الاجتماع، ويفضل توثيق التوقيعات إلكترونيًا حيثما أمكن.
- يتعين على المجلس في بداية كل سنة تحديد جدول زمني لاستلام تقارير اللجان المعنية ومراجعي الحسابات الداخليين والخارجيين، وضمان وجود آلية لجمع وإعداد وتقديم التقارير والبيانات وفقًا للسياسات الداخلية المعتمدة.
- يتوجب على المجلس – من خلال أمين السر – تزويد مراجعي الحسابات الخارجيين عند الطلب بنسخ من محاضر اجتماعات المجلس.
- يجب توفير نسخ من محاضر الاجتماعات للمساهمين – بناءً على طلبهم – في مقر الشركة خلال ساعات العمل الرسمية ولأغراض الاطلاع فقط.
- يجب حفظ محاضر اجتماعات المجلس في المقر المسجل للشركة، وتُكتب باللغة العربية مع إمكانية توفير ترجمة بلغات أخرى عند الطلب.  
    `.trim(),
      en:`
- The Board Secretary shall prepare and circulate a draft of the minutes within fifteen (15) business days after each Board meeting.
- The minutes of Board meetings shall include at least the following information:
  • The full legal name and registered address of the Company.
  • The place, date, and time of the meeting.
  • The meeting agenda.
  • Names of attendees and confirmation of quorum.
  • Names of Board members who did not attend but submitted written views, if any.
  • The matters put to vote and the voting results on an individual basis, including objections and abstentions (with reasons where applicable).
  • The resolutions passed.
  • All documents submitted during the meeting as attachments.
  • Identification of the person(s) responsible for implementing each Board resolution.
- The meeting minutes shall be recorded and signed by the Chair, the Secretary, and all members present at the meeting, and electronic signatures may be used where appropriate.
- At the beginning of each year, the Board shall establish a timetable for receiving reports from the relevant committees and from internal and external auditors, and shall ensure that there is a mechanism for compiling, preparing, and submitting reports and data in accordance with the approved internal policies.
- Through the Board Secretary, the Board shall provide external auditors, upon request, with copies of the Board minutes.
- Copies of the minutes shall be made available to shareholders, upon request, at the Company’s registered office during official working hours for review purposes only.
- Board minutes shall be kept at the Company’s registered office and shall be drafted in Arabic, with the option to provide translations into other languages upon request.
    `.trim()
  }
  },

  {
id: "remuneration_and_compensation_policy",
    category: "board",
    title: {
      ar: "سياسة المكافآت والتعويضات",
      en: "Remuneration and Compensation Policy"
    },
    content: {
      ar: `
يتم دفع مكافآت وتعويضات لأعضاء مجلس الإدارة وفقًا للسياسة المعتمدة من قبل الشركة، وبما لا يتعارض مع الأنظمة واللوائح ذات الصلة.  
    `.trim(),
      en:`
Remuneration and compensation for Board members shall be paid in accordance with the remuneration policy approved by the Company and in a manner that does not conflict with applicable laws and regulations.
    `.trim()
  }
  },

  {
id: "duties_of_board_members",
    category: "board",
    title: {
      ar: "واجبات أعضاء المجلس",
      en: "Duties of Board Members"
    },
    content: {
      ar: `
على أعضاء مجلس الإدارة – بمن فيهم الرئيس – عند ممارستهم لحقوقهم وأدائهم لواجباتهم مراعاة ما يلي:
- واجب الولاء: التصرف في جميع قراراتهم بشكل معقول وبحسن نية وعلى نحو يخدم مصالح الشركة ومساهميها، وذلك بدراسة جميع المعلومات المتاحة بعناية واتخاذ قرارات متأنية ومتوازنة.
- المشاركة النشطة: المشاركة بفعالية في اجتماعات المجلس واللجان المنبثقة عنه والأعمال المكلفين بها.
- طلب التوضيحات: السعي للحصول على الإيضاحات اللازمة وطرح الأسئلة حول المسائل غير الواضحة أو التي تتطلب مزيدًا من التفصيل.
- الإبلاغ عن الغياب: إخطار المجلس مسبقًا بعدم القدرة على حضور الاجتماعات مع توضيح أسباب الغياب.
- تجنب تضارب المصالح، ويشمل ذلك:
  • الإفصاح: إبلاغ رئيس المجلس فورًا وبشكل خطي عن أي مصلحة مالية أو غير مالية (مباشرة أو غير مباشرة) قد تؤثر على قدرة العضو على اتخاذ قرارات مستقلة.
  • الهدايا: عدم قبول هدايا أو خدمات أو منافع من أشخاص أو جهات قد يُفهم منها أنها تهدف للتأثير على قرارات العضو أو تصرفاته الرسمية.
  • السرية: عدم الإفصاح عن أي معلومات سرية أو داخلية أو معلومات رسمية أخرى اطلع عليها العضو بحكم عضويته في المجلس.
- التدريب: المشاركة في برامج التدريب التي توفرها الشركة لمساعدة أعضاء المجلس على أداء واجباتهم بكفاءة.
- التقييم: الخضوع لتقييم دوري لأدائهم كأعضاء في المجلس.
- الاستقالة: تقديم استقالتهم في حال عدم قدرتهم على أداء واجباتهم بشكل فعال.  
    `.trim(),
      en:`
In exercising their rights and performing their duties, Board members – including the Chair – must observe the following:
- Duty of loyalty: Acting reasonably and in good faith in all decisions, in a manner that serves the best interests of the Company and its shareholders, by carefully reviewing all available information and making balanced and well-considered decisions.
- Active participation: Actively participating in Board and committee meetings and in any tasks assigned to them.
- Seeking clarification: Endeavoring to obtain necessary clarifications and asking questions on any matters that are unclear or require further detail.
- Reporting absences: Informing the Board in advance of any inability to attend meetings and explaining the reasons for such absence.
- Avoiding conflicts of interest, including:
  • Disclosure: Promptly and in writing notifying the Chair of any financial or non-financial interest (direct or indirect) that may affect the member’s ability to make independent decisions.
  • Gifts: Refraining from accepting gifts, services, or benefits from any persons or entities that could be perceived as aiming to influence the member’s official decisions or actions.
  • Confidentiality: Refraining from disclosing any confidential, inside, or official information obtained by virtue of Board membership.
- Training: Participating in training programs provided by the Company to help Board members perform their duties effectively.
- Evaluation: Undergoing periodic evaluations of their performance as Board members.
- Resignation: Submitting their resignation if they are no longer able to perform their duties effectively.
    `.trim()
  }
  },

  {
id: "authorities_and_responsibilities",
    category: "board",
    title: {
      ar: "الصلاحيات والمسؤوليات",
      en: "Authorities and Responsibilities"
    },
    content: {
      ar: `
- يُعد مجلس الإدارة الهيئة الحاكمة للشركة، وهو مسؤول عن وضع إستراتيجية الشركة وأولويات أعمالها، إضافة إلى مسؤوليته عن توجيه الإدارة ومراقبتها. ويتحمل المجلس مسؤولية توفير القيادة والرؤية للشركة والإشراف على الإدارة بما يحقق مصالح المساهمين.
- رغم أن المجلس يفوض الإدارة التنفيذية – من خلال الرئيس التنفيذي – بإدارة الأعمال اليومية للشركة، إلا أن المجلس يظل الجهة المناط بها المسؤولية الائتمانية النهائية تجاه المساهمين لضمان سلامة عمليات الشركة.
- مع عدم الإخلال بالاختصاصات المقررة للجمعية العامة، يتمتع مجلس الإدارة بالصلاحيات الكاملة لإدارة أعمال الشركة والإشراف على شؤونها داخل وخارج المملكة.

وفي سياق مسؤوليته عن إدارة الشركة، تشمل مهام ومسؤوليات مجلس الإدارة – على سبيل المثال لا الحصر – ما يلي:

أولًا: في مجال الحوكمة والاستراتيجية:
- توجيه وتحديد ومراقبة إستراتيجية الشركة وأولويات الأعمال، بما في ذلك الخطط المالية والتجارية السنوية والأهداف التشغيلية ومؤشرات الأداء، استنادًا إلى توصيات اللجان المختصة.
- وضع أنظمة وضوابط للرقابة الداخلية والإشراف العام عليها.
- إعداد سياسات ومعايير وإجراءات واضحة ومحددة للعضوية في مجلس الإدارة، ووضعها موضع التنفيذ بعد إقرار الجمعية العامة لها.
- وضع سياسة مكتوبة تنظم العلاقة مع أصحاب المصالح.
- وضع السياسات والإجراءات التي تضمن تقيد الشركة بالأنظمة واللوائح، والتزامها بالإفصاح عن المعلومات الجوهرية للمساهمين وأصحاب المصالح، والتحقق من تقيد الإدارة التنفيذية بها.
- الإشراف على إدارة المركز المالي والتدفقات النقدية للشركة وعلاقتها المالية والائتمانية مع الغير.
- إعداد القوائم المالية السنوية والمرحلية واعتمادها قبل نشرها.
- تشكيل لجان متخصصة منبثقة عن المجلس بقرارات تحدد نطاق عملها وصلاحياتها ومسؤولياتها وآلية رقابة المجلس عليها، بما في ذلك تسمية أعضائها وتحديد مهامهم وحقوقهم وواجباتهم، مع تقييم أداء هذه اللجان وأعضائها دوريًا.
- تحديد أنواع المكافآت التي تمنح للعاملين في الشركة – مثل المكافآت الثابتة والمتغيرة والمكافآت المرتبطة بالأداء أو على شكل أسهم – بما لا يتعارض مع الأنظمة ذات الصلة.
- تعيين الرئيس التنفيذي وتقييم أدائه واتخاذ الإجراءات المناسبة بشأنه، بما في ذلك التخطيط للتعاقب في هذا المنصب.
- الموافقة على إنشاء الفروع والمكاتب التمثيلية وتصفيتها، واعتماد سياسات وإجراءات عمل الفروع والمكاتب.
- مراجعة المقترحات المتعلقة بالمبادرات الاستراتيجية لتطوير الأعمال، بما في ذلك عمليات الدمج أو الاستحواذ، واتخاذ القرارات المناسبة بشأنها.
- التأكد من تحقيق توازن مناسب بين الربحية قصيرة الأجل واستدامة الشركة طويلة الأجل.
- الموافقة على الهيكل التنظيمي للإدارة العليا والقطاعات الرئيسية بالشركة، وتزويد الجهات المختصة به خلال المدد النظامية.
- تعزيز مستوى حوكمة الشركة والتأكد من الامتثال للأنظمة واللوائح المعمول بها.

ثانيًا: في مجال إعداد وعقد اجتماعات الجمعية العامة:
- تحديد شكل الاجتماع السنوي للجمعية العامة (حضوري/افتراضي/مدمج).
- تحديد تاريخ ومكان ووقت بدء الاجتماع ووقت تسجيل الحضور.
- الموافقة على جدول أعمال الاجتماع.
- تحديد إجراءات إخطار المساهمين وتزويدهم بالمعلومات اللازمة قبل الاجتماع.
- الموافقة على صيغة ونص بطاقة التصويت.
- إعداد تقرير مجلس الإدارة واعتماده قبل نشره للمساهمين.
- دراسة اقتراحات المساهمين المتعلقة بجدول الأعمال وقوائم المرشحين لعضوية المجلس أو غيره من المناصب المنتخبة.
- التأكد من تضمين جدول الأعمال لجميع البنود الجوهرية المطلوب عرضها على الجمعية.
- دعوة الجمعية العامة للاجتماع بناءً على طلب مراجع الحسابات أو مساهمين يملكون النسبة النظامية.
- دراسة طلبات الدعوة للاجتماع واتخاذ قرار بالموافقة أو الرفض خلال المدد النظامية، مع إبلاغ الجهات المختصة والمساهمين بأسباب القرار.

ثالثًا: في مجال الأوراق المالية والأصول:
- الموافقة على التقارير المتعلقة بإعادة شراء الشركة لأسهمها (إن وجدت) وفقًا للأنظمة.
- اتخاذ القرارات المتعلقة بإصدارات السندات والصكوك غير القابلة للتحويل – وفقًا للمتطلبات النظامية.
- الموافقة على المعاملات الجوهرية غير العادية التي تشمل أصولًا تتجاوز نسبة معينة من القيمة الدفترية لأصول الشركة، وفق ما تحدده الأنظمة.
- تقديم التوصيات للجمعية العامة بشأن توزيعات الأرباح وإجراءات دفعها.

رابعًا: في مجال تنظيم عمل المجلس:
- تكوين لجان دائمة أو مؤقتة تابعة للمجلس.
- وضع أسس ومعايير تقييم أداء أعضاء المجلس.
- تفويض بعض الصلاحيات – في الحدود النظامية – للأعضاء أو اللجان أو الرئيس التنفيذي وفق ضوابط واضحة.
- تحديد شروط تعيين الرئيس التنفيذي وأمين سر المجلس.
- الاطلاع على محاضر وقرارات اللجان الفرعية واعتماد ما يلزم منها أو إلغائه.
- طلب إجراء فحوصات خاصة للعمليات المالية أو التشغيلية عند الحاجة.
- طلب تقارير أو بيانات إضافية من الإدارة التنفيذية من أجل تمكين المجلس من أداء مهامه.

خامسًا: في مجال السياسات الداخلية والرقابة:
- الموافقة على السياسات الأساسية للشركة، مثل:
  • سياسة إدارة المخاطر.
  • سياسة تقنية المعلومات.
  • سياسات وضوابط الرقابة الداخلية.
- اعتماد سياسات حوكمة العمليات بالفروع والمكاتب.
- اتخاذ القرارات بشأن المعاملات التي تتم خارج الخطة المالية أو خطة الأعمال المعتمدة (المعاملات غير العادية).
- التأكد من امتلاك المجلس للمعلومات اللازمة من الإدارات التنفيذية وأصحاب المصلحة الداخليين الرئيسيين لأداء مهامه.
- المشاركة في تحديد المخاطر الرئيسية التي تواجه الشركة وتحقيق توازن بين المخاطر والعوائد المحتملة، والإشراف على تنفيذ أنظمة إدارة المخاطر.
- اعتماد آليات التواصل الفعال مع المساهمين وأصحاب المصالح والجمهور.
- التأكد من سلامة نظام الرقابة الداخلية وأنظمة المعلومات.
- وضع الإجراءات الكفيلة بتمكين المجلس من العمل باستقلالية عن الإدارة التنفيذية.
- الموافقة على المستحقات المالية ومزايا موظفي الشركة وفقًا للسياسات المعتمدة.
- دراسة أداء الشركة في ضوء الخطط والموازنات التقديرية المعتمدة، وطلب التوضيحات اللازمة عند وجود انحرافات جوهرية.
- متابعة التغيرات في البيئة النظامية والرقابية التي قد تؤثر على الشركة.
- إعداد التقارير النظامية المطلوبة من الجهات المختصة.
- إخطار الجهات الرقابية المختصة عند حدوث تغييرات جوهرية في تشكيل المجلس أو الإدارة العليا، وفقًا للأنظمة.  
    `.trim(),
      en:`
- The Board of Directors is the governing body of the Company and is responsible for setting the Company’s strategy and business priorities, in addition to guiding and overseeing management. The Board provides leadership and vision and supervises management in a way that serves the interests of the shareholders.
- Although the Board delegates day-to-day management of the Company to the executive management through the Chief Executive Officer, it retains ultimate fiduciary responsibility towards the shareholders for the soundness of the Company’s operations.
- Without prejudice to the powers reserved to the General Assembly, the Board shall have full authority to manage the Company’s business and oversee its affairs inside and outside the Kingdom.

In discharging its responsibility for managing the Company, the Board’s duties and responsibilities shall include, by way of example and not limitation, the following:

First: In the area of governance and strategy:
- Directing, defining, and monitoring the Company’s strategy and business priorities, including annual financial and commercial plans, operational objectives, and performance indicators, based on the recommendations of the relevant committees.
- Establishing internal control systems and overseeing their effectiveness.
- Preparing clear and well-defined policies, criteria, and procedures for Board membership and implementing them after approval by the General Assembly.
- Establishing a written policy governing the relationship with stakeholders.
- Developing policies and procedures to ensure the Company’s compliance with applicable laws and regulations, and its commitment to disclosing material information to shareholders and stakeholders, and ensuring that executive management complies with these policies.
- Overseeing the management of the Company’s financial position and cash flows, and its financial and credit relationships with third parties.
- Preparing annual and interim financial statements and approving them prior to publication.
- Establishing specialized committees from among its members and defining their mandates, powers, responsibilities, and oversight mechanisms, including naming their members and defining their duties and rights, and periodically assessing the performance of these committees and their members.
- Determining types of remuneration granted to the Company’s employees – such as fixed and variable remuneration, performance-linked incentives, or share-based awards – in a manner that does not conflict with relevant regulations.
- Appointing the Chief Executive Officer, evaluating his performance, and taking appropriate actions in respect of succession planning for this position.
- Approving the establishment and liquidation of branches and representative offices, and adopting related policies and procedures.
- Reviewing and approving strategic business development initiatives, including mergers and acquisitions.
- Ensuring a proper balance between short-term profitability and long-term sustainability of the Company.
- Approving the organizational structure of senior management and major functions, and providing it to the competent authorities within statutory time limits.
- Enhancing the level of corporate governance and ensuring compliance with applicable laws and regulations.

Second: In relation to preparation and holding of General Assembly meetings:
- Determining the format of the annual General Assembly meeting (physical/virtual/hybrid).
- Setting the date, place, and time of the meeting and the timing for registration of attendees.
- Approving the meeting agenda.
- Defining procedures for notifying shareholders and providing them with the necessary information prior to the meeting.
- Approving the form and text of the voting ballot.
- Preparing and approving the Board’s report prior to its publication to shareholders.
- Reviewing shareholder proposals concerning the meeting agenda and candidate lists for Board or other elective positions.
- Ensuring that the agenda includes all material items required to be presented to the General Assembly.
- Calling the General Assembly to convene upon request from the external auditor or from shareholders holding the statutory percentage.
- Reviewing requests to convene the General Assembly and deciding whether to approve or reject such requests within statutory time limits, and notifying the competent authorities and shareholders of the reasons for the decision.

Third: In relation to securities and assets:
- Approving reports relating to any buyback of the Company’s shares (if applicable) in accordance with relevant regulations.
- Taking decisions regarding the issuance of non-convertible bonds or sukuk, as permitted by law.
- Approving material non-ordinary transactions involving assets that exceed a specified percentage of the Company’s book value, in accordance with applicable regulations.
- Making recommendations to the General Assembly regarding dividend distributions and the procedures for payment.

Fourth: In relation to Board operations:
- Establishing permanent or temporary committees reporting to the Board.
- Setting criteria and standards for evaluating the performance of Board members.
- Delegating certain powers – within statutory limits – to Board members, committees, or the Chief Executive Officer pursuant to clear parameters.
- Determining the terms of appointment of the Chief Executive Officer and the Board Secretary.
- Reviewing minutes and resolutions of Board committees and ratifying or revoking them as appropriate.
- Requesting special reviews of the Company’s financial or operational activities when necessary.
- Requesting additional reports or data from executive management to enable the Board to perform its functions.

Fifth: In relation to internal policies and control:
- Approving the Company’s key policies, such as:
  • Risk Management Policy.
  • Information Technology Policy.
  • Internal control policies and procedures.
- Adopting governance policies for the operations of branches and offices.
- Deciding on transactions concluded outside the approved financial plan or business plan (non-ordinary transactions).
- Ensuring that Board members obtain the necessary information from executive management and key internal stakeholders to perform their duties.
- Participating in the identification of key risks facing the Company and ensuring a sound balance between risks and potential returns, and overseeing the implementation of risk management systems.
- Approving effective communication mechanisms with shareholders, stakeholders, and the public.
- Ensuring the soundness of internal control systems and management information systems.
- Establishing procedures to ensure that the Board operates independently of executive management.
- Approving the financial benefits and entitlements of Company employees in line with approved policies.
- Reviewing the Company’s performance against approved plans and budgets and seeking clarifications when there are material deviations.
- Monitoring changes in the legal and regulatory environment that may affect the Company.
- Preparing mandatory regulatory reports required by competent authorities.
- Notifying regulators of any material changes in the composition of the Board or senior management, in accordance with applicable laws.
    `.trim()
  }
  },

  {
id: "audit_committee",
    category: "board",
    title: {
      ar: "لجنة المراجعة",
      en: "Audit Committee"
   },
    content: {
      ar: `
- يتحمل مجلس الإدارة المسؤولية الكاملة عن أعمال لجنة المراجعة وفقًا للأنظمة المعتمدة لدى الشركة.
- المجلس مسؤول عن ضمان كفاءة وفعالية أنظمة الرقابة والتقارير المالية بهدف حماية أصول الشركة.
- يجب على المجلس:
  • توفير كل ما يلزم لتسهيل عمل لجنة المراجعة، وإدارة المراجعة الداخلية، ووظائف المطابقة والالتزام.
  • ضمان وجود هيكل تنظيمي مناسب، وسياسات داخلية فعّالة، وأنظمة محاسبية مطبقة تُراجع دوريًا.
  • التأكد من وجود نظام ومنهجية واضحة لإصدار التقارير حول الموضوعات الواقعة ضمن اختصاص لجنة المراجعة.
  • صياغة مسؤوليات ومهام لجنة المراجعة ودمجها في محاضر المجلس، بما في ذلك سلطة اللجنة في التحقيق في أي نشاط ضمن اختصاصها والحصول على أي معلومات لازمة.
  • متابعة عمل لجنة المراجعة والتأكد من تنفيذ المسؤوليات والواجبات المسندة إليها.
  • مناقشة القضايا ذات الصلة مع لجنة المراجعة، بما في ذلك التقارير والنتائج التي تتوصل إليها.
  • ضمان متابعة لجنة المراجعة لأحدث التطورات في المعايير المحاسبية.
  • ضمان قيام لجنة المراجعة بدورها الرقابي والإشرافي دون ممارسة أي مهام تنفيذية أو اتخاذ قرارات إدارية تشغيلية.  
    `.trim(),
      en:`
- The Board of Directors bears full responsibility for the work of the Audit Committee in accordance with the regulations adopted by the Company.
- The Board is responsible for ensuring the efficiency and effectiveness of financial control and reporting systems in order to protect the Company’s assets.
- The Board shall:
  • Provide all necessary support to facilitate the work of the Audit Committee, internal audit, and compliance functions.
  • Ensure that an appropriate organizational structure, effective internal policies, and functioning accounting systems are in place and periodically reviewed.
  • Ensure that there is a clear system and methodology for issuing reports on matters within the Audit Committee’s remit.
  • Clearly define the responsibilities and duties of the Audit Committee in Board minutes, including its authority to investigate any activity within its scope and to obtain all necessary information.
  • Monitor the work of the Audit Committee and ensure that it discharges its assigned responsibilities and duties.
  • Discuss relevant matters with the Audit Committee, including the reports and conclusions it reaches.
  • Ensure that the Audit Committee keeps abreast of developments in accounting standards.
  • Ensure that the Audit Committee carries out its oversight and supervisory role without undertaking executive tasks or making operational management decisions.
    `.trim()
  }
  },

  {
id: "risk_management",
    category: "board",
    title: {
      ar: "إدارة المخاطر",
      en: "Risk Management"
     },
    content: {
      ar: `
تطبق الشركة سياسة إدارة المخاطر المعتمدة من قبل مجلس الإدارة، والتي توضح إطار إدارة المخاطر في الشركة، وتمكِّن المجلس من الإشراف على أعمال الإدارة العليا في إدارة المخاطر التشغيلية والاستثمارية والقانونية ومخاطر السمعة وغيرها من المخاطر التي قد تواجه الشركة.  
    `.trim(),
      en:`
The Company applies a Risk Management Policy approved by the Board of Directors, which sets out the risk management framework within the Company and enables the Board to oversee senior management’s handling of operational, investment, legal, reputational, and other risks facing the Company.
    `.trim()
  }
  },

  {
id: "investment_management",
    category: "board",
    title: {
      ar: "إدارة الاستثمار",
      en: "Investment Management"
    },
    content: {
      ar: `
يتولى مجلس الإدارة مسؤولية الموافقة على السياسة الاستثمارية للشركة، مع الأخذ في الاعتبار العلاقة بين الأصول والخصوم وقدرة الشركة على تحمل المخاطر بوجه عام، بما في ذلك:
- مخاطر السوق.
- مخاطر العملات.
- مخاطر الائتمان.
- مخاطر السيولة.  
    `.trim(),
      en:`
The Board of Directors is responsible for approving the Company’s investment policy, taking into account the relationship between assets and liabilities and the Company’s overall risk-bearing capacity, including:
- Market risk.
- Currency risk.
- Credit risk.
- Liquidity risk.
    `.trim()
  }
  },

  {
id: "board_responsibility_for_financial_statements",
    category: "board",
    title: {
      ar: "مسؤولية المجلس تجاه القوائم المالية",
      en: "Board Responsibility for Financial Statements"
   },
    content: {
      ar: `
يتحمل مجلس الإدارة مسؤولية إعداد التقرير السنوي والقوائم المالية للشركة، ويجب إعداد هذه القوائم وفقًا للمتطلبات النظامية للجهات الرقابية ذات العلاقة في المملكة العربية السعودية والمعايير المحاسبية المعتمدة.  
    `.trim(),
      en:`
The Board of Directors is responsible for preparing the Company’s annual report and financial statements in accordance with the regulatory requirements of the relevant authorities in the Kingdom of Saudi Arabia and the applicable accounting standards.
    `.trim()
  }
  },

  {
id: "board_responsibility_for_internal_audit",
    category: "board",
    title: {
      ar: "مسؤولية المجلس تجاه المراجعة الداخلية",
      en: "Board Responsibility for Internal Audit"
    },
    content: {
      ar: `
- يجب على المجلس – من خلال لجنة المراجعة – التأكد من أن وظيفة المراجعة الداخلية في الشركة قادرة على تقديم مشورة موضوعية ومستقلة للإدارة العليا وللمجلس نفسه.
- يجب أن تغطي هذه المشورة تقييم إدارة الشركة للمخاطر التي تواجه أعمالها، وإثبات كفاية تصميم وتشغيل ضوابط إدارة المخاطر، ومدى الالتزام بالسياسات والإجراءات وقواعد السلوك المهني.  
    `.trim(),
      en:`
- Through the Audit Committee, the Board must ensure that the internal audit function is capable of providing objective and independent advice to senior management and to the Board itself.
- Such advisory work shall cover the Company’s management of risks affecting its business, the adequacy of the design and operation of risk management controls, and the level of compliance with policies, procedures, and professional codes of conduct.
    `.trim()
  }
  },

  {
id: "internal_control_framework",
    category: "board",
    title: {
      ar: "إطار الرقابة الداخلية",
      en: "Internal Control Framework"
    },
    content: {
      ar: `
يجب على الشركة تفعيل نظام رقابة داخلية فعال للتأكد من الالتزام بالأنظمة والسياسات والإجراءات الداخلية، وضمان سلامة العمليات والبيانات المالية والتشغيلية.  
   `.trim(),
      en:`
The Company must implement an effective internal control system to ensure compliance with laws, regulations, and internal policies and procedures, and to ensure the integrity of its financial and operational processes and data.
    `.trim()
  }
  },

  {
id: "external_audit",
    category: "board",
    title: {
      ar: "المراجعة الخارجية",
      en: "External Audit"
    },
    content: {
      ar: `
الأهداف:
- يواجه مجلس الإدارة ولجنة المراجعة مسؤولية متزايدة في الإشراف على عملية إعداد القوائم المالية.
- يشكل التدقيق المتصاعد من جانب الجهات التنظيمية ضغطًا على جميع مستويات الإدارة.
- في ضوء هذه التحديات، يصبح من الضروري تكليف مراجعي حسابات خارجيين موثوق بهم ويتمتعون بالكفاءة المهنية العالية.

التعيين:
- على مجلس الإدارة، بناءً على توصية لجنة المراجعة، اقتراح ثلاثة (3) من مكاتب المراجعة المرخص لها بالعمل في المملكة العربية السعودية كمراجعين خارجيين للشركة، على أن يتم اختيار أحدها من قبل الجمعية العامة كمراجع حسابات للشركة.

السلوك الأخلاقي:
- تعمل الشركة على وضع المبادئ المتصلة بسياسة الأخلاقيات المهنية لأعضاء مجلس الإدارة وجميع الموظفين، وتحديثها عند الحاجة، بما يعزز ثقافة السلوك الأخلاقي في الشركة.
- يلتزم أعضاء مجلس الإدارة وجميع الموظفين بأعلى معايير السلوك الأخلاقي في تعاملاتهم داخل الشركة ومع الأطراف الخارجية.  
    `.trim(),
      en:`
Objectives:
- The Board of Directors and the Audit Committee face increasing responsibility for overseeing the preparation of the Company’s financial statements.
- Heightened scrutiny by regulators places additional pressure on all levels of management.
- In light of these challenges, it is essential to appoint highly competent and trustworthy external auditors.

Appointment:
- Based on the recommendation of the Audit Committee, the Board shall propose three (3) audit firms licensed to operate in the Kingdom of Saudi Arabia as candidates for appointment as the Company’s external auditor. One of these firms shall then be selected by the General Assembly as the Company’s external auditor.

Ethical Conduct:
- The Company shall develop and, when necessary, update principles related to its professional ethics policy for Board members and all employees in order to promote a culture of ethical behavior.
- Board members and all employees must adhere to the highest standards of ethical conduct in their dealings within the Company and with external parties.
    `.trim()
  }
  },

  {
id: "corporate_citizenship",
    category: "board",
    title: {
      ar: "مواطنة الشركة",
      en: "Corporate Citizenship"
    },
    content: {
      ar: `
السياسة البيئية:
- على الشركة الحرص على متابعة تحديثات أنظمة البيئة والصحة والسلامة.
- يجب على الشركة إجراء المراجعات الدورية وتنفيذ الإجراءات اللازمة للامتثال للمتطلبات البيئية والصحية وتحديد أهداف لتحسين الأداء.
- تعمل الشركة على دمج اعتبارات الصحة والسلامة في قرارات الأعمال لضمان سلامة الموظفين وتعزيز استدامة الممارسات البيئية.

السياسات المتعلقة بخدمة المجتمع والمسؤولية الاجتماعية:
- تتمثل المسؤولية المجتمعية للشركة في استمرار التزامها بالسلوك الأخلاقي والمساهمة في التنمية الاقتصادية، مع تحسين مستوى ونوعية حياة العاملين لديها وعائلاتهم والمجتمع المحلي والمجتمع ككل.
- تهدف الشركة إلى إيجاد سبل لبناء قدرات المجتمع ودعم استدامة مصادر العيش، من خلال رعاية المبادرات والفعاليات والأنشطة الخيرية.
- تحترم الشركة الفروقات الثقافية وتعمل على إيجاد فرص عمل تستثمر مهارات الموظفين وتسهم في تنمية المجتمع.  
    `.trim(),
      en:`
Environmental Policy:
- The Company shall diligently monitor updates to environmental, health, and safety regulations.
- The Company must conduct periodic reviews and implement necessary measures to comply with environmental and health requirements and set targets for performance improvement.
- The Company shall integrate health and safety considerations into business decisions to ensure the safety of employees and promote sustainable environmental practices.

Community Service and Social Responsibility Policies:
- The Company’s social responsibility lies in its ongoing commitment to ethical conduct and contribution to economic development while improving the quality of life of its employees, their families, the local community, and society at large.
- The Company aims to build community capacity and support sustainable livelihoods through sponsoring initiatives, events, and charitable activities.
- The Company respects cultural differences and seeks to create employment opportunities that harness employees’ skills and contribute to community development.
    `.trim()
  }
  },

  {
id: "performance_measurement_and_accountability",
    category: "board",
    title: {
      ar: "قياس الأداء والمحاسبة",
      en: "Performance Measurement and Accountability"
    },
    content: {
      ar: `
- على مجلس الإدارة إجراء تقييم رسمي وقوي سنويًا لأدائه وأداء اللجان المنبثقة عنه وأداء أعضاء المجلس كل على حدة، إضافة إلى تقييم أداء الإدارة التنفيذية.
- يهدف التقييم الفردي إلى تحديد ما إذا كان كل عضو لا يزال يساهم بفعالية ويلتزم بمهامه، بما في ذلك تخصيص الوقت الكافي لاجتماعات المجلس واللجان وأي واجبات أخرى.
- على رئيس المجلس اتخاذ الإجراءات المناسبة في ضوء نتائج تقييم الأداء، وذلك من خلال:
  • الإقرار بمواطن القوة.
  • معالجة جوانب الضعف في المجلس واللجان.
  • اقتراح تعيين أعضاء جدد عند الحاجة.  
    `.trim(),
      en:`
- The Board of Directors shall conduct a formal and robust annual evaluation of its own performance, the performance of its committees, each individual Board member, and the executive management.
- The individual evaluation aims to determine whether each member continues to contribute effectively and remains committed to his or her duties, including dedicating sufficient time for Board and committee meetings and other responsibilities.
- The Chair of the Board shall take appropriate action based on the results of the performance evaluation by:
  • Recognizing areas of strength.
  • Addressing areas of weakness in the Board and its committees.
  • Proposing the appointment of new members where necessary.
    `.trim()
  }
  },

  {
id: "commitment_to_the_governance_framework",
    category: "board",
    title: {
      ar: "الالتزام بإطار الحوكمة",
      en: "Commitment to the Governance Framework"
     },
    content: {
      ar: `
تعريف آلية المتابعة:
- إن وجود مجلس إدارة فعّال ومهني يعد أمرًا ضروريًا لتحقيق حوكمة جيدة للشركة، ولا يمكن للمجلس أن يحل محل الإدارة التنفيذية الموهوبة أو يغير البيئة الاقتصادية التي تعمل فيها الشركة، لكنه يستطيع التأثير في أداء الشركة من خلال الإشراف الاستراتيجي والرقابة على الإدارة.
- قد لا يلاحظ أثر أعمال المجلس في الأوقات التي يكون فيها الأداء الاقتصادي جيدًا، لكن عند مواجهة التحديات تصبح أهمية المجلس واضحة ويكون في دائرة الاهتمام.
- يفوض مجلس الإدارة بعض صلاحيات الإشراف في المجالات الرئيسة إلى اللجان التابعة له، والتي ترفع تقارير إلى المجلس متضمنة تحليلات وتوصيات.
- إضافة إلى ذلك، يفوض المجلس مسؤولية تنفيذ وتحقيق الخطط والأهداف إلى الإدارة التنفيذية، مع قيام المجلس بوضع وتنفيذ أدوات وآليات الحوكمة والإشراف والمتابعة لأداء مسؤولياته.  
    `.trim(),
      en:`
Definition of the Monitoring Mechanism:
- An effective and professional Board of Directors is essential for good corporate governance. While the Board cannot replace talented executive management or alter the economic environment in which the Company operates, it can influence performance through strategic oversight and supervision of management.
- The impact of the Board’s work may go unnoticed when economic conditions are favorable, but in times of challenge, the importance of the Board becomes clear and it moves to the forefront of attention.
- The Board delegates certain oversight responsibilities in key areas to its committees, which report back to the Board with analyses and recommendations.
- In addition, the Board delegates responsibility for implementing and achieving plans and objectives to executive management while establishing and applying governance, oversight, and monitoring tools to fulfill its responsibilities.
    `.trim()
  }
  },

  {
id: "compliance_with_regulatory_requirements",
    category: "board",
    title: {
      ar: "الالتزام بالمتطلبات النظامية",
      en: "Compliance with Regulatory Requirements"
     },
    content: {
      ar: `
كجزء من واجباته تجاه الالتزام بالمتطلبات النظامية، على مجلس الإدارة التأكد مما يلي:
- طلب تحديثات مستمرة من الرئيس التنفيذي و/أو اللجان المعنية و/أو أمين سر المجلس بشأن أي تغييرات في المتطلبات النظامية التي تؤثر على الشركة، وضمان إحاطة المجلس بأحدث التطورات في البيئة التنظيمية والسوق.
- إبلاغ المجلس بأي تحذيرات أو جزاءات تنظيمية – إن وجدت – ومناقشة أسبابها وكيفية معالجتها.
- الاطلاع على نتائج أي فحوصات أو مراجعات تقوم بها الجهات الرقابية وأخذ ملاحظاتها في الاعتبار، واتخاذ الإجراءات التصحيحية عند الحاجة.  
    `.trim(),
      en:`
As part of its duties with respect to compliance with regulatory requirements, the Board of Directors shall ensure the following:
- Continuously requesting updates from the Chief Executive Officer and/or relevant committees and/or the Board Secretary regarding changes in regulatory requirements affecting the Company, and ensuring that the Board is informed of the latest developments in the regulatory and market environment.
- Being informed of any regulatory warnings or sanctions – if any – and discussing their causes and the corrective measures to be taken.
- Reviewing the results of any inspections or reviews conducted by regulatory authorities, considering their observations, and taking corrective actions when necessary.
    `.trim()
  }
  },

  {
id: "fraud_prevention",
    category: "board",
    title: {
      ar: "منع الاحتيال",
      en: "Fraud Prevention"
     },
    content: {
      ar: `
- Through the Audit Committee, the Board of Directors shall assess management’s disclosures regarding fraud risks and ensure that necessary anti-fraud measures are implemented in support of a “zero tolerance” culture for fraud.
- The Board must ensure that senior management, particularly the Chief Executive Officer, takes appropriate steps to prevent and detect fraud so as to better protect investors, employees, and other stakeholders.
        `.trim()
  }
  },

  {
    id: "board_relations_with_management_and_independent_advisors",
    category: "board",
    title: {
      ar: "علاقات المجلس مع إدارة الشركة والمستشارين المستقلين",
      en: "Board Relations with Management and Independent Advisors"
     },
    content: {
      ar: `
- يجب أن يتمتع أعضاء مجلس الإدارة بحق الوصول الكامل والمباشر إلى أعضاء الإدارة التنفيذية. ويمثل الرئيس التنفيذي القناة الرئيسية للتواصل مع المجلس.
- يؤدي المجلس مسؤولياته الإشرافية من خلال مراقبة أداء الشركة عبر الرئيس التنفيذي، مع احتفاظه بالحق في التواصل المباشر مع أي من أعضاء الإدارة بشأن أي مسألة قيد الدراسة.
- على المجلس وضع قائمة بموضوعات المتابعة الرئيسة، تشمل الخطط والتحديات والبرامج، ومراقبة التقدم المحرز فيها كجزء من مسؤولياته الإشرافية.
- إذا رأى المجلس ضرورة الاستعانة بمستشارين داخليين أو خارجيين، فيجوز له – أو لأي لجنة من لجانه – تكليف المستشارين المناسبين، وتتحمل الشركة تكاليف ذلك.
- عند تعيين مراجعي الحسابات أو المستشارين، يجب اتباع الأصول التجارية السليمة، بما في ذلك الحصول على عروض أسعار ومراعاة معايير الكفاءة والخبرة والاستقلالية.  
    `.trim(),
      en:`
- Board members shall have full and direct access to members of executive management. The Chief Executive Officer is the primary channel of communication between the Board and management.
- The Board discharges its oversight responsibilities by monitoring the Company’s performance through the Chief Executive Officer while retaining the right to communicate directly with any member of management regarding matters under consideration.
- The Board shall maintain a list of key follow-up items, including plans, challenges, and programs, and shall monitor progress on these items as part of its oversight responsibilities.
- Where the Board deems it necessary to seek advice from internal or external advisors, it or any of its committees may engage appropriate advisors, and the Company shall bear the associated costs.
- In appointing auditors or advisors, sound commercial practices must be followed, including obtaining competitive proposals and considering competence, experience, and independence.
        `.trim()
  }
  },

  {
    id: "reporting_and_confidentiality",
    category: "board",
    title: {
      ar: "التقارير والسرية",
      en: "Reporting and Confidentiality"
     },
    content: {
      ar: `
- على مجلس الإدارة عرض تقرير سنوي على الجمعية العامة يتضمن – على الأقل – المعلومات التالية:
  • أنشطة الشركة.
  • المركز المالي للشركة.
  • بيانات الربح والخسارة للفترة.
  • الوضع الاقتصادي العام للشركة.
  • بيان بالمكافآت والتعويضات التي يحصل عليها موظفو الشركة وفقًا للأنظمة ذات الصلة.
  • بيان بالمكافآت والتعويضات لأعضاء مجلس الإدارة.
  • توصيات مجلس الإدارة بشأن توزيع أرباح الشركة – إن وجدت.
- على أعضاء مجلس الإدارة الحفاظ على سرية المعلومات التي يطلعون عليها بحكم عضويتهم، وعدم الإفصاح عنها إلا في الحالات المصرح بها نظامًا.
- لا يجوز للأعضاء استخدام المعلومات السرية لتحقيق منافع شخصية لهم أو لغيرهم داخل الشركة أو خارجها.
- تعتبر جميع مداولات المجلس وسجلات الشركة ومواردها والمعلومات غير المتاحة للجمهور ذات طبيعة سرية، ويجب حمايتها من الوصول غير المصرح به.
- يجب على جميع أعضاء المجلس وموظفي الشركة التوقيع على تعهدات بالسرية، والالتزام بمضمونها طوال فترة علاقتهم مع الشركة وبعد انتهائها.  
    `.trim(),
      en:`
- The Board of Directors shall present an annual report to the General Assembly that includes, at a minimum, the following information:
  • The Company’s activities.
  • The Company’s financial position.
  • Profit and loss data for the period.
  • The Company’s overall economic situation.
  • A statement of remuneration and compensation granted to Company employees in accordance with relevant regulations.
  • A statement of remuneration and compensation granted to Board members.
  • The Board’s recommendations regarding distribution of dividends, if any.
- Board members must maintain the confidentiality of information they obtain by virtue of their membership and may not disclose it except where disclosure is permitted or required by law.
- Members may not use confidential information for personal gain or for the benefit of others inside or outside the Company.
- All Board deliberations, Company records, resources, and non-public information are considered confidential and must be protected against unauthorized access.
- All Board members and Company employees must sign confidentiality undertakings and remain bound by them throughout and after the term of their relationship with the Company.
        `.trim()
  }
  },

  {
    id: "conflicts_of_Interest",
    category: "board",
    title: {
      ar: "تضارب المصالح",
      en: "Conflicts of Interest"
     },
    content: {
      ar: `
- حال انتخاب عضو لعضوية مجلس الإدارة، لا يجوز له شغل وظيفة أو موقع في أي شركة منافسة للشركة أو العمل كمستشار لها أو أن يكون عضوًا في مجلس إدارتها.
- في حال نشوء أي وضع قد يؤدي إلى تعارض مصالح، يتعين على عضو المجلس إبلاغ رئيس المجلس خلال خمسة (5) أيام عمل من العلم بذلك.
- يقوم المجلس بدراسة حالة تعارض المصالح وتقييم مدى تأثيرها على استقلالية العضو وقدرته على أداء مهامه، ويتخذ الإجراءات المناسبة وفقًا لسياسات الشركة والأنظمة ذات الصلة.  
    `.trim(),
      en:`
- Once a person is elected as a member of the Board of Directors, he may not hold a position or employment in any company that competes with the Company, act as a consultant to such a company, or serve on its board of directors.
- If any situation arises that may lead to a conflict of interest, the Board member must inform the Chair within five (5) business days of becoming aware of it.
- The Board shall review the conflict-of-interest situation, assess its impact on the member’s independence and ability to perform his duties, and take appropriate action in accordance with the Company’s policies and applicable regulations.
        `.trim()
  }
  },

  {
    id: "board_annual_report",
    category: "board",
    title: {
      ar: "التقرير السنوي لمجلس الإدارة",
      en: "Board Annual Report"
     },
    content: {
      ar: `
يجب أن يتضمن تقرير مجلس الإدارة السنوي عرضًا لأنشطته خلال السنة المالية الأخيرة، وأن يُعد وفقًا للأنظمة المعمول بها في المملكة العربية السعودية وتعليمات الجهة الرقابية المختصة، مع الالتزام بمعايير الإفصاح والشفافية.  
    `.trim(),
      en:`
The Board’s annual report must present its activities during the last financial year and must be prepared in accordance with the applicable laws in the Kingdom of Saudi Arabia and the instructions of the competent regulatory authority, while adhering to disclosure and transparency standards.
        `.trim()
  }
  },

  {
    id: "board_secretary",
    category: "board",
    title: {
      ar: "أمين سر مجلس الإدارة",
      en: "Board Secretary"
     },
    content: {
      ar: `
- يُعين مجلس الإدارة أمينًا للسر من بين أعضائه أو من غيرهم، وتحدد اختصاصاته ومكافآته بقرار من المجلس إذا لم ينص نظام الشركة الأساس على ذلك.
- تشمل اختصاصات أمين السر – على سبيل المثال لا الحصر – ما يلي:
  • توثيق اجتماعات مجلس الإدارة وإعداد محاضر لها تتضمن ما دار من نقاشات ومداولات، وبيان مكان الاجتماع وتاريخه ووقت بدئه وانتهائه، وتوثيق قرارات المجلس ونتائج التصويت، وحفظها في سجل منظم، وبيان أسماء الأعضاء الحاضرين والتحفظات التي أبدوها – إن وجدت – وتوقيع هذه المحاضر من جميع الأعضاء الحاضرين.
  • حفظ التقارير التي تُرفع إلى المجلس والتقارير التي يُعدها المجلس.
  • تزويد أعضاء المجلس بجدول الأعمال وأوراق العمل والوثائق والمعلومات المتعلقة به، وأي وثائق أو معلومات إضافية يطلبها أي من الأعضاء بشأن الموضوعات المدرجة.
  • التحقق من التزام أعضاء المجلس بالإجراءات المعتمدة من المجلس.
  • تبليغ أعضاء المجلس بمواعيد اجتماعاته قبل عقدها بمدة كافية.
  • عرض مسودات المحاضر على أعضاء المجلس لإبداء مرئياتهم قبل توقيعها.
  • التحقق من حصول الأعضاء على نسخ من المحاضر والمعلومات والوثائق المتعلقة بالشركة بشكل كامل وسريع.
  • التنسيق بين أعضاء المجلس.
  • تنظيم سجل إفصاحات أعضاء المجلس والإدارة التنفيذية وفق المتطلبات النظامية.
  • تقديم العون والمشورة إلى أعضاء المجلس في المسائل الإجرائية والتنظيمية المتعلقة بالحوكمة.
- من الناحية الوظيفية، يتبع أمين سر المجلس رئيس مجلس الإدارة، ومن الناحية الإدارية يتبع الرئيس التنفيذي – ما لم يقرر المجلس خلاف ذلك.
- لا يجوز عزل أمين السر إلا بقرار من مجلس الإدارة.  
 شروط أمين السر:
- يحدد مجلس الإدارة الشروط الواجب توافرها في أمين سر المجلس، على أن تتضمن – على الأقل – ما يلي:
  • أن يكون حاصلاً على شهادة جامعية في الحقوق أو المالية أو المحاسبة أو الإدارة أو ما يعادلها.
  • أن تكون لديه خبرة عملية ذات صلة لا تقل عن ثلاث سنوات.  
    `.trim(),
      en:`
- The Board of Directors shall appoint a Board Secretary from among its members or from outside the Board. The Board shall determine the Secretary’s powers and remuneration by resolution if not specified in the Company’s bylaws.
- The Secretary’s responsibilities shall include, by way of example and not limitation:
  • Recording Board meetings and preparing minutes that include discussions and deliberations, specifying the place, date, start and end time of the meeting, documenting resolutions and voting results, maintaining an organized register, listing attendees and any reservations they may have expressed, and arranging for the minutes to be signed by all members present.
  • Keeping reports submitted to the Board and those prepared by the Board.
  • Providing Board members with the meeting agenda, working papers, documents, and related information, and any additional documents or information requested by any member in relation to agenda items.
  • Verifying that Board members comply with procedures approved by the Board.
  • Notifying Board members of meeting dates sufficiently in advance.
  • Presenting draft minutes to Board members for their comments prior to signing.
  • Ensuring that members receive, fully and promptly, copies of minutes and relevant information and documents regarding the Company.
  • Coordinating among Board members.
  • Maintaining a register of disclosures by Board members and executive management in accordance with legal requirements.
  • Providing support and advice to Board members on procedural and governance-related matters.
- Functionally, the Board Secretary reports to the Chair of the Board, and administratively to the Chief Executive Officer, unless the Board decides otherwise.
- The Board Secretary may only be removed by a resolution of the Board of Directors.  

Conditions for the Board Secretary:
- The Board of Directors shall define the qualifications required of the Board Secretary, which shall include at least:
  • Holding a university degree in law, finance, accounting, business administration, or an equivalent field.
  • Having at least three years of relevant practical experience.
        `.trim()
  }
  },

  {
  id: "board_duties_responsibilities",
  category: "board",
  title: {
    ar: "الواجبات والمسؤوليات",
    en: "Duties and Responsibilities"
  },
  content: {
    ar: `
مجلس الإدارة ولجان المجلس:
- تسهيل عمليات صنع القرار في الشركة وآلية إعداد التقارير لتكون سلسلة.
- تنظيم اجتماعات مجلس الإدارة ولجان المجلس.
- صياغة جداول الأعمال مع رئيس مجلس الإدارة و/أو الرئيس التنفيذي.
- تزويد أعضاء مجلس الإدارة بجداول أعمال المجلس وأوراق العمل والوثائق والمعلومات المتعلقة به وأي وثائق أو معلومات إضافية يطلبها أي من أعضاء مجلس الإدارة ذات علاقة بالموضوعات المشمولة في جداول الاجتماع.
- التحقق من تقيد أعضاء مجلس الإدارة بالإجراءات التي يقرها المجلس.
- التأكد من إعداد وتوثيق محاضر الاجتماعات لجميع الاجتماعات التي تعقد، وبيان مكان وتاريخ ووقت بدايته ونهايته.
- تبليغ أعضاء مجلس الإدارة بمواعيد اجتماعات المجلس قبل التاريخ المحدد بمدة كافية.
- عرض مسودات المحاضر على أعضاء مجلس الإدارة لإبداء مرئياتهم حيالها قبل توقيعها.
- توثيق قرارات المجلس ونتائج التصويت وتدوين أسماء الأعضاء الحاضرين والتحفظات التي أبدوها -إن وجدت- وتوثيق هذه المحاضر من جميع الأعضاء الحاضرين.
- حفظ التقارير التي ترفع إلى مجلس الإدارة والتقارير التي يعدها المجلس.
- التحقق من حصول أعضاء مجلس الإدارة بشكل كامل وسريع على نسخة من محاضر اجتماعات المجلس والمعلومات والوثائق المتعلقة بالشركة.
- التنسيق بين أعضاء المجلس.
- التأكد من أن جميع محاضر الاجتماعات الموقعة تم حفظها وتأمينها بالشكل الصحيح.
- تنظيم سجل إفصاحات أعضاء مجلس الإدارة والإدارة التنفيذية.
- التأكد من أن جميع لجان المجلس قد تم تشكيلها بالشكل الصحيح وتزويدها بأحكام واضحة للمرجعية.
- التأكد من أن المعايير و/أو الإفصاحات المطلوبة من الجهات الرقابية يتم الالتزام بها وأن ذلك قد يتم بيانه في التقرير السنوي لأعضاء المجلس.
- تقديم أعضاء المجلس الجدد إلى العمل وتعريفهم بأدوارهم ومسؤولياتهم.
- المساعدة في وضع نظام حوكمة فعال للشركة.
- بيان التزام الشركة بحوكمة الشركة عن طريق مراقبة الالتزام بهذه السياسات وإبلاغ مجلس الإدارة بالمخالفات.
- العمل كمستشار لأعضاء مجلس الإدارة في الأمور النظامية المتعلقة بالحوكمة.
- مساعدة المجلس في بداية كل سنة مع وضع جدول زمني وتطوير عملية تلقي اللجان والمدققين الداخليين والخارجيين.

المساهمون:
- التأكد من عقد الاجتماع السنوي للجمعية العامة وفقًا لمتطلبات الجهات المنظمة ووفقًا لعقد تأسيس الشركة ولائحته.
- الحصول على الموافقات الداخلية والخارجية على الوثائق لتعميمها على المساهمين وإعداد إشعارات الاجتماعات وتوزيع نماذج التوكيل.
- إعداد أعضاء مجلس الإدارة لأسئلة المساهمين ومساعدتهم في إيجاد المواد المتعلقة باطلاع المساهمين على المعلومات اللازمة والتأكد من صحة إجراءات التوكيل والتصويت وإدارة الاجتماعات وتوثيق محاضرها.
- العمل كنقطة اتصال للمساهمين.
- إعداد سجل بالمساهمين وأعضاء مجلس الإدارة والاحتفاظ به.
- إتاحة حق الاطلاع للمساهمين على محاضر اجتماعات الجمعيات وتقديم شرح لها.

الشركة:
- التقيد بالالتزامات المستمرة في القواعد التنظيمية، بما في ذلك نشر وتوزيع التقارير السنوية والمالية والتقارير الأولية خلال المدد المحددة.
- تنسيق نشر وتوزيع الحسابات السنوية بالتشاور مع مسؤولي الشركة ومستشاريها.
- التأكد من وجود إجراءات لإدارة الشركات التابعة بشكل صحيح وتزويد الشركة الأم بالمعلومات اللازمة.
- توثيق مستندات وشهادات وقرارات الشركة وإجراءاتها.
- التأكد من اتباع الهيئات الحاكمة في الشركة للقواعد والسياسات والمعايير والإجراءات.
- اقتراح التعديلات على القواعد والسياسات عند الحاجة.
- تسهيل الاتصال بين الهيئات الحاكمة داخل الشركة.
- التأكد من التزام الشركة بالمتطلبات النظامية المعمول بها.
- مراجعة سياسات الشركة بانتظام والاطلاع على التطورات الحديثة في الحوكمة.
- الاحتفاظ بجميع مواد ووثائق وسجلات الشركة.
- التأكد من حفظ أختام الشركة واستعمالها بالشكل الصحيح.
- التواصل مع الجهات الحكومية.

محاضر الاجتماعات:
- على أمين السر إعداد محاضر اجتماعات مجلس الإدارة واللجان (عدا لجنة المراجعة) وفق أدلة العمل المعتمدة.

التوجيه:
- إعداد جلسة تعريفية رسمية للأعضاء الجدد لشرح مهامهم ومسؤولياتهم وآلية إدارة المجلس والمتطلبات التنظيمية.
- يشمل التوجيه المعلومات الأساسية مثل: الدليل، التعريف بالرئيس والأعضاء، المهام، التعريف بالإدارة التنفيذية، والمعلومات المالية والتشغيلية.

دليل عضوية مجلس الإدارة:
- تزويد الأعضاء بالدليل الذي يساعدهم على أداء مسؤولياتهم، ويشمل: التكوين القانوني، عقد التأسيس، النظام الأساس، الاتفاقيات المهمة.

المراجع التاريخية:
- نبذة تاريخية موجزة عن الشركة.
- قائمة الأعضاء السابقين.
- الهيكل التنظيمي.
- المنتجات الحالية والمستقبلية.

الإطار الاستراتيجي:
- الرؤية والرسالة والقيم.
- الخطة طويلة الأمد.
- الخطة التشغيلية الحالية.

تقويم الاجتماعات:
- تقويم اجتماعات المجلس.
- تقويم اجتماعات اللجان.
- تقويم المتطلبات التنظيمية.

المراجع:
- معلومات الاتصال بالأعضاء واللجان والإدارة العليا.
- دليل الحوكمة والسياسات الداخلية.
- الأنظمة ذات العلاقة.

التعليم والتدريب المستمر:
- تسهيل مشاركة الأعضاء في برامج التعليم المستمر.
- تحديث مهارات الأعضاء استنادًا إلى نتائج التقييمات السنوية.
    `.trim(),

    en: `
Board of Directors and Committees:
- Facilitating decision-making processes and ensuring smooth reporting mechanisms.
- Organizing Board and committee meetings.
- Preparing agendas with the Chairperson and/or the CEO.
- Providing Board members with agendas, working papers, documents, and all information requested.
- Verifying that Board members comply with approved procedures.
- Ensuring proper preparation and documentation of meeting minutes.
- Notifying Board members of meeting dates well in advance.
- Presenting draft minutes for members’ comments before signing.
- Recording decisions, voting results, attendance, and reservations (if any).
- Maintaining all reports submitted to or issued by the Board.
- Ensuring that members promptly receive all minutes and relevant documents.
- Coordinating among Board members.
- Ensuring proper storage and security of signed minutes.
- Maintaining a register of disclosures for Board members and executives.
- Ensuring proper formation of Board committees with clear terms of reference.
- Verifying compliance with regulatory disclosure requirements.
- Supporting onboarding of new Board members.
- Assisting in establishing an effective corporate governance framework.
- Monitoring compliance with governance policies and reporting violations.
- Advising the Board on governance-related procedural matters.
- Assisting the Board in scheduling and managing interactions with internal and external auditors.

Shareholders:
- Ensuring the annual general assembly is held in compliance with regulatory requirements.
- Obtaining necessary approvals for documents distributed to shareholders.
- Supporting preparations for shareholder inquiries and managing meeting logistics and minutes.
- Acting as a contact point for shareholders.
- Preparing and maintaining the shareholders and Board registers.
- Providing access to assembly meeting minutes and explanations when needed.

The Company:
- Ensuring compliance with ongoing regulatory obligations including timely publication of reports.
- Coordinating the distribution of annual accounts.
- Verifying governance procedures for subsidiaries and maintaining group structure records.
- Documenting all corporate resolutions, certificates, and procedures.
- Ensuring governing bodies adhere to corporate policies, procedures, and standards.
- Proposing updates to internal policies.
- Facilitating communication among governing bodies.
- Ensuring regulatory compliance.
- Reviewing corporate policies regularly and keeping updated on governance best practices.
- Maintaining all corporate documents and records.
- Ensuring proper custody and use of company seals.
- Communicating with governmental authorities.

Meeting Minutes:
- The Board Secretary shall prepare minutes of Board and committee meetings (excluding Audit Committee) according to governing manuals.

Orientation:
- Conducting formal induction sessions for new Board members covering duties, governance requirements, and operational structures.
- Providing essential documents such as: governance manual, introduction to Board members, executive roles, and financial/operational data.

Board Membership Guide:
- Providing members with the Board Membership Guide covering legal formation, bylaws, significant agreements, and key references.

Historical References:
- Brief company history.
- List of former Board members.
- Organizational structure.
- Current and planned products.

Strategic Framework:
- Vision, mission, and values.
- Long-term strategic plan.
- Current operational plan.

Meeting Calendars:
- Annual Board calendar.
- Committee calendars.
- Regulatory deadlines calendar.

References:
- Contact details for Board members, committees, and executive management.
- Corporate governance manual and internal policies.
- Applicable regulations and compliance requirements.

Education & Continuous Training:
- Facilitating participation in relevant professional development programs.
- Ensuring Board members update their competencies regularly based on annual evaluations.
     `.trim()
  }
  },

  {
  id: "board_committees_powers",
  category: "board",
  title: {
    ar: "صلاحيات المجلس في تكوين اللجان",
    en: "Board Authority to Form Committees"
  },
  content: {
    ar: `
يجوز لمجلس الإدارة تكوين لجان خاصة لتوسيع إشرافه في جوانب معينة من نشاطات الشركة وتفويض الصلاحيات اللازمة إليها.
يجب أن يشكل مجلس الإدارة بحد أدنى لجنة تنفيذية، لجنة للمراجعة، لجنة للترشيحات والمكافآت، لجنة لإدارة المخاطر، ولجنة للاستثمار.
يجوز للمجلس في أي وقت تكوين لجان أخرى يحدد أهدافها وصلاحياتها والجهة التي تتبعها.
    `.trim(),
    en: `
The Board of Directors may establish specialized committees to expand its oversight over specific company activities and delegate the necessary authorities to them.
The Board must form at minimum: an Executive Committee, an Audit Committee, a Nomination & Remuneration Committee, a Risk Management Committee, and an Investment Committee.
The Board may also establish any additional committees when needed, defining their objectives, authorities, and reporting lines.
    `.trim()
  }
},
{
  id: "committees_general_rules",
  category: "board",
  title: {
    ar: "قواعد عامة للجان",
    en: "General Rules for Committees"
  },
  content: {
    ar: `
يجب على أعضاء اللجان التصرف بحسن نية وبما يحقق المصلحة المثلى للمساهمين وأصحاب المصالح، مع الالتزام بالقوانين واللوائح.
يجب تجنب تضارب المصالح وحماية سرية المعلومات.
لا يجوز لأعضاء اللجان تقديم بيانات للجمهور أو المساهمين خارج الاجتماعات الرسمية ولا استخدام معلومات الشركة لمنافع شخصية.
    `.trim(),
    en: `
Committee members must act in good faith and in the best interest of shareholders and stakeholders, complying with applicable laws and regulations.
Conflicts of interest must be avoided and confidentiality must be preserved.
Members may not disclose information to shareholders or the public outside official meetings nor use company information for personal benefit.
    `.trim()
  }
},
{
  id: "audit_committee_intro",
  category: "audit_committee",
  title: {
    ar: "التمهيد",
    en: "Introduction"
  },
  content: {
    ar: `
تنظم هذه اللائحة تشكيل لجنة المراجعة ومهامها وضوابط عملها وآلية اختيار أعضائها ومدة عضويتهم.
تخضع أعمال اللجنة لأحكام القوانين والأنظمة ذات العلاقة.
يجب على الإدارة تزويد أعضاء اللجنة بالبيانات والمستندات اللازمة.
    `.trim(),
    en: `
This charter governs the formation of the Audit Committee, its duties, operating procedures, and membership rules.
The committee operates under the relevant laws and regulations.
Management must provide the committee with all required information and documentation.
    `.trim()
  }
},
{
  id: "audit_committee_formation",
  category: "audit_committee",
  title: {
    ar: "تشكيل اللجنة ومدتها وشروط العضوية",
    en: "Committee Formation, Term, and Membership Requirements"
  },
  content: {
    ar: `
تتشكل اللجنة من ثلاثة أعضاء على الأقل، بينهم عضو مستقل ومختص مالي.
لا يجوز أن يكون رئيس مجلس الإدارة أو أي عضو تنفيذي ضمن اللجنة.
مدة اللجنة ثلاث سنوات قابلة للتجديد.
يجوز للمجلس تعيين عضو بديل عند شغور مقعد خلال مدة العضوية.
    `.trim(),
    en: `
The committee consists of at least three members, including at least one independent member and one financial expert.
The Board Chair and executive members may not serve on the committee.
The committee term is three years, renewable.
The Board may appoint a temporary replacement if a seat becomes vacant.
    `.trim()
  }
},
{
  id: "audit_committee_duties",
  category: "audit_committee",
  title: {
    ar: "مهام اللجنة ومسؤولياتها",
    en: "Duties and Responsibilities"
  },
  content: {
    ar: `
تشمل مهام اللجنة:
• مراجعة القوائم المالية والتقارير الأولية والسنوية.
• دراسة السياسات المحاسبية والتقديرات المحاسبية.
• مراجعة تقارير المراجعة الداخلية ومتابعة الإجراءات التصحيحية.
• الإشراف على أداء المراجع الداخلي.
• التوصية بتعيين أو عزل مراجع الحسابات وتحديد أتعابه.
• دراسة تقارير مراجع الحسابات ومتابعة الملاحظات.
• التحقق من التزام الشركة بالأنظمة والسياسات.
• مراجعة التعاملات مع الأطراف ذوي العلاقة.
    `.trim(),
    en: `
The committee’s responsibilities include:
• Reviewing financial statements and periodic reports.
• Evaluating accounting policies and significant estimates.
• Reviewing internal audit reports and corrective actions.
• Overseeing internal audit performance.
• Recommending appointment or removal of the external auditor and determining fees.
• Reviewing audit reports and follow-up of observations.
• Ensuring compliance with laws and internal policies.
• Reviewing related-party transactions.
    `.trim()
  }
},
{
  id: "audit_committee_meetings",
  category: "audit_committee",
  title: {
    ar: "اجتماعات اللجنة",
    en: "Committee Meetings"
  },
  content: {
    ar: `
تعقد اللجنة أربعة اجتماعات على الأقل سنوياً.
توجه الدعوات قبل خمسة أيام عمل، ويجوز تقصيرها في الحالات الطارئة.
يكون الاجتماع صحيحاً بحضور الأغلبية.
    `.trim(),
    en: `
The committee meets at least four times per year.
Meeting invitations must be sent at least five business days in advance, unless urgent.
Meetings are valid with a majority of members present.
    `.trim()
  }
},
{
  id: "audit_committee_minutes",
  category: "audit_committee",
  title: {
    ar: "محاضر الاجتماعات",
    en: "Meeting Minutes"
  },
  content: {
    ar: `
يتولى أمين السر إعداد محاضر الاجتماعات، وتوثيق القرارات ونتائج التصويت، وتوقيعها من أعضاء اللجنة.
ترسل مسودة المحضر للأعضاء خلال عشرة أيام عمل.
    `.trim(),
    en: `
The Secretary prepares meeting minutes, documenting decisions and voting results, signed by committee members.
A draft must be sent within ten business days for review.
    `.trim()
  }
},
{
  id: "audit_committee_authority",
  category: "audit_committee",
  title: {
    ar: "صلاحيات اللجنة",
    en: "Committee Authority"
  },
  content: {
    ar: `
للجنة الحق في:
• الاطلاع على السجلات والوثائق.
• طلب الإيضاحات من الإدارة التنفيذية.
• الاجتماع مع موظفي الشركة.
• طلب دعوة الجمعية العامة عند وجود مخالفات جسيمة.
    `.trim(),
    en: `
The committee may:
• Access all company records.
• Request clarifications from management.
• Meet with company employees.
• Request the Board to call a General Assembly when major issues arise.
    `.trim()
  }
},
{
  id: "audit_committee_report",
  category: "audit_committee",
  title: {
    ar: "تقرير اللجنة",
    en: "Committee Report"
  },
  content: {
    ar: `
تعد اللجنة تقريراً سنوياً عن كفاية الرقابة الداخلية وأعمالها، ويعرض على المساهمين قبل الجمعية العامة بعشرة أيام على الأقل.
    `.trim(),
    en: `
The committee prepares an annual report on the adequacy of internal controls and its activities, presented to shareholders ten days before the General Assembly.
    `.trim()
  }
},
{
  id: "audit_committee_conflict",
  category: "audit_committee",
  title: {
    ar: "حدوث تعارض بين اللجنة والمجلس",
    en: "Conflict Between Committee and Board"
  },
  content: {
    ar: `
إذا لم يأخذ المجلس بتوصيات اللجنة، يجب ذكر مبررات اللجنة وأسباب المجلس في تقرير مجلس الإدارة.
    `.trim(),
    en: `
If the Board does not adopt the committee’s recommendations, the committee’s justification and the Board’s reasoning must be included in the Board report.
    `.trim()
  }
},
{
  id: "audit_committee_whistleblowing",
  category: "audit_committee",
  title: {
    ar: "ترتيبات تقديم الملحوظات",
    en: "Whistleblowing Arrangements"
  },
  content: {
    ar: `
تضع اللجنة آلية سرية لتلقي بلاغات العاملين حول أي تجاوزات مالية أو إدارية، مع التحقيق واتخاذ الإجراءات المناسبة.
    `.trim(),
    en: `
The committee establishes a confidential mechanism for employees to report financial or administrative violations, with appropriate investigations and actions.
    `.trim()
  }
},
{
  id: "audit_committee_rewards",
  category: "audit_committee",
  title: {
    ar: "مكافآت أعضاء اللجنة",
    en: "Committee Remuneration"
  },
  content: {
    ar: `
تحدد مكافآت اللجنة ومخصصات حضور الاجتماعات بناءً على توصية لجنة المكافآت والترشيحات وموافقة مجلس الإدارة.
    `.trim(),
    en: `
Committee remuneration and attendance allowances are determined based on the Nomination & Remuneration Committee’s recommendation and Board approval.
    `.trim()
  }
},
{
  id: "nrc_intro",
  category: "nrc",
  title: {
    ar: "التمهيد",
    en: "Introduction"
  },
  content: {
    ar: `
تهدف لائحة لجنة الترشيحات والمكافآت إلى تنظيم تشكيل اللجنة، وتحديد صلاحياتها، وبيان مهامها وإجراءات عملها وآليات اختيار الأعضاء ومدة عضويتهم.
    `.trim(),
    en: `
This charter sets the framework for the Nomination and Remuneration Committee, including its formation, authorities, duties, operating procedures, and membership rules.
    `.trim()
  }
},

{
  id: "nrc_formation",
  category: "nrc",
  title: {
    ar: "تشكيل اللجنة ومدتها",
    en: "Committee Formation and Term"
  },
  content: {
    ar: `
تتكون اللجنة من ثلاثة أعضاء على الأقل، ويشترط أن يكون ثلثهم أعضاء مستقلين.
مدة اللجنة ثلاث سنوات قابلة للتجديد.
لا يجوز أن يكون رئيس مجلس الإدارة عضواً في اللجنة.
    `.trim(),
    en: `
The committee consists of at least three members, at least one-third of whom must be independent.
The committee’s term is three years, renewable.
The Chair of the Board may not be a member of the committee.
    `.trim()
  }
},

{
  id: "nrc_responsibilities",
  category: "nrc",
  title: {
    ar: "مهام اللجنة",
    en: "Committee Responsibilities"
  },
  content: {
    ar: `
تختص اللجنة بالمهام الآتية:
• وضع سياسات ومعايير الترشيح لعضوية المجلس واللجان.
• التوصية بترشيحات المجلس واللجان بعد دراسة السير الذاتية.
• مراجعة هيكل المجلس والإدارة العليا وتقديم المقترحات التطويرية.
• تقييم أداء المجلس واللجان والإدارة التنفيذية سنوياً.
• وضع سياسة مكافآت المجلس واللجان والإدارة العليا.
• مراجعة خطط التعاقب الوظيفي.
• متابعة التزام الأعضاء بميثاق الشرف ومدونة السلوك.
    `.trim(),
    en: `
The committee is responsible for:
• Developing nomination policies and criteria for the Board and committees.
• Recommending nominees after reviewing their qualifications.
• Reviewing the structure of the Board and executive management and proposing enhancements.
• Conducting annual performance evaluations for the Board, committees, and executives.
• Setting remuneration policies for the Board, committees, and senior management.
• Overseeing succession planning.
• Ensuring compliance with the code of conduct and ethical standards.
    `.trim()
  }
},

{
  id: "nrc_meetings",
  category: "nrc",
  title: {
    ar: "اجتماعات اللجنة",
    en: "Committee Meetings"
  },
  content: {
    ar: `
تعقد اللجنة اجتماعات دورية بما لا يقل عن اجتماعين سنوياً.
توجه الدعوات قبل خمسة أيام عمل.
تصدر القرارات بأغلبية أعضاء اللجنة.
    `.trim(),
    en: `
The committee meets at least twice a year.
Invitations must be sent five business days in advance.
Decisions are made by majority vote.
    `.trim()
  }
},

{
  id: "nrc_independence_assessment",
  category: "nrc",
  title: {
    ar: "تقييم الاستقلالية",
    en: "Independence Assessment"
  },
  content: {
    ar: `
تقوم اللجنة سنوياً بتقييم مدى استقلال أعضاء المجلس وفق المعايير النظامية، وترفع تقريراً للمجلس.
    `.trim(),
    en: `
The committee annually evaluates the independence of Board members based on regulatory criteria and submits a report to the Board.
    `.trim()
  }
},

{
  id: "nrc_rewards",
  category: "nrc",
  title: {
    ar: "مكافآت اللجنة",
    en: "Committee Remuneration"
  },
  content: {
    ar: `
تحدد مكافآت اللجنة وفق سياسة المكافآت المعتمدة وتحتاج لموافقة المجلس.
    `.trim(),
    en: `
Committee remuneration is determined in accordance with the approved remuneration policy and requires Board approval.
    `.trim()
  }
},

/* ============================
   لجنة إدارة المخاطر
   ============================ */

{
  id: "risk_committee_intro",
  category: "risk_committee",
  title: {
    ar: "التمهيد",
    en: "Introduction"
  },
  content: {
    ar: `
تنظم هذه اللائحة تشكيل لجنة إدارة المخاطر وصلاحياتها وإجراءات عملها وآليات اختيار الأعضاء.
    `.trim(),
    en: `
This charter governs the formation of the Risk Management Committee, its authorities, duties, and membership structure.
    `.trim()
  }
},

{
  id: "risk_committee_formation",
  category: "risk_committee",
  title: {
    ar: "تشكيل اللجنة",
    en: "Committee Formation"
  },
  content: {
    ar: `
تتكون اللجنة من ثلاثة أعضاء على الأقل، ويشترط توفر الخبرات اللازمة في إدارة المخاطر.
مدة اللجنة ثلاث سنوات قابلة للتجديد.
    `.trim(),
    en: `
The committee consists of at least three members with appropriate expertise in risk management.
The committee term is three years, renewable.
    `.trim()
  }
},

{
  id: "risk_committee_responsibilities",
  category: "risk_committee",
  title: {
    ar: "مهام اللجنة",
    en: "Committee Responsibilities"
  },
  content: {
    ar: `
تشمل مهام اللجنة:
• وضع إطار إدارة المخاطر.
• متابعة المخاطر الاستراتيجية والتشغيلية.
• مراجعة تقارير المخاطر الدورية.
• تقديم التوصيات للمجلس بشأن مستويات المخاطر المقبولة.
• متابعة خطط المعالجة والتحسين.
    `.trim(),
    en: `
Committee responsibilities include:
• Establishing the company-wide risk management framework.
• Monitoring strategic and operational risks.
• Reviewing periodic risk reports.
• Recommending acceptable risk levels to the Board.
• Overseeing mitigation plans and corrective actions.
    `.trim()
  }
},

{
  id: "risk_committee_meetings",
  category: "risk_committee",
  title: {
    ar: "اجتماعات اللجنة",
    en: "Committee Meetings"
  },
  content: {
    ar: `
تعقد اللجنة أربعة اجتماعات على الأقل سنوياً.
تصدر القرارات بالأغلبية.
    `.trim(),
    en: `
The committee meets at least four times per year.
Decisions are taken by majority vote.
    `.trim()
  }
},

/* ============================
   اللجنة التنفيذية
   ============================ */

{
  id: "executive_committee_intro",
  category: "executive_committee",
  title: {
    ar: "التمهيد",
    en: "Introduction"
  },
  content: {
    ar: `
تنظم هذه اللائحة أعمال اللجنة التنفيذية وصلاحياتها وآليات عملها.
    `.trim(),
    en: `
This charter defines the Executive Committee’s responsibilities, authorities, and operating procedures.
    `.trim()
  }
},

{
  id: "executive_committee_responsibilities",
  category: "executive_committee",
  title: {
    ar: "مهام اللجنة",
    en: "Committee Responsibilities"
  },
  content: {
    ar: `
تتولى اللجنة الإشراف على:
• تنفيذ الخطط الاستراتيجية.
• متابعة مؤشرات الأداء الرئيسية.
• مراجعة المبادرات التشغيلية.
• اتخاذ القرارات العاجلة التي تفوضها من المجلس.
    `.trim(),
    en: `
The committee oversees:
• Implementation of strategic plans.
• Monitoring key performance indicators.
• Reviewing operational initiatives.
• Making urgent decisions delegated by the Board.
    `.trim()
  }
},

/* ============================
   الإدارة التنفيذية
   ============================ */

{
  id: "executive_management_roles",
  category: "executive_management",
  title: {
    ar: "مهام الإدارة التنفيذية",
    en: "Executive Management Responsibilities"
  },
  content: {
    ar: `
تشمل مهام الإدارة التنفيذية:
• تنفيذ الاستراتيجية المعتمدة من المجلس.
• إدارة الأنشطة التشغيلية.
• إعداد التقارير المالية والإدارية.
• الالتزام بالأنظمة والسياسات.
• إدارة الموارد البشرية والتقنية والمالية.
    `.trim(),
    en: `
Executive management responsibilities include:
• Implementing the Board-approved strategy.
• Managing day-to-day operations.
• Preparing financial and administrative reports.
• Ensuring compliance with laws and policies.
• Managing human, technical, and financial resources.
    `.trim()
  }
},

/* ============================
   الرئيس التنفيذي
   ============================ */

{
  id: "ceo_responsibilities",
  category: "executive_management",
  title: {
    ar: "مهام الرئيس التنفيذي",
    en: "Chief Executive Officer Responsibilities"
  },
  content: {
    ar: `
يشرف الرئيس التنفيذي على:
• وضع الخطط التشغيلية ومتابعة تنفيذها.
• إدارة فرق العمل وتوزيع المهام.
• مراقبة الأداء وإدارة الميزانية.
• رفع تقارير دورية للمجلس عن الأداء والتحديات.
• ضمان الالتزام بالسياسات واللوائح.
    `.trim(),
    en: `
The CEO is responsible for:
• Developing operational plans and ensuring execution.
• Managing teams and delegating responsibilities.
• Monitoring performance and overseeing the budget.
• Reporting regularly to the Board on performance and challenges.
• Ensuring compliance with policies and regulations.
    `.trim()
  }
},

/* ============================
   مدير الحوكمة والمخاطر والالتزام
   ============================ */

{
  id: "grc_manager_responsibilities",
  category: "grc",
  title: {
    ar: "مهام مدير الحوكمة والمخاطر والالتزام",
    en: "Governance, Risk & Compliance Manager Responsibilities"
  },
  content: {
    ar: `
يقوم مدير الحوكمة والمخاطر والالتزام بالمهام التالية:
• تطوير إطار الحوكمة المؤسسية.
• إعداد السياسات واللوائح الداخلية ومراجعتها دورياً.
• متابعة التزام المجلس والإدارة بالأنظمة والتعليمات.
• الإشراف على إدارة المخاطر وتحديث سجل المخاطر.
• بناء وإدارة إطار الالتزام والامتثال.
• إعداد تقارير دورية للمجلس واللجان.
• متابعة تقييم الأداء المؤسسي.
• تدريب الموظفين على السياسات والالتزام.
    `.trim(),
    en: `
The Governance, Risk & Compliance Manager is responsible for:
• Developing the corporate governance framework.
• Preparing and periodically updating internal policies and regulations.
• Monitoring Board and management compliance with laws and guidelines.
• Overseeing risk management and updating the risk register.
• Managing the compliance and regulatory framework.
• Preparing periodic reports for the Board and committees.
• Monitoring corporate performance assessments.
• Training employees on policies and compliance requirements.
    `.trim()
  }
},
  {
  id: "grc_manager_reporting_lines",
  category: "grc",
  title: {
    ar: "خطوط التبعية لمدير الحوكمة والمخاطر والالتزام",
    en: "Reporting Lines of the Governance, Risk & Compliance Manager"
  },
  content: {
    ar: `
يتبع مدير الحوكمة والمخاطر والالتزام إداريًا إلى رئيس مجلس الإدارة، ويعمل بوصفه حلقة وصل بين مجلس الإدارة والإدارة التنفيذية فيما يتعلق بشؤون الحوكمة والمخاطر والالتزام، وذلك على النحو الآتي:

- مجلس الإدارة:
  - تقديم تقارير دورية إلى مجلس الإدارة عن أوضاع الحوكمة والمخاطر والالتزام.
  - رفع التوصيات المتعلقة بتحسين إطار الحوكمة والإدارة الرشيدة للمخاطر.
  - إطلاع مجلس الإدارة على أية مخالفات جوهرية أو مخاطر عالية التأثير.

- الرئيس التنفيذي:
  - التنسيق المستمر مع الرئيس التنفيذي لضمان تنفيذ استراتيجيات الحوكمة والمخاطر والالتزام.
  - مساعدة الإدارة التنفيذية في تضمين متطلبات الحوكمة والالتزام ضمن العمليات اليومية.

- لجان مجلس الإدارة:
  - العمل كقناة لتبادل المعلومات بين الإدارة التنفيذية واللجان المختصة (مثل لجنة المراجعة ولجنة إدارة المخاطر ولجنة الترشيحات والمكافآت).
  - تزويد اللجان بالتقارير والتحليلات اللازمة لأداء مهامها الرقابية.

- المدراء التنفيذيون:
  - التعاون مع المدراء التنفيذيين في مختلف الإدارات لضمان التزامهم بالسياسات والأنظمة المعتمدة.
  - دعم الإدارات في تحديد المخاطر التشغيلية وتحديث سجل المخاطر.

- الموظفون:
  - توعية الموظفين بسياسات الحوكمة والمخاطر والالتزام.
  - استقبال البلاغات المتعلقة بالمخالفات أو المخاطر ورفعها للجهات المختصة داخل الشركة.

- الجهات الرقابية:
  - التواصل مع الجهات الرقابية والتنظيمية وتزويدها بالتقارير المطلوبة.
  - متابعة ملاحظات الجهات الرقابية وضمان اتخاذ الإجراءات التصحيحية اللازمة.
    `.trim(),

    en: `
The Governance, Risk & Compliance (GRC) Manager reports administratively to the Chairperson of the Board and acts as a key liaison between the Board and executive management on governance, risk, and compliance matters, as follows:

- Board of Directors:
  - Submits periodic reports to the Board on governance, risk, and compliance status.
  - Recommends enhancements to the governance and risk management framework.
  - Escalates any material violations or high-impact risks to the Board.

- Chief Executive Officer:
  - Coordinates continuously with the CEO to ensure the implementation of governance, risk, and compliance strategies.
  - Supports executive management in embedding governance and compliance requirements into day-to-day operations.

- Board Committees:
  - Serves as an information channel between executive management and relevant Board committees (e.g., Audit Committee, Risk Committee, Nomination & Remuneration Committee).
  - Provides committees with the reports and analyses needed to perform their oversight duties.

- Executive Managers:
  - Cooperates with executives across all departments to ensure adherence to approved policies and regulations.
  - Supports departments in identifying operational risks and updating the risk register.

- Employees:
  - Raises employee awareness on governance, risk, and compliance policies.
  - Receives and escalates reports regarding violations or risks to the appropriate internal bodies.

- Regulatory Authorities:
  - Communicates with regulators and competent authorities and submits required reports.
  - Follows up on regulatory observations and ensures that corrective actions are implemented.
    `.trim()
  }
},

{
  id: "grc_manager_qualifications",
  category: "grc",
  title: {
    ar: "شروط شغل وظيفة مدير الحوكمة والمخاطر والالتزام",
    en: "Qualifications for the Governance, Risk & Compliance Manager Role"
  },
  content: {
    ar: `
يشترط في شاغل وظيفة مدير الحوكمة والمخاطر والالتزام ما يأتي:

- مؤهل جامعي مناسب في أحد التخصصات التالية أو ما يماثلها:
  - القانون
  - إدارة الأعمال
  - المالية
  - المحاسبة
  - تقنية المعلومات ذات الصلة بالحوكمة والمخاطر

- شهادة مهنية متخصصة في الحوكمة والمخاطر والالتزام مثل:
  - شهادة مسؤول الحوكمة وإدارة المخاطر والالتزام (GRCO)
  - أو شهادات مهنية مكافئة معتمدة.

- خبرة عملية مثبتة في مجال:
  - حوكمة الشركات،
  - إدارة المخاطر المؤسسية،
  - والالتزام بالأنظمة واللوائح.

- الإلمام التام بالأنظمة واللوائح والتعليمات التي تنظم عمل الشركة والجهات الرقابية ذات العلاقة.

- القدرة على:
  - تحليل المخاطر وتقييمها وتحديد أولوياتها.
  - صياغة السياسات واللوائح الداخلية بوضوح ودقة.
  - إعداد التقارير الرقابية ورفع التوصيات المناسبة.

- التمتع بسمات شخصية ومهنية عالية تشمل:
  - النزاهة والأمانة والاستقلالية.
  - الالتزام بأعلى المعايير الأخلاقية.
  - مهارات تواصل وعرض ممتازة.
  - القدرة على العمل مع مختلف الإدارات واللجان بكفاءة.

- إجادة استخدام الأنظمة التقنية وأدوات إدارة المخاطر والامتثال، وقواعد البيانات ونظم التقارير.

- الالتزام المستمر بالتطوير المهني من خلال:
  - حضور الدورات وورش العمل المتخصصة،
  - الاطلاع على أفضل الممارسات العالمية في الحوكمة والمخاطر والالتزام.
    `.trim(),

    en: `
The holder of the Governance, Risk & Compliance (GRC) Manager position should meet the following requirements:

- Academic Qualification:
  - A relevant university degree in one of the following (or equivalent):
    - Law
    - Business Administration
    - Finance
    - Accounting
    - Information Technology related to governance and risk.

- Professional Certification:
  - A specialized professional certificate in governance, risk, and compliance such as:
    - Governance, Risk & Compliance Officer (GRCO), or
    - An equivalent recognized professional certification.

- Practical Experience:
  - Proven experience in:
    - Corporate governance,
    - Enterprise risk management,
    - Regulatory compliance.

- Regulatory Knowledge:
  - Strong understanding of applicable laws, regulations, and regulatory requirements governing the company’s activities.

- Technical & Analytical Skills:
  - Ability to analyze, assess, and prioritize risks.
  - Ability to draft clear and precise internal policies and regulations.
  - Ability to prepare monitoring reports and submit appropriate recommendations.

- Personal & Professional Attributes:
  - High integrity, honesty, and independence.
  - Commitment to the highest ethical standards.
  - Strong communication and presentation skills.
  - Ability to work effectively with different departments and Board committees.

- Technology Proficiency:
  - Proficiency in using GRC tools, risk management systems, compliance platforms, and reporting systems.

- Continuous Professional Development:
  - Commitment to ongoing learning through courses, workshops, and staying updated on global best practices in governance, risk, and compliance.
    `.trim()
  }

  }
];
// --- 6. الحوكمة الرقمية ---
const egovDigitalGovernance = { 
   ar: {
    section_id: "digital_governance",
    title: "الحوكمة الرقمية",
    intro: "هي مجموعة المبادئ والإجراءات والعمليات التي تضمن إدارة الأصول الرقمية للمؤسسة بشكل فعال وآمن ومسؤول، وتشمل أمن المعلومات، حماية البيانات الشخصية، التجارة الإلكترونية، والذكاء الاصطناعي وغيرها من المجالات الرقمية المرتبطة بالعمل.",

    importance_title: "أهمية الحوكمة في أمن المعلومات",
    importance_items: [
      "الحد من المخاطر: تساعد الحوكمة في تقليل المخاطر الأمنية التي تواجه المؤسسة.",
      "الامتثال للوائح: تضمن الامتثال للأنظمة واللوائح المحلية والدولية المتعلقة بأمن المعلومات وحماية البيانات.",
      "حماية السمعة: تحمي سمعة المؤسسة في حالة وقوع أي اختراق أمني أو تسريب معلومات.",
      "تحسين الكفاءة: تساهم في تحسين كفاءة العمليات التشغيلية وتقليل الهدر والأخطاء المرتبطة بالأنظمة الرقمية.",
      "تحديد الأدوار والمسؤوليات: توضح مسؤوليات كل فرد في الشركة فيما يتعلق بالأمن السيبراني وحماية المعلومات.",
      "إدارة الهوية والوصول: تنظيم وإدارة الصلاحيات على الأنظمة والبيانات وفق مبدأ أقل صلاحية ممكنة.",
      "استمرارية الأعمال: دعم خطط استمرارية الأعمال واستعادة العمل بعد الكوارث الرقمية أو الهجمات السيبرانية.",
      "أمن السحابة: حماية البيانات المخزنة في الخدمات السحابية وضبط الصلاحيات عليها.",
      "أمن الأجهزة المحمولة: حماية الأجهزة المحمولة المستخدمة في العمل، مثل الهواتف وأجهزة الحاسب اللوحية والمحمولة."
    ],

    roles: {
      ciso_title: "مسؤول أمن المعلومات",
      ciso_intro:
        "مسؤول أمن المعلومات هو الحارس الرئيسي للأصول الرقمية للمؤسسة، وتقع على عاتقه مسؤولية حماية البيانات والأنظمة والبنية التحتية من التهديدات السيبرانية المتزايدة.",
      ciso_responsibilities: [
        "تقييم المخاطر الأمنية التي تواجه المؤسسة وتحديد أولويات التعامل معها.",
        "وضع استراتيجية أمنية شاملة لحماية الأصول الرقمية للمؤسسة.",
        "إعداد واعتماد سياسات وإجراءات أمنية واضحة وتعميمها ومتابعة الالتزام بها.",
        "الامتثال للتشريعات واللوائح المتعلقة بحماية البيانات الشخصية وأمن المعلومات، مثل نظام حماية البيانات في المملكة العربية السعودية.",
        "إجراء تقييمات منتظمة للمخاطر لتحديد التهديدات الجديدة ونقاط الضعف.",
        "اكتشاف الهجمات في وقت مبكر والتصدي لها وتقليل آثارها.",
        "تطوير وتنفيذ خطط الاستجابة للحوادث الأمنية وخطط استمرارية الأعمال.",
        "تصنيف البيانات بحسب درجة حساسيتها وتطبيق ضوابط مناسبة لكل مستوى.",
        "حماية البيانات الحساسة باستخدام التشفير وآليات التحكم في الوصول.",
        "إدارة وتحديث جدران الحماية وأنظمة الحماية المحيطية.",
        "استخدام أنظمة كشف ومنع الاختراق لرصد الأنشطة المشبوهة.",
        "إدارة شبكات VPN وتأمين الاتصالات عن بُعد.",
        "ضمان تحديث أنظمة التشغيل والبرامج بشكل منتظم لسد الثغرات.",
        "إدارة الأجهزة المتصلة بالشبكة ومراقبة أمنها.",
        "إجراء اختبارات اختراق دورية للكشف عن نقاط الضعف وتحسين الضوابط.",
        "تطوير برامج تدريبية للموظفين حول الأمن السيبراني وتنظيم حملات توعوية مستمرة.",
        "العمل بشكل وثيق مع قسم تقنية المعلومات لتطبيق الإجراءات الأمنية.",
        "التنسيق مع الأقسام القانونية والامتثال بشأن المتطلبات النظامية ذات العلاقة بالأمن.",
        "مراقبة الأنظمة بشكل مستمر وتقييم فعالية الضوابط والإجراءات الأمنية بشكل دوري."
      ],
      ciso_profile:
        "بشكل عام، يتحمل مسؤول أمن المعلومات مسؤولية ضمان أمن المعلومات في المؤسسة وحماية أصولها الرقمية من التهديدات المتزايدة، ويتطلب ذلك مهارات تقنية قوية، وفهمًا عميقًا للمخاطر الأمنية، بالإضافة إلى القدرة على التواصل الفعال مع مختلف الإدارات.",

      management_title: "مسؤوليات الإدارة تجاه أمن المعلومات",
      management_responsibilities: [
        "توفير ميزانية كافية لتغطية تكاليف الأدوات والبرامج والخدمات والتدريب في مجال الأمن السيبراني.",
        "الاستثمار المستمر في تحديث الأنظمة الأمنية والتقنيات المستخدمة.",
        "توفير فريق متخصص في الأمن السيبراني يتناسب مع حجم وطبيعة أعمال الشركة.",
        "توفير فرص التدريب والتطوير المستمر للموظفين العاملين في مجال الأمن السيبراني.",
        "تقديم الدعم اللازم من الإدارات المختلفة مثل تقنية المعلومات، الشؤون القانونية، الموارد البشرية، والعمليات.",
        "توفير أدوات أمنية حديثة مثل برامج مكافحة الفيروسات، جدران الحماية، أنظمة كشف الاختراق، وأنظمة إدارة الأحداث الأمنية.",
        "ضمان وجود بنية تحتية تقنية قوية وآمنة تدعم متطلبات الأمن والاعتمادية.",
        "التأكد من أن الخدمات السحابية المستخدمة آمنة ومتوافقة مع المعايير الأمنية المعتمدة.",
        "توفير الوصول إلى البيانات والمؤشرات اللازمة لاتخاذ قرارات أمنية مدروسة.",
        "توفير تقارير وتحليلات دورية عن مستوى المخاطر الأمنية للحماية الاستباقية.",
        "توفير مصادر معرفية ومكتبة معلومات حول الأمن السيبراني وأفضل الممارسات.",
        "منح مسؤول أمن المعلومات الصلاحيات اللازمة لاتخاذ القرارات المتعلقة بالأمن وتنفيذها.",
        "تأمين دعم الإدارة العليا الكامل لتنفيذ الاستراتيجية الأمنية وتطبيق السياسات على جميع المستويات."
      ],

      employees_title: "مسؤوليات الموظفين تجاه أمن المعلومات",
      employees_intro:
        "يقع جزء كبير من مسؤولية أمن المعلومات على عاتق جميع العاملين في الشركة، وليس فقط على عاتق مسؤول أمن المعلومات وفريق الأمن السيبراني، إذ يشكل الموظفون خط الدفاع الأول ضد كثير من الهجمات.",
      employees_responsibilities: [
        "حماية البيانات الحساسة للمؤسسة من التسريب أو الإفصاح غير المصرح به.",
        "اختيار كلمات مرور قوية وفريدة لكل حساب، وتغييرها بشكل دوري وعدم مشاركتها مع الآخرين.",
        "توخي الحذر عند فتح رسائل بريد إلكتروني من مصادر غير معروفة وتجنب النقر على الروابط أو فتح المرفقات المشبوهة.",
        "الإبلاغ الفوري عن أي نشاط مشبوه أو حادثة أمنية يلاحظها الموظف.",
        "الالتزام بجميع سياسات وإجراءات الأمن المعلوماتي المعتمدة في المؤسسة.",
        "المشاركة في برامج التدريب والتوعية الأمنية ومواكبة أحدث التهديدات والأساليب الاحتيالية.",
        "استخدام الأجهزة الموفرة من المؤسسة في أغراض العمل فقط، وعدم تثبيت برامج غير معتمدة.",
        "عدم ترك أجهزة الحاسب أو الجوالات مفتوحة بدون إقفال أو قفل الشاشة في أماكن العمل.",
        "عدم استخدام أجهزة تخزين خارجية غير مصرح بها مثل الأقراص المتنقلة أو وحدات الذاكرة.",
        "عدم مشاركة معلومات الشركة أو بياناتها الحساسة على وسائل التواصل الاجتماعي أو القنوات غير الرسمية.",
        "عدم استخدام شبكات إنترنت عامة غير آمنة للوصول إلى أنظمة الشركة أو بياناتها إلا عبر وسائل آمنة (مثل VPN معتمد)."
      ]
    },

    employee_data: {
      title: "جمع بيانات الموظفين",
      intro:
        "عند جمع البيانات عن الموظفين، يجب أن يكون هناك سبب مشروع ومبرر نظاميًا لكل نوع من البيانات يتم جمعه، مع الالتزام بمبدأ تقليل البيانات إلى الحد الأدنى اللازم.",
      categories: [
        {
          key: "contact_info",
          label: "معلومات الاتصال (الاسم، البريد الإلكتروني، رقم الهاتف)",
          reasons: [
            "التواصل اليومي بشأن أمور العمل، الاجتماعات، والإعلانات المهمة.",
            "تقديم الدعم الفني في حال تعرض الموظف لمشاكل تقنية.",
            "التواصل في الحالات الطارئة أو الظروف الاستثنائية."
          ]
        },
        {
          key: "employment_info",
          label: "معلومات التوظيف (تاريخ التوظيف، الراتب، الدور الوظيفي)",
          reasons: [
            "إدارة الرواتب والمستحقات الأخرى بدقة.",
            "تقييم الأداء وإعداد التقارير السنوية أو الدورية.",
            "التخطيط الوظيفي وتحديد احتياجات التدريب والتطوير.",
            "الامتثال لمتطلبات التقارير الحكومية والضريبية والأنظمة ذات العلاقة."
          ]
        },
        {
          key: "device_info",
          label: "معلومات الأجهزة (أجهزة الحاسب المحمولة، الهواتف، وغيرها)",
          reasons: [
            "تقديم الدعم الفني لأجهزة الموظفين.",
            "تطبيق ضوابط أمن المعلومات على الأجهزة المستخدمة للوصول إلى أنظمة الشركة.",
            "تتبع أصول الشركة من أجهزة وبرمجيات."
          ]
        },
        {
          key: "attendance",
          label: "سجلات الحضور والانصراف",
          reasons: [
            "حساب ساعات العمل الفعلية والأجور المستحقة.",
            "قياس مستوى الالتزام والإنتاجية.",
            "الامتثال لأنظمة العمل المتعلقة بساعات العمل وفترات الراحة."
          ]
        },
        {
          key: "performance_data",
          label: "بيانات الأداء",
          reasons: [
            "إجراء تقييمات دورية لأداء الموظف وتحديد نقاط القوة والضعف.",
            "اتخاذ قرارات وظيفية تخص الترقيات، العلاوات، أو إنهاء الخدمة.",
            "تحديد احتياجات التدريب والتطوير المهني."
          ]
        },
        {
          key: "health_data",
          label: "المعلومات الصحية",
          reasons: [
            "إدارة التأمين الطبي للموظف وتابعيه وفق أنظمة التأمين الصحي.",
            "الامتثال لمتطلبات الأنظمة واللوائح الصحية المعمول بها."
          ]
        }
      ]
    },

    data_sharing: {
      title: "مشاركة البيانات بين الأقسام",
      intro:
        "تُستخدم بيانات الموظفين والعملاء والعمليات لدعم تنفيذ المهام الأساسية وتحسين العمليات والامتثال للأنظمة، ويتم ذلك وفق ضوابط واضحة لمشاركة البيانات.",
      purposes: {
        core_operations: [
          "إدارة الموارد البشرية: مشاركة بيانات الموظفين مع المحاسبة لحساب الرواتب والمزايا، ومع تقنية المعلومات لتوفير الوصول للأنظمة.",
          "المبيعات والخدمة: مشاركة بيانات العملاء مع المبيعات لتقديم عروض مخصصة، ومع خدمة العملاء لحل المشكلات.",
          "الإنتاج والتوريد: مشاركة بيانات المخزون والمبيعات مع الإنتاج لتخطيط الإنتاج وتحديد احتياجات التوريد."
        ],
        process_improvement: [
          "تحليل البيانات: مشاركة البيانات بين الأقسام لتحليلها واتخاذ قرارات أفضل.",
          "تطوير المنتجات والخدمات: استخدام بيانات العملاء لتحسين المنتجات والخدمات الحالية وتطوير منتجات جديدة.",
          "اكتشاف الاحتيال: مشاركة البيانات بين عدة أقسام للكشف عن الأنشطة الاحتيالية أو الأنماط غير الطبيعية."
        ],
        compliance: [
          "الضرائب والزكاة: مشاركة البيانات المالية مع المحاسبة لإعداد الإقرارات الضريبية والزكوية.",
          "التقارير الحكومية: مشاركة البيانات مع الجهات الحكومية المختصة لتلبية المتطلبات النظامية."
        ],
        collaboration: [
          "المشاريع المشتركة: مشاركة البيانات بين الأقسام لتنفيذ مشاريع مشتركة بنجاح.",
          "حل المشكلات: تبادل البيانات لمعالجة المشكلات التي تتطلب تعاون عدة إدارات."
        ]
      },
      conditions_title: "الشروط الواجب توافرها لمشاركة البيانات",
      conditions: [
        "الضرورة: أن تكون مشاركة البيانات ضرورية لتنفيذ مهمة محددة وواضحة.",
        "مبدأ الحد الأدنى: مشاركة أقل قدر ممكن من البيانات اللازمة لإنجاز المهمة.",
        "الموافقة: الحصول على موافقة الأفراد المعنيين على مشاركة بياناتهم الشخصية متى كان ذلك ممكنًا ومطلوبًا نظامًا.",
        "الأمن: اتخاذ جميع الإجراءات اللازمة لحماية البيانات المشتركة من الوصول أو المعالجة غير المصرح بها.",
        "الشفافية: توضيح كيفية استخدام البيانات والجهات التي تُشارك معها.",
        "الامتثال: التأكد من توافق جميع ممارسات مشاركة البيانات مع الأنظمة واللوائح المحلية والدولية ذات العلاقة."
      ],
      mechanisms_title: "الآليات الآمنة لمشاركة البيانات",
      mechanisms: [
        "استخدام منصات تعاون معتمدة من الشركة مثل: Microsoft Teams وOneDrive وJira أو أنظمة مماثلة معتمدة.",
        "تشفير البيانات الحساسة قبل نقلها أو مشاركتها مع أي طرف داخلي أو خارجي.",
        "تطبيق مبدأ الوصول المحدود بحيث يحصل كل مستخدم على الصلاحيات اللازمة فقط.",
        "استخدام سجلات تدقيق لتتبع جميع عمليات الوصول إلى البيانات ومراجعتها دوريًا."
      ]
    },

    employee_rights: {
      title: "حقوق الموظفين المتعلقة بالبيانات الشخصية",
      rights: [
        "حق الوصول: يحق للموظف الوصول إلى بياناته الشخصية ومعرفة طريقة معالجتها.",
        "حق التصحيح: يحق للموظف طلب تصحيح بياناته الشخصية غير الدقيقة أو غير المكتملة.",
        "حق الحذف: يحق للموظف طلب حذف بياناته الشخصية في حالات محددة نظاميًا.",
        "حق الاعتراض: يحق للموظف الاعتراض على معالجة بياناته الشخصية لأسباب مشروعة.",
        "حق التقييد: يحق للموظف طلب تقييد معالجة بياناته الشخصية في ظروف معينة.",
        "حق النقل: يحق للموظف طلب نقل بياناته الشخصية إلى جهة أخرى عند توافر الشروط القانونية."
      ]
    },

    security_sanctions: {
      title: "العقوبات المتعلقة بمخالفات أمن المعلومات وحماية البيانات",
      intro:
        "تعتبر حماية البيانات أولوية قصوى للشركة، وقد يؤدي تسريب المعلومات أو إهمال التعليمات المتعلقة بأمن المعلومات إلى عواقب وخيمة على الشركة والأفراد. لذلك تضع الشركة سياسات واضحة وعقوبات متدرجة ورادعة.",
      sanctions: [
        "الإنذار الكتابي: إشعار الموظف كتابيًا بطبيعة المخالفة والتنبيه لعواقب تكرارها.",
        "التأديب الشفوي: توجيه توبيخ شفهي مع توثيقه داخليًا عند الحاجة.",
        "التنبيه الكتابي في ملف الموظف: تسجيل المخالفة ضمن ملفه الوظيفي.",
        "الخصم من الراتب: خصم جزء من الراتب وفق ما تجيزه أنظمة العمل واللوائح الداخلية.",
        "النقل إلى وظيفة أخرى: نقل الموظف إلى وظيفة لا تتطلب التعامل مع معلومات حساسة عند الحاجة.",
        "الإيقاف عن العمل: إيقاف الموظف عن العمل لفترة محددة دون أجر أو بجزء منه وفق النظام.",
        "إنهاء عقد العمل: إنهاء خدمات الموظف في الحالات الجسيمة أو التكرار المتعمد للمخالفات.",
        "المسؤولية القانونية: تحريك إجراءات نظامية ضد الموظف إذا تسبب في أضرار مالية أو قانونية جسيمة أو قام بتسريب معلومات حساسة."
      ],
      factors_title: "العوامل المؤثرة في اختيار العقوبة",
      factors: [
        "درجة جسامة المخالفة الأمنية وأثرها على الشركة.",
        "تكرار المخالفة من نفس الموظف من عدمه.",
        "الأثر الفعلي للمخالفة على سمعة الشركة أو عملائها أو موظفيها.",
        "الأنظمة واللوائح المعمول بها في الدولة، وحدود العقوبات المسموح بها نظامًا.",
        "مدى تعاون الموظف في التحقيق والتعامل مع آثار المخالفة."
      ]
    }
  },

  en: {
    section_id: "digital_governance",
    title: "Digital Governance",
    intro:
      "Digital governance is the set of principles, procedures, and processes that ensure the organization’s digital assets are managed in an effective, secure, and responsible manner. It covers a wide range of areas such as information security, data protection, e-commerce, and artificial intelligence.",

    importance_title: "Importance of Governance in Information Security",
    importance_items: [
      "Risk reduction: Governance helps reduce security risks facing the organization.",
      "Regulatory compliance: It ensures compliance with local and international laws and regulations related to information security and data protection.",
      "Reputation protection: It helps protect the organization’s reputation in the event of security breaches or data leaks.",
      "Operational efficiency: It improves the efficiency of operational processes and reduces errors and waste related to digital systems.",
      "Clear roles and responsibilities: It clarifies the security-related responsibilities of every individual in the organization.",
      "Identity and access management: It regulates and manages access rights to systems and data based on the least-privilege principle.",
      "Business continuity: It supports business continuity and disaster recovery plans after cyber incidents.",
      "Cloud security: It protects data stored in cloud services and controls access to it.",
      "Mobile device security: It protects work-related mobile devices such as phones, tablets, and laptops."
    ],

    roles: {
      ciso_title: "Information Security Officer",
      ciso_intro:
        "The Information Security Officer is the primary guardian of the organization’s digital assets, responsible for protecting data, systems, and infrastructure against increasing cyber threats.",
      ciso_responsibilities: [
        "Assessing security risks facing the organization and prioritizing how to address them.",
        "Developing a comprehensive security strategy to protect the organization’s digital assets.",
        "Drafting, approving, and publishing clear information security policies and procedures, and monitoring compliance.",
        "Ensuring compliance with data protection and information security regulations, such as the Saudi Data Protection Law.",
        "Conducting regular risk assessments to identify emerging threats and vulnerabilities.",
        "Detecting attacks early and responding effectively to reduce their impact.",
        "Developing and implementing incident response and business continuity plans.",
        "Classifying data according to sensitivity and applying appropriate controls for each level.",
        "Protecting sensitive data through encryption and robust access control.",
        "Managing and updating firewalls and perimeter security solutions.",
        "Using intrusion detection / prevention systems to monitor suspicious activities.",
        "Managing VPN networks and securing remote access.",
        "Ensuring that operating systems and software are regularly updated to fix vulnerabilities.",
        "Managing connected devices on the network and monitoring their security posture.",
        "Performing regular penetration tests to identify weaknesses and improve controls.",
        "Developing cybersecurity awareness and training programs for employees.",
        "Working closely with the IT department to implement security measures and controls.",
        "Coordinating with Legal and Compliance on regulatory requirements related to security.",
        "Continuously monitoring systems and periodically evaluating the effectiveness of security controls."
      ],
      ciso_profile:
        "In general, the Information Security Officer is responsible for ensuring information security across the organization and protecting its digital assets from growing threats. This role requires strong technical skills, deep understanding of security risks, and the ability to communicate effectively with various departments.",

      management_title: "Management Responsibilities for Information Security",
      management_responsibilities: [
        "Allocating an adequate budget to cover security tools, solutions, services, and training.",
        "Investing continuously in modernizing security systems and technologies.",
        "Providing a specialized cybersecurity team appropriate to the company’s size and nature of work.",
        "Ensuring continuous training and professional development for security staff.",
        "Providing support from other departments such as IT, Legal, HR, and Operations.",
        "Providing modern security tools such as antivirus, firewalls, intrusion detection systems, and SIEM tools.",
        "Ensuring that the technical infrastructure is robust and secure.",
        "Ensuring that cloud services used by the company are secure and comply with approved security standards.",
        "Providing access to the data and metrics needed to make informed security decisions.",
        "Providing periodic reports and analytics on security risk levels for proactive protection.",
        "Providing knowledge resources and a cybersecurity information library for best practices.",
        "Granting the Information Security Officer sufficient authority to make and enforce security decisions.",
        "Ensuring strong top-management support for implementing the security strategy and policies at all levels."
      ],

      employees_title: "Employees’ Responsibilities for Information Security",
      employees_intro:
        "A significant portion of information security responsibility lies with all employees, not only with the Information Security Officer and the cybersecurity team. Employees form the first line of defense against many attacks.",
      employees_responsibilities: [
        "Protecting the organization’s sensitive data from unauthorized disclosure or leakage.",
        "Using strong and unique passwords for each account, changing them regularly, and never sharing them.",
        "Being cautious when opening emails from unknown sources and avoiding clicking on suspicious links or attachments.",
        "Immediately reporting any suspicious activity or potential security incident.",
        "Complying with all approved security policies and procedures in the organization.",
        "Participating in security awareness and training programs and staying aware of new threats.",
        "Using company-provided devices safely and not installing unapproved software.",
        "Not leaving computers or mobile devices unattended and unlocked in work areas.",
        "Not using unauthorized external storage devices such as USB drives.",
        "Not sharing company information or sensitive data on social media or unofficial channels.",
        "Avoiding the use of unsecured public Wi-Fi networks to access company systems or data unless via an approved secure method (such as a corporate VPN)."
      ]
    },

    employee_data: {
      title: "Employee Data Collection",
      intro:
        "When collecting employee data, there must be a legitimate and lawful purpose for each type of data collected, while adhering to the principle of data minimization.",
      categories: [
        {
          key: "contact_info",
          label: "Contact information (name, email, phone number)",
          reasons: [
            "Daily communication regarding work matters, meetings, and important announcements.",
            "Providing technical support when the employee faces technical issues.",
            "Contacting the employee in emergencies or exceptional circumstances."
          ]
        },
        {
          key: "employment_info",
          label: "Employment information (hire date, salary, job role)",
          reasons: [
            "Accurate payroll and benefits administration.",
            "Performance evaluation and preparation of annual or periodic reports.",
            "Career planning and identifying training and development needs.",
            "Complying with government, tax, and regulatory reporting requirements."
          ]
        },
        {
          key: "device_info",
          label: "Device information (laptops, phones, and other equipment)",
          reasons: [
            "Providing technical support for employees’ devices.",
            "Applying information security controls to devices used to access company systems.",
            "Tracking company assets such as hardware and licensed software."
          ]
        },
        {
          key: "attendance",
          label: "Attendance and time-tracking records",
          reasons: [
            "Calculating actual working hours and corresponding payments.",
            "Measuring attendance, punctuality, and productivity.",
            "Complying with labor laws related to working hours and rest periods."
          ]
        },
        {
          key: "performance_data",
          label: "Performance data",
          reasons: [
            "Conducting periodic performance evaluations and identifying strengths and weaknesses.",
            "Making HR decisions regarding promotions, salary increases, or termination.",
            "Identifying training and professional development needs."
          ]
        },
        {
          key: "health_data",
          label: "Health information",
          reasons: [
            "Administering medical insurance for the employee and their dependents.",
            "Complying with applicable health-related regulations and requirements."
          ]
        }
      ]
    },

    data_sharing: {
      title: "Data Sharing Between Departments",
      intro:
        "Employee, customer, and operational data are used to support core business functions, improve processes, and comply with regulations. This is done under clear controls for data sharing.",
      purposes: {
        core_operations: [
          "Human Resources: Sharing employee data with Accounting to calculate salaries and benefits, and with IT to provide system access.",
          "Sales and Service: Sharing customer data with Sales to provide tailored offers, and with Customer Service to resolve issues.",
          "Production and Supply: Sharing inventory and sales data with Production to plan output and determine supply needs."
        ],
        process_improvement: [
          "Data analytics: Sharing data between departments for analysis and better decision-making.",
          "Product and service development: Using customer data to improve existing products and services and develop new ones.",
          "Fraud detection: Sharing data across multiple departments to detect fraudulent or abnormal patterns."
        ],
        compliance: [
          "Tax and Zakat: Sharing financial data with Accounting for tax and zakat returns.",
          "Government reporting: Sharing data with government authorities to meet legal obligations."
        ],
        collaboration: [
          "Joint projects: Sharing relevant data between departments to execute joint projects successfully.",
          "Problem solving: Exchanging data to solve issues requiring collaboration between several departments."
        ]
      },
      conditions_title: "Conditions for Data Sharing",
      conditions: [
        "Necessity: Data sharing must be necessary for a clearly defined task.",
        "Data minimization: Only the minimum amount of data required to complete the task may be shared.",
        "Consent: Where required by law, obtaining the data subject’s consent to share personal data.",
        "Security: Taking all necessary measures to protect shared data from unauthorized access or processing.",
        "Transparency: Clearly explaining how data is used and with whom it is shared.",
        "Compliance: Ensuring all data-sharing practices comply with applicable local and international regulations."
      ],
      mechanisms_title: "Secure Data-Sharing Mechanisms",
      mechanisms: [
        "Using company-approved collaboration platforms such as Microsoft Teams, OneDrive, Jira, or similar approved systems.",
        "Encrypting sensitive data before transmitting or sharing it with any internal or external party.",
        "Applying the principle of least privilege so that each user only has access to the data required for their role.",
        "Using audit logs to track and periodically review all access to data."
      ]
    },

    employee_rights: {
      title: "Employee Data Protection Rights",
      rights: [
        "Right of access: Employees have the right to access their personal data and understand how it is processed.",
        "Right to rectification: Employees have the right to request correction of inaccurate or incomplete personal data.",
        "Right to erasure: Employees may request deletion of their personal data in specific legally defined cases.",
        "Right to object: Employees may object to the processing of their personal data for legitimate reasons.",
        "Right to restriction: Employees may request restriction of processing of their personal data in certain circumstances.",
        "Right to data portability: Employees may request to transfer their personal data to another entity when legal conditions are met."
      ]
    },

    security_sanctions: {
      title: "Sanctions for Information Security and Data Protection Violations",
      intro:
        "Protecting data is one of the company’s top priorities. Data leaks or non-compliance with security instructions can lead to serious consequences for both the company and individuals. Clear and escalating sanctions are therefore defined to deter such violations.",
      sanctions: [
        "Written warnings: Sending a written warning to the violating employee explaining the nature of the violation and the consequences of repeating it.",
        "Verbal disciplinary action: Providing a verbal reprimand while emphasizing the importance of adhering to policies.",
        "Written notice in the personnel file: Recording the violation in the employee’s HR file.",
        "Salary deduction: Deducting a portion of salary as a penalty, in line with labor regulations and company policies.",
        "Job reassignment: Moving the employee to a role that does not require handling sensitive information when necessary.",
        "Suspension from work: Suspending the employee from work for a specified period, with or without pay in line with the law.",
        "Termination of employment: Ending the employment contract in severe or repeated cases.",
        "Legal liability: Initiating legal action against the employee if the violation causes major financial or legal damage or involves highly sensitive information."
      ],
      factors_title: "Factors Influencing Sanction Selection",
      factors: [
        "Severity and nature of the security violation and its impact on the company.",
        "Whether this is a first-time or repeated violation by the same employee.",
        "The actual effect of the violation on the company’s reputation, customers, or employees.",
        "Applicable laws and regulations and the legally allowed range of sanctions.",
        "The level of cooperation shown by the employee during investigation and remediation."
      ]
    }
  }
};

// --- 7. آليات الرقابة والمتابعة ---
const egovMonitoringMechanisms = {
  ar: {
    section_id: "monitoring_mechanisms",
    title: "آليات الرقابة والمتابعة",
    intro:
      "للتأكد من الالتزام بميثاق الشرف وسياسات الحوكمة المعتمدة، تم تفعيل مجموعة من الآليات الرقابية وآليات المتابعة عبر المراجعة الداخلية، والمراجعة الخارجية، وقنوات الإبلاغ عن المخالفات، إضافة إلى التدريب وبناء الثقافة المؤسسية الداعمة.",

    internal_audit: {
      title: "المراجعة الداخلية",
      role:
        "دور المراجعة الداخلية هو تقييم مدى التزام المؤسسة بميثاق الشرف والسياسات ذات الصلة، من خلال إجراء اختبارات وفحوصات دورية على مختلف الإجراءات والعمليات.",
      types: [
        "مراجعة السياسات والإجراءات للتأكد من ملاءمتها ومستوى الالتزام بتطبيقها.",
        "مراجعة السجلات المالية والعمليات المحاسبية ذات العلاقة.",
        "مراجعة العمليات التشغيلية اليومية والحرجة.",
        "مراجعة الالتزام القانوني والتنظيمي بالأنظمة واللوائح المعمول بها."
      ],
      objectives: [
        "الكشف عن أي مخالفات لميثاق الشرف أو السياسات المعتمدة.",
        "تقييم فعالية أنظمة الرقابة الداخلية وضوابط الحوكمة.",
        "تقديم توصيات عملية لتحسين الأداء المؤسسي وتقليل المخاطر."
      ],
      mechanisms:
        "يمكن تنفيذ أعمال المراجعة الداخلية بواسطة فريق داخلي متخصص يتبع مباشرة للجنة المراجعة أو مجلس الإدارة، أو من خلال التعاقد مع جهة خارجية متخصصة في المراجعة الداخلية، مع ضمان الاستقلالية عن الإدارة التنفيذية."
    },

    external_audit: {
      title: "المراجعة الخارجية",
      role:
        "تقوم المراجعة الخارجية بتقييم مدى التزام المؤسسة بمعايير الحوكمة والشفافية، بما في ذلك التزامها بميثاق الشرف، وذلك من خلال فحص مستقل وموضوعي.",
      types: [
        "مراجعة الحسابات والقوائم المالية السنوية أو الدورية.",
        "مراجعة الامتثال القانوني والضريبي والتنظيمي.",
        "مراجعة تقارير الاستدامة والمسؤولية الاجتماعية عند توافرها."
      ],
      objectives: [
        "إصدار رأي مستقل حول مدى موثوقية ومصداقية المعلومات المالية المنشورة.",
        "تقييم مدى فعالية أنظمة الرقابة الداخلية ذات العلاقة بالتقارير المالية.",
        "الكشف عن أي مخالفات قانونية أو تنظيمية أو جوهرية قد تؤثر على المؤسسة."
      ],
      mechanisms:
        "يتم تعيين مراجع خارجي مستقل لإجراء المراجعة، وغالبًا ما تكون شركة محاسبة أو استشارات مرخصة، ويتم تعيينه واعتماده من قبل الجمعية العامة للمساهمين أو الجهة المخولة، مع ضمان استقلاليته عن الإدارة."
    },

    whistleblowing: {
      title: "آليات الإبلاغ عن المخالفات",
      channels:
        "تم توفير قنوات آمنة وسرية للإبلاغ عن أي مخالفات لميثاق الشرف أو السياسات، مثل البريد الإلكتروني المخصص أو النماذج الإلكترونية أو صناديق الإبلاغ الآمنة.",
      protection:
        "تلتزم المؤسسة بحماية المبلغين من أي انتقام أو مضايقة أو إجراءات تعسفية نتيجة قيامهم بالإبلاغ بحسن نية.",
      response:
        "يتم التحقيق في جميع البلاغات بشكل عاجل وموضوعي، وفق آلية معتمدة للتحقق من المخالفة واتخاذ الإجراءات التصحيحية أو التأديبية عند الحاجة.",
      transparency:
        "يتم إطلاع المبلغ – قدر الإمكان – على نتائج التحقيق والإجراءات المتخذة، مع الحفاظ التام على سرية هويته وبياناته الشخصية."
    },

    integration_importance: {
      title: "أهمية دمج هذه الآليات",
      points: [
        "الوقاية: تساعد هذه الآليات في الكشف المبكر عن المخالفات والسلوكيات غير السليمة، مما يسمح باتخاذ الإجراءات التصحيحية قبل تفاقم الأثر.",
        "الشفافية: تعزز هذه الآليات مستوى الشفافية وتزيد من ثقة الموظفين وأصحاب المصلحة في المؤسسة.",
        "الامتثال: تضمن الالتزام بالقوانين والأنظمة والمعايير المهنية ذات الصلة.",
        "التحسين المستمر: تساهم مخرجات المراجعة الداخلية والخارجية وبلاغات المخالفات في تحسين الأداء المؤسسي وتطوير السياسات والإجراءات."
      ]
    },

    other_factors: {
      title: "عوامل أخرى يتم مراعاتها",
      items: [
        "التدريب: يتم تدريب جميع الموظفين على أهمية ميثاق الشرف، وآليات الإبلاغ عن المخالفات، وكيفية استخدام قنوات الإبلاغ بشكل صحيح وآمن.",
        "الثقافة المؤسسية: تم إعداد منظومة الحوكمة بما يدعم بناء ثقافة مؤسسية تشجع على الإبلاغ عن المخالفات وتحارب ثقافة الخوف أو المجاملة.",
        "الاستقلالية: تم تصميم وتفعيل آليات الرقابة والمتابعة بحيث تكون مستقلة عن الإدارة التنفيذية، وتخضع لإشراف مجلس الإدارة أو لجانه المتخصصة لضمان الحياد والموضوعية."
      ]
    }
  },

  en: {
    section_id: "monitoring_mechanisms",
    title: "Monitoring and Oversight Mechanisms",
    intro:
      "To ensure adherence to the Code of Conduct and approved governance policies, a set of monitoring and oversight mechanisms has been activated, including internal audit, external audit, whistleblowing channels, as well as training and a supportive organizational culture.",

    internal_audit: {
      title: "Internal Audit",
      role:
        "The internal audit function is responsible for assessing the organization’s adherence to the Code of Conduct and related policies by performing periodic tests and reviews on various processes and procedures.",
      types: [
        "Review of policies and procedures to ensure their adequacy and the level of compliance with them.",
        "Review of financial records and accounting processes.",
        "Review of day-to-day and critical operational processes.",
        "Review of legal and regulatory compliance with applicable laws and regulations."
      ],
      objectives: [
        "Identifying any violations of the Code of Conduct or approved policies.",
        "Assessing the effectiveness of internal control systems and governance controls.",
        "Providing practical recommendations to improve organizational performance and reduce risks."
      ],
      mechanisms:
        "Internal audit work may be carried out by an in-house specialized team reporting directly to the Audit Committee or Board of Directors, or by contracting an external professional firm, while ensuring independence from executive management."
    },

    external_audit: {
      title: "External Audit",
      role:
        "External audit evaluates the organization’s compliance with governance and transparency standards, including adherence to the Code of Conduct, through an independent and objective review.",
      types: [
        "Audit of annual or periodic financial statements.",
        "Audit of legal, tax, and regulatory compliance.",
        "Review of sustainability and corporate responsibility reports where applicable."
      ],
      objectives: [
        "Providing an independent opinion on the reliability and credibility of published financial information.",
        "Assessing the effectiveness of internal controls related to financial reporting.",
        "Detecting any legal, regulatory, or material violations that may affect the organization."
      ],
      mechanisms:
        "An independent external auditor is appointed to perform the audit, typically a licensed accounting or consulting firm, appointed and approved by the General Assembly or competent authority, with full independence from management."
    },

    whistleblowing: {
      title: "Whistleblowing Mechanisms",
      channels:
        "Secure and confidential channels are provided for reporting any violations of the Code of Conduct or policies, such as a dedicated email address, online reporting forms, or secure reporting boxes.",
      protection:
        "The organization is committed to protecting whistleblowers from any retaliation, harassment, or unfair treatment as a result of reporting in good faith.",
      response:
        "All reports are investigated promptly and objectively according to an approved procedure to verify the violation and take corrective or disciplinary actions as needed.",
      transparency:
        "Where possible, the whistleblower is informed of the investigation results and actions taken, while fully maintaining the confidentiality of their identity and personal data."
    },

    integration_importance: {
      title: "Importance of Integrating These Mechanisms",
      points: [
        "Prevention: These mechanisms help detect violations and improper behavior at an early stage, enabling corrective action before the impact escalates.",
        "Transparency: They enhance transparency and increase employees’ and stakeholders’ trust in the organization.",
        "Compliance: They ensure compliance with applicable laws, regulations, and professional standards.",
        "Continuous improvement: Insights from internal and external audits and whistleblowing reports contribute to improving organizational performance and updating policies and procedures."
      ]
    },

    other_factors: {
      title: "Other Factors Taken into Consideration",
      items: [
        "Training: All employees receive training on the importance of the Code of Conduct, whistleblowing mechanisms, and how to use reporting channels correctly and safely.",
        "Organizational culture: The governance framework is designed to build an organizational culture that encourages reporting of misconduct and counters fear or favoritism.",
        "Independence: Monitoring and oversight mechanisms are designed and implemented to be independent from executive management and fall under the supervision of the Board of Directors or its specialized committees to ensure neutrality and objectivity."
      ]
    }
  }
};

   // --- 9. الجمعيات ---
const egovAssembliesPolicies = [
   {
    id: "assemblies_intro",
    category: "assemblies",
    title: {
      ar: "الجمعيات - مقدمة",
      en: "Shareholders’ Assemblies – Introduction"
    },
    content: {
      ar: `
حوكمة الجمعيات العامة هي الإطار الذي يضمن إدارة الشركات المساهمة بشكل فعال وشفاف، ويعمل على تطبيق النظام الأساس المعتمد للشركة وذلك من خلال تنظيم العلاقة بين المساهمين وإدارة الشركة. تهدف الحوكمة إلى ضمان اتخاذ قرارات مدروسة وحماية حقوق جميع المساهمين، وتعزيز الثقة في الشركة لدى المستثمرين، مما يساهم في تحقيق الأهداف الاستراتيجية للشركة وحماية مصالح جميع الأطراف المعنية. كما تعزز الحوكمة الشفافية والمساءلة في عمليات اتخاذ القرارات، مما يساهم في بناء علاقة ثقة بين الشركة وجميع أصحاب المصلحة.
      `.trim(),
      en: `
The governance of shareholders’ assemblies provides the framework that ensures joint stock companies are managed effectively and transparently. It operationalizes the company’s Articles of Association by organizing the relationship between shareholders and the company’s management. Governance aims to ensure well-informed decision-making, protect the rights of all shareholders, and strengthen investor confidence in the company, thereby supporting the achievement of its strategic objectives and protecting the interests of all stakeholders. It also enhances transparency and accountability in decision-making processes, helping build a strong trust relationship between the company and all stakeholders.
      `.trim()
    }
  },
   
  {
    id: "assemblies_call",
    category: "assemblies",
    title: {
      ar: "دعوة الجمعيات",
      en: "Convening Shareholders’ Assemblies"
    },
    content: {
      ar: `
تنعقد اجتماعات المساهمين بدعوة من مجلس الإدارة، وعلى مجلس الإدارة أن يدعو الجمعية العامة العادية للانعقاد إذا طلب ذلك مراجع الحسابات أو لجنة المراجعة أو عدد من المساهمين يمثل (10%) من رأس المال على الأقل. ويجوز لمراجع الحسابات دعوة الجمعية للانعقاد إذا لم يقم المجلس بدعوة الجمعية خلال ثلاثين يوماً من تاريخ طلب مراجع الحسابات.

يعقد اجتماع المساهمين بدعوة من مجلس إدارة الشركة، كما يمكن لمجموعة من المساهمين أو مراجع الحسابات أو لجنة المراجعة طلب عقد اجتماع غير عادي. يجب نشر إعلان عن موعد الاجتماع في صحيفة يومية قبل (21) يوماً على الأقل، أو إرسال دعوات مسجلة إلى جميع المساهمين. ويمكن أيضاً استخدام وسائل الاتصال الحديثة بشرط ضمان وصول الدعوة إلى جميع المساهمين وتوثيق هذه العملية.

تعقد اجتماعات المساهمين لمناقشة قضايا هامة مثل الموافقة على التقارير المالية، وانتخاب أعضاء مجلس الإدارة، واتخاذ قرارات استراتيجية أخرى.

يجوز لمجلس الإدارة توجيه الدعوة لحضور اجتماع الجمعية العامة أو الخاصة من خلال وسائل التقنية الحديثة على النحو الآتي:
- إمكانية إثبات محتوى الدعوة وتاريخ إرسالها ووقتها.
- إمكانية معرفة موجه الدعوة والموجهة إليه.
      `.trim(),
      en: `
Shareholders’ meetings are convened by invitation of the Board of Directors. The Board must call an ordinary general assembly if requested to do so by the external auditor, the Audit Committee, or shareholders representing at least 10% of the share capital. The external auditor may call the assembly if the Board fails to do so within 30 days from the date of the auditor’s request.

Meetings are convened by the Board’s invitation, and an extraordinary meeting may also be requested by a group of shareholders, the external auditor, or the Audit Committee. A notice of the meeting must be published in a daily newspaper at least 21 days before the meeting, or registered invitations must be sent to all shareholders. Modern communication channels may also be used, provided that delivery to all shareholders is ensured and properly documented.

Shareholders’ meetings are held to discuss key matters such as approval of the financial statements, election of Board members, and other strategic decisions.

The Board may invite shareholders to attend the general or special assembly using modern technological means, provided that:
- The content of the invitation, its date, and time of dispatch can be proven.
- The identity of the sender and the recipient of the invitation can be verified.
      `.trim()
    }
  },

  {
    id: "founding_assembly",
    category: "assemblies",
    title: {
      ar: "الجمعية التأسيسية",
      en: "Founding (Constitutive) Assembly"
    },
    content: {
      ar: `
بعد الحصول على ترخيص تأسيس الشركة، يدعو المؤسسون جميع المساهمين المؤسسين لحضور اجتماع التأسيس خلال (45) يوماً. يجب أن يحضر هذا الاجتماع ما لا يقل عن نصف المساهمين المؤسسين ليكون قراراته ملزمة. إذا لم يتحقق هذا النصاب، يعقد اجتماع ثانٍ إما بعد (15) يوماً على الأقل من الاجتماع الأول، أو بعد ساعة من انتهاء مدة الاجتماع الأول بشرط أن يكون هذا الخيار مذكوراً في دعوة الاجتماع الأول.

يعد اجتماع التأسيس مهماً جداً لاعتماد النظام الأساس للشركة وانتخاب مجلس لإدارتها وتحديد القواعد التي ستحكم عملها.
      `.trim(),
      en: `
After obtaining the license to establish the company, the founders must invite all founding shareholders to attend the constitutive (founding) assembly within 45 days. At least half of the founding shareholders must attend this meeting for its resolutions to be binding. If this quorum is not met, a second meeting is convened either at least 15 days after the first meeting, or one hour after the end of the first meeting’s scheduled time, provided this option is stated in the first meeting’s invitation.

The founding assembly is critical for approving the company’s Articles of Association, electing its first Board of Directors, and setting the key rules governing its operations.
      `.trim()
    }
  },

  /* =========================
     اختصاصات الجمعية التأسيسية
     ========================= */
  {
    id: "founding_assembly_powers",
    category: "assemblies",
    title: {
      ar: "اختصاصات الجمعية التأسيسية",
      en: "Powers of the Founding Assembly"
    },
    content: {
      ar: `
تختص الجمعية التأسيسية بمجموعة من المهام الهامة لتأسيس الشركة، بما في ذلك:

- التحقق من الاكتتاب: التأكد من أن جميع الأسهم قد تم الاكتتاب فيها وأن قيمة رأس المال المدفوع تفي بالحد الأدنى المطلوب.
- تقييم الحصص العينية: إذا كانت هناك حصص عينية مساهمة في رأس المال، تقوم الجمعية التأسيسية بمناقشة تقرير التقييم الخاص بها.
- اعتماد النظام الأساسي: إقرار النص النهائي للنظام الأساسي للشركة، والذي يحدد هيكلها وطريقة إدارتها وحقوق والتزامات المساهمين.
- انتخاب مجلس الإدارة ومراجع الحسابات: اختيار أول مجلس إدارة وأول مراجع حسابات للشركة، ما لم يتم تعيينهما مسبقاً.
- مراجعة المصروفات التأسيسية: مراجعة تقرير عن المصروفات التي تكبدتها الشركة خلال مرحلة التأسيس وإقراره.

لضمان التزام الجمعية التأسيسية بأحكام النظام، يحق للوزارة أو الهيئة المعنية تعيين مراقبين لحضور الاجتماع والتأكد من سير العمل وفقاً للقانون.
      `.trim(),
      en: `
The founding assembly is responsible for key tasks related to incorporating the company, including:

- Verifying subscription: Ensuring that all shares have been subscribed for and that the paid-up capital meets the minimum required level.
- Evaluating in-kind contributions: Reviewing and discussing the valuation report of any in-kind contributions included in the share capital.
- Approving the Articles of Association: Adopting the final text of the company’s Articles, which define its structure, governance, and the rights and obligations of shareholders.
- Electing the Board and external auditor: Appointing the first Board of Directors and the first external auditor, unless they have already been appointed.
- Reviewing incorporation expenses: Reviewing and approving the report on expenses incurred during the incorporation phase.

To ensure compliance with the law, the competent Ministry or regulatory authority may appoint observers to attend the founding assembly and verify that the meeting is conducted in accordance with applicable regulations.
      `.trim()
    }
  },

  /* =========================
     اختصاصات الجمعية العامة
     ========================= */
  {
    id: "general_assembly_powers",
    category: "assemblies",
    title: {
      ar: "اختصاصات الجمعية العامة",
      en: "Powers of the General Assembly"
    },
    content: {
      ar: `
تختص الجمعيات العامة للمساهمين بكل ما يتعلق بالشركة، وتمثل الجمعية العامة المنعقدة وفقاً للإجراءات النظامية جميع المساهمين في ممارسة اختصاصاتهم المتعلقة بالشركة، وتمارس دورها وفقاً لأحكام نظام الشركات ولوائحه ونظام الشركة الأساس.
      `.trim(),
      en: `
The shareholders’ general assemblies are competent to consider all matters related to the company. A general assembly convened in accordance with statutory procedures represents all shareholders in exercising their powers concerning the company, and it discharges its role in line with the Companies Law, its implementing regulations, and the company’s Articles of Association.
      `.trim()
    }
  },

  /* =========================
     اختصاصات الجمعية العامة غير العادية
     ========================= */
  {
    id: "extraordinary_general_assembly_powers",
    category: "assemblies",
    title: {
      ar: "اختصاصات الجمعية العامة غير العادية",
      en: "Powers of the Extraordinary General Assembly"
    },
    content: {
      ar: `
الجمعية العامة غير العادية هي الجهة المخولة باتخاذ القرارات الاستراتيجية الهامة التي تؤثر على هيكل الشركة ومستقبلها. من أهم اختصاصاتها:

- تعديل نظام الشركة الأساس باستثناء التعديلات التي تعد بموجب أحكام نظام الشركات باطلة.
- زيادة رأس مال الشركة وفق الأوضاع المقررة في نظام الشركات ولوائحه.
- تخفيض رأس مال الشركة في حال زيادته على حاجة الشركة أو إذا منيت بخسائر مالية، وفق الأوضاع المقررة في نظام الشركات ولوائحه.
- تقرير تكوين احتياطي اتفاقي للشركة ينص عليه نظامها الأساس ويخصص لغرض معين، والتصرف فيه.
- تقرير استمرار الشركة أو حلها قبل الأجل المعين في نظامها الأساس.
- الموافقة على عملية شراء أسهم الشركة.
- إصدار أسهم ممتازة أو إقرار شرائها أو تحويل أسهم عادية إلى ممتازة أو تحويل أسهم ممتازة إلى عادية، متى نص على ذلك نظام الشركة الأساس ووفقاً للضوابط التنظيمية لشركات المساهمة غير المدرجة.
- إصدار أدوات دين أو صكوك تمويلية قابلة للتحويل إلى أسهم، وبيان الحد الأقصى لعدد الأسهم التي يجوز إصدارها مقابل تلك الأدوات أو الصكوك.
- تخصيص الأسهم المصدرة عند زيادة رأس المال أو جزء منها للعاملين في الشركة والشركات التابعة أو بعضها، أو أي من ذلك.
- وقف العمل بحق الأولوية للمساهمين في الاكتتاب بزيادة رأس المال مقابل حصص نقدية أو إعطاء الأولوية لغير المساهمين في الحالات التي تراها مناسبة لمصلحة الشركة، إذا نص على ذلك في نظام الشركة الأساس.
- يجوز للجمعية العامة غير العادية أن تصدر قرارات داخلة في اختصاصات الجمعية العامة العادية، وذلك وفقاً لشروط إصدار قرارات الجمعية العامة العادية المحددة بالأغلبية المطلقة للأسهم الممثلة في الاجتماع.
      `.trim(),
      en: `
The Extraordinary General Assembly is the competent body to adopt major strategic decisions that affect the company’s structure and future. Its main powers include:

- Amending the company’s Articles of Association, except for amendments that are deemed void under the Companies Law.
- Increasing the company’s share capital in accordance with the procedures set out in the Companies Law and its regulations.
- Reducing the company’s share capital if it exceeds the company’s needs, or in case of losses, in line with the requirements of the Companies Law and its regulations.
- Approving the creation of a discretionary reserve as provided for in the Articles of Association, earmarking it for a specific purpose, and deciding how it is used.
- Deciding whether the company should continue or be dissolved before the term specified in the Articles of Association.
- Approving share buy-back transactions by the company.
- Issuing preferred shares, approving their purchase, converting ordinary shares into preferred shares or vice versa, whenever permitted by the Articles of Association and in accordance with applicable regulations for unlisted joint stock companies.
- Issuing debt instruments or sukuk that are convertible into shares and specifying the maximum number of shares that may be issued in exchange for such instruments.
- Allocating all or part of the shares issued upon a capital increase to employees of the company and/or its subsidiaries.
- Suspending pre-emptive rights of existing shareholders in subscribing to a capital increase in cash, or giving pre-emptive rights to non-shareholders where deemed in the company’s interest, if allowed by the Articles of Association.
- Adopting resolutions that fall within the powers of the Ordinary General Assembly, provided that the voting requirements applicable to ordinary resolutions (absolute majority of shares represented at the meeting) are met.
      `.trim()
    }
  },

  /* =========================
     اختصاصات الجمعية العامة العادية
     ========================= */
  {
    id: "ordinary_general_assembly_powers",
    category: "assemblies",
    title: {
      ar: "اختصاصات الجمعية العامة العادية",
      en: "Powers of the Ordinary General Assembly"
    },
    content: {
      ar: `
تنعقد الجمعية العامة العادية مرة على الأقل في السنة خلال الأشهر الستة التالية لانتهاء السنة المالية للشركة، ويجوز دعوة جمعيات عامة عادية أخرى كلما دعت الحاجة إلى ذلك. وفيما عدا ما تختص به الجمعية العامة غير العادية، تختص الجمعية العامة العادية بجميع شؤون الشركة، وعلى الأخص ما يأتي:

- تعيين أعضاء مجلس الإدارة وعزلهم.
- الترخيص في أن يكون لعضو مجلس الإدارة مصلحة مباشرة أو غير مباشرة في الأعمال والعقود التي تتم لحساب الشركة، وذلك وفق أحكام نظام الشركات ولوائحه.
- الترخيص لعضو مجلس الإدارة في الاشتراك في عمل من شأنه منافسة الشركة، أو في منافستها في أحد فروع النشاط الذي تزاوله، وذلك وفق أحكام نظام الشركات ولوائحه.
- مراقبة مدى التزام أعضاء مجلس الإدارة بأحكام نظام الشركات ولوائحه والأنظمة الأخرى ذات العلاقة ونظام الشركة الأساس، وفحص أي ضرر ينشأ عن مخالفتهم لتلك الأحكام أو إساءتهم تدبير أمور الشركة، وتحديد المسؤولية المترتبة على ذلك، واتخاذ ما تراه مناسباً في هذا الشأن وفقاً لنظام الشركات ولوائحه.
- تشكيل لجنة المراجعة وفقاً لأحكام نظام الشركات ولوائحه.
- الموافقة على القوائم المالية للشركة.
- الموافقة على تقرير مجلس الإدارة.
- البت في اقتراحات مجلس الإدارة بشأن طريقة توزيع الأرباح الصافية.
- تعيين مراجعي حسابات الشركة، وتحديد مكافآتهم، وإعادة تعيينهم، وتغييرهم، والموافقة على تقاريرهم.
- النظر في المخالفات والأخطاء التي تقع من مراجعي حسابات الشركة في أدائهم لمهامهم، وفي أي صعوبات يخطر بها مراجعو حسابات الشركة تتعلق بتمكين مجلس الإدارة أو إدارة الشركة لهم من الاطلاع على الدفاتر والسجلات وغيرها من الوثائق والبيانات والإيضاحات اللازمة لأداء مهامهم، واتخاذ ما تراه مناسباً في هذا الشأن.
- وقف تجنيب احتياطي الشركة النظامي متى بلغ (30%) من رأس مال الشركة المدفوع، وتقرير توزيع ما جاوز هذه النسبة على مساهمي الشركة في السنوات المالية التي لا تحقق الشركة فيها أرباحاً صافية.
- استخدام الاحتياطي الاتفاقي للشركة في حال عدم تخصيصه لغرض معين، وذلك بناءً على اقتراح من مجلس الإدارة وفي الأوجه التي تعود بالنفع على الشركة أو المساهمين.
- تكوين احتياطيات أخرى للشركة، غير الاحتياطي النظامي والاحتياطي الاتفاقي، والتصرف فيها.
- اقتطاع مبالغ من الأرباح الصافية للشركة لإنشاء مؤسسات اجتماعية لعاملي الشركة أو لمعاونة ما يكون قائماً من هذه المؤسسات، وفقاً لحكم المادة التاسعة والعشرين بعد المئة من نظام الشركات.

كما تختص بالموافقة قبل إصدار قرار ببيع أكثر من (50%) من أصول الشركة سواء تم البيع من خلال صفقة واحدة أو عدة صفقات. وفي حال تضمن نظام الشركة الأساس أن بيع تلك الأصول من اختصاص الجمعية العامة غير العادية، فعلى مجلس الإدارة الحصول على موافقتها على البيع. وإذا تم البيع من خلال عدة صفقات فتعتبر الصفقة التي تؤدي لتجاوز نسبة (50%) من بيع الأصول هي الصفقة التي يلزم موافقة الجمعية العامة عليها، وتحسب هذه النسبة من تاريخ أول صفقة تمت خلال الاثني عشر شهراً الماضية.
      `.trim(),
      en: `
The Ordinary General Assembly must be convened at least once a year during the six months following the end of the company’s financial year, and additional ordinary meetings may be called whenever needed. Except for matters reserved to the Extraordinary General Assembly, the Ordinary General Assembly is competent to consider all company affairs, in particular:

- Appointing and dismissing members of the Board of Directors.
- Authorizing a Board member to have a direct or indirect interest in the business or contracts concluded for the company, in accordance with the Companies Law and its regulations.
- Authorizing a Board member to participate in any activity that competes with the company or in a branch of its activities, in line with the Companies Law and its regulations.
- Monitoring the Board’s compliance with the Companies Law, its regulations, other applicable laws, and the Articles of Association; examining any damage caused by violations or mismanagement; determining liability; and taking appropriate action in accordance with the Companies Law.
- Forming the Audit Committee in accordance with the Companies Law and its regulations.
- Approving the company’s financial statements.
- Approving the Board of Directors’ report.
- Deciding on the Board’s proposals regarding the method of distributing net profits.
- Appointing the company’s external auditors, determining their fees, re-appointing or changing them, and approving their reports.
- Considering any violations or errors committed by the external auditors in performing their duties, as well as any difficulties they report concerning access to the books, records, documents, data, and explanations required to perform their work, and taking appropriate action.
- Suspending further allocation to the statutory reserve once it reaches 30% of the paid-up share capital and deciding on the distribution of any excess to shareholders in financial years in which the company does not achieve net profits.
- Using the discretionary reserve, if not allocated for a specific purpose, based on a Board recommendation and in ways that benefit the company or its shareholders.
- Creating additional reserves for the company, other than the statutory and discretionary reserves, and determining how they are used.
- Allocating amounts from net profits to establish social institutions for company employees or to support existing ones, in accordance with Article 129 of the Companies Law.

The Ordinary General Assembly is also responsible for approving any decision to sell more than 50% of the company’s assets, whether through a single transaction or multiple transactions. If the Articles of Association provide that such a sale is within the powers of the Extraordinary General Assembly, the Board must obtain its approval. Where the sale occurs through multiple transactions, the transaction that causes the aggregate value of sold assets to exceed 50% (calculated from the date of the first transaction within the preceding twelve months) is the one that requires the General Assembly’s approval.
      `.trim()
    }
  },

  /* =========================
     سجل حضور الجمعيات
     ========================= */
  {
    id: "assemblies_attendance_register",
    category: "assemblies",
    title: {
      ar: "سجل حضور الجمعيات",
      en: "Attendance Register for Assemblies"
    },
    content: {
      ar: `
يسجل المساهمون أسمائهم مسبقاً في مركز الشركة الرئيسي لضمان تنظيم عملية التصويت وتقدير عدد الحضور. يتم حساب حضور وأصوات المساهمين المشاركين في الجمعية العامة أو الخاصة باستخدام وسائل تقنية حديثة مثل التصويت الإلكتروني والتطبيقات الذكية، مما يضمن نزاهة وشفافية عملية التصويت. ويعتبر التصويت الإلكتروني ضمن النصاب اللازم لصحة انعقاد اجتماع الجمعية وصدور القرارات.
      `.trim(),
      en: `
Shareholders record their names in advance at the company’s head office to help organize the voting process and estimate the number of attendees. Attendance and voting of shareholders participating in the general or special assembly may be recorded using modern technological tools such as electronic voting and smart applications, ensuring fairness and transparency in the voting process. Electronic votes are counted as part of the quorum required for a valid assembly meeting and for adopting resolutions.
      `.trim()
    }
  },

  /* =========================
     حضور الجمعيات
     ========================= */
  {
    id: "assemblies_attendance_right",
    category: "assemblies",
    title: {
      ar: "حضور الجمعيات",
      en: "Right to Attend Assemblies"
    },
    content: {
      ar: `
لكل مساهم، بغض النظر عن عدد الأسهم التي يملكها، الحق في حضور الجمعيات العامة للمساهمين، وكذلك لكل مكتتب الحق في حضور الجمعية التأسيسية. ويجوز للمساهم أن يوكل شخصاً آخر، غير عضو في مجلس الإدارة، لحضور الاجتماع نيابة عنه وفقاً لسياسة التوكيل المعتمدة بالشركة. تهدف سياسة التوكيل إلى تنظيم عملية التوكيل وضمان أن يكون الوكيل مؤهلاً لحضور الاجتماع واتخاذ القرارات نيابة عن المساهم.
      `.trim(),
      en: `
Every shareholder, regardless of the number of shares held, has the right to attend general shareholders’ assemblies, and every subscriber has the right to attend the founding assembly. A shareholder may appoint another person, who is not a Board member, to attend the meeting on their behalf in accordance with the company’s proxy policy. The proxy policy aims to regulate the delegation process and ensure that the proxy holder is qualified to attend the meeting and vote on behalf of the shareholder.
      `.trim()
    }
  },

  /* =========================
     نصاب اجتماع الجمعية العامة العادية
     ========================= */
  {
    id: "ordinary_quorum",
    category: "assemblies",
    title: {
      ar: "نصاب اجتماع الجمعية العامة العادية",
      en: "Quorum of the Ordinary General Assembly"
    },
    content: {
      ar: `
يجب أن يحضر اجتماع الجمعية العامة العادية ما لا يقل عن ربع المساهمين الذين يحق لهم التصويت حتى تكون قراراته صحيحة. إذا لم يحضر هذا العدد، يعقد اجتماع ثانٍ خلال ثلاثين يوماً. ويمكن عقد الاجتماع الثاني بعد ساعة من انتهاء مدة الاجتماع الأول بشرط أن يكون هذا الخيار مذكوراً في الدعوة الأولى. يكون اجتماع الجمعية العامة الثاني صحيحاً مهما كان عدد الحضور، وذلك لضمان اتخاذ القرارات اللازمة لتسيير أعمال الشركة.
      `.trim(),
      en: `
For the Ordinary General Assembly meeting to be valid, shareholders entitled to vote and representing at least one quarter of the company’s shares must be present. If this quorum is not met, a second meeting must be held within 30 days. The second meeting may be held one hour after the scheduled end time of the first meeting, provided this option is stated in the first invitation. The second ordinary meeting is valid regardless of the number of shares represented, to ensure that necessary decisions can be taken to run the company’s affairs.
      `.trim()
    }
  },

  /* =========================
     نصاب اجتماع الجمعية العامة غير العادية
     ========================= */
  {
    id: "extraordinary_quorum",
    category: "assemblies",
    title: {
      ar: "نصاب اجتماع الجمعية العامة غير العادية",
      en: "Quorum of the Extraordinary General Assembly"
    },
    content: {
      ar: `
تتطلب اجتماعات الجمعية العامة غير العادية، التي تتخذ قرارات هامة تتعلق بمستقبل الشركة، حضور نسبة أكبر من المساهمين مقارنة بالاجتماعات العادية. يجب أن يحضر الاجتماع الأول للجمعية العامة غير العادية ما لا يقل عن نصف المساهمين. إذا لم يتم بلوغ هذا النصاب، يعقد اجتماع ثانٍ بنفس الشروط، ويعتبر صحيحاً إذا حضره ربع المساهمين على الأقل. وفي حالة عدم اكتمال النصاب في الاجتماع الثاني، يعقد اجتماع ثالث، ويعتبر صحيحاً مهما كان عدد الحضور بعد الحصول على موافقة الجهة المختصة. هذه الإجراءات تضمن أن القرارات الهامة تتخذ بموافقة غالبية كبيرة من المساهمين.
      `.trim(),
      en: `
Extraordinary General Assembly meetings, which adopt key decisions affecting the company’s future, require a higher quorum than ordinary meetings. The first extraordinary meeting is valid only if shareholders representing at least half of the company’s shares are present. If this quorum is not reached, a second meeting is held under the same conditions and is valid if shareholders representing at least one quarter of the shares are present. If the quorum is still not met in the second meeting, a third meeting may be held and will be valid regardless of the number of shares represented, after obtaining the approval of the competent authority. These rules ensure that major decisions are taken with broad shareholder support.
      `.trim()
    }
  },

  /* =========================
     التصويت في الجمعيات
     ========================= */
  {
    id: "assemblies_voting",
    category: "assemblies",
    title: {
      ar: "التصويت في الجمعيات",
      en: "Voting in Assemblies"
    },
    content: {
      ar: `
في جميع الجمعيات العامة، يحق لكل سهم صوت واحد. عند انتخاب أعضاء مجلس الإدارة، يستخدم نظام التصويت التراكمي الذي يسمح للمساهم بتجميع جميع أصوات أسهمه والتصويت بها لصالح مرشح واحد أو توزيعها على عدة مرشحين. هذا النظام يضمن تمثيلاً عادلاً لجميع المساهمين، بما في ذلك صغار المساهمين.

لا يسمح لأعضاء مجلس الإدارة بالمشاركة في التصويت على قرارات تتعلق بإبراء ذممهم أو بقضايا تخصهم شخصياً، وذلك لضمان نزاهة عملية اتخاذ القرارات.
      `.trim(),
      en: `
In all general assemblies, each share carries one vote. When electing members of the Board of Directors, cumulative voting is used, allowing a shareholder to allocate all votes associated with their shares to a single candidate or distribute them among multiple candidates. This system ensures fair representation for all shareholders, including minority shareholders.

Board members are not permitted to participate in voting on resolutions related to discharging them from liability or on matters in which they have a personal interest, in order to safeguard the integrity of the decision-making process.
      `.trim()
    }
  },

  /* =========================
     قرارات الجمعيات
     ========================= */
  {
    id: "assemblies_resolutions",
    category: "assemblies",
    title: {
      ar: "قرارات الجمعيات",
      en: "Resolutions of Assemblies"
    },
    content: {
      ar: `
تتطلب عملية اتخاذ القرارات في الجمعيات العامة موافقة نسبة معينة من المساهمين الحاضرين. ففي الجمعية التأسيسية والجمعية العامة العادية، تحتاج القرارات إلى موافقة أغلبية بسيطة من الحاضرين. أما القرارات الهامة في الجمعية العامة غير العادية، مثل زيادة أو تخفيض رأس المال أو حل الشركة، فتتطلب موافقة أغلبية ثلثي الحاضرين. هذه النسب العالية تضمن أن القرارات الهامة تتخذ بموافقة كبيرة من المساهمين.
      `.trim(),
      en: `
Adopting resolutions in general assemblies requires the approval of a specific proportion of the shareholders present. In the founding assembly and the Ordinary General Assembly, resolutions are passed by a simple majority of the shares represented. For key resolutions in the Extraordinary General Assembly—such as increasing or reducing the share capital or dissolving the company—a two-thirds majority of the shares represented is required. These higher thresholds ensure that critical decisions are backed by a strong majority of shareholders.
      `.trim()
    }
  },

  /* =========================
     المناقشة في الجمعيات
     ========================= */
  {
    id: "assemblies_discussion",
    category: "assemblies",
    title: {
      ar: "المناقشة في الجمعيات",
      en: "Discussion in Assemblies"
    },
    content: {
      ar: `
يحق لكل مساهم المشاركة في مناقشة الأمور المدرجة على جدول أعمال الجمعية العامة، وطرح الأسئلة على مجلس الإدارة ومراجع الحسابات. يجب على مجلس الإدارة أو مراجع الحسابات الإجابة على هذه الأسئلة بشكل واضح ومفصل، ما لم يؤثر ذلك سلباً على مصالح الشركة. إذا لم يقتنع مساهم بإجابة ما، يمكنه عرض الأمر على التصويت في الجمعية العامة، ويكون قرار الجمعية نهائياً.
      `.trim(),
      en: `
Every shareholder has the right to participate in discussions on the items listed on the agenda of the general assembly and to ask questions to the Board of Directors and the external auditor. The Board or the auditor must answer these questions clearly and in sufficient detail, unless doing so would harm the company’s interests. If a shareholder is not satisfied with a response, they may request that the matter be put to a vote by the general assembly, and the assembly’s decision will be final.
      `.trim()
    }
  },

  /* =========================
     رئاسة الجمعيات وإعداد المحاضر
     ========================= */
  {
    id: "assemblies_chairmanship_minutes",
    category: "assemblies",
    title: {
      ar: "رئاسة الجمعيات وإعداد المحاضر",
      en: "Chairing Assemblies and Preparing Minutes"
    },
    content: {
      ar: `
يرأس اجتماعات الجمعية العامة رئيس مجلس الإدارة، وفي حال غيابه يحل محله نائبه أو من ينتدبه المجلس. بعد كل اجتماع، يتم تحرير محضر يوضح الحضور، والقرارات التي اتخذت، والمناقشات التي دارت. يوقع هذا المحضر رئيس الاجتماع وأمين السر ومسؤول تسجيل الأصوات. يعد المحضر الدليل الرسمي على كل ما دار في الاجتماع والقرارات التي اتخذت.
      `.trim(),
      en: `
General assembly meetings are chaired by the Chair of the Board of Directors, or in their absence by the Vice-Chair or another person designated by the Board. After each meeting, minutes are prepared recording the attendees, the resolutions adopted, and a summary of the discussions. The minutes must be signed by the chair of the meeting, the secretary, and the person responsible for vote counting. These minutes serve as the official record of what took place at the meeting and the decisions made.
      `.trim()
    }
  },

  /* =========================
     اجتماع الجمعية من خلال وسائل التقنية الحديثة
     ========================= */
  {
    id: "assemblies_remote_meetings",
    category: "assemblies",
    title: {
      ar: "اجتماع الجمعية من خلال وسائل التقنية الحديثة",
      en: "Holding Assemblies via Modern Technology"
    },
    content: {
      ar: `
يجوز اشتراك المساهمين في اجتماعات الجمعية العامة والخاصة ومداولاتها، واطلاعهم على جدول أعمالها والمستندات ذات العلاقة، من خلال وسائل التقنية الحديثة، وذلك وفقاً للضوابط الآتية:
- أن تكون مشاركة المساهم عن طريق نقل مرئي وصوتي لحظي لاجتماع الجمعية العامة أو الخاصة.
- أن يتاح للمساهم المشاركة بفعالية في اجتماع الجمعية العامة أو الخاصة وبصورة آنية تمكنه من الاستماع ومتابعة العروض وإبداء الرأي والمناقشة والتصويت على القرارات.

يجوز للشركة أن تتيح للمساهمين التصويت الآلي على بنود جدول أعمال اجتماعات الجمعية العامة أو الخاصة وإن لم يحضروا هذه الاجتماعات، وذلك لما يأتي:
- أن يمكّن التصويت الآلي المساهمين من الإدلاء بأصواتهم سواء قبل اجتماع الجمعية العامة أو الخاصة أو خلاله، دون الحاجة إلى تعيين وكيل للحضور نيابة عنهم.
- أن يُفتح باب التصويت الآلي على بنود جدول أي اجتماع جمعية عامة أو خاصة بعد تاريخ توجيه الدعوة على ألا تقل مدة التصويت الآلي عن (ثلاثة) أيام قبل تاريخ عقد الجمعية، ويوقف التصويت الآلي على أي بند من بنود جدول اجتماع الجمعية العامة أو الخاصة عند الانتهاء من مناقشته والتصويت عليه في الجمعية.

لا يحول عقد اجتماعات الجمعية العامة أو الخاصة من خلال وسائل التقنية الحديثة دون عقد تلك الاجتماعات في المكان المحدد في الدعوة ومنح المساهمين حق حضور تلك الاجتماعات شخصياً.
      `.trim(),
      en: `
Shareholders may participate in general and special assembly meetings, follow deliberations, and access the agenda and related documents through modern technological means, subject to the following conditions:
- Shareholder participation must be through real-time audio-visual transmission of the general or special assembly meeting.
- Shareholders must be able to participate effectively in real time, including listening, following presentations, expressing opinions, taking part in discussions, and voting on resolutions.

The company may also enable shareholders to cast their votes electronically on the items of the agenda of general or special assembly meetings, even if they do not physically attend, provided that:
- Electronic voting allows shareholders to cast their votes before or during the meeting without the need to appoint a proxy.
- The electronic voting window for any general or special assembly meeting opens after the invitation is issued and remains available for at least three days prior to the meeting date. Electronic voting on any agenda item is closed once discussion of that item concludes and voting is completed during the meeting.

Holding general or special assemblies via modern communication technologies does not prevent holding the meeting at the physical venue stated in the invitation, nor does it affect shareholders’ rights to attend in person.
      `.trim()
    }
  },

  /* =========================
     التحقق من هوية المساهم المشارك من خلال وسائل التقنية الحديثة
     ========================= */
  {
    id: "assemblies_identity_verification",
    category: "assemblies",
    title: {
      ar: "التحقق من هوية المساهم من خلال التقنية الحديثة",
      en: "Verifying Shareholder Identity in Remote Participation"
    },
    content: {
      ar: `
يجب على مجلس الإدارة في حال عقد اجتماع الجمعية العامة أو الخاصة من خلال وسائل التقنية الحديثة، وضع الإجراءات اللازمة للتحقق من هوية المساهم الذي صوت آلياً والمساهم المشارك في اجتماع الجمعية، ومن أحقيته في التصويت على أي من بنود الاجتماع. ومن ضمن هذه الإجراءات ما يلي:

- التحقق من رقم الهوية: يمكن طلب من المساهم إدخال رقم هويته الوطنية أو رقم سجل تجاري، ثم مقارنته بالبيانات المسجلة لدى الشركة.
- التحقق من توقيع إلكتروني: يمكن استخدام توقيع إلكتروني مؤكد لضمان أن الشخص الذي يقوم بالتصويت هو الشخص نفسه الذي قام بالتسجيل.
- التحقق من عنوان البريد الإلكتروني: يمكن استخدام عنوان البريد الإلكتروني المسجل لدى الشركة للتأكد من هوية المساهم.
- التحقق من رقم الهاتف المحمول: يمكن استخدام رقم الهاتف المحمول المسجل لدى الشركة لإرسال رمز تحقق للمساهم.
- الاستعانة بخدمات التحقق من الهوية: يمكن للشركة الاستعانة بخدمات الجهات الخارجية المتخصصة في التحقق من الهوية.
      `.trim(),
      en: `
When a general or special assembly meeting is held using modern technological means, the Board of Directors must establish procedures to verify the identity of shareholders who vote electronically or participate remotely, and to confirm their eligibility to vote on meeting agenda items. These procedures may include:

- National ID / commercial registration verification: Requiring the shareholder to enter their national ID or commercial registration number and matching it with the company’s records.
- Electronic signature verification: Using a verified electronic signature to ensure that the person casting the vote is the same person who registered.
- Email verification: Using the email address registered with the company to confirm the shareholder’s identity.
- Mobile number verification: Sending a verification code to the mobile number registered with the company.
- Third-party identity services: Engaging specialized external identity verification service providers.
      `.trim()
    }
  },

  /* =========================
     التوكيل لحضور الجمعية
     ========================= */
  {
    id: "assemblies_proxy_attendance",
    category: "assemblies",
    title: {
      ar: "التوكيل لحضور الجمعية",
      en: "Proxy for Attending the Assembly"
    },
    content: {
      ar: `
يحق للمساهم أن يوكل – كتابة – شخصاً آخر من المساهمين أو من غيرهم، من غير أعضاء مجلس الإدارة، لحضور اجتماع الجمعية العامة أو الخاصة والتصويت على بنود جدول أعمالها نيابة عنه، وذلك وفقاً لصيغة التوكيل المرافقة للدعوة إلى الاجتماع الصادرة عن الشركة أو بموجب وكالة شرعية أو نظامية تنص صراحة على حق الوكيل في حضور الجمعية العامة أو الخاصة للشركة والتصويت على بنود جدول أعمالها.

ما لم ينص في التوكيل خلاف ذلك يكون التوكيل سارياً لاجتماع الجمعية العامة أو الخاصة التالي لصدوره أو أي اجتماع لاحق يؤجل إليه.
      `.trim(),
      en: `
A shareholder may authorize— in writing— another person, whether a shareholder or not, provided that such person is not a Board member, to attend the general or special assembly on their behalf and vote on the agenda items. This must be done using the proxy form attached to the company’s meeting invitation or via a legal or statutory power of attorney that explicitly authorizes the proxy to attend the company’s general or special assemblies and vote on their agenda items.

Unless otherwise stated in the proxy instrument, the proxy is valid for the next general or special assembly following its issuance or for any subsequent meeting to which the original meeting is adjourned.
      `.trim()
    }
  },

  /* =========================
     تزويد الشركة بالتوكيل
     ========================= */
  {
    id: "assemblies_providing_proxy_to_company",
    category: "assemblies",
    title: {
      ar: "تزويد الشركة بالتوكيل",
      en: "Providing the Company with the Proxy"
    },
    content: {
      ar: `
على المساهم أو وكيله أن يزود الشركة بنسخة من التوكيل قبل يومين على الأقل من موعد عقد اجتماع الجمعية العامة أو الخاصة، وعلى الوكيل إبراز التوكيل قبل عقد الاجتماع. وللشركة قبول التوكيلات في حال تزويدها بها قبل انتهاء إجراءات تسجيل المساهمين في الجمعية العامة أو الخاصة.

وتكون الإجراءات المتبعة لتقديم التوكيل كالآتي:
- تعبئة نموذج التوكيل: يقوم المساهم بتعبئة نموذج التوكيل المقدم من الشركة أو إعداد توكيل وفقًا للصيغة المحددة.
- المصادقة على التوقيع: يقوم المساهم أو وكيله بمصادقة التوقيع على التوكيل من الجهة المختصة.
- تقديم التوكيل للشركة: يتم تقديم نسخة من التوكيل للشركة قبل الموعد المحدد.
- التحقق من صحة التوكيل: تقوم الشركة بالتحقق من صحة التوكيل والتأكد من أن جميع البيانات صحيحة وأن التوقيع مصدق.
- تسجيل التوكيل: يتم تسجيل التوكيل في سجل خاص بالاجتماع.

وتكون العواقب المحتملة لعدم تقديم التوكيل في الموعد المحدد كالآتي:
- رفض التوكيل: قد ترفض الشركة قبول التوكيل إذا تم تقديمه بعد الموعد المحدد.
- عدم احتساب الصوت: لن يتم احتساب صوت المساهم الذي لم يقدم توكيلاً صحيحاً في الوقت المحدد.
      `.trim(),
      en: `
The shareholder or his proxy must provide the company with a copy of the proxy at least two (2) days before the date of the general or extraordinary assembly meeting, and the proxy must present the original proxy before the meeting. The company may accept proxies if they are submitted before the end of the shareholder registration procedures for the relevant assembly.

The procedures for submitting the proxy are as follows:
- Completing the proxy form: The shareholder fills in the proxy form provided by the company or prepares a proxy according to the prescribed format.
- Signature authentication: The shareholder or his proxy has the proxy signature authenticated by the competent authority.
- Submitting the proxy to the company: A copy of the proxy is submitted to the company before the specified deadline.
- Verifying the proxy: The company verifies the validity of the proxy and ensures that all data are correct and the signature is properly authenticated.
- Registering the proxy: The proxy is recorded in a special register for the meeting.

The potential consequences of failing to submit the proxy within the required period are as follows:
- Rejection of the proxy: The company may refuse to accept the proxy if it is submitted after the specified deadline.
- Vote not counted: The vote of the shareholder who did not submit a valid proxy in due time will not be counted.
      `.trim()
    }
  },

  /* =========================
     تزويد الوزارة بتقرير مجلس الإدارة عن نشاط الشركة
     ========================= */
  {
    id: "assemblies_board_report_to_ministry",
    category: "assemblies",
    title: {
      ar: "تزويد الوزارة بتقرير مجلس الإدارة عن نشاط الشركة",
      en: "Submitting the Board Report on Company Activities to the Ministry"
    },
    content: {
      ar: `
على رئيس مجلس الإدارة أن يزود الوزارة بتقرير مجلس الإدارة عن نشاط الشركة قبل الموعد المحدد لانعقاد الجمعية العامة العادية السنوي بواحد وعشرين يومًا على الأقل.
      `.trim(),
      en: `
The Chairman of the Board of Directors must provide the Ministry with the Board's report on the company's activities at least twenty-one (21) days before the scheduled date of the annual Ordinary General Assembly meeting.
      `.trim()
    }
  },

  /* =========================
     توزيع الأرباح على المساهمين
     ========================= */
  {
    id: "assemblies_dividend_distribution",
    category: "assemblies",
    title: {
      ar: "توزيع الأرباح على المساهمين",
      en: "Distribution of Dividends to Shareholders"
    },
    content: {
      ar: `
يجب على رئيس مجلس الإدارة تنفيذ قرار الجمعية العامة بشأن توزيع الأرباح على المساهمين المقيدين خلال مدة لا تزيد عن خمسة عشر يومًا من تاريخ استحقاق تلك الأرباح المحدد في قرار الجمعية أو قرار مجلس الإدارة بتوزيع أرباح مرحلية بحسب الأحوال.
      `.trim(),
      en: `
The Chairman of the Board of Directors must implement the General Assembly's resolution regarding the distribution of dividends to the registered shareholders within a period not exceeding fifteen (15) days from the dividend entitlement date specified in the General Assembly's resolution or in the Board of Directors' resolution to distribute interim dividends, as applicable.
      `.trim()
    }
  },

  /* =========================
     القيمة الاسمية للأسهم
     ========================= */
  {
    id: "assemblies_share_nominal_value",
    category: "assemblies",
    title: {
      ar: "القيمة الاسمية للأسهم",
      en: "Nominal Value of Shares"
    },
    content: {
      ar: `
القيمة الاسمية للسهم هي القيمة التي تحددها الشركة عند إصدار السهم لأول مرة، وهي تعتبر القيمة الدفترية للسهم في ميزانية الشركة.

القواعد المتعلقة بإصدار الأسهم في الشركة، وتحديداً القيمة الاسمية للسهم:
- الحد الأدنى للقيمة الاسمية: لا يجوز إصدار أسهم بقيمة أقل من قيمتها الاسمية المحددة عند تأسيس الشركة.
- الحد الأعلى للقيمة الاسمية: يجوز إصدار أسهم بقيمة أعلى من قيمتها الاسمية بشرط موافقة الجمعية العامة غير العادية.
- معاملة الفرق بين القيمة الاسمية وسعر الإصدار: في حالة إصدار الأسهم بسعر أعلى من قيمتها الاسمية، يتم تخصيص الفرق في بند مستقل ضمن حقوق المساهمين، ولا يجوز توزيعه كأرباح نقدية، ولكن يمكن استخدامه لزيادة رأس المال عن طريق إصدار أسهم مجانية أو لإطفاء الخسائر بعد استنفاد الاحتياطيات.
      `.trim(),
      en: `
The nominal value of a share is the value determined by the company upon the initial issuance of the share, and it is considered the book value of the share in the company's balance sheet.

The rules related to the issuance of shares in the company, specifically the nominal value of shares, are as follows:
- Minimum nominal value: Shares may not be issued at a value lower than their nominal value determined upon the incorporation of the company.
- Maximum nominal value: Shares may be issued at a value higher than their nominal value, subject to the approval of the Extraordinary General Assembly.
- Treatment of the difference between nominal value and issue price: If shares are issued at a price higher than their nominal value, the difference is allocated to a separate item within shareholders' equity. This difference may not be distributed as cash dividends, but may be used to increase the share capital through the issuance of bonus shares or to offset losses after all reserves have been exhausted.
      `.trim()
    }
  },

  /* =========================
     تعديل حقوق فئات المساهمين
     ========================= */
  {
    id: "assemblies_amending_shareholder_class_rights",
    category: "assemblies",
    title: {
      ar: "تعديل حقوق فئات المساهمين",
      en: "Amendment of Rights of Shareholder Classes"
    },
    content: {
      ar: `
إذا كان من شأن قرار الجمعية العامة تعديل حقوق فئة معينة من المساهمين، فلا يكون القرار نافذاً إلا إذا صدق عليه من له حق التصويت من هؤلاء المساهمين المجتمعين في جمعية خاصة بهم وفقاً للأحكام المقررة لانعقاد الجمعية العامة غير العادية وإصدار قراراتها.
      `.trim(),
      en: `
If a resolution of the General Assembly would result in an amendment to the rights of a specific class of shareholders, such resolution shall not be effective unless it is approved by those shareholders who are entitled to vote from that class, convened in a separate meeting held in accordance with the rules applicable to the Extraordinary General Assembly regarding convening and decision-making.
      `.trim()
    }
  }
];
   

// ==========================================
// 2. إعدادات النظام والبنية التحتية (Infrastructure)
// ==========================================
(function() {
    // كشف المسارات تلقائياً
    const path = window.location.pathname;
    const subFolders = ['admin', 'board', 'ceo', 'cfo', 'cto', 'hr', 'sales', 'audit', 'secretary', 'shareholder'];
    const isSubPage = subFolders.some(f => path.includes('/' + f + '/'));
    
    // تحديد المسار الجذري للأصول
    // ملاحظة: إذا كنت في index.html الرئيسي يكون المسار assets/، وإذا في admin/ يكون ../assets/
    const base = isSubPage ? '../' : (path.endsWith('index.html') || path.endsWith('/') ? '' : ''); 
    // تصحيح بسيط: أحياناً في اللوكال نحتاج لضبط المسار يدوياً إذا لم يعمل الكشف
    const jsRoot = base + 'assets/js/';
    const cssRoot = base + 'assets/css/';

    // الدوال العامة
    window.loadCSS = function(filename) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = filename.startsWith('http') ? filename : cssRoot + filename;
        document.head.appendChild(link);
    };

    function loadScript(url, callback) {
        const script = document.createElement('script');
        script.src = url.startsWith('http') ? url : jsRoot + url;
        script.onload = callback;
        script.onerror = function() {
            console.warn('Script not found or failed to load:', url);
            if (callback) callback(); // استمر حتى لو فشل الملف
        };
        document.body.appendChild(script);
    }

    // تحميل التنسيقات
    loadCSS('style.css');
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css');

    // تحميل السكربتات التابعة (Sequential Loading)
    const scripts = [
        'core/config.js',
        'core/i18n.js',
        'core/auth.js',
        'components/bot.js',
        'layout.js'
    ];

    function loadChain(index) {
        if (index >= scripts.length) {
            console.log("All scripts loaded. Starting Dashboard...");
            if (typeof initDashboard === 'function') initDashboard();
            return;
        }
        loadScript(scripts[index], () => loadChain(index + 1));
    }

    // البدء في التحميل عند جاهزية الصفحة
    document.addEventListener('DOMContentLoaded', () => {
        loadChain(0);
    });

})();


// ==========================================
// 3. منطق لوحة القيادة (Dashboard Logic)
// ==========================================
window.initDashboard = function() {
    // 1. التعريف الأول (والصحيح) للمتغير
    const compNameEl = document.getElementById('companyNameDisplay');
    
    // التحقق من وجود العنصر، إذا لم يوجد نوقف الدالة
    if (!compNameEl) return;

    console.log("Initializing Dashboard with LOCAL Data...");

    const currentLang = document.documentElement.lang || 'ar';

    // أ. تحديث التاريخ
    const dateEl = document.getElementById('currentDate');
    if (dateEl) {
        const locale = currentLang === 'ar' ? 'ar-SA' : 'en-US';
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateEl.textContent = new Date().toLocaleDateString(locale, dateOptions);
    } 

    // ب. تحديث اسم الشركة
    // (تم حذف سطر إعادة التعريف const compNameEl = ... لأنه معرف في الأعلى)
    // نستخدم المتغير مباشرة:
    compNameEl.textContent = currentLang === 'ar' ? COMPANY_DATA.basic.nameAr : COMPANY_DATA.basic.name;
    
    // ج. تحديث اسم المستخدم
    const adminNameEl = document.getElementById('adminName');
    if(adminNameEl) adminNameEl.textContent = localStorage.getItem('userName') || 'مسؤول النظام';

    // د. تشغيل الحسابات
    calculateStats();
    renderDepartmentsTable();
    renderCharts();
    
    // هـ. تفعيل الأنيميشن
    initScrollAnimations();
};

// دالة تحديث اللغة
window.updateLanguage = function(lang) {
    // 1. تحديث إعدادات الصفحة
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // 2. تحديث النصوص المترجمة (data-i18n)
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (typeof SYSTEM_TRANSLATIONS !== 'undefined' && SYSTEM_TRANSLATIONS[lang] && SYSTEM_TRANSLATIONS[lang][key]) {
            el.textContent = SYSTEM_TRANSLATIONS[lang][key];
        }
    });

    // 3. تحديث اسم الشركة ديناميكياً
    const compNameEl = document.getElementById('companyNameDisplay');
    if(compNameEl && typeof COMPANY_DATA !== 'undefined') {
        compNameEl.textContent = lang === 'ar' ? COMPANY_DATA.basic.nameAr : COMPANY_DATA.basic.name;
    }

    // 4. تحديث التاريخ ديناميكياً
    const dateEl = document.getElementById('currentDate');
    if(dateEl) {
        const locale = lang === 'ar' ? 'ar-SA' : 'en-US';
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateEl.textContent = new Date().toLocaleDateString(locale, dateOptions);
    }

    // تحديث الجدول والشارت
    if (typeof updateTableLanguage === 'function') updateTableLanguage(lang);
    localStorage.setItem('eGov_Lang', lang);
};

function calculateStats() {
    // 1. عدد الأقسام
    animateValue("deptCount", 0, COMPANY_DATA.departments.length, 1000);

    // 2. عدد السياسات (مجموع البيانات المتاحة في الملف)
    let totalPolicies = 0;
    HR_POLICIES.sections.forEach(sec => totalPolicies += sec.policies.length);
    FINANCIAL_GOVERNANCE.sections.forEach(sec => totalPolicies += sec.policies.length);
    totalPolicies += governanceTexts.length;
    
    animateValue("policiesCount", 0, totalPolicies, 1500);

    // 3. عدد النماذج
    animateValue("formsCount", 0, egovFormsTemplates.forms.length, 1200);
}

function renderDepartmentsTable() {
    const tableBody = document.getElementById('departmentsTableBody');
    if(!tableBody) return;

    tableBody.innerHTML = ''; 
    COMPANY_DATA.departments.slice(0, 5).forEach((dept) => {
        const deptName = t[dept.name] || dept.name; 
        const roleName = t[dept.role] || dept.role;
        const statusText = t['active'] || 'Active';
        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="padding: 10px; background: rgba(255,255,255,0.03); border-radius: 0 8px 8px 0;">${dept.id}</td>
            <td style="padding: 10px; background: rgba(255,255,255,0.03); font-weight:bold;">
                ${deptName}
            </td>
            <td style="padding: 10px; background: rgba(255,255,255,0.03); color: var(--sky-blue);">
                ${roleName}
            </td>
            <td style="padding: 10px; background: rgba(255,255,255,0.03); border-radius: 8px 0 0 8px;">
                <span class="badge bg-success" style="padding: 5px 10px; border-radius: 12px; font-size: 0.8em;">
                    ${statusText}
                </span>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function renderCharts() {
    const ctx = document.getElementById('assetsChart');
    if(!ctx || typeof Chart === 'undefined') return;

    // حساب البيانات الحقيقية للشارت
    const hrCount = HR_POLICIES.sections.reduce((acc, sec) => acc + sec.policies.length, 0);
    const finCount = FINANCIAL_GOVERNANCE.sections.reduce((acc, sec) => acc + sec.policies.length, 0);
    
    new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['سياسات HR', 'نماذج إلكترونية', 'حوكمة مجلس الإدارة', 'حوكمة مالية'],
            datasets: [{
                data: [hrCount, egovFormsTemplates.forms.length, governanceTexts.length, finCount],
                backgroundColor: ['#3b82f6', '#f59e0b', '#10b981', '#8b5cf6'],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { color: '#a0aec0', font: { family: 'Tajawal' } } }
            }
        }
    });
}

function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    if(!obj) return;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

// ==========================================
// 4. منطق الذكاء الاصطناعي (AI Logic)
// ==========================================
window.analyzeProjectWithAI = async function() {
    const input = document.getElementById('ai-project-desc').value;
    const resultBox = document.getElementById('ai-result');
    const resultContent = document.getElementById('ai-result-content');
    const btn = document.getElementById('ai-btn');
    
    if (!input || input.trim() === "") {
        alert("الرجاء إدخال تفاصيل الاستشارة أو المشروع أولاً.");
        return;
    }

    const originalBtnText = btn.innerHTML;
    btn.innerHTML = '<span>جاري التحليل...</span> <i class="fas fa-spinner fa-spin"></i>';
    btn.disabled = true;
    if(resultBox) resultBox.style.display = 'none';

    // مفتاح API (اتركه فارغاً للتجربة)
    const apiKey = ""; 

    // محاكاة الرد (Demo) لعدم وجود سيرفر
    setTimeout(() => {
        if(resultContent) {
            resultContent.innerHTML = `
            <strong>⚠️ تحليل النظام (وضع محلي):</strong><br><br>
             بناءً على المعطيات: "${input}"<br>
            • <strong>المخاطر:</strong> تم تحديد 3 ثغرات في الامتثال الإداري.<br>
            • <strong>التوصية:</strong> تفعيل نماذج الحوكمة المتاحة في النظام.<br>
            • <strong>الإجراء:</strong> مراجعة قسم "التقارير" للمزيد.
            `;
        }
        if(resultBox) resultBox.style.display = 'block';
        btn.innerHTML = originalBtnText;
        btn.disabled = false;
    }, 2000);
};

window.handleFormSubmit = function(event) {
    event.preventDefault();
    const btn = event.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'جاري الإرسال... <i class="fas fa-spinner fa-spin"></i>';
    btn.disabled = true;
    setTimeout(() => {
        btn.innerHTML = 'تم بنجاح <i class="fas fa-check"></i>';
        btn.style.background = '#10b981';
        event.target.reset();
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            btn.style.background = '';
        }, 3000);
    }, 1500);
};

function initScrollAnimations() {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.stat-card, .section-card').forEach(s => {
            s.style.opacity = '0';
            s.style.transform = 'translateY(20px)';
            s.style.transition = 'all 0.6s ease-out';
            observer.observe(s);
        });
    }
}
