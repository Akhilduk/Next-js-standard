import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';

export async function GET(){ return NextResponse.json(await prisma.request.findMany()); }
export async function POST(req: NextRequest){ const body = await req.json(); const row = await prisma.request.create({ data: { title: body.title, createdById: body.createdById } }); return NextResponse.json(row); }
