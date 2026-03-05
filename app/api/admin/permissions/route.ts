import { NextResponse } from 'next/server';
export async function GET(){ return NextResponse.json({ module: 'admin/permissions' }); }
export async function POST(){ return NextResponse.json({ ok: true, module: 'admin/permissions' }); }
