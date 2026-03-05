'use client';
/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useState } from 'react';
import { FileIcon, UploadIcon, XIcon } from '@/components/ui/icons';

type PreviewFile = {
  id: string;
  file: File;
  url?: string;
};

export function FileUpload({
  value,
  onChange,
  accept = '*/*',
  multiple = true
}: {
  value: File[];
  onChange: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
}) {
  const [previews, setPreviews] = useState<PreviewFile[]>([]);

  useEffect(() => {
    const next = value.map((file) => {
      const isImage = file.type.startsWith('image/');
      return { id: `${file.name}-${file.size}-${file.lastModified}`, file, url: isImage ? URL.createObjectURL(file) : undefined };
    });
    setPreviews(next);
    return () => {
      next.forEach((p) => {
        if (p.url) URL.revokeObjectURL(p.url);
      });
    };
  }, [value]);

  const totalSizeMb = useMemo(() => (value.reduce((sum, file) => sum + file.size, 0) / (1024 * 1024)).toFixed(2), [value]);

  return (
    <div className="space-y-3">
      <label className="block cursor-pointer rounded-lg border border-dashed border-border bg-white p-4 text-center dark:bg-slate-900">
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          className="hidden"
          onChange={(e) => {
            const files = Array.from(e.currentTarget.files ?? []);
            onChange(multiple ? [...value, ...files] : files.slice(0, 1));
          }}
        />
        <UploadIcon className="mx-auto h-6 w-6 text-cyan-600" />
        <p className="mt-2 text-sm font-medium">Upload files</p>
        <p className="text-xs text-slate-500 dark:text-slate-300">Click to select files (supports image preview)</p>
      </label>

      <p className="text-xs text-slate-500 dark:text-slate-300">{value.length} file(s), {totalSizeMb} MB</p>

      <div className="grid gap-2 sm:grid-cols-2">
        {previews.map((preview) => (
          <div key={preview.id} className="rounded-md border border-border bg-white p-2 dark:bg-slate-900">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{preview.file.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-300">{(preview.file.size / 1024).toFixed(1)} KB</p>
              </div>
              <button
                type="button"
                onClick={() => onChange(value.filter((f) => f !== preview.file))}
                className="rounded p-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <XIcon className="h-4 w-4" />
              </button>
            </div>
            {preview.url ? (
              <img src={preview.url} alt={preview.file.name} className="mt-2 h-28 w-full rounded object-cover" />
            ) : (
              <div className="mt-2 flex h-28 items-center justify-center rounded bg-slate-50 dark:bg-slate-800">
                <FileIcon className="h-8 w-8 text-slate-400" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
