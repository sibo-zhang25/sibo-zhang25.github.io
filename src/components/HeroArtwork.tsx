export function HeroArtwork() {
  return (
    <div className="intro-art" aria-hidden="true">
      <div className="hero-art-label"><span>APPLIED INTELLIGENCE</span><span>↗</span></div>
      <svg className="hero-circuit" viewBox="0 0 400 400" fill="none">
        <circle className="circuit-orbit" cx="200" cy="200" r="146" />
        <circle className="circuit-orbit circuit-orbit-inner" cx="200" cy="200" r="112" />
        <path className="circuit-trace" d="M0 112h78l44 44M400 288h-78l-44-44M112 0v78l44 44M288 400v-78l-44-44" />
        <path className="circuit-trace circuit-trace-secondary" d="M0 288h78l44-44M400 112h-78l-44 44M288 0v78l-44 44M112 400v-78l44-44" />
        <path className="circuit-guide" d="M200 30v340M30 200h340" />
        <circle className="circuit-node" cx="78" cy="112" r="4" />
        <circle className="circuit-node" cx="322" cy="288" r="4" />
        <circle className="circuit-node circuit-node-secondary" cx="288" cy="78" r="4" />
        <circle className="circuit-node circuit-node-secondary" cx="112" cy="322" r="4" />
        <path className="circuit-bracket" d="M44 66V44h22M334 44h22v22M356 334v22h-22M66 356H44v-22" />
      </svg>
      <div className="hero-core">
        <svg className="hero-core-mark" viewBox="0 0 100 100" fill="none" aria-hidden="true" focusable="false">
          <path className="core-connections" d="M24 24 50 50 76 24M24 76 50 50 76 76M50 12v76M24 24v52M76 24v52" />
          <circle className="core-halo" cx="50" cy="50" r="18" />
          <circle className="core-node" cx="24" cy="24" r="6" />
          <circle className="core-node core-node-secondary" cx="76" cy="24" r="6" />
          <circle className="core-node core-node-secondary" cx="24" cy="76" r="6" />
          <circle className="core-node" cx="76" cy="76" r="6" />
          <circle className="core-node" cx="50" cy="12" r="4" />
          <circle className="core-node" cx="50" cy="88" r="4" />
          <circle className="core-hub" cx="50" cy="50" r="8" />
        </svg>
      </div>
      <div className="hero-art-footer"><span>AI / DATA / SYSTEMS</span><span>+</span></div>
    </div>
  )
}
