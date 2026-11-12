import { useId, useState } from 'react'
import type { Project } from '../content'

export function ProjectDemo({ title, demo }: { title: string; demo: NonNullable<Project['demo']> }) {
  const labelId = useId()
  const [failed, setFailed] = useState(false)

  return (
    <figure className="project-demo">
      <video
        className="project-demo-player"
        aria-labelledby={labelId}
        src={demo.src}
        poster={demo.poster}
        width={demo.width}
        height={demo.height}
        controls
        playsInline
        preload="none"
        // Progressive enhancement: preload="none" also works without native media lazy loading.
        {...{ loading: 'lazy' }}
        onError={() => setFailed(true)}
      >
        <track
          kind="captions"
          src={demo.captions.src}
          srcLang={demo.captions.language}
          label={demo.captions.label}
        />
        Your browser does not support embedded video. Use the direct video link below.
      </video>
      <figcaption className="project-demo-caption">
        <span id={labelId}>{title} demo · {demo.duration}</span>
        <a href={demo.src} target="_blank" rel="noopener noreferrer">
          Open video<span className="sr-only">: {title} demo (opens in a new tab)</span>
        </a>
        {failed ? <p className="project-demo-error" role="status">The video couldn’t load. Try opening it directly using the link above.</p> : null}
      </figcaption>
    </figure>
  )
}
