import Image from "next/image";
import Link from "next/link";

type FooterProps = {
  status?: string;
};

export function Footer({ status }: FooterProps) {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-10 px-6 py-12 sm:flex-row sm:flex-wrap sm:justify-between">
        <div>
         <div className="font-display text-base font-bold tracking-[0.08em]">
 <Image
  src="/uploads/logo-Phot.png"
  alt="GAMTA TRINITY"
  width={120}
  height={40}
  className="dark:invert"
/>
</div>
          <p className="mt-2 max-w-[260px] font-mono text-[11px] leading-relaxed text-[var(--muted)]">
            © {new Date().getFullYear()} GAMTA TRINITY. ALL SYSTEMS OPERATIONAL.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-mono text-[11px] tracking-[0.15em] text-[var(--mint)]">
            CONTACT
          </span>
          <a href="mailto:support@gamta.com" className="font-mono text-[11px] text-[var(--muted)] hover:text-[var(--fg)]">
            support@gamta.com
          </a>
          <a href="tel:+251916656489" className="font-mono text-[11px] text-[var(--muted)] hover:text-[var(--fg)]">
            +251 916656489
          </a>
          <a href="https://t.me/gamta_support" target="_blank" rel="noreferrer" className="font-mono text-[11px] text-[var(--muted)] hover:text-[var(--fg)]">
            @gamta_support
          </a>
          <a href="https://linkedin.com/company/gamta" target="_blank" rel="noreferrer" className="font-mono text-[11px] text-[var(--muted)] hover:text-[var(--fg)]">
            linkedin.com/company/gamta
          </a>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col gap-2">
           <Link href="/faq">
            <span className="font-mono text-[11px] tracking-[0.15em] text-[var(--mint)]">
              QUICK_LINKS
            </span>
            </Link>
            <Link href="/radar" className="font-mono text-[11px] text-[var(--muted)] hover:text-[var(--fg)]">
              TECH_RADAR
            </Link>
            <Link href="/trio" className="font-mono text-[11px] text-[var(--muted)] hover:text-[var(--fg)]">
              CORE_DEV
            </Link>
            <Link href="#" className="font-mono text-[11px] text-[var(--muted)] hover:text-[var(--fg)]">
              API_DOCS
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-[11px] tracking-[0.15em] text-[var(--mint)]">
              SUPPORT_DEPT
            </span>
            <Link href="#" className="font-mono text-[11px] text-[var(--muted)] hover:text-[var(--fg)]">
              SECURITY_DEPT
            </Link>
            <Link href="#" className="font-mono text-[11px] text-[var(--muted)] hover:text-[var(--fg)]">
              ENCRYPTED_COMMS
            </Link>
          </div>
        </div>

        {status && (
          <div className="font-mono text-[11px] text-[var(--muted)] sm:self-end">
            {status}
          </div>
        )}
      </div>
    </footer>
  );
}