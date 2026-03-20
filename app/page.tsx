import Image from "next/image";

export default function CXVaultComingSoonPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.24),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_28%),radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_45%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:44px_44px]" />

      <main className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/CXVault_LOGO_white.png"
              alt="CXVault logo"
              width={260}
              height={72}
              className="h-12 w-auto sm:h-14"
              priority
            />
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="mailto:inquiry@cxvault.ai"
              className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-blue-400/40 hover:bg-blue-500/10"
            >
              inquiry@cxvault.ai
            </a>
            <a
              href="tel:16782759842"
              className="inline-flex rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 transition hover:border-blue-300/50 hover:bg-blue-500/15"
            >
              (678) 275-9842
            </a>
          </div>
        </header>

        <section className="grid flex-1 items-center gap-16 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 shadow-[0_0_40px_rgba(37,99,235,0.12)]">
              Coming soon
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Finally gain visibility to your exported interaction data with
              speed, security, and control.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              CXVault is built on AWS with a security first architecture.
              Customer data remains in customer controlled storage environments
              while CXVault operates as a secure indexing and governed access
              layer for search, replay, download, transcription, redaction, and
              more.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:inquiry@cxvault.ai?subject=CXVault%20Inquiry%20Email"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-4 text-base font-medium text-white shadow-[0_12px_50px_rgba(37,99,235,0.35)] transition hover:bg-blue-500"
              >
                Request early access
              </a>
              <a
                href="tel:16782759842"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-medium text-slate-200 transition hover:border-blue-400/40 hover:bg-white/10"
              >
                Talk to the team · (678) 275-9842
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Data stays in your account",
                  text: "Customer data never leaves customer controlled and customer encrypted environments, and CXVault does not store customer media.",
                },
                {
                  title: "Customer managed encryption",
                  text: "Encryption in transit uses TLS 1.3, and AES256 encryption at rest is protected through customer controlled AWS KMS keys.",
                },
                {
                  title: "Short lived, least privilege access",
                  text: "Scoped IAM roles and short lived credentials minimize exposure and enforce strict access boundaries.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-blue-400/20 hover:bg-white/[0.07]"
                >
                  <div className="text-sm font-medium text-white">
                    {item.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="text-sm uppercase tracking-[0.22em] text-slate-400">
                Trust and compliance
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                CXVault is designed to support enterprise compliance frameworks
                including SOC 2, ISO 27001, HIPAA, PCI, and FedRAMP, with
                formal certification pathways planned. The platform is built to
                provide a clear audit path with event logging and reporting
                expansion on the roadmap.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "AWS",
                  "SOC 2 (Designed to support)",
                  "ISO 27001 (Designed to support)",
                  "HIPAA (Designed to support)",
                  "PCI 4.0 (Designed to support)",
                  "FedRAMP (Planned pathway)",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/15 bg-slate-900/70 px-3 py-1.5 text-xs text-slate-200"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[2.5rem] bg-blue-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_35%)]" />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <div className="text-sm uppercase tracking-[0.22em] text-slate-400">
                      Platform overview
                    </div>
                    <div className="mt-2 text-2xl font-semibold text-white">
                      A secure interaction intelligence layer
                    </div>
                  </div>
                  <div className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                    In progress
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Customer Data",
                    "CXVault Secure Index",
                    "Natural Language Search",
                    "Secure Access & Control",
                  ].map((item, index) => (
                    <div key={item} className="flex flex-col items-center">
                      <div
                        className={`w-full rounded-2xl border px-5 py-5 text-center text-sm font-medium sm:text-base ${
                          index === 1
                            ? "border-blue-400/35 bg-blue-500/15 text-white shadow-[0_0_60px_rgba(37,99,235,0.22)]"
                            : "border-white/10 bg-white/5 text-slate-200"
                        }`}
                      >
                        {item}
                      </div>
                      {index < 3 && (
                        <div className="relative my-2 h-8 w-px bg-white/15">
                          <div className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.8)]" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/8 bg-gradient-to-br from-blue-500/10 to-slate-900/80 p-5">
                  <div className="text-sm uppercase tracking-[0.22em] text-slate-400">
                    Contact
                  </div>
                  <a
                    href="mailto:inquiry@cxvault.ai"
                    className="mt-3 block text-xl font-medium text-white transition hover:text-blue-300"
                  >
                    inquiry@cxvault.ai
                  </a>
                  <a
                    href="tel:16782759842"
                    className="mt-2 block text-base text-blue-300 transition hover:text-blue-200"
                  >
                    (678) 275-9842
                  </a>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Reach out for partnership conversations, early access
                    interest, or product inquiries.
                  </p>
                </div>
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