'use client';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export function SimpleLineChart({ data }: { data: { name: string; value: number }[] }) {
  return <ResponsiveContainer width="100%" height={260}><LineChart data={data}><XAxis dataKey="name" /><YAxis /><Tooltip /><Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" /></LineChart></ResponsiveContainer>;
}
