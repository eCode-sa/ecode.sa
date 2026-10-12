import { integrations } from '@/data/mock';
import { simulateQuery } from './mock';
export async function listIntegrations(){return [...integrations];}
export async function queryGovernmentService(service:string,query:string){return simulateQuery(service,query);}
