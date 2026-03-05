import { Table } from '@/components/ui/table';

export default function AdminUsersPage(){
  const rows=[[ 'admin@corp.com','ADMIN' ],['user@corp.com','USER']].map((r)=>r.map((v)=><span key={v}>{v}</span>));
  return <div className='space-y-4'><h1 className='text-2xl font-semibold'>Users</h1><Table headers={['Email','Role']} rows={rows} /></div>
}
