import { siteConfig } from '../config/site';

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-sm">
      <div className="page-shell flex h-16 items-center justify-between">
        <a
          href="#introduction"
          aria-label="Lama Alhbaby — back to top"
          className="text-xs font-semibold tracking-editorial text-paper transition-colors duration-300 hover:text-accent"
        >
          LA
        </a>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-5 sm:gap-8">
            {siteConfig.navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-[10px] font-medium tracking-editorial text-muted transition-colors duration-300 hover:text-accent"
                >
                  {item.index}
                  <span className="sr-only">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
