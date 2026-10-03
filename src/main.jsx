import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowUpRight,Check,Code2,Database,Layers3,Menu,MousePointer2,Palette,PenTool,Play,Send,ShieldCheck,Sparkles,X,Zap} from 'lucide-react';
import './styles.css';

const services=[
 {icon:Palette,title:'UI/UX & Product Design',text:'High-conversion interfaces designed around your brand, users and business goals.',tags:['Wireframes','Design systems','Prototypes']},
 {icon:Code2,title:'Web Development',text:'Fast, responsive websites and web apps built with modern production-ready technology.',tags:['React','Next.js','Node.js']},
 {icon:Database,title:'Backend & Integrations',text:'Secure APIs, databases, dashboards and third-party integrations that keep everything connected.',tags:['APIs','MongoDB','Automation']},
 {icon:Zap,title:'Launch & Growth',text:'Deployment, SEO foundations, performance tuning and post-launch improvements.',tags:['SEO','Vercel','Analytics']}
];
const projects=[
 {title:'Modern Business',type:'Corporate Website',img:'/assets/workspace.jpg'},
 {title:'Digital Product',type:'SaaS Experience',img:'/assets/pipeline.jpg'},
 {title:'Brand Experience',type:'Premium Landing Page',img:'/assets/experience.jpg'}
];
function App(){
 const [menu,setMenu]=useState(false); const [sent,setSent]=useState(false);
 const submit=e=>{e.preventDefault();setSent(true);setTimeout(()=>setSent(false),5000)};
 return <div className="app">
  <header className="nav"><a className="brand" href="#top"><span className="brand-mark"><Sparkles size={15}/></span>WEB<span>FORGE</span></a><nav className={menu?'open':''}><a href="#services" onClick={()=>setMenu(false)}>Services</a><a href="#process" onClick={()=>setMenu(false)}>How it works</a><a href="#work" onClick={()=>setMenu(false)}>Work</a><a href="#contact" className="nav-cta" onClick={()=>setMenu(false)}>Start a project <ArrowUpRight size={15}/></a></nav><button className="menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>
  <main id="top">
   <section className="hero">
    <video className="hero-video" autoPlay muted loop playsInline poster="/assets/workspace.jpg"><source src="/assets/hero.mp4" type="video/mp4"/></video><div className="hero-shade"/>
    <div className="hero-grid"/>
    <div className="hero-copy"><div className="eyebrow"><span/> PREMIUM FREELANCE WEB DEVELOPMENT</div><h1>Turn your <em>idea</em><br/>into a digital experience.</h1><p>We design and build premium websites, web apps and digital products — from first conversation to launch.</p><div className="hero-actions"><a href="#contact" className="btn primary">Start your project <ArrowUpRight size={18}/></a><a href="#work" className="btn ghost"><Play size={16}/> See our work</a></div><div className="hero-proof"><span><Check size={14}/> Strategy</span><span><Check size={14}/> Design</span><span><Check size={14}/> Development</span><span><Check size={14}/> Delivery</span></div></div>
    <div className="scroll-note"><MousePointer2 size={14}/> SCROLL TO EXPLORE</div>
   </section>
   <section className="intro section"><div className="section-kicker">01 / THE STUDIO</div><div className="intro-grid"><h2>Not just a website.<br/><em>A business asset.</em></h2><div><p className="lead">Your website is often the first conversation a customer has with your business. We make that conversation count.</p><p>From strategy and UX to clean code and deployment, every detail is built to look credible, load fast and move people toward action.</p><a className="text-link" href="#contact">Tell us what you're building <ArrowUpRight size={16}/></a></div></div></section>
   <section id="services" className="section services"><div className="section-head"><div><div className="section-kicker">02 / WHAT WE DO</div><h2>Everything you need to <em>ship.</em></h2></div><p>One team from idea to impact. No handoffs between five different vendors.</p></div><div className="service-grid">{services.map(({icon:Icon,title,text,tags},i)=><article className="service" key={title}><div className="service-top"><div className="icon"><Icon size={21}/></div><span>0{i+1}</span></div><h3>{title}</h3><p>{text}</p><div className="tags">{tags.map(t=><span key={t}>{t}</span>)}</div></article>)}</div></section>
   <section id="process" className="process section"><div className="section-kicker">03 / THE PROCESS</div><h2>Simple process.<br/><em>Serious execution.</em></h2><div className="process-line"><div className="process-step"><b>01</b><h3>Discover</h3><p>We understand your business, audience, goals and what success needs to look like.</p></div><div className="process-step"><b>02</b><h3>Design</h3><p>We turn the strategy into a clear visual system, responsive layouts and a polished prototype.</p></div><div className="process-step"><b>03</b><h3>Build</h3><p>We develop the experience with clean, maintainable code and connect the backend.</p></div><div className="process-step"><b>04</b><h3>Launch</h3><p>We test, optimize, deploy and hand over a website ready for real customers.</p></div></div></section>
   <section id="work" className="work section"><div className="section-head"><div><div className="section-kicker">04 / SELECTED WORK</div><h2>Built for <em>attention.</em></h2></div><p>Examples of the kind of digital experiences we can create for your business.</p></div><div className="work-grid">{projects.map((p,i)=><article className={'project p'+i} key={p.title}><img src={p.img} alt={p.title}/><div className="project-overlay"><span>{p.type}</span><h3>{p.title}</h3><ArrowUpRight/></div></article>)}</div></section>
   <section className="stats"><div><strong>01</strong><span>Dedicated project team</span></div><div><strong>100%</strong><span>Responsive by default</span></div><div><strong>3+</strong><span>Core delivery stages</span></div><div><strong>24/7</strong><span>Digital presence</span></div></section>
   <section id="contact" className="contact section"><div className="contact-copy"><div className="section-kicker">05 / START A PROJECT</div><h2>Have an idea?<br/><em>Let's build it.</em></h2><p>Tell us what you want to launch. We'll come back with the right approach, timeline and next steps.</p><div className="contact-list"><div><ShieldCheck/><span>Clear scope & milestones</span></div><div><Layers3/><span>Design + development in one team</span></div><div><Send/><span>Fast, transparent communication</span></div></div></div><form className="form" onSubmit={submit}>{sent&&<div className="success"><Check/> Thanks — your project brief is ready to discuss.</div>}<label>Name<input required placeholder="Your name"/></label><label>Email<input required type="email" placeholder="you@company.com"/></label><label>What are you building?<select><option>Business website</option><option>Web application</option><option>E-commerce store</option><option>Landing page</option><option>Custom platform</option></select></label><label>Tell us a little about it<textarea rows="5" placeholder="Goals, pages, deadline, anything useful..."/></label><button className="btn primary full">Send project brief <ArrowUpRight size={18}/></button></form></section>
  </main>
  <footer><a className="brand" href="#top"><span className="brand-mark"><Sparkles size={15}/></span>WEB<span>FORGE</span></a><p>Premium websites & digital products, built from idea to impact.</p><div><a href="#services">Services</a><a href="#work">Work</a><a href="#contact">Contact</a></div><small>© 2026 WebForge Studio. All rights reserved.</small></footer>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
