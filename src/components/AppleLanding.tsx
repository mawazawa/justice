export default function AppleLanding() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="mb-8">
          <h1 className="text-[9vw] leading-none font-bold tracking-tight md:text-8xl lg:text-[9rem]">JusticeOS&nbsp;Pro</h1>
        </div>
        <p className="text-2xl md:text-4xl text-zinc-300 max-w-3xl">
          Adaptive justice. Now operational.
        </p>
        <p className="mt-6 max-w-2xl text-zinc-400">
          A precision‑engineered platform for courts and legal teams with realtime collaboration,
          zero‑friction case flows and end‑to‑end security.
        </p>
        <div className="mt-10 flex gap-4">
          <a href="#start" className="rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-zinc-100 transition">Start free trial</a>
          <a href="#learn" className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold hover:border-zinc-500 transition">Learn more</a>
        </div>
      </section>

      {/* Section: AI Engine */}
      <section id="learn" className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">AI Engine. More capable by every measure.</h2>
            <p className="mt-6 text-zinc-400">
              Our inference pipeline prioritizes accuracy and accountability. From smart intake to
              evidence synthesis and drafting assistance, the system adapts to the matter at hand
              while keeping humans in control.
            </p>
          </div>
          <ul className="space-y-6 text-zinc-300">
            <li className="flex gap-3"><span className="mt-1 h-1.5 w-6 bg-emerald-400 rounded-full"/>Up to 2× faster document understanding with streaming extraction.</li>
            <li className="flex gap-3"><span className="mt-1 h-1.5 w-6 bg-sky-400 rounded-full"/>Context‑aware suggestions that follow your court’s rules and templates.</li>
            <li className="flex gap-3"><span className="mt-1 h-1.5 w-6 bg-blue-400 rounded-full"/>Defense‑grade privacy with per‑case encryption and audit trails.</li>
          </ul>
        </div>
      </section>

      {/* Section: Clarity */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold">Unmatched clarity. On every level.</h3>
            <p className="mt-4 text-zinc-400">
              Timelines, filings and actions align automatically so everyone stays in sync. Hearings,
              tasks and disclosures are always exactly where you expect them.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-zinc-300">
            <div className="rounded-2xl bg-zinc-900 p-6 border border-white/5">
              <div className="text-5xl font-bold">48k</div>
              <div className="mt-2 text-sm text-zinc-400">events per matter tracked with zero noise</div>
            </div>
            <div className="rounded-2xl bg-zinc-900 p-6 border border-white/5">
              <div className="text-5xl font-bold">2×</div>
              <div className="mt-2 text-sm text-zinc-400">faster filings from intake to service</div>
            </div>
            <div className="rounded-2xl bg-zinc-900 p-6 border border-white/5">
              <div className="text-5xl font-bold">99.99%</div>
              <div className="mt-2 text-sm text-zinc-400">uptime across jurisdictions</div>
            </div>
            <div className="rounded-2xl bg-zinc-900 p-6 border border-white/5">
              <div className="text-5xl font-bold">24/7</div>
              <div className="mt-2 text-sm text-zinc-400">monitoring and support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Control */}
      <section className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h3 className="text-3xl md:text-4xl font-semibold">A new level of control.</h3>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-black p-6 border border-white/10">
              <h4 className="font-semibold">Case modes</h4>
              <p className="mt-2 text-zinc-400">Switch between prosecution, defense, civil and administrative presets —
                each with opinionated workflows you can tailor.</p>
            </div>
            <div className="rounded-2xl bg-black p-6 border border-white/10">
              <h4 className="font-semibold">One‑tap redaction</h4>
              <p className="mt-2 text-zinc-400">PII and sensitive material are detected and masked consistently
                before anything is shared.</p>
            </div>
            <div className="rounded-2xl bg-black p-6 border border-white/10">
              <h4 className="font-semibold">Live collaboration</h4>
              <p className="mt-2 text-zinc-400">Drafts, notes and exhibits update in real time across teams and devices
                with full version history.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Simplicity */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold">Simplicity on a grand scale.</h3>
            <p className="mt-4 text-zinc-400">From small municipal courts to national agencies, JusticeOS deploys in hours
              and scales elastically. The experience is calm, consistent and fast.</p>
            <div className="mt-8 flex gap-4">
              <a href="#start" className="rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-zinc-100 transition">Start free trial</a>
              <a href="/sign-in" className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold hover:border-zinc-500 transition">Sign in</a>
            </div>
          </div>
          <ul className="space-y-4 text-zinc-300">
            <li className="flex gap-3"><span className="mt-2 h-5 w-5 rounded-full bg-emerald-500"/>No training required</li>
            <li className="flex gap-3"><span className="mt-2 h-5 w-5 rounded-full bg-sky-500"/>Secure by default</li>
            <li className="flex gap-3"><span className="mt-2 h-5 w-5 rounded-full bg-blue-500"/>Works on any device</li>
          </ul>
        </div>
      </section>

      {/* Footer microcopy */}
      <footer id="start" className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16 text-sm text-zinc-500">
          <p>14‑day free trial. No credit card required. Cancel anytime.</p>
        </div>
      </footer>
    </main>
  )
}
