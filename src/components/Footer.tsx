import { siteConfig } from '../config/site';

export function Footer() {
  return (
    <footer className="page-shell flex flex-col gap-2 border-t border-white/10 py-8 text-[11px] uppercase tracking-editorial text-muted sm:flex-row sm:items-center sm:justify-between">
      <span>{siteConfig.name}</span>
      <span>© {siteConfig.footer.copyrightYear}</span>
    </footer>
  );
}
