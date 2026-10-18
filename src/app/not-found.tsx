import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found-screen" aria-labelledby="not-found-title">
      <div className="not-found-screen__frame">
        <span
          className="not-found-screen__corner not-found-screen__corner--top"
          aria-hidden="true"
        />
        <span
          className="not-found-screen__corner not-found-screen__corner--bottom"
          aria-hidden="true"
        />
        <p className="not-found-screen__label">SYSTEM / ERROR 404</p>
        <h1 className="not-found-screen__title" id="not-found-title">
          SIGNAL LOST
        </h1>
        <p className="not-found-screen__description">
          The page you&apos;re looking for could not be found.
        </p>
        <nav className="not-found-screen__actions" aria-label="Not found navigation">
          <Link
            className="framed-hero__button framed-hero__button--primary"
            href="/"
          >
            BACK HOME
          </Link>
          <Link className="framed-hero__button" href="/portfolio">
            VIEW PROJECTS
          </Link>
        </nav>
      </div>
    </section>
  );
}
