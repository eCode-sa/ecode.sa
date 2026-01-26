const egovformstemplates = {
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
