import type {EnterpriseRecord} from '@/data/enterprise';

const delay=(ms:number)=>new Promise(resolve=>setTimeout(resolve,ms));

export async function createEnterpriseRecord(record:EnterpriseRecord){
 await delay(220);
 if(typeof window==='undefined')return record;
 const saved=JSON.parse(localStorage.getItem('arabsea.enterprise.records')||'[]');
 localStorage.setItem('arabsea.enterprise.records',JSON.stringify([record,...saved]));
 return record;
}

export async function transitionEnterpriseApproval(record:EnterpriseRecord){
 await delay(280);
 return {...record,updated:new Date().toLocaleString('ar-SA')};
}

export async function simulateEnterpriseQuery(service:string,query:string){
 await delay(650);
 return {service,query,status:'success' as const,reference:`SIM-${Date.now().toString().slice(-6)}`,message:'تم تنفيذ الاستعلام التجريبي بنجاح. لم يتم الاتصال بخدمة خارجية.'};
}
