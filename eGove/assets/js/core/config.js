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
    company: {
        nameAr: "شركة إلكترونيك كود",
        nameEn: "Electronic Code Co.",
        crNumber: "7050139125",  // السجل التجاري
        vatNumber: "3130161102", // الرقم الضريبي
        addressAr: "الرياض، حي قرطبة، طريق الأمير محمد بن سلمان",
        addressEn:"Riyadh, Qurtuba District, Prince Mohammed bin Salman Road",
        email: "info@ecode.sa",
        phone: "0503666316",
        website: "www.ecode.sa",
    },

    // إعدادات الربط الخارجي (APIs)
    api: {
        baseUrl: "https://api.ecode.sa/v1", // رابط السيرفر الافتراضي
        geminiKey: "", // مفتاح الذكاء الاصطناعي (يوضع هنا)
        timeout: 5000
    },

    // روابط السوشيال ميديا
    social: {
        X: "https://x.com/eCode_sa",
        linkedin: "https://www.linkedin.com/company/ecode-sa",
        instagram: "https://www.instagram.com/ecode_sa",
        YouTube: "https://www.youtube.com/@eCode_sa",
        Facebook: "https://www.facebook.com/ecode.sa",
        TikTok: "https://www.tiktok.com/@ecode_sa",
        Snapchat: "https://www.snapchat.com/add/ecode_sa",
    },
    tokens: {
    colors: {
      primary: { light: "# ", dark: "# " },
      secondary: { light: "# ", dark: "# " },
      background: { light: "#F4F6F8", dark: "#121212" },
      surface: { light: "#FFFFFF", dark: "#1E1E1E" },
      text: { light: "#1A1A1A", dark: "#E0E0E0" },
      status: {
        success: "#22C55E",
        warning: "#FFAB00",
        error: "#FF5630",
        info: "#00B8D9"
      }
    },
    typography: {
      fontFamily: {
        ar: "'Tajawal', 'Almarai', sans-serif",
        en: "'Inter', -apple-system, sans-serif"
      }
    },
    settings: {
      defaultTheme: "light",
      defaultLang: "ar",
      supportedThemes: ["light", "dark"],
      supportedLangs: ["ar", "en"]
    }
  },
    capital: {
    amount: 100000,
    currency: "SAR",
    sharesCount: 10000,
    shareValue: 10,
    status: "fully_paid"
  },
    departments: [
    { id: "DEP_EXEC", name: { en: "Executive Management", ar: "الإدارة التنفيذية" }, icon: "fa-building" },
    { id: "DEP_FIN", name: { en: "Finance", ar: "الإدارة المالية" }, icon: "fa-coins" },
    { id: "DEP_HR", name: { en: "HR & Admin", ar: "الموارد البشرية والشؤون الإدارية" }, icon: "fa-users" },
    { id: "DEP_TECH", name: { en: "Technology & Development", ar: "التقنية والتطوير" }, icon: "fa-code" },
    { id: "DEP_SALES", name: { en: "Sales & Business Dev", ar: "المبيعات وتطوير الأعمال" }, icon: "fa-chart-line" },
    { id: "DEP_MKT", name: { en: "Marketing & Comms", ar: "التسويق والاتصال المؤسسي" }, icon: "fa-bullhorn" },
    { id: "DEP_CS", name: { en: "Customer Success", ar: "خدمة ونجاح العملاء" }, icon: "fa-headset" },
    { id: "DEP_SEC", name: { en: "Cybersecurity", ar: "الأمن السيبراني" }, icon: "fa-lock" },
    { id: "DEP_AUDIT", name: { en: "Internal Audit", ar: "التدقيق الداخلي" }, icon: "fa-clipboard-check" },
    { id: "DEP_LEGAL", name: { en: "Legal Affairs", ar: "الشؤون القانونية" }, icon: "fa-gavel" },
    { id: "DEP_PROC", name: { en: "Procurement", ar: "المشتريات وسلاسل الإمداد" }, icon: "fa-boxes-stacked" },
    { id: "DEP_SUPPORT", name: { en: "Technical Support", ar: "الدعم الفني" }, icon: "fa-headset" },
    { id: "DEP_GRC", name: { en: "GRC", ar: "الحوكمة والمخاطر والالتزام" }, icon: "fa-shield-check" }
  ],
    roles: {
    sys_admin: {
      label: { en: "System Admin", ar: "مدير النظام" },
      desc: { en: "Full technical privileges", ar: "صلاحيات تقنية كاملة" },
      inherits: "chairman",
      level: 100
    },
    chairman: {
      label: { en: "Chairman", ar: "رئيس مجلس الإدارة" },
      desc: { en: "Sole signatory authority", ar: "صلاحيات التوقيع المنفرد" },
      inherits: "board_member",
      level: 90,
      authorityType: "sole_signatory"
    },
    vice_chairman: {
      label: { en: "Vice Chairman", ar: "نائب رئيس مجلس الإدارة" },
      desc: { en: "Sole signatory authority", ar: "صلاحيات التوقيع المنفرد" },
      inherits: "board_member",
      level: 85,
      authorityType: "sole_signatory"
    },
    board_member: {
      label: { en: "Board Member", ar: "عضو مجلس إدارة" },
      desc: { en: "Board room access", ar: "صلاحيات غرفة المجلس" },
      inherits: "viewer",
      level: 80
    },
    ceo: {
      label: { en: "CEO", ar: "الرئيس التنفيذي" },
      desc: { en: "Executive management", ar: "إدارة تنفيذية كاملة" },
      inherits: "cfo",
      level: 75,
      authorityType: "sole_signatory"
    },
    cfo: {
      label: { en: "CFO", ar: "المدير المالي" },
      desc: { en: "Financial authority", ar: "صلاحيات مالية" },
      inherits: "manager",
      level: 70
    },
    hr: {
      label: { en: "HR", ar: "المدير الإداري" },
      desc: { en: "Chief Administrative Officer", ar: "مسؤول الشؤون الإدارية" },
      inherits: "manager",
      level: 70
    },
    manager: {
      label: { en: "Department Manager", ar: "مدير إدارة" },
      desc: { en: "Team management", ar: "إدارة الفريق والقسم" },
      inherits: "employee",
      level: 50
    },
    director: {
      label: { en: "Director", ar: "مدير" },
      desc: { en: "Senior management", ar: "إدارة عليا" },
      inherits: "manager",
      level: 55
    },
    coordinator: {
      label: { en: "Coordinator", ar: "منسق" },
      desc: { en: "Operations coordination", ar: "تنسيق العمليات" },
      inherits: "employee",
      level: 25
    },
    specialist: {
      label: { en: "Specialist", ar: "أخصائي" },
      desc: { en: "Technical specialist", ar: "متخصص تقني" },
      inherits: "employee",
      level: 25
    },
    team_lead: {
      label: { en: "Team Lead", ar: "قائد فريق" },
      desc: { en: "Team leadership", ar: "قيادة الفريق" },
      inherits: "employee",
      level: 30
    },
    support: {
      label: { en: "Support Staff", ar: "دعم إداري" },
      desc: { en: "Administrative support", ar: "دعم إداري" },
      inherits: "employee",
      level: 15
    },
    employee: {
      label: { en: "Employee", ar: "موظف" },
      desc: { en: "Self-service access", ar: "خدمة ذاتية" },
      inherits: "viewer",
      level: 20
    },
    shareholder: {
      label: { en: "Shareholder", ar: "مساهم" },
      desc: { en: "View & vote rights", ar: "حق الاطلاع والتصويت" },
      inherits: "viewer",
      level: 30,
      capabilities: ["voting", "profile_update", "investor_relations"]
    },
    viewer: {
      label: { en: "Guest/Viewer", ar: "زائر" },
      desc: { en: "Read-only access", ar: "قراءة فقط" },
      inherits: null,
      level: 10
    },
    audit_committee_chair: {
      label: { en: "Audit Committee Chairman", ar: "رئيس لجنة المراجعة" },
      desc: { en: "Leads audit committee", ar: "يرأس لجنة المراجعة" },
      inherits: "audit_committee_member",
      level: 65,
      context: "audit_committee"
    },
    audit_committee_member: {
      label: { en: "Audit Committee Member", ar: "عضو لجنة المراجعة" },
      desc: { en: "Audit oversight", ar: "الرقابة والتدقيق" },
      inherits: "viewer",
      level: 60,
      context: "audit_committee"
    },
    board_secretary: {
      label: { en: "Board Secretary", ar: "أمين سر مجلس الإدارة" },
      desc: { en: "Board meeting coordination & minutes", ar: "تنسيق اجتماعات المجلس والمحاضر" },
      inherits: "manager",
      level: 55,
      context: "board"
    },
    audit_committee_secretary: {
      label: { en: "Audit Committee Secretary", ar: "أمين سر لجنة المراجعة" },
      desc: { en: "Committee meeting coordination", ar: "تنسيق اجتماعات اللجنة" },
      inherits: "viewer",
      level: 50,
      context: "audit_committee"
    },
    // GRCO Roles
    grc_officer: {
      label: { en: "GRC Officer", ar: "مسؤول الحوكمة والمخاطر والالتزام" },
      desc: { en: "Governance, Risk & Compliance", ar: "الحوكمة والمخاطر والالتزام" },
      inherits: "manager",
      level: 55,
      context: "governance"
    },
    investor_relations: {
      label: { en: "Investor Relations Officer", ar: "مسؤول علاقات المساهمين" },
      desc: { en: "Shareholder communications", ar: "التواصل مع المساهمين" },
      inherits: "viewer",
      level: 45,
      context: "shareholders"
    },
    ncso: {
      label: { en: "NCSO", ar: "مسؤول الأمن السيبراني الوطني" },
      desc: { en: "National Cybersecurity Officer", ar: "مسؤول الأمن السيبراني الوطني" },
      inherits: "manager",
      level: 60,
      context: "security"
    },
    auditor: {
      label: { en: "Auditor", ar: "مدقق" },
      desc: { en: "Internal/External Auditor", ar: "مدقق داخلي/خارجي" },
      inherits: "viewer",
      level: 55,
      context: "audit"
    }
  },
    permissions: {
    financial: {
      title: { ar: "الصلاحيات المالية", en: "Financial Permissions" },
      items: [
        { key: "approve_po", label: { ar: "اعتماد أوامر الشراء", en: "Approve Purchase Orders" }, roles: ["ceo", "cfo", "manager"] },
        { key: "approve_payroll", label: { ar: "اعتماد الرواتب", en: "Approve Payroll" }, roles: ["ceo", "cfo"] },
        { key: "view_financials", label: { ar: "الاطلاع على القوائم المالية", en: "View Financial Statements" }, roles: ["chairman", "board_member", "shareholder", "ceo", "cfo"] },
        { key: "petty_cash", label: { ar: "السلفة النثرية", en: "Petty Cash" }, roles: ["cfo", "manager"] }
      ]
    },
    legal: {
      title: { ar: "الشؤون القانونية", en: "Legal Affairs" },
      items: [
        { key: "sign_contracts", label: { ar: "توقيع العقود", en: "Sign Contracts" }, roles: ["chairman", "ceo"] },
        { key: "govt_rep", label: { ar: "التمثيل الحكومي", en: "Government Representation" }, roles: ["ceo", "chairman", "hr"] },
        { key: "banking", label: { ar: "العمليات البنكية", en: "Banking Operations" }, roles: ["ceo", "chairman"] }
      ]
    },
    hr: {
      title: { ar: "الموارد البشرية", en: "Human Resources" },
      items: [
        { key: "hire_employee", label: { ar: "توظيف موظف", en: "Hire Employee" }, roles: ["ceo", "hr", "manager"] },
        { key: "terminate_employee", label: { ar: "إنهاء خدمات", en: "Terminate Employee" }, roles: ["ceo", "hr"] },
        { key: "approve_leave", label: { ar: "اعتماد الإجازات", en: "Approve Leave" }, roles: ["manager", "ceo", "hr"] }
      ]
    },
    system: {
      title: { ar: "إدارة النظام", en: "System Administration" },
      items: [
        { key: "manage_users", label: { ar: "إدارة المستخدمين", en: "Manage Users" }, roles: ["sys_admin"] },
        { key: "edit_policies", label: { ar: "تعديل السياسات", en: "Edit Policies" }, roles: ["sys_admin", "ceo"] },
        { key: "view_audit_log", label: { ar: "عرض سجل التدقيق", en: "View Audit Log" }, roles: ["sys_admin", "chairman", "ceo", "auditor"] }
      ]
    }
  },
    users: [
    // Shareholders
    { id: "USR_001", name: { ar: "المساهم الاول (متوفي)", en: "First Shareholder (Deceased)" }, percent: 20, shares: 20000, type: "Individual", voting: true, email: "sh1@ecode.sa", proxy: { ar: "وكيل الورثة", en: "Heirs’ Agent" }, title: { ar: "مساهم", en: "Shareholder" }, isShareholder: true, dept: "DEP_EXEC" },
    { id: "USR_002", name: { ar: "المساهم الثاني (شخص طبيعي)", en: "Second Shareholder (Natural Person)" }, percent: 10, shares: 10000, type: "Individual", voting: true, email: "sh2@ecode.sa", proxy: null, title: { ar: "مساهم", en: "Shareholder" }, isShareholder: true, dept: "DEP_EXEC" },
    { id: "USR_003", name: { ar: "المساهم الثالث (كيان قانوني)", en: "Third Shareholder (Legal Entity)" }, percent: 30, shares: 30000, type: "Entity", voting: true, email: "sh3@ecode.sa", proxy: { ar: "ممثل الشركة", en: "Company Representative" }, title: { ar: "مساهم", en: "Shareholder" }, isShareholder: true, dept: "DEP_EXEC" },
    { id: "USR_004", name: { ar: "المساهم الرابع (شخص طبيعي)", en: "Fourth Shareholder (Natural Person)" }, percent: 40, shares: 40000, type: "Individual", voting: true, email: "sh4@ecode.sa", proxy: null, title: { ar: "مساهم", en: "Shareholder" }, isShareholder: true, dept: "DEP_EXEC" },    
    
    // Board & Executives
    { id: "USR_005", name: { ar: "اسم رئيس المجلس", en: "Chairman of the Board Name" }, title: { ar: "رئيس مجلس الإدارة", en: "Chairman of the Board" }, dept: "DEP_EXEC", role: "chairman", email: "chairman@ecode.sa", isExecutive: false, isShareholder: true },
    { id: "USR_006", name: { ar: "اسم نائب رئيس المجلس والرئيس التنفيذي", en: "Board Vice Chairman & CEO Name" }, title: { ar: "الرئيس التنفيذي ونائب رئيس المجلس", en: "CEO & Board Vice Chairman" }, dept: "DEP_EXEC", role: "ceo", additionalRoles: ["vice_chairman"], email: "ceo@ecode.sa", isExecutive: true, isShareholder: true },
    { id: "USR_007", name: { ar: "اسم المدير المالي", en: "CFO Name" }, title: { ar: "المدير المالي", en: "Chief Financial Officer (CFO)" }, dept: "DEP_FIN", role: "cfo", email: "cfo@ecode.sa", isExecutive: true },
    { id: "BRD_008", name: { ar: "اسم عضو المجلس وعضو لجنة المراجعة", en: "Board & audit Member Name" }, title: { ar: "عضو مجلس الإدارة", en: "Board Member" }, dept: "DEP_EXEC", role: "board_member", additionalRoles: ["audit_committee_member"], email: "board_member@ecode.sa", isExecutive: false, isShareholder: true },
    { id: "USR_009", name: { ar: "اسم عضو المجلس ومدير الموارد البشرية", en: "HR Name" }, title: { ar: "المدير الإداري وعضو المجلس", en: "hr / Board Member" }, dept: "DEP_HR", role: "hr", additionalRoles: ["board_member"], email: "hr@ecode.sa", isExecutive: true, isShareholder: true },
    
    // Managers & Directors
    { id: "USR_010", name: { ar: "اسم مسؤول الحوكمة والمخاطر والالتزام", en: "Ayman Al-Maghrabi" }, title: { ar: "مسؤول الحوكمة والمخاطر والالتزام / أمين سر المجلس", en: "GRCO / Board & committee Secretary" }, dept: "DEP_GRC", role: "grc_officer", email: "admin@ecode.sa", isExecutive: false, avatar: "../../favicon.png" },
    { id: "USR_011", name: { ar: "اسم مدير التطوير", en: "Director of Development Name" }, title: { ar: "مدير التطوير", en: "Director of Development" }, dept: "DEP_TECH", role: "director", email: "dod@ecode.sa" },
    { id: "USR_012", name: { ar: "اسم مسؤول الامن السيبراني", en: "NCSO Name" }, title: { ar: "مسؤول الأمن السيبراني الوطني", en: "NCSO" }, dept: "DEP_TECH", role: "ncso", email: "ncso@ecode.sa" },
    { id: "USR_013", name: { ar: "اسم مسؤول حسابات العملاء", en: "Customer Accounts Manager Name" }, title: { ar: "مدير حسابات العملاء", en: "Customer Accounts Manager" }, dept: "DEP_SUPPORT", role: "manager", email: "cam@ecode.sa" },
    
    // Team Leads & Coordinators
    { id: "USR_014", name: { ar: "اسم قائد الفريف التقني", en: "Technical Team Lead Name" }, title: { ar: "قائد الفريق التقني", en: "Technical Team Lead" }, dept: "DEP_TECH", role: "team_lead", email: "technical@ecode.sa", isTeamLead: true },
    { id: "USR_015", name: { ar: "اسم مسؤول المشتريات والدعم الاداري", en: "Purchasing & Admin Support Coordinator Name" }, title: { ar: "منسق المشتريات والدعم الإداري", en: "Purchasing & Admin Support Coordinator" }, dept: "DEP_HR", role: "coordinator", email: "Purchasing@ecode.sa" },
    
    // Specialists & Support
    { id: "USR_016", name: { ar: "اسم اخصائي الدعم التقني", en: "Technical Support Specialist Name" }, title: { ar: "أخصائي دعم تقني", en: "Technical Support Specialist" }, dept: "DEP_SUPPORT", role: "specialist", email: "tss@ecode.sa" },
    { id: "USR_017", name: { ar: "اسم اخصائي التسويق", en: "Marketing Specialist Name" }, title: { ar: "أخصائي تسويق ", en: "Marketing Specialist" }, dept: "DEP_SALES", role: "specialist", email: "Marketing@ecode.sa" },
    { id: "USR_018", name: { ar: "اسم التي بوي", en: "Tee boy Name" }, title: { ar: "دعم مكتبي", en: "Office Support" }, dept: "DEP_HR", role: "support", email: "Teeboy@ecode.sa" },
    
    // Teams & Vacant Positions
    { id: "USR_019", name: { ar: "اسم المبرمج", en: "Developer Name" }, title: { ar: "فريق المبرمجين", en: "Developers Team" }, dept: "DEP_TECH", role: "employee", email: "Developer@ecode.sa", isGroup: true },
    { id: "USR_020", name: { ar: "اسم مدير المبيعات", en: "Sales Manager Name" }, title: { ar: "مدير المبيعات", en: "Sales Manager" }, dept: "DEP_SALES", role: "manager", email: "SalesManager@ecode.sa"},
    
    // Committee Members (External)
    { id: "USR_021", name: { ar: "اسم رئيس لجنة المراجعة", en: "Audit Committee Chairman Name" }, title: { ar: "رئيس لجنة المراجعة", en: "Audit Committee Chairman" }, dept: "DEP_AUDIT", role: "audit_committee_chair", email: "audit_chairman@ecode.sa", isExternal: true },
    { id: "USR_022", name: { ar: "اسم عضو لجنة المراجعة الاول", en: "Audit Committee Member Name" }, title: { ar: "عضو لجنة المراجعة", en: "Audit Committee Member" }, dept: "DEP_AUDIT", role: "audit_committee_member", email: "audit_member@ecode.sa", isExternal: true },
    
    // Auditors
    { id: "USR_023", name: { ar: "اسم المدقق الداخلي", en: "Internal Auditor Name" }, title: { ar: "المدقق الداخلي", en: "Internal Auditor" }, dept: "DEP_AUDIT", role: "auditor", email: "InternalAudit@ecode.sa", isExternal: false },
    { id: "USR_024", name: { ar: "اسم المدقق الخارجي", en: "External Auditor Name" }, title: { ar: "المدقق الخارجي (KPMG/EY)", en: "External Auditor (KPMG/EY)" }, dept: "DEP_AUDIT", role: "auditor", email: "ExternalAudit@ecode.sa", isExternal: true } 
        
    ],
    userRolesMap: [
    { userId: "USR_010", contexts: [
      { context: "system", role: "sys_admin", label: { ar: "إدارة النظام", en: "System Administration" }, isPrimary: true },
      { context: "board", role: "board_secretary", label: { ar: "سكرتير مجلس الإدارة", en: "Board of Directors Secretary" } },
      { context: "audit_committee", role: "audit_committee_secretary", label: { ar: "سكرتير لجنة المراجعة", en: "Audit Committee Secretary" } },
      { context: "shareholders", role: "investor_relations", label: { ar: "مسؤول علاقات المساهمين", en: "Investor Relations Officer" } },
      { context: "governance", role: "grco", label: { ar: "مسؤول الحوكمة والمخاطر والالتزام", en: "GRCO" } }
    ]},
    { userId: "USR_006", contexts: [
      { context: "executive", role: "ceo", label: { ar: "الإدارة التنفيذية", en: "Executive Management" }, isPrimary: true },
      { context: "board", role: "vice_chairman", label: { ar: "مجلس الإدارة", en: "Board of Directors" } },
      { context: "shareholders", role: "shareholder", label: { ar: "المساهمين", en: "Shareholders" }, shareholderId: "USR_002" }
    ]},
    { userId: "USR_005", contexts: [
      { context: "board", role: "chairman", label: { ar: "مجلس الإدارة", en: "Board of Directors" }, isPrimary: true },
      { context: "shareholders", role: "shareholder", label: { ar: "المساهمين", en: "Shareholders" }, shareholderId: "SH_009" }
    ]},
    { userId: "USR_009", contexts: [
      { context: "executive", role: "hr", label: { ar: "الإدارة التنفيذية", en: "Executive Management" }, isPrimary: true },
      { context: "board", role: "board_member", label: { ar: "مجلس الإدارة", en: "Board of Directors" } },
      { context: "shareholders", role: "shareholder", label: { ar: "المساهمين", en: "Shareholders" }, shareholderId: "USR_004" }
    ]},
    { userId: "BRD_008", contexts: [
      { context: "board", role: "board_member", label: { ar: "مجلس الإدارة", en: "Board of Directors" }, isPrimary: true },
      { context: "audit_committee", role: "audit_committee_member", label: { ar: "لجنة المراجعة", en: "Audit Committee" } },
      { context: "shareholders", role: "shareholder", label: { ar: "المساهمين", en: "Shareholders" }, }
    ]},
    { userId: "USR_021", contexts: [
      { context: "audit_committee", role: "audit_committee_chair", label: { ar: "لجنة المراجعة", en: "Audit Committee" }, isPrimary: true }
    ]},
    { userId: "USR_022", contexts: [
      { context: "audit_committee", role: "audit_committee_member", label: { ar: "لجنة المراجعة", en: "Audit Committee" }, isPrimary: true }
    ]},
  ],
    governance: {
    board: {
      totalSeats: 4,
      termYears: 4,
      currentTermStart: "2025-01-01",
      currentTermEnd: "2029-01-01",
      minMeetingsPerYear: 4
    },
    quorum: {
      OGA: { firstMeeting: 25, secondMeeting: 0, decisionThreshold: 50 },
      EGA: { firstMeeting: 50, secondMeeting: 25, thirdMeeting: 0, decisionThreshold: 66.6 },
      Board: { minMembers: 3, decisionThreshold: 51 }
    },
    remuneration: {
      currency: "SAR",
      boardMeetingFee: 2000,
      auditCommitteeFee: 1500,
      secretaryFee: 1000,
      annualCapPerMember: 500000,
      travelPolicy: "Business Class for non-residents"
    },
    committees: [
      { id: "COMM_AUDIT", name: { ar: "لجنة المراجعة", en: "Audit Committee" }, required: true, minMembers: 3 }
    ]
  },
    hrPolicies: {
    probation: { minDays: 90, maxDays: 180 },
    leaves: {
      annual: { junior: 21, senior: 30 },
      maternity: { weeks: 12 },
      paternity: { days: 3 },
      bereavement: { days: 3 }
    },
    workingHours: {
      start: "08:00",
      end: "16:00",
      weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]
    }
  },
    financialAuthority: {
    poApproval: [
      { role: "manager", limit: 5000, condition: "budgeted" },
      { role: "cfo", limit: 50000, condition: "budgeted" },
      { role: "ceo", limit: 1000000, condition: "budgeted" },
      { role: "board", limit: -1, condition: "unbudgeted_or_above_1m" }
    ],
    pettyCash: { managerLimit: 1000, cfoLimit: 5000 },
    contractSigning: [
      { role: "ceo", limit: 1000000, type: "operational" },
      { role: "chairman", limit: -1, type: "strategic" }
    ]
  },
    activities: [
    { code: "464956", name: { ar: "البيع بالجملة للأجهزة والمعدات والمستلزمات الطبية", en: "Wholesale of Medical Equipment & Supplies" }, category: "Medical" },
    { code: "465101", name: { ar: "البيع بالجملة للحواسيب ومستلزماتها يشمل بيع الطابعات وأحبارها", en: "Wholesale of Computers & Accessories" }, category: "Sales" },
    { code: "465102", name: { ar: "البيع بالجملة للبرمجيات ويشمل الاستيراد", en: "Wholesale of Software (Including Import)" }, category: "Sales" },
    { code: "474110", name: { ar: "البيع بالتجزئة للحواسيب وملحقاتها يشمل الطابعات وأحبارها", en: "Retail of Computers & Accessories" }, category: "Retail" },
    { code: "474152", name: { ar: "بيع البرمجيات غير المعدة بناء على الطلب", en: "Retail of Off-the-Shelf Software" }, category: "IT" },
    { code: "620102", name: { ar: "تصميم وبرمجة البرمجيات الخاصة", en: "Custom Software Development" }, category: "IT" },
    { code: "731013", name: { ar: "تقديم خدمات تسويقية نيابةً عن الغير", en: "Marketing Services on Behalf of Others" }, category: "Marketing" },
  ]
};

// منع التعديل على هذا الملف أثناء التشغيل
Object.freeze(CONFIG);
