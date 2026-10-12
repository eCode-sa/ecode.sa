export const legalRequests = [
 {id:'LR-2026-001',title:'مراجعة عقد توريد نظام إدارة الموارد',department:'إدارة المبيعات',requester:'سارة العتيبي',type:'مراجعة عقد',priority:'عالية',owner:'نورة الحربي',status:'قيد المراجعة',sla:'متبقي 6 ساعات',date:'12/10/2026'},
 {id:'LR-2026-002',title:'إبداء الرأي في سياسة الاحتفاظ بالبيانات',department:'تقنية المعلومات',requester:'خالد السالم',type:'استشارة قانونية',priority:'متوسطة',owner:'أيمن المغربي',status:'جديد',sla:'يومان',date:'12/10/2026'},
 {id:'LR-2026-003',title:'مراجعة اتفاقية سرية معلومات',department:'الموارد البشرية',requester:'ريم القحطاني',type:'مراجعة مستند',priority:'عاجلة',owner:'نورة الحربي',status:'بانتظار الإدارة',sla:'متأخر 3 ساعات',date:'11/10/2026'},
 {id:'LR-2026-004',title:'تفسير بند تعويض في عقد خدمات',department:'الإدارة المالية',requester:'ماجد الدوسري',type:'استشارة قانونية',priority:'منخفضة',owner:'فهد الشمري',status:'مكتمل',sla:'أُغلق',date:'10/10/2026'},
 {id:'LR-2026-005',title:'اعتماد نموذج تفويض الصلاحيات',department:'إدارة الحوكمة والالتزام',requester:'عبدالله الزهراني',type:'حوكمة',priority:'عالية',owner:'أيمن المغربي',status:'قيد المراجعة',sla:'يوم واحد',date:'09/10/2026'},
 {id:'LR-2026-006',title:'مراجعة شروط استخدام بوابة العملاء',department:'تجربة العميل',requester:'هند الشهري',type:'مراجعة عقد',priority:'متوسطة',owner:'فهد الشمري',status:'جديد',sla:'3 أيام',date:'08/10/2026'}
];
export const contracts = [
 {id:'CON-2026-0041',name:'العقد الموحد لخدمات تقنية المعلومات',party:'شركة التقنية المتقدمة',type:'توريد خدمات تقنية',value:'1,250,000 ر.س',start:'01/01/2026',end:'31/12/2026',owner:'إدارة المشتريات',status:'نشط',risk:'منخفض',sign:'مكتمل'},
 {id:'CON-2026-0042',name:'خدمات استشارية للتحول الرقمي',party:'مؤسسة الحلول الرقمية',type:'خدمات استشارية',value:'320,000 ر.س',start:'15/10/2026',end:'14/10/2027',owner:'قطاع التقنية',status:'قيد التوقيع',risk:'متوسط',sign:'بانتظار التوقيع'},
 {id:'CON-2026-0043',name:'وثيقة تأمين مسؤولية أعضاء مجلس الإدارة',party:'شركة الدرع للتأمين',type:'تأمين',value:'185,000 ر.س',start:'01/11/2025',end:'31/10/2026',owner:'إدارة الحوكمة',status:'ينتهي قريباً',risk:'مرتفع',sign:'مكتمل'},
 {id:'CON-2026-0044',name:'اتفاقية دعم وتشغيل الأنظمة',party:'شركة مدار التقنية',type:'دعم تقني',value:'740,000 ر.س',start:'01/03/2026',end:'28/02/2027',owner:'إدارة تقنية المعلومات',status:'نشط',risk:'منخفض',sign:'مكتمل'},
 {id:'CON-2026-0045',name:'اتفاقية خدمات الموارد البشرية',party:'شركة أفق الأعمال',type:'خدمات مهنية',value:'460,000 ر.س',start:'01/06/2026',end:'31/05/2027',owner:'الموارد البشرية',status:'قيد المراجعة',risk:'متوسط',sign:'غير موقع'}
];
export const cases = [
 {id:'LC-2026-003',title:'مطالبة تجارية – توريد أجهزة الشبكة',type:'تجارية',court:'المحكمة التجارية بالرياض',opponent:'مؤسسة الأنظمة الحديثة',lawyer:'مكتب العدل للمحاماة',claim:'850,000 ر.س',hearing:'13/10/2026 · 10:00 ص',status:'قيد النظر',risk:'مرتفع'},
 {id:'LC-2026-006',title:'نزاع عمالي – مستحقات نهاية خدمة',type:'عمالية',court:'المحكمة العمالية بالرياض',opponent:'موظف سابق',lawyer:'نورة الحربي',claim:'128,000 ر.س',hearing:'22/10/2026 · 09:30 ص',status:'جلسة محددة',risk:'متوسط'},
 {id:'LC-2026-009',title:'مطالبة تعويض عن إخلال تعاقدي',type:'تجارية',court:'المحكمة التجارية بجدة',opponent:'شركة المدار',lawyer:'مكتب العدل للمحاماة',claim:'1,400,000 ر.س',hearing:'04/11/2026 · 11:00 ص',status:'تبادل مذكرات',risk:'مرتفع'}
];
export const obligations = [
 {name:'دفع الدفعة الثانية – العقد CON-2026-0041',value:'250,000 ر.س',due:'20/11/2026',owner:'الإدارة المالية',status:'قادم'},
 {name:'تقديم تقرير مستوى الخدمة (SLA)',value:'—',due:'01/12/2026',owner:'تقنية المعلومات',status:'قادم قريباً'},
 {name:'تجديد الضمان البنكي',value:'85,000 ر.س',due:'15/12/2026',owner:'الإدارة المالية',status:'قادم'},
 {name:'تسليم تقرير الالتزام الربع سنوي',value:'—',due:'01/10/2026',owner:'إدارة الحوكمة',status:'متأخر'}
];
export const integrations = [
 {name:'وزارة التجارة',en:'Ministry of Commerce',status:'متصل',sync:'منذ 3 دقائق',latency:'184ms',requests:'1,284',success:'99.8%',icon:'ت'},
 {name:'ناجز',en:'Najiz',status:'متصل',sync:'منذ 8 دقائق',latency:'231ms',requests:'642',success:'99.4%',icon:'ن'},
 {name:'النفاذ الوطني',en:'Nafath',status:'متصل',sync:'منذ دقيقة',latency:'126ms',requests:'2,106',success:'99.9%',icon:'ن'},
 {name:'سبل',en:'SPL',status:'متصل',sync:'منذ 12 دقيقة',latency:'198ms',requests:'308',success:'98.7%',icon:'س'},
 {name:'وزارة الموارد البشرية',en:'HRSD',status:'صيانة',sync:'منذ 34 دقيقة',latency:'—',requests:'129',success:'97.2%',icon:'م'},
 {name:'الزكاة والضريبة والجمارك',en:'ZATCA',status:'متصل',sync:'منذ 5 دقائق',latency:'176ms',requests:'918',success:'99.6%',icon:'ز'},
 {name:'تداول',en:'Tadawul',status:'متصل',sync:'منذ 6 دقائق',latency:'208ms',requests:'481',success:'99.7%',icon:'ت'},
 {name:'هيئة السوق المالية',en:'CMA',status:'متصل',sync:'منذ 9 دقائق',latency:'215ms',requests:'374',success:'99.5%',icon:'هـ'}
];
export const notifications = [
 {kind:'عقود',title:'عقد CON-2026-0043 ينتهي خلال 19 يوماً',time:'منذ 12 دقيقة',level:'warning'},
 {kind:'قضايا',title:'جلسة القضية LC-2026-003 غداً الساعة 10:00',time:'منذ 38 دقيقة',level:'critical'},
 {kind:'تكاملات',title:'فشل تحديث بيانات وزارة الموارد البشرية',time:'منذ ساعة',level:'critical'},
 {kind:'اعتمادات',title:'طلب اعتماد عقد بانتظار الرئيس التنفيذي',time:'منذ ساعتين',level:'info'}
];
export const deadlines = [
 {name:'جلسة قضية تجارية · LC-2026-003',left:'غداً',kind:'قضية',tone:'red'},
 {name:'تجديد عقد الدعم الفني',left:'5 أيام',kind:'عقد',tone:'amber'},
 {name:'تجديد شهادة ISO 27001',left:'21 يوماً',kind:'امتثال',tone:'blue'},
 {name:'انتهاء تفويض بنكي',left:'30 يوماً',kind:'حوكمة',tone:'purple'}
];
