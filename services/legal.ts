import { cases, legalRequests } from '@/data/mock';
const delay=(ms=350)=>new Promise(resolve=>setTimeout(resolve,ms));
export async function listLegalRequests(){await delay();return [...legalRequests];}
export async function listCases(){await delay();return [...cases];}
export async function createLegalRequest(input:Record<string,unknown>){await delay();return {id:`LR-2026-${String(legalRequests.length+1).padStart(3,'0')}`,status:'جديد',...input};}
