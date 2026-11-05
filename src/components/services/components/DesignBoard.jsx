import {
  Boxes,
  Code2,
  Component,
  MousePointer2,
  Search,
  Workflow,
} from 'lucide-react';

const iconMap = {
  research: Search,
  flows: Workflow,
  interface: Component,
  prototype: MousePointer2,
  system: Boxes,
  handoff: Code2,
};

export default function DesignBoard({ capability }) {
  const Icon = iconMap[capability.icon];
  return (
    <div className="design-board" key={capability.id} aria-label={`${capability.title} illustration`}>
      <div className="board-toolbar">
        <div className="board-dots"><i /><i /><i /></div>
        <span>rovaware / {capability.id}.fig</span>
        <div className="board-avatars"><i>R</i><i>UX</i></div>
      </div>
      <div className="board-workspace">
        <aside className="board-sidebar">
          <Icon size={18} />
          <span className="is-active" />
          <span />
          <span />
          <span />
        </aside>
        <div className="board-canvas">
          <div className="canvas-label"><span>{capability.number}</span>{capability.title}</div>
          <div className={`canvas-art canvas-${capability.icon}`}>
            <div className="canvas-window canvas-window-main">
              <div className="mock-nav"><b>R</b><span /><span /><i /></div>
              <div className="mock-hero">
                <div><small>DESIGN WITH INTENT</small><strong>Make every<br />interaction clear.</strong><em /></div>
                <Icon size={54} strokeWidth={1.1} />
              </div>
              <div className="mock-cards"><i /><i /><i /></div>
            </div>
            <div className="canvas-window canvas-window-float">
              <span>COMPONENT / 01</span>
              <div className="mock-button">Get started <b>↗</b></div>
              <div className="mock-lines"><i /><i /><i /></div>
            </div>
            <div className="canvas-cursor"><MousePointer2 size={21} fill="currentColor" /><span>You</span></div>
          </div>
          <div className="board-footer">
            {capability.deliverables.slice(0, 3).map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
