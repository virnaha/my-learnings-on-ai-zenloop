import { Link } from "react-router-dom";

const posts = [
  {
    title: "AI Agents for Solo Support",
    description: "How Claude Code powers a one-person support team — agent architecture, CLAUDE.md guardrails, skills & plugins, and the compounding learning loop.",
    date: "Feb 25, 2026",
    path: "/agents",
  },
  {
    title: "Building an AI-Powered RFP Analyzer",
    description: "How I built a RAG-based tool that reduced RFP response time from days to hours using GPT-4, Supabase, and meta-prompting techniques.",
    date: "2025",
    path: "/rfp",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <nav className="mx-auto max-w-2xl px-6 py-5 flex items-center justify-between">
          <Link to="/" className="text-sm font-semibold text-gray-900 hover:text-sky-600 transition-colors duration-200">
            virna
          </Link>
          <div className="flex gap-5">
            <Link to="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200">blog</Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Blog</h1>
        <p className="mt-1 text-sm text-gray-500">Notes, case studies, and things I've built at zenloop.</p>

        <div className="mt-10 space-y-8">
          {posts.map((post) => (
            <article key={post.path}>
              <Link to={post.path} className="group block">
                <div className="flex items-baseline gap-3">
                  <time className="shrink-0 text-sm text-gray-400 tabular-nums">{post.date}</time>
                  <h2 className="text-base font-medium text-gray-900 group-hover:text-sky-600 transition-colors duration-200">
                    {post.title}
                  </h2>
                </div>
                <p className="mt-1 ml-[calc(theme(spacing.0))] text-sm text-gray-500 leading-relaxed">
                  {post.description}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </main>

      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-2xl px-6 py-6">
          <p className="text-xs text-gray-400">Built with curiosity and a bit of frustration.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
