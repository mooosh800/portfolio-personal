import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '../config/site';

function fallbackCopy(value: string) {
  const textarea = document.createElement('textarea');
  textarea.value = value;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

export function EmailLink() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const email = siteConfig.contact.email;

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    const showCopied = () => {
      setCopied(true);
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => setCopied(false), 1800);
    };

    if (navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(email).then(showCopied).catch(() => {
        fallbackCopy(email);
        showCopied();
      });
    } else {
      fallbackCopy(email);
      showCopied();
    }
  };

  return (
    <div className="mt-12">
      <a
        href={`mailto:${email}`}
        onClick={handleClick}
        className="group inline-flex max-w-full flex-wrap items-baseline gap-x-4 gap-y-2 text-[clamp(1.5rem,5vw,3.5rem)] font-medium tracking-tight text-paper transition-colors duration-300 hover:text-accent"
      >
        <span className="border-b border-white/25 pb-1 transition-colors duration-300 group-hover:border-accent">
          {email}
        </span>
        <span
          aria-hidden="true"
          className="text-[10px] font-medium uppercase tracking-editorial text-muted transition-colors duration-300 group-hover:text-accent"
        >
          {copied ? 'Copied' : 'Copy'}
        </span>
      </a>
      <span className="sr-only" aria-live="polite">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </div>
  );
}
