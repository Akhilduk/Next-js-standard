'use client';

import { useMemo, useState } from 'react';
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Modal } from '@/components/ui/modal';
import { Table } from '@/components/ui/table';
import { PasswordPolicyChecklist } from '@/components/auth/password-policy-checklist';
import { useToast } from '@/components/ui/toast-provider';
import { Badge } from '@/components/ui/badge';
import { Alert } from '@/components/ui/alert';
import { FormField } from '@/components/forms/form-field';
import { SimpleLineChart } from '@/components/charts/simple-line';
import {
  componentTable,
  defaultProfile,
  multiSelectOptions,
  radioOptions,
  selectOptions,
  showcaseStats,
  statusBadges,
  timelineItems
} from '@/modules/showcase/config';
import { Loader } from '@/components/ui/loader';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Switch } from '@/components/ui/switch';
import { Tabs } from '@/components/ui/tabs';
import { Select } from '@/components/ui/select';
import { RadioGroup } from '@/components/ui/radio-group';
import { MultiSelect } from '@/components/ui/multi-select';
import { FileUpload } from '@/components/ui/file-upload';
import { Timeline } from '@/components/ui/timeline';
import { CalendarIcon, HomeIcon, SettingsIcon, SparklesIcon } from '@/components/ui/icons';

function Section({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <Card>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{description}</p>
      <div className="mt-4">{children}</div>
    </Card>
  );
}

export default function ComponentsPage() {
  const { showToast } = useToast();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState<string>(defaultProfile.name);
  const [email, setEmail] = useState<string>(defaultProfile.email);
  const [password, setPassword] = useState<string>(defaultProfile.password);
  const [toggleEnabled, setToggleEnabled] = useState(true);
  const [role, setRole] = useState('developer');
  const [plan, setPlan] = useState('monthly');
  const [modules, setModules] = useState<string[]>(['rbac', 'docs']);
  const [files, setFiles] = useState<File[]>([]);

  const rows = componentTable.map((row) => row.map((cell) => <span key={`${row[0]}-${cell}`}>{cell}</span>));
  const chartData = [
    { name: 'Mon', value: 15 },
    { name: 'Tue', value: 21 },
    { name: 'Wed', value: 17 },
    { name: 'Thu', value: 26 },
    { name: 'Fri', value: 19 }
  ];
  const tabs = useMemo(
    () => [
      { id: 'overview', label: 'Overview', content: <p className="text-sm text-slate-600 dark:text-slate-300">All core primitives are reusable and composable.</p> },
      { id: 'api', label: 'API Usage', content: <p className="text-sm text-slate-600 dark:text-slate-300">Each sample maps to a component with typed props and reusable states.</p> },
      { id: 'best', label: 'Best Practices', content: <p className="text-sm text-slate-600 dark:text-slate-300">Centralize config in modules, keep presentational components stateless where possible.</p> }
    ],
    []
  );

  return (
    <section className="space-y-6">
      <header className="rounded-xl border border-border bg-gradient-to-r from-cyan-700 to-blue-900 p-6 text-white">
        <h1 className="text-3xl font-bold">Components Showcase</h1>
        <p className="mt-2 text-sm text-cyan-100">Live preview of reusable, modular, dynamic components used across this boilerplate.</p>
      </header>

      <Section title="Navigation + Layout Samples" description="Breadcrumbs, layout cards, icons, and route-aware structure.">
        <div className="space-y-4">
          <Breadcrumb items={[{ label: 'Components', href: '/components' }, { label: 'Catalog' }]} />
          <div className="grid gap-3 md:grid-cols-3">
            <Card>
              <div className="flex items-center gap-2"><HomeIcon className="h-5 w-5 text-cyan-600" /><p className="font-semibold">Public Layout</p></div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Landing, docs, and entry routes.</p>
            </Card>
            <Card>
              <div className="flex items-center gap-2"><SettingsIcon className="h-5 w-5 text-cyan-600" /><p className="font-semibold">App Layout</p></div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Sidebar + content workspace for modules.</p>
            </Card>
            <Card>
              <div className="flex items-center gap-2"><CalendarIcon className="h-5 w-5 text-cyan-600" /><p className="font-semibold">Auth Layout</p></div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Focused forms with shared validation patterns.</p>
            </Card>
          </div>
        </div>
      </Section>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {showcaseStats.map((item) => (
          <Card key={item.label}>
            <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-bold">{item.value}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Section title="Buttons + Toasts" description="Action components and global feedback notifications.">
          <div className="flex flex-wrap gap-2">
            <Button>Primary</Button>
            <Button className="bg-slate-700">Secondary</Button>
            <Button disabled>Disabled</Button>
            <Button className="bg-emerald-600" onClick={() => setOpen(true)}>Modal</Button>
            <Button
              className="bg-amber-600"
              onClick={() => showToast({ kind: 'info', title: 'Sample toast', description: 'Reusable toast component is working.' })}
            >
              Toast
            </Button>
          </div>
        </Section>

        <Section title="Form Fields + Validation" description="Shared field wrappers and password policy checklist.">
          <div className="space-y-3">
            <FormField label="Name" required>
              <Input value={name} onChange={(e) => setName(e.currentTarget.value)} />
            </FormField>
            <FormField label="Email" required>
              <Input value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
            </FormField>
            <FormField label="Password policy">
              <Input type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
            </FormField>
            <PasswordPolicyChecklist password={password} />
          </div>
        </Section>

        <Section title="Loader + Toggle Samples" description="Loading states and switch behavior.">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Loader size="sm" label="Syncing" />
              <Loader size="md" label="Loading data" />
              <Loader size="lg" label="Initializing" />
            </div>
            <Switch checked={toggleEnabled} onCheckedChange={setToggleEnabled} label={toggleEnabled ? 'Enabled' : 'Disabled'} />
            <Alert title="Toggle State" description={toggleEnabled ? 'Feature is enabled.' : 'Feature is disabled.'} tone={toggleEnabled ? 'success' : 'warning'} />
          </div>
        </Section>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Section title="Status Components" description="Reusable badges and alerts for app states.">
          <div className="mb-4 flex flex-wrap gap-2">
            {statusBadges.map((status) => (
              <Badge key={status.label} tone={status.tone}>{status.label}</Badge>
            ))}
          </div>
          <div className="space-y-2">
            <Alert tone="info" title="Informational" description="System is processing background sync tasks." />
            <Alert tone="success" title="Success" description="Data synchronized and cached successfully." />
            <Alert tone="warning" title="Warning" description="API latency increased in the last 5 minutes." />
            <Alert tone="danger" title="Error" description="Permission denied for this action." />
          </div>
        </Section>

        <Section title="Tabs Sample" description="Reusable tab component for segmented content.">
          <Tabs items={tabs} defaultTab="overview" />
        </Section>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Section title="Input Selectors" description="Input, select, radio, and multiselect samples.">
          <div className="space-y-3">
            <FormField label="Role selector">
              <Select value={role} onChange={(e) => setRole(e.currentTarget.value)}>
                {selectOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
              </Select>
            </FormField>
            <FormField label="Plan (radio group)">
              <RadioGroup name="plan" value={plan} onChange={setPlan} options={[...radioOptions]} />
            </FormField>
            <FormField label="Modules (multiselect)">
              <MultiSelect options={[...multiSelectOptions]} value={modules} onChange={setModules} />
            </FormField>
          </div>
        </Section>

        <Section title="File Upload + View" description="Reusable upload control with preview and remove actions.">
          <FileUpload value={files} onChange={setFiles} accept="image/*,.pdf,.doc,.docx" multiple />
        </Section>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Section title="Timeline Sample" description="Reusable timeline for tracking workflow states.">
          <Timeline items={[...timelineItems]} />
        </Section>
        <Section title="Data Display Components" description="Reusable table + chart modules with configurable data.">
          <div className="space-y-4">
            <Table headers={['Component', 'Description']} rows={rows} />
            <Card>
              <SimpleLineChart data={chartData} />
            </Card>
          </div>
        </Section>
      </div>

      <Section title="Icon Samples" description="Inline reusable SVG icons for consistent visual language.">
        <div className="flex flex-wrap items-center gap-4 text-slate-700 dark:text-slate-200">
          <span className="inline-flex items-center gap-1"><HomeIcon className="h-5 w-5 text-cyan-600" /> Home</span>
          <span className="inline-flex items-center gap-1"><SettingsIcon className="h-5 w-5 text-cyan-600" /> Settings</span>
          <span className="inline-flex items-center gap-1"><CalendarIcon className="h-5 w-5 text-cyan-600" /> Timeline</span>
          <span className="inline-flex items-center gap-1"><SparklesIcon className="h-5 w-5 text-cyan-600" /> Highlights</span>
        </div>
      </Section>

      <Modal open={open} onClose={() => setOpen(false)} title="Profile Preview">
        <div className="space-y-2 text-sm">
          <p><span className="font-semibold">Name:</span> {name}</p>
          <p><span className="font-semibold">Email:</span> {email}</p>
          <p className="text-slate-600 dark:text-slate-300">Use this dialog pattern for confirmations, approvals, or quick-edit forms.</p>
        </div>
      </Modal>
    </section>
  );
}
