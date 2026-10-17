export default function Loading() {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <div className="loading-screen__frame">
        <span className="loading-screen__corner loading-screen__corner--top" aria-hidden="true" />
        <span className="loading-screen__corner loading-screen__corner--bottom" aria-hidden="true" />
        <p className="loading-screen__label">Initializing / Please wait</p>
        <h1 className="loading-screen__title">Loading</h1>
        <div className="loading-screen__indicator" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}
