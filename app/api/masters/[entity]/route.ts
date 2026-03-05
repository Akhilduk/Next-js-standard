import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';

export async function GET(_: NextRequest, { params }: { params: Promise<{ entity: string }> }) {
  const { entity } = await params;
  if (entity === 'departments') return NextResponse.json(await prisma.department.findMany());
  if (entity === 'designations') return NextResponse.json(await prisma.designation.findMany());
  return NextResponse.json({ error: 'Unknown entity' }, { status: 404 });
}
