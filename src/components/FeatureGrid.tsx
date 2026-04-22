import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function FeatureGrid() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToAiSection = () => {
    if (location.pathname !== '/services') {
      navigate('/services#ai-integration');
      return;
    }

    const aiSection = document.getElementById('ai-integration');
    if (!aiSection) return;

    const navOffset = 110;
    const targetTop = aiSection.getBoundingClientRect().top + window.scrollY - navOffset;

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: 'smooth',
    });
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] border-b border-white/20">
        <div className="p-12 md:divider-x flex flex-col justify-between group cursor-crosshair">
          <div className="font-mono text-sm uppercase text-aura-accent">Service 01</div>
          <div>
            <h3 className="font-display text-5xl md:text-7xl uppercase mb-8">WEB<br/>ENGINEERING</h3>
            <p className="font-sans text-lg max-w-sm mb-12 text-on-surface-variant">
              We don't build sites. We build digital monoliths that convert through pure technical superiority.
            </p>
            <Link
              to="/tech-stack"
              className="border border-white/20 px-12 py-4 font-mono text-sm uppercase hover:bg-white hover:text-black transition-all"
            >
              Explore Tech Stack
            </Link>
          </div>
        </div>
        <div className="p-12 bg-aura-accent text-white flex flex-col justify-between group cursor-crosshair">
          <div className="font-mono text-sm uppercase text-surface">Service 02</div>
          <div>
            <h3 className="font-display text-5xl md:text-7xl uppercase mb-8">AI<br/>INTEGRATION</h3>
            <p className="font-sans text-lg max-w-sm mb-12 text-surface">
              Autonomous agents, LLM orchestration, and predictive systems that rewrite your operational DNA.
            </p>
            <button
              type="button"
              onClick={scrollToAiSection}
              className="inline-block border border-surface text-surface px-12 py-4 font-mono text-sm uppercase hover:bg-surface hover:text-white transition-all"
            >
              See Artificial Intelligence
            </button>
          </div>
        </div>
      </section>
  );
}
