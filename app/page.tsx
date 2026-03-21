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
    label: "providers",
    detail:
      "Current public materials say ZeroClaw supports 22+ model providers and OpenAI-compatible endpoints.",
  },
  {
    value: "SQLite",
    label: "memory core",
    detail:
      "Keyword search, vector similarity, and hybrid ranking stay local instead of requiring a heavy external stack.",
  },
  {
    value: "3",
    label: "autonomy modes",
    detail:
      "Readonly, supervised, and full modes make it easier to match execution power to operational risk.",
  },
  {
    value: "Pi-ready",
    label: "runtime fit",
    detail:
      "The project positions itself for Mac, Linux, VPS deployments, and low-power devices such as Raspberry Pi.",
  },
] as const;

const overviewCards = [
  {
    title: "What is ZeroClaw?",
    body:
      "A Rust-first autonomous personal assistant infrastructure project focused on low-overhead operation, flexible providers, and production-friendly controls.",
  },
  {
    title: "How ZeroClaw stores context",
    body:
      "The public profile highlights SQLite plus FTS5 keyword retrieval, vector similarity, and hybrid ranking instead of a sprawling memory stack.",
  },
  {
    title: "How ZeroClaw handles security",
    body:
      "Gateway pairing, sandboxing, path scoping, and allowlist controls are part of the documented security posture.",
  },
  {
    title: "Where ZeroClaw fits best",
    body:
      "Its strongest positioning is automation and server-side operations where startup speed, footprint, and self-hosting pragmatism matter.",
  },
] as const;

const keywordTopics = [
  {
    keyword: "ZeroClaw architecture",
    answer:
      "ZeroClaw follows a trait-based design so core pieces can be swapped through configuration while keeping the runtime lean.",
  },
  {
    keyword: "ZeroClaw installation",
    answer:
      "The public setup path is straightforward: install Rust, build a release, run interactive onboarding, then launch the daemon.",
  },
  {
    keyword: "ZeroClaw security",
    answer:
      "The public materials emphasize a local-first network posture plus path scoping and explicit pairing for bearer-token access.",
  },
  {
    keyword: "ZeroClaw providers",
    answer:
      "Provider flexibility is part of the core pitch, with current materials describing 22+ providers and OpenAI-compatible APIs.",
  },
  {
    keyword: "ZeroClaw Raspberry Pi",
    answer:
      "The framework is explicitly presented as suitable for constrained hardware, which makes Raspberry Pi and lightweight VPS deployments part of its appeal.",
  },
  {
    keyword: "ZeroClaw vs OpenClaw",
    answer:
      "The current public profile frames OpenClaw as stronger for interaction-heavy local experiences, while ZeroClaw is positioned for automation-first workloads.",
  },
] as const;

const workflowSteps = [
  {
    step: "01",
    title: "Install Rust",
    detail:
      "Use the standard Rust toolchain setup if the environment does not already have Rust.",
    command: "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh",
  },
  {
    step: "02",
    title: "Build the release",
    detail:
      "Clone the repository, build the optimized binary, and install it into your path.",
    command:
      "git clone https://github.com/zeroclaw-labs/zeroclaw.git && cargo build --release",
  },
  {
    step: "03",
    title: "Run onboarding",
    detail:
      "Complete interactive setup to configure providers, channels, and gateway pairing.",
    command: "zeroclaw onboard --interactive",
  },
  {
    step: "04",
    title: "Start the daemon",
    detail:
      "Run ZeroClaw as a background agent, then inspect its status from the CLI.",
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
      "Based on the current public profile, yes. Raspberry Pi and lightweight VPS deployments are explicitly part of the stated runtime fit.",
  },
  {
    question: "What makes ZeroClaw attractive for self-hosting?",
    answer:
      "The message is consistent across the public materials: small footprint, fast startup, local-first storage, and controls that map well to long-running automation.",
  },
  {
    question: "What does ZeroClaw support for observability?",
    answer:
      "The official profile mentions Prometheus and OpenTelemetry support for production monitoring workflows.",
  },
  {
    question: "Where should a keyword site focus first?",
    answer:
      "Start with the queries people repeatedly ask: what ZeroClaw is, how to install it, how its memory works, what security controls exist, and where it fits better than interaction-first alternatives.",
  },
] as const;

const sourceLinks = [
  {
    label: "ZeroClaw public profile",
    href: "https://zeroclaw.bot/",
  },
  {
    label: "ZeroClaw GitHub repository",
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
              <p className="eyebrow">ZeroClaw / keyword hub</p>
              <p className="truncate text-sm font-medium uppercase tracking-[0.22em] text-foreground/78">
                editorial research landing page
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
                Public sources checked March 21, 2026
              </Badge>
            </div>

            <div className="space-y-5">
              <p className="eyebrow">Fast. Small. Autonomous.</p>
              <h1 className="max-w-4xl text-5xl leading-none font-heading tracking-[-0.06em] text-balance text-foreground sm:text-6xl lg:text-7xl">
                ZeroClaw is the fast, small,{" "}
                <span className="font-accent italic text-signal">
                  security-minded
                </span>{" "}
                path to autonomous agents.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-foreground/74 sm:text-xl">
                This page is built around the ZeroClaw queries people actually
                search for: what it is, how it works, how to install it, how its
                memory behaves, and why it fits low-overhead automation stacks.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                className={primaryLinkClass}
                href="https://github.com/zeroclaw-labs/zeroclaw"
                target="_blank"
                rel="noreferrer"
              >
                View Repository
                <ArrowUpRight className="size-4" />
              </a>
              <a
                className={secondaryLinkClass}
                href="https://zeroclaw.bot/"
                target="_blank"
                rel="noreferrer"
              >
                Open Public Profile
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
                  <p className="eyebrow">Operator brief</p>
                  <h2 className="text-3xl leading-tight font-heading tracking-[-0.04em] text-foreground">
                    ZeroClaw field sheet
                  </h2>
                  <p className="max-w-md text-sm leading-7 text-foreground/70">
                    Public materials consistently frame ZeroClaw as a
                    Rust-native framework for people who want autonomous agents
                    without carrying a bloated runtime.
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
                  ZeroClaw is a public autonomous assistant project with a
                  clear operational message: stay fast, stay small, and let
                  teams control how much autonomy the agent is allowed to use.
                  The public profile points to provider flexibility, SQLite
                  memory, security boundaries, and observability as the core
                  reasons to care.
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
                      Best fit for ZeroClaw
                    </CardTitle>
                    <CardDescription className="text-[#f8f2e9]/64">
                      Use public positioning to sharpen the page message.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm leading-7 text-[#f8f2e9]/80">
                    <p>
                      Strongest match: automation-heavy operators, self-hosters,
                      and teams that care about low-power deployment targets.
                    </p>
                    <p>
                      Weaker match: people primarily chasing front-end local
                      interaction experiments rather than daemon-style workflow
                      execution.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-foreground/10 bg-white/58 shadow-none">
                  <CardHeader>
                    <CardTitle>Search intent cluster</CardTitle>
                    <CardDescription>
                      These are the high-intent themes worth covering first.
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
                ZeroClaw keyword topics worth ranking for
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-foreground/66">
              Each card answers a real search question and gives the homepage a
              clear editorial spine instead of generic product marketing.
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
                This flow mirrors the current public profile: toolchain first,
                release build second, interactive onboarding third, and daemon
                mode last.
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
                Short answers to the search questions that repeatedly surface
                around ZeroClaw.
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
                This is an independent editorial page based on public ZeroClaw
                materials checked on March 21, 2026. It is structured to target
                high-intent keyword searches without pretending to be the
                official project website.
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
