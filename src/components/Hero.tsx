import Link from "next/link";

export default function Hero() {
  return (
    <section className="framed-hero" aria-labelledby="hero-title">
      <div className="framed-hero__shell">
        <div className="framed-hero__copy">
          <p className="framed-hero__label">Product / Interfaces / Systems</p>
          <h1 id="hero-title" className="framed-hero__title">
            <span>JOSH</span>
            <span>SOLL</span>
          </h1>
          <p className="framed-hero__role">
            Product Engineer designing calm, reliable interfaces for complex
            products.
          </p>
          <p className="framed-hero__body">
            A considered practice in structure, interaction, and useful detail.
          </p>
          <div className="framed-hero__actions">
            <Link className="framed-hero__button framed-hero__button--primary" href="/portfolio">
              View selected work <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
