import { useEffect, useState } from "react";
import { ArrowUp, Check, Copy } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon, XIcon } from "./SocialIcons.jsx";
const socials = [
    { icon: GithubIcon, label: "GitHub", href: "https://github.com" },
    { icon: XIcon, label: "X (Twitter)", href: "https://x.com" },
    { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
];
export default function Footer() {
    const [copied, setCopied] = useState(false);
    const [time, setTime] = useState("");
    useEffect(() => {
        const tick = () => setTime(new Date().toLocaleTimeString("en-IN", {
            timeZone: "Asia/Kolkata",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        }));
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);
    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText("hello@onlyme.studio");
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
        catch {
            /* clipboard unavailable */
        }
    };
    return (<footer id="contact" className="relative overflow-hidden border-t border-line">
      <div className="pointer-events-none absolute left-1/2 top-0 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-acid/10 blur-[160px]"/>

      <div className="relative mx-auto max-w-[1440px] px-5 pt-24 pb-10 md:px-10 md:pt-36">
        <div className="mb-12 flex items-center justify-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-smoke">
          <span className="text-acid">(06)</span>
          <span className="h-px w-12 bg-line"/>
          Got a project?
        </div>

        <a href="mailto:hello@onlyme.studio" className="group block text-center">
          <h2 className="font-display text-[clamp(3.2rem,12vw,11rem)] leading-[0.9] font-extrabold uppercase tracking-tight transition-colors duration-500 group-hover:text-acid">
            Let's
            <br />
            <span className="text-stroke transition-all duration-500 group-hover:[-webkit-text-stroke-color:var(--color-acid)]">
              talk
            </span>
          </h2>
        </a>

        <div className="mt-14 flex flex-col items-center gap-8">
          <button onClick={copyEmail} className="group inline-flex items-center gap-3 rounded-full border border-line px-7 py-4 font-mono text-sm text-paper transition-colors duration-300 hover:border-acid hover:text-acid">
            {copied ? (<Check className="size-4 text-acid"/>) : (<Copy className="size-4"/>)}
            {copied ? "Copied to clipboard" : "hello@onlyme.studio"}
          </button>

          <div className="flex items-center gap-3">
            {socials.map((s) => (<a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="flex size-11 items-center justify-center rounded-full border border-line text-smoke transition-all duration-300 hover:border-acid hover:bg-acid hover:text-ink">
                <s.icon className="size-4"/>
              </a>))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-line pt-8 md:flex-row">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-smoke">
            © 2025 onlyme® — all rights reserved
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-smoke">
            Designed &amp; built by one person
          </div>
          <div className="flex items-center gap-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-smoke">
              Local — <span className="text-paper">{time}</span> IST
            </div>
            <a href="#top" aria-label="Back to top" className="flex size-10 items-center justify-center rounded-full border border-line text-paper transition-all duration-300 hover:border-acid hover:bg-acid hover:text-ink">
              <ArrowUp className="size-4"/>
            </a>
          </div>
        </div>
      </div>
    </footer>);
}
