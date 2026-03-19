export default function CXVaultComingSoonPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_28%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:36px_36px]" />

      <main className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/30 bg-slate-900/80 shadow-[0_0_40px_rgba(37,99,235,0.18)]">
              <div className="relative h-7 w-7">
                <div className="absolute inset-0 rounded-full border-2 border-white/90" />
                <div className="absolute bottom-0 left-1/2 h-4 w-5 -translate-x-1/2 rounded-b-full border-x-2 border-b-2 border-white/90" />
                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-[2px] rounded-full bg-blue-500" />
              </div>
            </div>
            <div>
              <div className="text-2xl font-semibold tracking-tight">
                <span className="text-blue-500">CX</span>Vault
              </div>
              <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Secure interaction intelligence</div>
            </div>
          </div>

          <a
            href="mailto:inquiry@cxvault.ai"
            className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-blue-400/40 hover:bg-blue-500/10 sm:inline-flex"
          >
            inquiry@cxvault.ai
          </a>
        </header>

        <section className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              Coming soon
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Search customer interaction data with speed, security, and control.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              CXVault is a secure platform designed to index and search customer interaction metadata,
              enabling fast discovery, controlled access, and a clear path to enterprise scale.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:inquiry@cxvault.ai?subject=CXVault%20Inquiry"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-4 text-base font-medium text-white shadow-[0_10px_40px_rgba(37,99,235,0.35)] transition hover:bg-blue-500"
              >
                Request early access
              </a>
              <a
                href="mailto:inquiry@cxvault.ai?subject=CXVault%20Demo%20Request"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-medium text-slate-200 transition hover:border-blue-400/40 hover:bg-white/10"
              >
                Talk to the team
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: 'Secure by design',
                  text: 'Built around controlled access, customer owned storage boundaries, and enterprise trust requirements.',
                },
                {
                  title: 'Natural language search',
                  text: 'Find interactions faster using intuitive search experiences built for real business users.',
                },
                {
                  title: 'Enterprise ready roadmap',
                  text: 'Designed to grow into investigation, compliance, transcription, and advanced security workflows.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <div className="text-sm font-medium text-white">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-blue-500/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-slate-400">Launch status</div>
                  <div className="mt-2 text-2xl font-semibold text-white">Building the foundation</div>
                </div>
                <div className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                  In progress
                </div>
              </div>

              <div className="space-y-4">
                {[
                  ['Core search and indexing', 'Active'],
                  ['Natural language discovery', 'Active'],
                  ['Enterprise security baseline', 'Active'],
                  ['Investigation and compliance roadmap', 'Planned'],
                ].map(([label, status]) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-4">
                    <span className="text-sm text-slate-200">{label}</span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        status === 'Active'
                          ? 'bg-blue-500/15 text-blue-200 border border-blue-400/20'
                          : 'bg-slate-700/60 text-slate-300 border border-white/10'
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/8 bg-gradient-to-br from-blue-500/10 to-slate-800 p-5">
                <div className="text-sm uppercase tracking-[0.22em] text-slate-400">Contact</div>
                <a
                  href="mailto:inquiry@cxvault.ai"
                  className="mt-3 block text-xl font-medium text-white transition hover:text-blue-300"
                >
                  inquiry@cxvault.ai
                </a>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Reach out for partnership conversations, early access interest, or product inquiries.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="relative flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 CXVault. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Enterprise search</span>
            <span className="text-slate-600">•</span>
            <span>Secure access</span>
            <span className="text-slate-600">•</span>
            <span>Coming soon</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
