import { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {children}
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return <BaseIcon {...props}><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></BaseIcon>;
}

export function SparklesIcon(props: IconProps) {
  return <BaseIcon {...props}><path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" /><path d="m5 16 .8 1.9L8 18.7l-2.2.8L5 21l-.8-1.5L2 18.7l2.2-.8L5 16Z" /><path d="m19 14 .8 1.9 2.2.8-2.2.8L19 20l-.8-1.7-2.2-.8 2.2-.8L19 14Z" /></BaseIcon>;
}

export function LoaderIcon(props: IconProps) {
  return <BaseIcon {...props}><path d="M21 12a9 9 0 1 1-9-9" /></BaseIcon>;
}

export function ChevronRightIcon(props: IconProps) {
  return <BaseIcon {...props}><path d="m9 18 6-6-6-6" /></BaseIcon>;
}

export function CheckIcon(props: IconProps) {
  return <BaseIcon {...props}><path d="m4 12 5 5L20 6" /></BaseIcon>;
}

export function XIcon(props: IconProps) {
  return <BaseIcon {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></BaseIcon>;
}

export function UploadIcon(props: IconProps) {
  return <BaseIcon {...props}><path d="M12 16V4" /><path d="m7 9 5-5 5 5" /><path d="M4 20h16" /></BaseIcon>;
}

export function FileIcon(props: IconProps) {
  return <BaseIcon {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /></BaseIcon>;
}

export function SettingsIcon(props: IconProps) {
  return <BaseIcon {...props}><path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7Z" /><path d="m19.4 15 1.2 2-2 3.4-2.3-.4a8.2 8.2 0 0 1-2.1 1.2L13.5 23h-3l-.7-1.8a8.2 8.2 0 0 1-2.1-1.2l-2.3.4-2-3.4 1.2-2a8.2 8.2 0 0 1 0-2l-1.2-2 2-3.4 2.3.4a8.2 8.2 0 0 1 2.1-1.2L10.5 1h3l.7 1.8a8.2 8.2 0 0 1 2.1 1.2l2.3-.4 2 3.4-1.2 2a8.2 8.2 0 0 1 0 2Z" /></BaseIcon>;
}

export function CalendarIcon(props: IconProps) {
  return <BaseIcon {...props}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4" /><path d="M16 3v4" /><path d="M3 11h18" /></BaseIcon>;
}
