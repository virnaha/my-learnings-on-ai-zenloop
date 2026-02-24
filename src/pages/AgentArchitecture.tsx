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
          <header className="mb-12">
            <time className="text-[13px] font-medium text-gray-400 tracking-wide uppercase">Feb 25, 2026</time>
            <h1 className="mt-2 text-[28px] font-semibold text-gray-900 tracking-tight leading-tight">
              How AI Agents Power My One-Person Support Team
            </h1>
            <p className="mt-2 text-[16px] text-gray-500 leading-relaxed">
              Multiple agents. Two databases. One terminal.
            </p>
          </header>

          <div className="space-y-6 text-[16px] text-gray-700 leading-[1.8]">

            <p>
              I'm a one-person technical support team at zenloop. I handle two production platforms: <strong>classic</strong> (Elixir/PostgreSQL) and <strong>zensurveys</strong> (Python/React/Supabase), plus integrations with Freshdesk, Braze, Salesforce, and various customer APIs.
            </p>

            <p>
              Any given support ticket might touch survey configuration, response storage, API validation, encoding edge cases, feature flags, or email template parameters — often several at once. In a traditional setup, you'd want a team for this.
            </p>

            <p>
              Instead, I use <strong>Claude Code</strong> — an AI coding agent running locally in my terminal — as a structured multi-agent investigation system.
            </p>

            <div className="rounded-lg bg-sky-50/60 border border-sky-100 px-5 py-4 my-6 text-[15px] text-sky-900/80 leading-relaxed">
              This is not "chatting with AI." It is an operational debugging architecture.
            </div>

            {/* The Architecture */}
            <h2 className="text-[22px] font-semibold text-gray-900 mt-14 mb-4 pt-8 border-t border-gray-200">
              The Architecture
            </h2>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">Multiple Specialized Agents</h3>

            <p>
              Rather than relying on one general assistant, I use multiple focused agents. Each has a defined role and operates against real systems.
            </p>

            <p>They work across:</p>
            <ul className="list-disc pl-6 space-y-1 my-4">
              <li>Production databases</li>
              <li>Source code</li>
              <li>Browser sessions</li>
              <li>Raw API calls</li>
              <li>Persistent memory files</li>
            </ul>

            <p>Each ticket activates the agents it needs.</p>

            {/* Agent 1 */}
            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">🔧 1. The Support Investigator</h3>
            <p className="italic text-gray-500">Interrogates production data.</p>

            <p>When a ticket includes a survey ID or org ID, this agent starts with facts.</p>

            <p>It:</p>
            <ul className="list-disc pl-6 space-y-1 my-4">
              <li>Runs SQL against PostgreSQL and Supabase</li>
              <li>Pulls survey configuration</li>
              <li>Checks recent responses</li>
              <li>Inspects org-level settings</li>
              <li>Verifies throttling rules</li>
              <li>Reviews logs</li>
              <li>Searches prior investigation memory</li>
            </ul>

            <p>Its job is simple: <strong>What actually happened?</strong></p>

            <blockquote className="border-l-[3px] border-sky-500 pl-4 my-5 text-gray-500">
              <p className="font-medium text-gray-700 mb-2">Example</p>
              <p>A customer reports that embedded survey responses aren't saving.</p>
              <p className="mt-2">The investigator finds: 6 test responses, 0 production responses, <code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded font-mono not-italic">block_anonymous_responses = true</code></p>
              <p className="mt-2">That narrows the issue immediately. Production responses are missing identity parameters.</p>
              <p className="mt-2">Instead of vague troubleshooting, the problem space collapses to one configuration detail.</p>
            </blockquote>

            {/* Agent 2 */}
            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">2. The Code Reader</h3>
            <p className="italic text-gray-500">Traces the actual implementation.</p>

            <p>When database evidence isn't enough, a code analysis agent reads the source.</p>

            <p>It:</p>
            <ul className="list-disc pl-6 space-y-1 my-4">
              <li>Locates validation paths</li>
              <li>Traces conditionals</li>
              <li>Identifies strict comparisons</li>
              <li>Surfaces edge cases</li>
              <li>Points to exact files and line numbers</li>
            </ul>

            <blockquote className="border-l-[3px] border-sky-500 pl-4 my-5 text-gray-500">
              <p className="font-medium text-gray-700 mb-2">Example</p>
              <p>An API integration returns 400 errors on <code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded font-mono not-italic">additional_answers</code>.</p>
              <p className="mt-2">The agent traces validation to <code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded font-mono not-italic">additional_questions.ex:209</code> — a strict string match with no Unicode normalization.</p>
              <p className="mt-2">That one implementation detail explains the behavior. Instead of manually navigating unfamiliar modules, I get a precise, contextual answer.</p>
            </blockquote>

            {/* Agent 3 */}
            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">3. The Browser Reproducer</h3>
            <p className="italic text-gray-500">Provides proof.</p>

            <p>Sometimes the system needs to be tested end-to-end.</p>

            <p>This agent:</p>
            <ul className="list-disc pl-6 space-y-1 my-4">
              <li>Launches Playwright</li>
              <li>Loads the live survey</li>
              <li>Submits real responses</li>
              <li>Observes persistence</li>
            </ul>

            <p>It answers: <strong>Can we reproduce this deterministically?</strong></p>

            <blockquote className="border-l-[3px] border-sky-500 pl-4 my-5 text-gray-500">
              <p className="font-medium text-gray-700 mb-2">Example</p>
              <p>Correct URL parameters → response saved.<br />Missing identity → blocked.</p>
              <p className="mt-2">Conclusion: The system works. The issue is in the customer's template.</p>
              <p className="mt-2">Reproduction prevents unnecessary escalation.</p>
            </blockquote>

            {/* Agent 4 */}
            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">4. The API Simulator</h3>
            <p className="italic text-gray-500">Tests payload-level behavior.</p>

            <p>For integration tickets, I use an agent that crafts controlled API calls.</p>

            <p>It:</p>
            <ul className="list-disc pl-6 space-y-1 my-4">
              <li>Sends structured payloads</li>
              <li>Modifies encoding</li>
              <li>Tests edge cases</li>
              <li>Compares response codes</li>
            </ul>

            <p>This isolates whether the failure is:</p>
            <ul className="list-disc pl-6 space-y-1 my-4">
              <li>Payload formatting</li>
              <li>Encoding mismatch</li>
              <li>Validation logic</li>
              <li>Missing required fields</li>
            </ul>

            <p>It removes guesswork.</p>

            {/* Production Access */}
            <h2 className="text-[22px] font-semibold text-gray-900 mt-14 mb-4 pt-8 border-t border-gray-200">
              Production Access Without Guessing
            </h2>

            <p>Claude connects through <strong>MCP</strong> (Model Context Protocol):</p>
            <ul className="list-disc pl-6 space-y-1 my-4">
              <li>Direct PostgreSQL access (Classic)</li>
              <li>Supabase access (Zensurveys)</li>
            </ul>

            <p>To prevent schema hallucination, I store verified SQL templates in CLAUDE.md.</p>

            <p>This ensures:</p>
            <ul className="list-disc pl-6 space-y-1 my-4">
              <li>Queries start from known-good patterns</li>
              <li>Table relationships are stable</li>
              <li>Investigations follow a defined checklist</li>
            </ul>

            <p>The agent doesn't rediscover the system every time. It operates within guardrails.</p>

            {/* Structured Memory */}
            <h2 className="text-[22px] font-semibold text-gray-900 mt-14 mb-4 pt-8 border-t border-gray-200">
              Structured Memory
            </h2>

            <p>Three files make the system durable.</p>

            <div className="overflow-x-auto my-6 rounded-lg border border-gray-200 bg-gray-50/50">
              <table className="w-full text-[15px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200 bg-gray-100/60">
                    <th className="text-left py-3 px-4 pr-6 font-semibold text-gray-900">File</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 pr-6 font-medium text-gray-900">CLAUDE.md</td>
                    <td className="py-3 px-4">8-step investigation workflow, SQL templates, integration gotchas, validation constraints. Enforces process discipline.</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 pr-6 font-medium text-gray-900">MEMORY.md</td>
                    <td className="py-3 px-4">Persists across sessions. Tracks repeat customers, known encoding patterns, historical root causes, edge cases. If we've seen it before, we don't start from zero.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 pr-6 font-medium text-gray-900">Codebase Reference</td>
                    <td className="py-3 px-4">Known unfixed bugs, exact file paths, SurveyJS quirks, scoring system behaviors. Replaces institutional memory in a one-person team.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Case Study */}
            <h2 className="text-[22px] font-semibold text-gray-900 mt-14 mb-4 pt-8 border-t border-gray-200">
              🔍 Case Study: The Umlaut Bug
            </h2>

            <p>A customer reports:</p>
            <ul className="list-disc pl-6 space-y-1 my-4">
              <li><code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded font-mono">additional_answers</code> returns 400</li>
              <li>Score submission works</li>
            </ul>

            <p>That suggests a narrow validation failure.</p>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">What the agents did</h3>
            <ol className="list-decimal pl-6 space-y-3 my-4">
              <li>Queried DB → 30 answers total, only 3 with additional answers</li>
              <li>Found stored options with mixed encoding — some spelled-out German umlauts, some actual Unicode characters</li>
              <li>Traced Elixir validation → exact string match, no normalization</li>
              <li>Tested API live: Unicode umlaut → 400, spelled-out version → 201</li>
            </ol>

            <div className="rounded-lg bg-gray-50/50 border border-gray-200 px-5 py-4 my-6 text-[15px] leading-relaxed">
              <p className="font-semibold text-gray-900">Root Cause</p>
              <p className="mt-1">Mixed encoding in stored options + strict string comparison = deterministic rejection.</p>
            </div>

            <div className="overflow-x-auto my-6 rounded-lg border border-gray-200 bg-gray-50/50">
              <table className="w-full text-[15px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200 bg-gray-100/60">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Without agents</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">With agents</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Manual DB exploration</td>
                    <td className="py-3 px-4" rowSpan={4}>One session. Full root cause. Tested and confirmed.</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Manual source reading</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Custom API crafting</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Context switching</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* The Compounding Effect */}
            <h2 className="text-[22px] font-semibold text-gray-900 mt-14 mb-4 pt-8 border-t border-gray-200">
              The Compounding Effect
            </h2>

            <p>Every investigation feeds the system.</p>

            <p>After resolving the umlaut issue, I updated:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>CLAUDE.md</strong> — exact string match behavior documented</li>
              <li><strong>MEMORY.md</strong> — customer + encoding pattern stored</li>
              <li><strong>Code reference file</strong> — missing normalization logged</li>
            </ul>

            <p>
              Now, when a 400 appears on <code className="text-[14px] bg-gray-100 px-1.5 py-0.5 rounded font-mono">additional_answers</code>, encoding mismatch is checked immediately.
            </p>

            <p>The system does not rediscover the issue. It matches the pattern.</p>

            <p>Over time, the investigation process becomes:</p>
            <ul className="list-disc pl-6 space-y-1 my-4">
              <li>Faster</li>
              <li>More deterministic</li>
              <li>Less dependent on recall</li>
              <li>Less vulnerable to context switching</li>
            </ul>

            <p><strong>Every resolved ticket reduces the cost of the next one.</strong></p>

            {/* What This Is */}
            <h2 className="text-[22px] font-semibold text-gray-900 mt-14 mb-4 pt-8 border-t border-gray-200">
              What This Is — and Is Not
            </h2>

            <p>This is not autonomous support.</p>
            <p>It is <strong>structured amplification</strong>.</p>

            <p>The agents reduce:</p>
            <ul className="list-disc pl-6 space-y-1 my-4">
              <li>Search time</li>
              <li>Cognitive load</li>
              <li>Repeated reasoning</li>
              <li>Context switching</li>
            </ul>

            <p>I still validate findings. I still communicate with customers. Judgment remains human.</p>

            <p>But the investigation surface area shrinks.</p>

            {/* Closing */}
            <div className="mt-14 pt-8 border-t border-gray-200">
              <h2 className="text-[22px] font-semibold text-gray-900 mb-4">
                The Real Advantage
              </h2>

              <p>Support normally scales linearly with ticket volume.</p>
              <p>Pattern recognition scales differently.</p>

              <p className="mt-4">When every ticket:</p>

              <div className="rounded-lg bg-amber-50/70 border border-amber-200/60 px-5 py-4 my-6">
                <p className="text-[16px] font-medium text-amber-900/80 leading-relaxed">
                  🧠 Investigates → Extracts a root cause → Documents the pattern → Updates system memory
                </p>
              </div>

              <p>The gap widens.</p>
              <p>Not because the AI is smarter.</p>
              <p>Because the system remembers.</p>
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
