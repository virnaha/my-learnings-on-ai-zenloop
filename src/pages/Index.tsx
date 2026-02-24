import { Link } from "react-router-dom";

const Index = () => {
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
            <time className="text-[13px] font-medium text-gray-400 tracking-wide uppercase">2025</time>
            <h1 className="mt-2 text-[28px] font-semibold text-gray-900 tracking-tight leading-tight">
              Building an AI-Powered RFP Analyzer
            </h1>
            <p className="mt-2 text-[16px] text-gray-500 leading-relaxed">
              How I built a RAG-based tool that reduced RFP response time from days to hours using GPT-4, Supabase, and meta-prompting techniques.
            </p>
          </header>

          <div className="space-y-6 text-[16px] text-gray-700 leading-[1.8]">

            {/* The Problem */}
            <h2 className="text-[22px] font-semibold text-gray-900 mt-14 mb-4 pt-8 border-t border-gray-200">
              The Problem
            </h2>

            <blockquote className="border-l-[3px] border-sky-500 pl-4 my-5 italic text-gray-500">
              "Got an RFP. 200 questions. Need it by next week." — That Slack message used to mean one thing: my entire week was gone.
            </blockquote>

            <p>
              Manuel is our sales team. When an RFP comes in, he needs answers fast. But these aren't simple questionnaires:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>100-200 questions covering everything from GDPR compliance to product features to data security</li>
              <li>1-7 days to complete depending on complexity and stakeholder availability</li>
              <li>80% repetition — we'd answered most questions before, somewhere</li>
              <li>One at a time — Manuel couldn't handle multiple RFPs simultaneously</li>
            </ul>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">The Old Process</h3>
            <ol className="list-decimal pl-6 space-y-2 my-4">
              <li>Skim the RFP, assess scope, panic slightly</li>
              <li>Search through old RFPs, Notion docs, email threads</li>
              <li>Copy-paste, adapt language, hope it still applies</li>
              <li>Wait on legal for security questions</li>
              <li>Wait on product for feature confirmations</li>
              <li>Final polish, send to Manuel</li>
              <li>Repeat everything next week for a similar RFP</li>
            </ol>

            <div className="rounded-lg bg-sky-50/60 border border-sky-100 px-5 py-4 my-6 text-[15px] text-sky-900/80 leading-relaxed">
              <strong>The Insight:</strong> We have 8-10 really solid past RFPs. We have product documentation. We have legal templates. This is just a knowledge retrieval problem.
            </div>

            {/* The Journey */}
            <h2 className="text-[22px] font-semibold text-gray-900 mt-14 mb-4 pt-8 border-t border-gray-200">
              The Journey
            </h2>

            <p>
              I'm not an AI researcher. I'm a solution engineer who saw a problem and wasn't afraid to try different tools until something worked.
            </p>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">Lovable — Fast Prototyping</h3>
            <p>
              <strong>What I built:</strong> Basic interface to upload RFPs, display questions, enter answers manually. Got something functional in a few hours — perfect for proving the concept. Hit backend constraints quickly though. Couldn't build the actual RAG system I needed.
            </p>
            <p><em>Key lesson: Start with whatever tool gets you to "does this work?" fastest.</em></p>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">Cursor — Building the Real System</h3>
            <p>
              <strong>What I built:</strong> The actual RAG implementation — Supabase database, vector embeddings, semantic search. Excellent for debugging. When things broke (and they did), Cursor helped me understand what went wrong and how to fix it.
            </p>
            <p><em>Key lesson: Use Cursor when you need to build something properly and want to understand it.</em></p>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">Replit — The Failed Experiment</h3>
            <p>
              Tried it because people recommended it. The interface just didn't click with how I work. No criticism of Replit itself — it's probably great for others.
            </p>
            <p><em>Key lesson: If a tool frustrates you, switch. You won't finish the project if you hate the tool.</em></p>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">Claude Code — Final Polish</h3>
            <p>
              Bug fixes, optimizations, UI improvements. Terminal-based, quick iterations, perfect for "this button doesn't quite work right."
            </p>
            <p><em>Key lesson: Use Claude Code when your core system works and you just need refinements.</em></p>

            {/* How It Works */}
            <h2 className="text-[22px] font-semibold text-gray-900 mt-14 mb-4 pt-8 border-t border-gray-200">
              🔧 How It Works: RAG in 5 Steps
            </h2>

            <p>
              RAG = Retrieval Augmented Generation. Fancy term for: find relevant past answers, use them as context for AI generation.
            </p>
            <ol className="list-decimal pl-6 space-y-3 my-4">
              <li><strong>Document Storage:</strong> Upload our best past RFPs into a Supabase database with pgvector extension.</li>
              <li><strong>Chunking:</strong> Break documents into ~500 word pieces with 50-token overlap. You can't feed entire RFPs to an AI at once.</li>
              <li><strong>Vector Embeddings:</strong> Convert each chunk into numerical coordinates (1536 dimensions) using OpenAI's text-embedding-ada-002. Think of it like GPS coordinates for meaning.</li>
              <li><strong>Semantic Search:</strong> When a new question comes in, embed it and find chunks with similar "coordinates" using cosine similarity (0.7+ threshold).</li>
              <li><strong>Context-Aware Generation:</strong> Take the relevant chunks, inject them into a GPT-4 prompt, generate an answer adapted for the new question.</li>
            </ol>

            {/* Tech Stack */}
            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">Tech Stack</h3>
            <div className="overflow-x-auto my-6 rounded-lg border border-gray-200 bg-gray-50/50">
              <table className="w-full text-[15px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200 bg-gray-100/60">
                    <th className="text-left py-3 px-4 pr-6 font-semibold text-gray-900">Component</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Technology</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 pr-6 font-medium text-gray-900">Database</td>
                    <td className="py-3 px-4">Supabase (PostgreSQL + pgvector)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 pr-6 font-medium text-gray-900">AI Model</td>
                    <td className="py-3 px-4">GPT-4 for generation, text-embedding-ada-002 for embeddings</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 pr-6 font-medium text-gray-900">Frontend</td>
                    <td className="py-3 px-4">React + Tailwind CSS</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 pr-6 font-medium text-gray-900">Hosting</td>
                    <td className="py-3 px-4">Supabase Edge Functions</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Current Workflow */}
            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">Current Workflow</h3>
            <ol className="list-decimal pl-6 space-y-2 my-4">
              <li>Upload new RFP (PDF)</li>
              <li>System extracts questions automatically</li>
              <li>For each question, search knowledge base (top 10 chunks, 0.7+ similarity)</li>
              <li>GPT-4 generates first draft using retrieved context</li>
              <li>Export document</li>
              <li>Manuel reviews, polishes, validates accuracy</li>
            </ol>

            {/* Meta-Prompting */}
            <h2 className="text-[22px] font-semibold text-gray-900 mt-14 mb-4 pt-8 border-t border-gray-200">
              🔍 The Meta-Prompting Breakthrough
            </h2>

            <p>
              Here's something I learned that changed everything: meta-prompting — teaching the AI how to help you.
            </p>

            <p>
              Instead of asking "Build me an RFP analyzer," I'd tell the AI how to think about the problem. Give it context about my role, my constraints, what success looks like.
            </p>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">Generic vs. Meta Prompt</h3>

            <p><strong>Generic:</strong> <em>"How do I implement vector search?"</em></p>
            <p>Result: Generic tutorial, too complex, didn't fit my stack.</p>

            <p className="mt-4"><strong>Meta-prompt:</strong> <em>"I'm using Supabase pgvector. I understand SQL basics but not vector operations. Explain how to implement semantic search for RFP questions, optimized for ~10 documents, where response time matters more than perfect accuracy."</em></p>
            <p>Result: Specific code for my setup, explanation of tradeoffs, suggestions for my use case.</p>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">The Framework</h3>
            <div className="rounded-lg bg-gray-50/50 border border-gray-200 px-5 py-4 my-6 text-[15px] leading-relaxed">
              <ul className="space-y-1">
                <li><strong>WHO:</strong> I'm an SE with basic coding, not a backend dev</li>
                <li><strong>WHAT:</strong> Building RFP analyzer with RAG</li>
                <li><strong>WHY:</strong> Need to save time, working solo, limited budget</li>
                <li><strong>HOW:</strong> Review my approach, explain tradeoffs</li>
                <li><strong>SUCCESS:</strong> Works reliably, I can maintain it, costs &lt;€50/month</li>
              </ul>
            </div>

            {/* Results */}
            <h2 className="text-[22px] font-semibold text-gray-900 mt-14 mb-4 pt-8 border-t border-gray-200">
              The Results
            </h2>

            <div className="overflow-x-auto my-6 rounded-lg border border-gray-200 bg-gray-50/50">
              <table className="w-full text-[15px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200 bg-gray-100/60">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Metric</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Before</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">After</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-900">Time per RFP</td>
                    <td className="py-3 px-4">1-7 days</td>
                    <td className="py-3 px-4">1-2 hours</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-900">First draft speed</td>
                    <td className="py-3 px-4">Manual search</td>
                    <td className="py-3 px-4">10 minutes</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-900">Manuel's capacity</td>
                    <td className="py-3 px-4">One RFP at a time</td>
                    <td className="py-3 px-4">Multiple simultaneous</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-900">Question coverage</td>
                    <td className="py-3 px-4">Manual hunting</td>
                    <td className="py-3 px-4">80-90% automated</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">The Hidden Value</h3>
            <p>Beyond speed savings, the tool provides strategic insights:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Focus signals:</strong> Shows which questions need real thinking vs. quick answers</li>
              <li><strong>Gap identification:</strong> Flags questions we've never answered — signals for documentation needs</li>
              <li><strong>Weak spots:</strong> Identifies areas where our answers are inconsistent or outdated</li>
              <li><strong>Product feedback:</strong> Reveals gaps between what prospects ask and what we deliver</li>
            </ul>

            {/* Lessons Learned */}
            <h2 className="text-[22px] font-semibold text-gray-900 mt-14 mb-4 pt-8 border-t border-gray-200">
              Lessons Learned
            </h2>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">1. Ship 80%, Not 100%</h3>
            <p>
              I wanted one-click export, perfect formatting, beautiful UI, analytics dashboards. Could've spent months chasing that. Manuel doesn't care about a pretty interface. He cares about getting answers fast.
            </p>
            <p>
              <strong>Takeaway:</strong> The 80% solution that exists today beats the 100% solution you'll build "eventually."
            </p>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">2. Platform Selection Framework</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Testing an idea? → Use the easiest tool (Lovable, v0, Bolt)</li>
              <li>Building real backend logic? → Cursor (with AI assistance)</li>
              <li>Refining existing code? → Claude Code</li>
              <li>Comfortable with traditional dev? → Your preferred IDE + AI assistant</li>
            </ul>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">3. Adoption is Harder Than Building</h3>
            <p>
              Manuel uses it because it fits his existing workflow. But broader adoption? That's a different challenge entirely.
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Awareness:</strong> People need to know it exists</li>
              <li><strong>Trial:</strong> Make first use stupidly easy (no logins, no setup)</li>
              <li><strong>Regular use:</strong> Integrate into existing workflows (don't create new habits)</li>
              <li><strong>Advocates:</strong> Get power users who tell others organically</li>
            </ul>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">4. What I'd Do Differently</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Clean data first:</strong> Our past RFPs weren't well organized. Your AI is only as good as your data.</li>
              <li><strong>Test with real work from day one:</strong> Don't use fake examples. Found edge cases immediately.</li>
              <li><strong>Build feedback loops early:</strong> Should've added a "was this helpful?" button from the start.</li>
              <li><strong>Document as you go:</strong> Even a simple README helps when you revisit months later.</li>
              <li><strong>Learn meta-prompting early:</strong> Would've saved weeks of getting mediocre answers.</li>
            </ul>

            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">5. You Don't Need to Be an Expert</h3>
            <p>
              I don't understand transformer architecture. Can't explain how GPT-4 works under the hood. But I understand: retrieve relevant information → give it to AI as context → generate response. That's enough to build useful tools.
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Curiosity and willingness to try things</li>
              <li>Ability to break big problems into smaller ones</li>
              <li>Patience when things don't work (they won't, initially)</li>
              <li>Ability to explain your situation clearly (meta-prompting!)</li>
              <li>A real problem worth solving</li>
            </ul>

            {/* Your Framework */}
            <h2 className="text-[22px] font-semibold text-gray-900 mt-14 mb-4 pt-8 border-t border-gray-200">
              Your Framework: Building Your Own Tool
            </h2>
            <ol className="list-decimal pl-6 space-y-3 my-4">
              <li><strong>Identify the annoying thing:</strong> What manual task is eating your time?</li>
              <li><strong>Check if you have data:</strong> Do you have past examples, documents, knowledge somewhere? AI needs something to work with.</li>
              <li><strong>Build quick & scrappy:</strong> Prove it works in hours, not weeks.</li>
              <li><strong>Rebuild properly:</strong> Once you've proven the concept, build the real version with appropriate tools.</li>
              <li><strong>Use it yourself first:</strong> Find the problems before anyone else does.</li>
              <li><strong>Improve from real usage:</strong> Add features based on what people actually ask for, not what you think they want.</li>
            </ol>

            {/* Common Use Cases */}
            <h3 className="text-[17px] font-semibold text-gray-900 mt-10">Common Use Cases for This Approach</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>QBR Preparation:</strong> Search past customer interactions, generate summaries</li>
              <li><strong>Support Ticket Analysis:</strong> Find similar past issues, suggest solutions</li>
              <li><strong>Sales Call Summaries:</strong> Extract key points, action items, follow-ups</li>
              <li><strong>Product Feedback Synthesis:</strong> Aggregate feedback across channels, identify themes</li>
              <li><strong>Documentation Q&A:</strong> Answer questions from internal knowledge bases</li>
            </ul>

            <p>
              <strong>The Pattern:</strong> If you have knowledge scattered across documents, Slack, emails, or people's heads — AI can help consolidate and retrieve it efficiently.
            </p>

            {/* Closing */}
            <div className="mt-14 pt-8 border-t border-gray-200">
              <div className="rounded-lg bg-amber-50/70 border border-amber-200/60 px-5 py-4 my-6">
                <p className="text-[16px] font-medium text-amber-900/80 leading-relaxed">
                  🧠 Pick a problem you see every day. Build something small. See what happens.
                </p>
              </div>
              <p>
                And when you do — message me. I'd genuinely like to see what you build.
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

export default Index;
