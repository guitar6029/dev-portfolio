import SectionRail from "./ui/SectionRail";

export default function Skills() {
  return (
    <section className="engineering-capabilities" aria-labelledby="skills-heading">
      <SectionRail
        label="SYSTEM"
        index="02"
        total="04"
        className="section-rail--section"
      />
      <div className="engineering-capabilities__inner">
        <header className="engineering-capabilities__intro">
          <p className="engineering-capabilities__eyebrow">02 / ENGINEERING</p>
          <h2 id="skills-heading" className="engineering-capabilities__title">
            ENGINEERING CAPABILITIES
          </h2>
          <p className="engineering-capabilities__summary">
            Building interfaces, backend services, and the systems that connect
            them.
          </p>
        </header>

        <div className="engineering-capabilities__grid">
          <article className="engineering-capabilities__panel">
            <p className="engineering-capabilities__index">01 / 04</p>
            <h3>Interfaces</h3>
            <p>Clear interaction patterns for products people can use with confidence.</p>
          </article>
          <article className="engineering-capabilities__panel">
            <p className="engineering-capabilities__index">02 / 04</p>
            <h3>Backend</h3>
            <p>Reliable services, APIs, and data flows behind the experience.</p>
          </article>
          <article className="engineering-capabilities__panel">
            <p className="engineering-capabilities__index">03 / 04</p>
            <h3>Systems</h3>
            <p>Connected architecture that keeps complexity legible and resilient.</p>
          </article>
          <article className="engineering-capabilities__panel">
            <p className="engineering-capabilities__index">04 / 04</p>
            <h3>Delivery</h3>
            <p>Practical tooling and collaboration that move work from idea to release.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
