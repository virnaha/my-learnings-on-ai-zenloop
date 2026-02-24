import { Link } from "react-router-dom";

const AgentArchitecture = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <header className="border-b border-gray-200">
        <nav className="mx-auto max-w-[640px] px-6 py-5 flex items-center justify-between">
          <Link to="/" className="text-[15px] font-semibold text-gray-900 hover:text-sky-600 transition-colors duration-200">
            virna
          </Link>
          <div className="flex gap-5">
            <Link to="/" className="text-[15px] text-gray-500 hover:text-gray-900 transition-colors duration-200">blog</Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-[640px] px-6 py-14">
        <article>
          {/* Title */}
          <header className="mb-12">
            <time className="text-[13px] font-medium text-gray-400 tracking-wide uppercase">Feb 25, 2026</time>
            <h1 className="mt-2 text-[28px] font-semibold text-gray-900 tracking-tight leading-tight">
              AI Agents for Solo Support
            </h1>
            <p className="mt-2 text-[16px] text-gray-500 leading-relaxed">
              How Claude Code powers a one-person support team.
            </p>
          </header>

          {/* Prose content */}
          <div className="space-y-6 text-[16px] text-gray-700 leading-[1.8]">

            {/* Part 1 */}
            <h2 className="text-[22px] font-semibold text-gray-900 mt-14 mb-4 pt-8 border-t border-gray-200">
              Part 1: Agent Architecture
            </h2>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">The Setup</h3>
            <p>
              I'm a one-person technical support team for zenloop. Two platforms: classic (Elixir/PostgreSQL) and zensurveys (Python/React/Supabase). Integrations with Freshdesk, Braze, Salesforce, and customer APIs. The tool that makes this possible: <strong>Claude Code</strong> — an AI coding agent running locally in my terminal.
            </p>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">Three Specialized Agents</h3>

            <p><strong className="text-gray-900">Support Investigator</strong> — the workhorse. When a ticket comes in with a customer ID, it runs DB queries across both databases in parallel. Pulls survey config, recent responses, org settings, checks throttling. And it checks past logs — "have we seen this customer before?"</p>
            <blockquote className="border-l-[3px] border-sky-500 pl-4 my-5 italic text-gray-500">
              Email embed ticket: found 6 test responses, 0 production, <code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded not-italic font-mono">block_anonymous_responses=true</code> → narrowed to identity parameter problem in minutes.
            </blockquote>

            <p><strong className="text-gray-900">Bug Troubleshooter</strong> — the code reader. When the database alone doesn't explain it, this agent reads the actual source code. Traces validation logic, finds edge cases.</p>
            <blockquote className="border-l-[3px] border-sky-500 pl-4 my-5 italic text-gray-500">
              API integration ticket: found exact Elixir line (<code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded not-italic font-mono">additional_questions.ex:209</code>) doing strict string match with no Unicode normalization.
            </blockquote>

            <p><strong className="text-gray-900">Browser Reproducer</strong> — the proof. Spins up a real browser via Playwright, loads the survey, submits end-to-end. Confirms whether the issue is zenloop-side or client-side.</p>
            <blockquote className="border-l-[3px] border-sky-500 pl-4 my-5 italic text-gray-500">
              Playwright test with correct URL params → response saved successfully. Proved zenloop works fine — problem was the customer's email template.
            </blockquote>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">Production Data Connection</h3>
            <p>
              MCP (Model Context Protocol) connects Claude Code to both databases. Direct PostgreSQL for classic, Supabase for zensurveys. I give it a survey ID, it writes and runs the SQL. Pre-built query templates in CLAUDE.md so it starts from known-good SQL — it doesn't figure out the schema every time.
            </p>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">CLAUDE.md Guardrails</h3>
            <p>Three layers of configuration make it safe and repeatable:</p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-[15px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 pr-6 font-semibold text-gray-900">Layer</th>
                    <th className="text-left py-3 font-semibold text-gray-900">What it contains</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-6 font-medium text-gray-900">CLAUDE.md</td>
                    <td className="py-3">Investigation workflow (8-step checklist), SQL templates, integration gotchas</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-6 font-medium text-gray-900">MEMORY.md</td>
                    <td className="py-3">Persists across sessions. Repeat customers by org ID with history. Key patterns from 14 investigations</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-6 font-medium text-gray-900">CODE-BASE CLAUDE.md</td>
                    <td className="py-3">Known unfixed bugs with file locations, SurveyJS gotchas, score system reference</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Built-in safety: hedged language ("likely", "suggests") — the agent investigates, I validate, I communicate to customers. It never talks to customers directly.
            </p>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">Skills & Plugins — The Composable Layer</h3>

            <p><strong className="text-gray-900">Custom skills I built</strong> (5 small files for my domain):</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded font-mono">zenclassic-db</code> — DB connection wrapper</li>
              <li><code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded font-mono">troubleshoot</code> — enforces 8-step investigation workflow</li>
              <li><code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded font-mono">handoff</code> — auto-generates session summaries</li>
              <li><code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded font-mono">parallel-debug</code> — concurrent investigation threads (DB + code + API simultaneously)</li>
              <li><code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded font-mono">dictionary-seed-prep</code> — data format conversion for uploads</li>
            </ul>

            <p><strong className="text-gray-900">Marketplace plugins</strong> (plug-and-play):</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded font-mono">superpowers</code> — TDD, systematic debugging, brainstorming, code review workflows</li>
              <li><code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded font-mono">coworkpowers</code> — 4-phase compound knowledge loop (Research → Work → Review → Compound) with 20+ specialized agents</li>
              <li><code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded font-mono">debugging-toolkit</code> / <code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded font-mono">error-debugging</code> — debugger + error detective agents</li>
              <li><code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded font-mono">documentation-generation</code> — API docs, architecture docs, diagrams</li>
              <li><code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded font-mono">playwright-cli</code> / <code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded font-mono">sentry-cli</code> — browser automation + error tracking</li>
            </ul>

            <p>
              The architecture in one sentence: <strong className="text-gray-900">CLAUDE.md for knowledge, skills for workflows, plugins for capabilities, agents for execution.</strong> They compose.
            </p>

            {/* Part 2 */}
            <h2 className="text-[22px] font-semibold text-gray-900 mt-14 mb-4 pt-8 border-t border-gray-200">
              Part 2: The Learning Loop
            </h2>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">Case Study: The Umlaut Bug</h3>

            <p>
              <strong className="text-gray-900">The ticket:</strong> A customer's API integration was broken. <code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded font-mono">additional_answers</code> returning 400 Bad Request. Score submission worked fine.
            </p>

            <p>What the agent did, in one session:</p>
            <ol className="list-decimal pl-6 space-y-3 my-4">
              <li>Queried DB → 30 answers, only 3 had additional answers</li>
              <li>Found stored options with mixed encoding — some with German umlauts spelled out, some with actual special characters</li>
              <li>Read Elixir validation code → exact string match, no Unicode normalization</li>
              <li>Live API test → submitting with the umlaut character = 400, submitting with the spelled-out version = 201</li>
              <li>Root cause confirmed: mixed encoding in stored options + strict matching = silent rejection</li>
            </ol>

            <p>
              Without the agent, this would have been hours of manually querying the DB, reading unfamiliar Elixir code, crafting test API calls. With the agent: one session, full root cause, tested and confirmed fix.
            </p>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">Three Places It Fed Back</h3>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-[15px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 pr-6 font-semibold text-gray-900">Where</th>
                    <th className="text-left py-3 font-semibold text-gray-900">What was added</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-6 font-medium text-gray-900">CLAUDE.md</td>
                    <td className="py-3">"<code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded font-mono">single_select</code> does exact string match — no Unicode normalization. Always copy option strings from API response."</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-6 font-medium text-gray-900">MEMORY.md</td>
                    <td className="py-3">Customer added as repeat entry with org ID and specific encoding pattern</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-6 font-medium text-gray-900">Known Bugs</td>
                    <td className="py-3">Missing normalization at <code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded font-mono">additional_questions.ex:209-212</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Next time <em>any</em> customer reports a 400 on <code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded font-mono">additional_answers</code>, the agent already checks for encoding mismatches. It doesn't rediscover the bug — it matches the pattern.
            </p>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">Two Compounding Systems</h3>

            <p>
              The umlaut bug example was manual compounding — I updated CLAUDE.md and MEMORY.md by hand. But there's a plugin called <strong className="text-gray-900">CoworkPowers</strong> that automates this for knowledge work.
            </p>

            <p>It has four phases:</p>
            <ol className="list-decimal pl-6 space-y-2 my-4">
              <li><strong className="text-gray-900">Research</strong> — parallel agents gather context, check past learnings</li>
              <li><strong className="text-gray-900">Work</strong> — specialized agent executes (writer, analyst, decision-architect)</li>
              <li><strong className="text-gray-900">Review</strong> — up to 8 reviewers in parallel (clarity, tone, completeness, risk, devil's advocate…)</li>
              <li><strong className="text-gray-900">Compound</strong> — extracts what worked, saves as tagged searchable files</li>
            </ol>

            <p>So now I have two compounding systems working together:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong className="text-gray-900">Technical investigations</strong> → CLAUDE.md + MEMORY.md (manual, high-signal)</li>
              <li><strong className="text-gray-900">Knowledge work</strong> → CoworkPowers (automated, pattern-based)</li>
            </ul>

            <p>Both follow the same principle: <strong className="text-gray-900">every task makes the next one faster. It compounds.</strong></p>

            {/* Closing */}
            <div className="mt-14 pt-8 border-t border-gray-200">
              <blockquote className="border-l-[3px] border-sky-500 pl-4 my-5 italic text-gray-500 text-[17px]">
                Investigate → Document findings → Agent gets smarter → Next ticket is faster.
              </blockquote>
              <p>
                After 14 investigations, the agent has a library of gotchas, known bugs, and customer history. It compounds. And the more I use it, the wider the gap gets between what one person can handle with this setup versus without it.
              </p>
            </div>
          </div>
        </article>
      </main>

      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-[640px] px-6 py-8">
          <p className="text-[13px] text-gray-400">Built with curiosity and a bit of frustration.</p>
        </div>
      </footer>
    </div>
  );
};

export default AgentArchitecture;
