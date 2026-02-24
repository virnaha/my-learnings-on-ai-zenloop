import { Link } from "react-router-dom";

const posts = [
  {
    title: "How AI Agents Power My One-Person Support Team",
    description: "Multiple agents. Two databases. One terminal. An operational debugging architecture built on Claude Code.",
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
        <h1 className="text-[28px] font-semibold text-gray-900 tracking-tight leading-tight">Blog</h1>
        <p className="mt-2 text-[15px] text-gray-500 leading-relaxed">Notes, case studies, and things I've built at zenloop.</p>

        <div className="mt-12 space-y-10">
          {posts.map((post) => (
            <article key={post.path}>
              <Link to={post.path} className="group block">
                <time className="text-[13px] font-medium text-gray-400 tracking-wide uppercase">{post.date}</time>
                <h2 className="mt-1.5 text-[18px] font-semibold text-gray-900 group-hover:text-sky-600 transition-colors duration-200 leading-snug">
                  {post.title}
                </h2>
                <p className="mt-2 text-[15px] text-gray-500 leading-[1.7]">
                  {post.description}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </main>

      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-[640px] px-6 py-8">
          <p className="text-[13px] text-gray-400">Built with curiosity and a bit of frustration.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
