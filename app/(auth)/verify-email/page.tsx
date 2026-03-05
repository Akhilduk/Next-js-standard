import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Page() {
  return (
    <Card>
      <h1 className="text-2xl font-semibold">Verify Email</h1>
      <p className="mt-2 text-sm text-slate-600">
        A verification link has been sent to your inbox. Use this page template for email token validation flow.
      </p>
      <div className="mt-4 flex gap-2">
        <Button>Resend Email</Button>
        <Link href="/sign-in"><Button className="bg-slate-700">Go to Sign In</Button></Link>
      </div>
    </Card>
  );
}
