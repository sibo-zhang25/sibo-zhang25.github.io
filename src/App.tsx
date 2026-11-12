import { siteContent as content, type BackgroundEntry, type Project } from './content'
import { ProjectArtwork } from './components/ProjectArtwork'
import { ProjectDemo } from './components/ProjectDemo'
import { HeroArtwork } from './components/HeroArtwork'
import { Badge, Separator, buttonVariants } from './components/ui'

function Arrow({ direction = 'diagonal' }: { direction?: 'diagonal' | 'down' | 'up' }) {
  return (
    <svg className="arrow" data-direction={direction} viewBox="0 0 24 24" fill="none" aria-hidden="true" data-icon="inline-end">
      <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

// Optional outbound links are rendered only when a complete web URL is configured.
function webUrl(value?: string) {
  if (!value?.trim()) return undefined
  try {
    const url = new URL(value)
    return ['https:', 'http:'].includes(url.protocol) ? url.href : undefined
  } catch {
    return undefined
  }
}

function ProjectLink({ title, url }: { title: string; url?: string }) {
  const href = webUrl(url)
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <span>{title}</span><Arrow />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  ) : title
}

function Technologies({ title, technologies }: { title: string; technologies: string[] }) {
  return (
    <ul className="technologies" role="list" aria-label={`${title} technologies`}>
      {technologies.map(technology => <li key={technology}><Badge>{technology}</Badge></li>)}
    </ul>
  )
}

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  return (
    <li className="project-entry">
      <article>
        {project.demo
          ? <ProjectDemo key={project.demo.src} title={project.title} demo={project.demo} />
          : <ProjectArtwork artwork={project.artwork} />}
        <div className="project-info">
          <span className="project-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <div className="project-copy">
            <p className="project-category">{project.category}</p>
            <h3><ProjectLink title={project.title} url={project.url} /></h3>
            <p>{project.description}</p>
            <div className="project-details">
              <span>{project.role}</span>
              <Technologies title={project.title} technologies={project.technologies} />
            </div>
          </div>
        </div>
      </article>
    </li>
  )
}

function BackgroundList({ title, entries }: { title: string; entries: BackgroundEntry[] }) {
  return (
    <div className="background-group">
      <h3>{title}</h3>
      <ul className="background-list" role="list">
        {entries.map(entry => (
          <li key={entry.id}>
            <div className="background-meta">
              <p className="background-organization">{entry.organization}</p>
              <p className="background-period">{entry.period}</p>
            </div>
            <h4>{entry.title}</h4>
            <p className="background-description">{entry.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function App() {
  const email = content.contact.email?.trim()
  const socials = content.contact.socials.flatMap(social => {
    const url = webUrl(social.url)
    return url ? [{ ...social, url }] : []
  })

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="site-shell" id="top">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label={`${content.name}, back to top`}>
            {content.name}<span className="brand-dot">.</span>
          </a>
          <nav aria-label="Main">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact <Arrow /></a>
          </nav>
        </header>
        <main id="main" tabIndex={-1}>
          <section className="intro">
            <div className="intro-top">
              <span className="eyebrow"><span className="small-cross" aria-hidden="true">✳</span>{content.intro.eyebrow}</span>
              <span className="intro-discipline">{content.discipline}</span>
            </div>
            <div className="intro-layout">
              <div className="intro-copy">
                <h1>{content.intro.headline}<br /><em>{content.intro.accent}</em></h1>
                <p>{content.intro.description}</p>
                <a className={buttonVariants()} href="#work">Explore my work <Arrow direction="down" /></a>
              </div>
              <HeroArtwork />
            </div>
            <div className="intro-bottom">
              <span>{content.discipline}</span>
              <span>Selected work & a little about me <Arrow direction="down" /></span>
            </div>
          </section>
          <Separator />
          <section className="work section" id="work">
            <div className="section-label">
              <span className="eyebrow">01 / Selected work</span>
              <span className="section-count">{String(content.work.projects.length).padStart(2, '0')} featured projects</span>
            </div>
            <div className="section-heading">
              <h2>{content.work.heading}</h2>
              <p>{content.work.description}</p>
            </div>
            <ol className="project-list" role="list">
              {content.work.projects.map((project, index) => <ProjectEntry key={project.id} project={project} index={index} />)}
            </ol>
            <div className="supporting-projects">
              <h3>More in data</h3>
              <ul className="supporting-list" role="list">
                {content.work.supportingProjects.map(project => (
                  <li key={project.id}>
                    <p className="project-category">{project.category}</p>
                    <h4><ProjectLink title={project.title} url={project.url} /></h4>
                    <p className="supporting-description">{project.description}</p>
                    <Technologies title={project.title} technologies={project.technologies} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <Separator />
          <section className="about section" id="about">
            <div className="section-label"><span className="eyebrow">02 / A little about me</span></div>
            <div className="about-layout">
              <h2>{content.about.heading}</h2>
              <div className="about-copy">
                {content.about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                <ul className="interests" role="list" aria-label="Areas of focus">
                  {content.about.interests.map(interest => <li key={interest}><span aria-hidden="true">↳</span>{interest}</li>)}
                </ul>
              </div>
            </div>
            <div className="background-layout">
              <BackgroundList title="Experience" entries={content.about.experience} />
              <div className="background-academic">
                <BackgroundList title="Education" entries={content.about.education} />
                <BackgroundList title="Research" entries={content.about.research} />
              </div>
            </div>
          </section>
          <Separator />
          <section className="contact section" id="contact">
            <div className="section-label">
              <span className="eyebrow">03 / Say hello</span>
              <span className="contact-spark" aria-hidden="true">✳</span>
            </div>
            <div className="contact-layout">
              <h2>{content.contact.heading}</h2>
              <div className="contact-copy">
                <p>{content.contact.description}</p>
                {email ? (
                  <a className={buttonVariants()} href={`mailto:${email}`}>Say hello <Arrow /></a>
                ) : <p className="contact-placeholder">Contact details coming soon.</p>}
                {socials.length > 0 && (
                  <nav className="socials" aria-label="Social profiles">
                    {socials.map(social => (
                      <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer">
                        {social.label}<Arrow /><span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ))}
                  </nav>
                )}
              </div>
            </div>
          </section>
        </main>
        <Separator />
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} {content.name}</span>
          <a href="#top">Back to top <Arrow direction="up" /></a>
        </footer>
      </div>
    </>
  )
}
