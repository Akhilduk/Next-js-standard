import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json();
  const item = await prisma.requestStatusHistory.create({ data: { requestId: params.id, status: body.status, note: body.note ?? '' } });
  return NextResponse.json(item);
}
