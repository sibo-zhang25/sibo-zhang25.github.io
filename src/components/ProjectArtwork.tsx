import type { Project } from '../content'
import './ProjectArtwork.css'

export function ProjectArtwork({ artwork }: Pick<Project, 'artwork'>) {
  return (
    <div className="project-art" data-artwork={artwork} aria-hidden="true">
      {artwork === 'legal' && (
        <div className="legal-diagram art-diagram">
          <div className="diagram-header"><span>LEXVIA / LEGAL AI</span><span className="diagram-cross">+</span></div>
          <div className="legal-flow">
            <div className="legal-node">
              <svg viewBox="0 0 48 48" fill="none"><path d="M13 6h17l7 7v29H13zM30 6v9h7M19 24h12M19 30h12M19 36h7" /></svg>
              <span>Documents</span>
            </div>
            <span className="diagram-connector">→</span>
            <div className="legal-node legal-core">
              <svg viewBox="0 0 64 64" fill="none"><path d="M32 7 54 20v24L32 57 10 44V20zM32 19l12 7v13l-12 7-12-7V26zM32 7v12M54 20l-10 6M54 44l-10-5M32 57V46M10 44l10-5M10 20l10 6" /></svg>
              <span>AI workflows</span>
            </div>
            <span className="diagram-connector">→</span>
            <div className="legal-node">
              <svg viewBox="0 0 48 48" fill="none"><path d="M24 6 40 12v12c0 10-16 18-16 18S8 34 8 24V12zM16 24l6 6 11-13" /></svg>
              <span>Human review</span>
            </div>
          </div>
          <div className="legal-routing"><span>Multi-agent orchestration</span><span>Codex plugins</span></div>
          <div className="diagram-footer"><span>DOCUMENT WORKFLOW</span><span>↗</span></div>
        </div>
      )}
      {artwork === 'property' && (
        <div className="property-blueprint art-diagram">
          <div className="diagram-header"><span>MICROBURBS FACTS</span><span className="diagram-cross">+</span></div>
          <div className="property-drawing">
            <svg className="property-map-lines" viewBox="0 0 320 150" fill="none">
              <path d="M0 30h115l40-30M0 95h88l92 55M231 0v38l89 62M320 130h-55l-45 20M46 0v150M283 0v150" />
              <path className="property-route" d="M0 119h88V59h74" />
              <circle cx="162" cy="59" r="6" />
            </svg>
            <svg className="property-home" viewBox="0 0 100 100" fill="none"><path d="m13 42 37-29 37 29M22 36v48h56V36M42 84V61h17v23M31 43h12v12H31zM59 43h12v12H59z" /></svg>
          </div>
          <div className="property-research"><div><span>↗</span>Property context</div><div><span>✳</span>Assistant</div></div>
          <div className="diagram-footer"><span>STREET CRED · BETA</span><span>SYDNEY</span></div>
        </div>
      )}
      {artwork === 'climate' && (
        <div className="climate-diagram art-diagram">
          <div className="diagram-header"><span>HELIOS / CLIMATE RISK</span><span className="diagram-cross">+</span></div>
          <div className="climate-drawing">
            <svg viewBox="0 0 320 150" fill="none">
              <g className="climate-source"><circle cx="86" cy="54" r="20" /><path d="M86 22V12M86 96V86M54 54H44M128 54h-10M63 31l-7-7M109 77l7 7M63 77l-7 7M109 31l7-7" /></g>
              <path className="climate-trace" d="M115 111h45V54h52M160 111h52" />
              <g className="climate-crop"><path d="M86 134V74M86 102c-20 0-29-12-29-25 20 0 29 12 29 25ZM86 117c20 0 29-12 29-25-20 0-29 12-29 25Z" /></g>
              <g className="climate-matrix"><path d="M212 30h76v94h-76zM237 30v94M262 30v94M212 61h76M212 93h76" /><path d="M221 44h7M246 76h7M271 107h7" /></g>
            </svg>
          </div>
          <div className="climate-pipeline"><span>Climate</span><i>→</i><span>Time lags</span><i>→</i><span>Features</span></div>
          <div className="diagram-footer"><span>CORN FUTURES</span><span>FEATURE ENGINEERING</span></div>
        </div>
      )}
    </div>
  )
}
