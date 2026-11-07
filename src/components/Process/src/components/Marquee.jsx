import { Asterisk } from "lucide-react";
const items = [
    "Strategy",
    "Brand identity",
    "Web design",
    "Development",
    "Motion",
    "Only me®",
];
export default function Marquee() {
    const row = (key) => (<div key={key} className="flex shrink-0 items-center">
      {items.map((item, i) => (<div key={i} className="flex items-center">
          <span className={`font-display text-2xl font-extrabold uppercase tracking-tight md:text-4xl ${i % 2 === 1 ? "text-stroke" : ""}`}>
            {item}
          </span>
          <Asterisk className="mx-8 size-7 shrink-0 text-acid md:mx-12 md:size-9"/>
        </div>))}
    </div>);
    return (<div className="relative overflow-hidden border-y border-line bg-coal/40 py-5 md:py-7">
      <div className="flex w-max animate-marquee">
        {row("a")}
        {row("b")}
      </div>
    </div>);
}
