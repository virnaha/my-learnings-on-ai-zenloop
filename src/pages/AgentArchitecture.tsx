import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const AgentArchitecture = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(210_85%_35%)] to-[hsl(215_75%_45%)] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-block rounded-lg bg-white/10 px-3 py-1 backdrop-blur-sm border border-white/20">
              <p className="text-xs font-medium text-white/90">CS Monthly · 25 Feb 2026</p>
            </div>
            <h1 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl drop-shadow-lg">
              AI Agents for Solo Support
            </h1>
          </div>
        </div>
      </section>

      {/* Part 1 Header */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xl font-semibold md:text-2xl">Part 1: Agent Architecture</h2>
          </div>
        </div>
      </section>

      {/* The Setup */}
      <ContentSection title="🛠 The Setup">
        <div className="space-y-4">
          <p>
            One-person technical support for zenloop. Two platforms: classic (Elixir/PostgreSQL) + zensurveys (Python/React/Supabase). Integrations: Freshdesk, Braze, Salesforce, customer APIs. Tool: <strong>Claude Code</strong> — AI coding agent running locally.
          </p>
        </div>
      </ContentSection>

      {/* Three Agents */}
      <ContentSection title="🤖 Three Specialized Agents">
        <div className="space-y-4">
          <div className="opacity-0 animate-fade-in-delay-1 p-4 rounded-lg border border-border/40 bg-card hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-accent-coral">Support Investigator</h3>
            <p>Runs DB queries across both databases in parallel, checks past logs, matches to known patterns.</p>
            <Card className="mt-3 border-l-4 border-accent bg-accent/5">
              <CardContent className="p-3">
                <p className="text-sm">
                  <strong>Example:</strong> Fleurop: found 6 test responses, 0 production, <code className="text-xs bg-secondary px-1 py-0.5 rounded">block_anonymous_responses=true</code> → narrowed to identity problem in minutes.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="opacity-0 animate-fade-in-delay-2 p-4 rounded-lg border border-border/40 bg-card hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-tech-blue">Bug Troubleshooter</h3>
            <p>Reads actual source code to trace validation logic and edge cases.</p>
            <Card className="mt-3 border-l-4 border-accent bg-accent/5">
              <CardContent className="p-3">
                <p className="text-sm">
                  <strong>Example:</strong> Westlotto: found exact Elixir line (<code className="text-xs bg-secondary px-1 py-0.5 rounded">additional_questions.ex:209</code>) doing strict string match with no Unicode normalization.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="opacity-0 animate-fade-in-delay-3 p-4 rounded-lg border border-border/40 bg-card hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-accent-purple">Browser Reproducer</h3>
            <p>Spins up real browser via Playwright, loads survey, submits end-to-end.</p>
            <Card className="mt-3 border-l-4 border-accent bg-accent/5">
              <CardContent className="p-3">
                <p className="text-sm">
                  <strong>Example:</strong> Fleurop: confirmed zenloop works with correct params (answer ID 125000249) → proved problem was Freshdesk template.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* Production Data Connection */}
      <ContentSection title="Production Data Connection">
        <div className="space-y-4">
          <p>
            MCP (Model Context Protocol) connects Claude Code to both databases. Direct PostgreSQL for classic, Supabase for zensurveys. Pre-built SQL templates — agent starts from known-good queries. I give it a survey ID → it writes and runs the SQL.
          </p>
        </div>
      </ContentSection>

      {/* CLAUDE.md Guardrails */}
      <ContentSection title="📋 CLAUDE.md Guardrails">
        <div className="space-y-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-2">Layer</th>
                <th className="text-left py-2 px-2">What it contains</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-2 font-semibold">CLAUDE.md</td>
                <td className="py-2 px-2">Investigation workflow (8-step checklist), SQL templates, integration gotchas (Freshdesk, Braze, Salesforce, API)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-2 font-semibold">MEMORY.md</td>
                <td className="py-2 px-2">Persists across sessions. 7 repeat customers by org ID with history. Key patterns from 14 investigations</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-2 font-semibold">CODE-BASE CLAUDE.md</td>
                <td className="py-2 px-2">Known unfixed bugs with file locations, SurveyJS gotchas, score system reference</td>
              </tr>
            </tbody>
          </table>
          <Card className="border-l-4 border-accent bg-accent/5">
            <CardContent className="p-4">
              <p className="text-sm font-medium">
                <strong>Built-in safety:</strong> hedged language ("likely", "suggests") — agent investigates, I decide.
              </p>
            </CardContent>
          </Card>
        </div>
      </ContentSection>

      {/* Skills & Plugins */}
      <ContentSection title="🧩 Skills & Plugins — The Composable Layer">
        <div className="space-y-4">
          <div className="opacity-0 animate-fade-in-delay-1 p-4 rounded-lg border border-border/40 bg-card hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-accent-coral">Custom skills (built by me)</h3>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><code className="text-xs bg-secondary px-1 py-0.5 rounded">zenclassic-db</code> — DB connection wrapper</li>
              <li><code className="text-xs bg-secondary px-1 py-0.5 rounded">troubleshoot</code> — enforces 8-step investigation workflow</li>
              <li><code className="text-xs bg-secondary px-1 py-0.5 rounded">handoff</code> — auto-generates session summaries</li>
              <li><code className="text-xs bg-secondary px-1 py-0.5 rounded">parallel-debug</code> — parallel investigation threads (DB + code + API simultaneously)</li>
              <li><code className="text-xs bg-secondary px-1 py-0.5 rounded">dictionary-seed-prep</code> — data format conversion for uploads</li>
            </ul>
          </div>

          <div className="opacity-0 animate-fade-in-delay-2 p-4 rounded-lg border border-border/40 bg-card hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-tech-blue">Marketplace plugins (plug-and-play)</h3>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><code className="text-xs bg-secondary px-1 py-0.5 rounded">superpowers</code> — TDD, systematic debugging, brainstorming, code review workflows</li>
              <li><code className="text-xs bg-secondary px-1 py-0.5 rounded">coworkpowers</code> — 4-phase compound knowledge loop (Research → Work → Review → Compound) with 20+ specialized agents</li>
              <li><code className="text-xs bg-secondary px-1 py-0.5 rounded">debugging-toolkit</code> / <code className="text-xs bg-secondary px-1 py-0.5 rounded">error-debugging</code> — debugger + error detective agents</li>
              <li><code className="text-xs bg-secondary px-1 py-0.5 rounded">documentation-generation</code> — API docs, architecture docs, diagrams</li>
              <li><code className="text-xs bg-secondary px-1 py-0.5 rounded">playwright-cli</code> / <code className="text-xs bg-secondary px-1 py-0.5 rounded">sentry-cli</code> — browser automation + error tracking</li>
            </ul>
          </div>

          <Card className="border-l-4 border-accent bg-accent/5">
            <CardContent className="p-4">
              <p className="text-sm font-medium">
                <strong>The architecture:</strong> CLAUDE.md for knowledge, skills for workflows, plugins for capabilities, agents for execution. They compose.
              </p>
            </CardContent>
          </Card>
        </div>
      </ContentSection>

      {/* Part 2 Header */}
      <section className="bg-gradient-to-br from-[hsl(210_85%_35%)] to-[hsl(215_75%_45%)] py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xl font-semibold text-white md:text-2xl drop-shadow-lg">Part 2: The Learning Loop</h2>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <ContentSection title="🔍 Case Study: Westlotto Umlaut Bug">
        <div className="space-y-4">
          <div className="opacity-0 animate-fade-in p-4 rounded-lg border border-border/40 bg-card">
            <p><strong>The ticket:</strong> Customer API integration broken. <code className="text-xs bg-secondary px-1 py-0.5 rounded">additional_answers</code> returning 400 Bad Request. Score submission works fine.</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">What the agent did (one session):</h3>
            <ol className="list-decimal pl-5 space-y-2 mt-2">
              <li>Queried DB → 30 answers, only 3 had additional answers</li>
              <li>Found stored options: <code className="text-xs bg-secondary px-1 py-0.5 rounded">Adressaenderung</code> (no ä), <code className="text-xs bg-secondary px-1 py-0.5 rounded">Gewinnzahlenueberprüfung</code> (mixed encoding)</li>
              <li>Read Elixir validation code → exact string match, no Unicode normalization</li>
              <li>Live API test → <code className="text-xs bg-secondary px-1 py-0.5 rounded">Adressänderung</code> = 400, <code className="text-xs bg-secondary px-1 py-0.5 rounded">Adressaenderung</code> = 201</li>
              <li>Root cause confirmed: mixed encoding + strict matching = silent rejection</li>
            </ol>
          </div>
        </div>
      </ContentSection>

      {/* Three Places It Fed Back */}
      <ContentSection title="🔄 Three Places It Fed Back">
        <div className="space-y-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-2">Where</th>
                <th className="text-left py-2 px-2">What was added</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-2 font-semibold">CLAUDE.md — Integration Gotchas</td>
                <td className="py-2 px-2">"<code className="text-xs bg-secondary px-1 py-0.5 rounded">single_select</code> does exact string match — no Unicode normalization. Always copy option strings from API response, never type manually."</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-2 font-semibold">MEMORY.md</td>
                <td className="py-2 px-2">Westlotto added as repeat customer (Org 7904) with specific pattern</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-2 font-semibold">Known Unfixed Bugs</td>
                <td className="py-2 px-2">Missing normalization at <code className="text-xs bg-secondary px-1 py-0.5 rounded">additional_questions.ex:209-212</code></td>
              </tr>
            </tbody>
          </table>
          <Card className="border-l-4 border-accent bg-accent/5">
            <CardContent className="p-4">
              <p className="text-sm font-medium">
                Next time ANY customer reports a 400 on <code className="text-xs bg-secondary px-1 py-0.5 rounded">additional_answers</code> → agent already checks for encoding mismatches.
              </p>
            </CardContent>
          </Card>
        </div>
      </ContentSection>

      {/* Two Compounding Systems */}
      <ContentSection title="⚡ Two Compounding Systems">
        <div className="space-y-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-2">System</th>
                <th className="text-left py-2 px-2">Scope</th>
                <th className="text-left py-2 px-2">How</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-2 font-semibold">CLAUDE.md + MEMORY.md</td>
                <td className="py-2 px-2">Technical investigations</td>
                <td className="py-2 px-2">Manual, high-signal — I update after each case</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-2 font-semibold">CoworkPowers plugin</td>
                <td className="py-2 px-2">Knowledge work (comms, decisions, analysis)</td>
                <td className="py-2 px-2">Automated — extracts patterns, templates, preferences after every task</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">CoworkPowers 4-phase loop:</h3>
            <ol className="list-decimal pl-5 space-y-1 mt-2">
              <li><strong>Research</strong> — parallel agents gather context, check past learnings</li>
              <li><strong>Work</strong> — specialized agent executes (writer, analyst, decision-architect)</li>
              <li><strong>Review</strong> — up to 8 reviewers in parallel (clarity, tone, completeness, risk, devil's advocate…)</li>
              <li><strong>Compound</strong> — extracts what worked, saves as tagged searchable files</li>
            </ol>
          </div>

          <Card className="border-l-4 border-accent bg-accent/5">
            <CardContent className="p-4">
              <p className="text-sm font-medium">
                Same principle: every task makes the next one faster. It compounds.
              </p>
            </CardContent>
          </Card>
        </div>
      </ContentSection>

      {/* The Numbers */}
      <ContentSection title="📊 The Numbers">
        <div className="space-y-4">
          <ul className="list-disc pl-5 space-y-1">
            <li>14 investigations logged</li>
            <li>7 repeat customers with full context</li>
            <li>~60% of tickets are email embed issues — agent knows the gotcha checklist</li>
            <li>"Responses not saving" → agent immediately checks <code className="text-xs bg-secondary px-1 py-0.5 rounded">block_anonymous_responses</code> + identity params</li>
            <li>"Response drop" → agent immediately checks embed script, domain filters, CSP</li>
          </ul>
        </div>
      </ContentSection>

      {/* Closing */}
      <section className="bg-gradient-to-br from-[hsl(210_85%_35%)] to-[hsl(215_75%_45%)] py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-3 text-xl font-semibold text-white md:text-2xl drop-shadow-lg">💡 One Principle</h2>
            <blockquote className="mb-4 text-base text-white/90 italic">
              Investigate → Document findings → Agent gets smarter → Next ticket is faster.
            </blockquote>
            <p className="text-sm text-white/80">
              After 14 investigations, the agent has a library of gotchas, known bugs, and customer history. It compounds.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgentArchitecture;
