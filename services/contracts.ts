import { contracts } from '@/data/mock';
const delay=(ms=350)=>new Promise(resolve=>setTimeout(resolve,ms));
export async function listContracts(){await delay();return [...contracts];}
export async function createContract(input:Record<string,unknown>){await delay();return {id:`CON-2026-${String(46+Math.floor(Math.random()*100)).padStart(4,'0')}`,status:'طلب جديد',...input};}
