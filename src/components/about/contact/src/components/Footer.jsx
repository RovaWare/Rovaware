import { ArrowUp } from "lucide-react";
import { scrollTop } from "../hooks/useLenis";
export default function Footer() {
    return (<footer className="footer">
      <div className="footer-big">
        <div className="footer-big-track" aria-hidden="true">
          {[0, 1].map((k) => (<div key={k} style={{ display: "flex" }}>
              <span className="footer-big-word">ROVAWARE</span>
              <span className="footer-big-word accent">LET'S TALK</span>
              <span className="footer-big-word">ROVAWARE</span>
              <span className="footer-big-word accent">LET'S TALK</span>
            </div>))}
        </div>
      </div>

      <div className="footer-bar">
        <span className="footer-copy rv" data-rv>
          © 2025 <b>ROVAWARE</b> — All systems operational.
        </span>
        <span className="footer-motto rv" data-rv style={{ ["--d"]: "90ms" }}>
          Build • Automate • Scale
        </span>
        <button className="back-top rv" data-rv style={{ ["--d"]: "180ms" }} onClick={scrollTop} data-magnetic="0.3">
          <span>Back to top</span>
          <ArrowUp size={14}/>
        </button>
      </div>
    </footer>);
}
