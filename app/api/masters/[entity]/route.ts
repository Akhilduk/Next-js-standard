import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';

export async function GET(_: NextRequest, { params }: { params: { entity: string } }) {
  if (params.entity === 'departments') return NextResponse.json(await prisma.department.findMany());
  if (params.entity === 'designations') return NextResponse.json(await prisma.designation.findMany());
  return NextResponse.json({ error: 'Unknown entity' }, { status: 404 });
}
