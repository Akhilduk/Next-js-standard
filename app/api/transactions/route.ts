import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page') ?? 1);
  const pageSize = Number(searchParams.get('pageSize') ?? 20);
  const data = await prisma.transaction.findMany({ skip: (page - 1) * pageSize, take: pageSize });
  return NextResponse.json({ data, page, pageSize });
}
