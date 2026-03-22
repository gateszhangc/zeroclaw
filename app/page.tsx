import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { absoluteUrl, siteConfig } from "@/lib/site";

const primaryLinkClass =
  "inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/85 active:translate-y-px";

const secondaryLinkClass =
  "inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-foreground/14 bg-white/55 px-4 text-sm font-medium text-foreground transition-all hover:bg-white/78 active:translate-y-px";

const quickFacts = [
  {
    value: "22+",
    label: "provider routes",
    detail:
      "Hosted APIs, OpenAI-compatible endpoints, and local-model workflows keep vendor choice flexible.",
  },
  {
    value: "SQLite",
    label: "local memory",
    detail:
      "FTS5 keyword retrieval, vector search, and hybrid ranking stay built in instead of bolted on later.",
  },
  {
    value: "3",
    label: "control modes",
    detail:
      "ReadOnly, Supervised, and Full let teams match execution power to operational risk.",
  },
  {
    value: "129+",
    label: "security tests",
    detail:
      "Current repository materials highlight automated safety coverage around sandboxing, allowlists, and policy boundaries.",
  },
] as const;

const overviewCards = [
  {
    title: "What is ZeroClaw?",
    body:
      "A compact runtime and control layer for autonomous agents, with modular providers, channels, memory, tools, and deployment options.",
  },
  {
    title: "How ZeroClaw stores context",
    body:
      "SQLite stays at the center, combining FTS5 keyword retrieval, vector similarity, and hybrid ranking so memory remains local and portable.",
  },
  {
    title: "How ZeroClaw enforces safety",
    body:
      "Security defaults center on sandboxing, path scoping, allowlists, localhost-first access, and approval-aware autonomy levels.",
  },
  {
    title: "Who ZeroClaw is for",
    body:
      "The strongest fit is self-hosted automation, low-power infrastructure, and long-running agent workflows that need discipline rather than spectacle.",
  },
] as const;

const keywordTopics = [
  {
    keyword: "ZeroClaw architecture",
    answer:
      "The architecture is trait-driven and modular, so teams can swap core components without turning the runtime into a heavyweight platform.",
  },
  {
    keyword: "ZeroClaw installation",
    answer:
      "Installation follows a practical operator path: install Rust, build the release binary, complete onboarding, and keep the agent running as a daemon.",
  },
  {
    keyword: "ZeroClaw security",
    answer:
      "Security is built around constrained execution: localhost-first access, pairing, sandboxing, path scoping, allowlists, and explicit autonomy boundaries.",
  },
  {
    keyword: "ZeroClaw providers",
    answer:
      "Provider support is intentionally broad, covering 22+ providers, OpenAI-compatible endpoints, and local-model workflows when teams need routing flexibility.",
  },
  {
    keyword: "ZeroClaw Raspberry Pi",
    answer:
      "ZeroClaw is explicitly positioned for constrained hardware, which is why Raspberry Pi and lightweight VPS deployments show up so often in its deployment story.",
  },
  {
    keyword: "ZeroClaw vs OpenClaw",
    answer:
      "OpenClaw reads more interaction-first, while ZeroClaw is the stronger fit when the job is long-running automation with lower overhead and tighter operational control.",
  },
] as const;

const workflowSteps = [
  {
    step: "01",
    title: "Install Rust",
    detail:
      "Install the standard Rust toolchain if the machine is not already provisioned.",
    command: "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh",
  },
  {
    step: "02",
    title: "Build the release",
    detail:
      "Clone the repository, compile the optimized binary, and install the CLI.",
    command:
      "git clone https://github.com/zeroclaw-labs/zeroclaw.git && cd zeroclaw && cargo build --release && cargo install --path . --force",
  },
  {
    step: "03",
    title: "Run onboarding",
    detail:
      "Configure providers, channels, identity, and secure gateway pairing in one pass.",
    command: "zeroclaw onboard --interactive",
  },
  {
    step: "04",
    title: "Start the daemon",
    detail:
      "Keep ZeroClaw online for long-running work, then inspect runtime health from the CLI.",
    command: "zeroclaw daemon && zeroclaw status",
  },
] as const;

const faqs = [
  {
    question: "Is ZeroClaw open source?",
    answer:
      "Yes. The project is maintained in a public GitHub repository with visible code history, issues, pull requests, and tags.",
  },
  {
    question: "Can ZeroClaw run on low-power hardware?",
    answer:
      "Yes. ZeroClaw is positioned for constrained environments, including Raspberry Pi and lightweight VPS deployments.",
  },
  {
    question: "What makes ZeroClaw attractive for self-hosting?",
    answer:
      "It promises a rare combination: compact runtime, fast startup, local memory, configurable autonomy, and safety boundaries that map to real operator concerns.",
  },
  {
    question: "What does ZeroClaw support for observability?",
    answer:
      "Current official materials point to Prometheus and OpenTelemetry support for production monitoring and telemetry workflows.",
  },
  {
    question: "Where should a keyword site focus first?",
    answer:
      "Cover the questions closest to evaluation and deployment: what ZeroClaw is, how it installs, how memory works, which safety controls exist, and when it beats more interaction-first alternatives.",
  },
] as const;

const sourceLinks = [
  {
    label: "Official ZeroClaw profile",
    href: "https://zeroclaw.bot/",
  },
  {
    label: "ZeroClaw GitHub repo",
    href: "https://github.com/zeroclaw-labs/zeroclaw",
  },
] as const;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}#organization`,
  name: siteConfig.host,
  url: siteConfig.url,
  description: siteConfig.description,
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl("/brand/logo-mark.png"),
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}#website`,
  url: siteConfig.url,
  name: siteConfig.title,
  description: siteConfig.description,
  publisher: {
    "@id": `${siteConfig.url}#organization`,
  },
  inLanguage: "en-US",
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteConfig.url}#webpage`,
  url: siteConfig.url,
  name: siteConfig.title,
  description: siteConfig.description,
  isPartOf: {
    "@id": `${siteConfig.url}#website`,
  },
  about: {
    "@type": "SoftwareApplication",
    name: "ZeroClaw",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: absoluteUrl("/brand/logo-mark.png"),
  },
  inLanguage: "en-US",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const structuredData = [
  organizationSchema,
  websiteSchema,
  webpageSchema,
  faqSchema,
] as const;

export default function Home() {
  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="relative isolate overflow-hidden pb-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[34rem] bg-[radial-gradient(circle_at_top,rgb(255_255_255_/_0.68),transparent_58%)]" />

        <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 pb-8 pt-6 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/brand/logo-mark.svg"
              alt="ZeroClaw brand mark"
              width={48}
              height={48}
              priority
            />
            <div className="min-w-0">
              <p className="eyebrow">ZeroClaw / operator guide</p>
              <p className="truncate text-sm font-medium uppercase tracking-[0.22em] text-foreground/78">
                independent research page
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 font-mono text-xs uppercase tracking-[0.24em] text-foreground/58 md:flex">
            <a href="#overview" className="hover:text-foreground">
              Overview
            </a>
            <a href="#topics" className="hover:text-foreground">
              Topics
            </a>
            <a href="#workflow" className="hover:text-foreground">
              Setup
            </a>
            <a href="#faq" className="hover:text-foreground">
              FAQ
            </a>
          </nav>
        </header>

        <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div className="flex flex-col justify-center gap-8">
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="border-foreground/15 bg-white/55 text-foreground/75"
              >
                Independent guide
              </Badge>
              <Badge
                variant="outline"
                className="border-foreground/15 bg-white/55 text-foreground/75"
              >
                Official sources reviewed March 22, 2026
              </Badge>
            </div>

            <div className="space-y-5">
              <p className="eyebrow">Fast runtime. Tight controls.</p>
              <h1 className="max-w-4xl text-5xl leading-none font-heading tracking-[-0.06em] text-balance text-foreground sm:text-6xl lg:text-7xl">
                ZeroClaw is the lightweight,{" "}
                <span className="font-accent italic text-signal">
                  security-first
                </span>{" "}
                runtime for autonomous AI agents.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-foreground/74 sm:text-xl">
                If you are evaluating ZeroClaw for real workloads, start here.
                This guide covers the questions that matter before deployment:
                architecture, autonomy modes, provider support, memory design,
                security controls, and low-overhead deployment fit.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                className={primaryLinkClass}
                href="https://www.easyclaw.pro/en"
                target="_blank"
                rel="noreferrer"
              >
                One-Click Deploy
                <ArrowUpRight className="size-4" />
              </a>
              <a
                className={secondaryLinkClass}
                href="https://zeroclaw.bot/"
                target="_blank"
                rel="noreferrer"
              >
                Read Official Profile
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "ZeroClaw guide",
                "ZeroClaw install",
                "ZeroClaw architecture",
                "ZeroClaw security",
                "ZeroClaw providers",
                "ZeroClaw Raspberry Pi",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-foreground/12 bg-white/50 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-foreground/62"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="section-shell relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgb(185_85_50_/_0.18),transparent_28%),linear-gradient(135deg,rgb(21_19_15_/_0.06)_1px,transparent_1px)] bg-[length:auto,26px_26px] opacity-75" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="eyebrow">At a glance</p>
                  <h2 className="text-3xl leading-tight font-heading tracking-[-0.04em] text-foreground">
                    Why operators look at ZeroClaw
                  </h2>
                  <p className="max-w-md text-sm leading-7 text-foreground/70">
                    The official profile and repository tell a consistent story:
                    fast startup, lean deployment, modular integrations, and
                    tighter safety controls than the usual agent toy box.
                  </p>
                </div>

                <Image
                  src="/brand/logo-mark.svg"
                  alt="ZeroClaw symbol"
                  width={72}
                  height={72}
                />
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {quickFacts.map((item) => (
                  <div key={item.label} className="signal-card p-4">
                    <p className="text-3xl font-heading tracking-[-0.06em] text-foreground">
                      {item.value}
                    </p>
                    <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.24em] text-foreground/48">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-foreground/70">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="ink-panel mt-8 p-5 text-primary-foreground">
                <div className="flex items-center justify-between gap-4 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-primary-foreground/56">
                  <span>Current setup flow</span>
                  <span>Rust + daemon</span>
                </div>
                <pre className="mt-4 overflow-x-auto font-mono text-sm leading-7 text-primary-foreground">
                  <code>{`git clone https://github.com/zeroclaw-labs/zeroclaw.git
cargo build --release
zeroclaw onboard --interactive
zeroclaw daemon`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section
          id="overview"
          className="mx-auto mt-16 w-full max-w-7xl px-6 sm:px-8 lg:px-10"
        >
          <div className="section-shell p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr]">
              <div>
                <p className="eyebrow">Overview</p>
                <h2 className="mt-3 text-4xl leading-none font-heading tracking-[-0.05em] text-foreground sm:text-5xl">
                  What is ZeroClaw?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground/74">
                  ZeroClaw is a Rust-native agent framework built for teams that
                  care more about reliable execution than flashy demos. The
                  value proposition is simple: launch fast, keep the footprint
                  lean, constrain the blast radius, and decide exactly how much
                  autonomy the agent gets.
                </p>

                <div className="signal-divider my-8" />

                <div className="grid gap-4 md:grid-cols-2">
                  {overviewCards.map((item) => (
                    <Card
                      key={item.title}
                      className="border-foreground/10 bg-white/58 shadow-none"
                    >
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm leading-7 text-foreground/70">
                          {item.body}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 self-start">
                <Card className="border-foreground/10 bg-[#161411] text-[#f8f2e9] shadow-none">
                  <CardHeader>
                    <CardTitle className="text-[#f8f2e9]">
                      Who should pick ZeroClaw?
                    </CardTitle>
                    <CardDescription className="text-[#f8f2e9]/64">
                      This is where the positioning is strongest.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm leading-7 text-[#f8f2e9]/80">
                    <p>
                      Best fit: operators, self-hosters, and infra-minded teams
                      that want autonomous execution without dragging in a
                      bloated runtime.
                    </p>
                    <p>
                      Weaker fit: teams whose top priority is interaction-heavy
                      desktop UX or front-end experimentation rather than
                      daemon-style automation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-foreground/10 bg-white/58 shadow-none">
                  <CardHeader>
                    <CardTitle>High-intent search cluster</CardTitle>
                    <CardDescription>
                      These are evaluation-stage queries, not empty awareness
                      traffic.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {[
                      "what is zeroclaw",
                      "zeroclaw install",
                      "zeroclaw security",
                      "zeroclaw architecture",
                      "zeroclaw providers",
                      "zeroclaw raspberry pi",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-secondary px-3 py-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-secondary-foreground/74"
                      >
                        {item}
                      </span>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section
          id="topics"
          className="mx-auto mt-16 w-full max-w-7xl px-6 sm:px-8 lg:px-10"
        >
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Topic cluster</p>
              <h2 className="mt-3 text-4xl leading-none font-heading tracking-[-0.05em] text-foreground sm:text-5xl">
                High-intent ZeroClaw topics to cover first
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-foreground/66">
              Each card answers an evaluation-stage question, so the homepage
              reads like a serious operator guide instead of generic AI filler.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {keywordTopics.map((item) => (
              <Card
                key={item.keyword}
                className="border-foreground/10 bg-white/62 shadow-none"
              >
                <CardHeader>
                  <p className="eyebrow">keyword</p>
                  <CardTitle className="mt-2 text-[1.35rem] leading-tight">
                    {item.keyword}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-foreground/70">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="workflow"
          className="mx-auto mt-16 w-full max-w-7xl px-6 sm:px-8 lg:px-10"
        >
          <div className="section-shell p-6 sm:p-8 lg:p-10">
            <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="eyebrow">Setup path</p>
                <h2 className="mt-3 text-4xl leading-none font-heading tracking-[-0.05em] text-foreground sm:text-5xl">
                  How to install ZeroClaw
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-foreground/66">
                This is the practical onboarding path reflected in current
                official materials: toolchain first, build second, onboarding
                third, daemon mode last.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-4">
              {workflowSteps.map((item) => (
                <div key={item.step} className="signal-card p-5">
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-signal">
                    Step {item.step}
                  </p>
                  <h3 className="mt-3 text-2xl leading-tight font-heading tracking-[-0.04em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/68">
                    {item.detail}
                  </p>
                  <div className="mt-4 rounded-2xl bg-foreground px-4 py-3 font-mono text-xs leading-6 text-background">
                    {item.command}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto mt-16 w-full max-w-7xl px-6 sm:px-8 lg:px-10"
        >
          <div className="section-shell p-6 sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-3 text-4xl leading-none font-heading tracking-[-0.05em] text-foreground sm:text-5xl">
                ZeroClaw FAQ
              </h2>
              <p className="mt-4 text-lg leading-8 text-foreground/72">
                Direct answers for teams evaluating ZeroClaw for self-hosted or
                production-style automation.
              </p>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-foreground/10 bg-white/48 px-5 py-2 sm:px-6">
              <Accordion defaultValue={["item-0"]}>
                {faqs.map((item, index) => (
                  <AccordionItem key={item.question} value={`item-${index}`}>
                    <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pr-8 text-sm leading-7 text-foreground/68">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <footer className="mx-auto mt-16 w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="section-shell flex flex-col gap-6 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
            <div>
              <p className="eyebrow">Sources</p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/68">
                This independent guide is grounded in official ZeroClaw
                materials reviewed on March 22, 2026. It is written to capture
                high-intent evaluation searches without pretending to be the
                official project site.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {sourceLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-foreground/68 hover:text-foreground"
                >
                  {item.label}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
