/* ============================================
 * eGov HR Policies – Electronic Code Company
 * عربي + English
 * إعداد: Ayman Al-Maghrabi – GRC
 * Version: 1.0.0
 * ============================================ */
console.log("🔥 HR POLICIES FILE IS EXECUTING!");
window.HR_POLICIES = {
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
