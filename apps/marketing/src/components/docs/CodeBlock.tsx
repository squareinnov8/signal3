'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = 'tsx',
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg bg-gray-900 text-sm">
      {/* Language badge and copy button */}
      <div className="flex items-center justify-between border-b border-gray-700 px-4 py-2">
        <span className="text-xs font-medium text-gray-400">{language}</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-gray-400 hover:bg-gray-800 hover:text-gray-200"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <pre className="overflow-x-auto p-4">
        <code className="font-mono text-gray-100">{code}</code>
      </pre>
    </div>
  );
}
