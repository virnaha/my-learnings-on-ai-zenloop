import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const posts = [
  {
    title: "AI Agents for Solo Support",
    description: "How Claude Code powers a one-person support team — agent architecture, CLAUDE.md guardrails, skills & plugins, and the compounding learning loop.",
    date: "25 Feb 2026",
    tag: "CS Monthly",
    path: "/agents",
  },
  {
    title: "Building an AI-Powered RFP Analyzer",
    description: "How I built a RAG-based tool that reduced RFP response time from days to hours using GPT-4, Supabase, and meta-prompting techniques.",
    date: "2025",
    tag: "Case Study",
    path: "/rfp",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-2xl font-semibold tracking-tight">My Learnings on AI</h1>
            <p className="mt-1 text-sm text-muted-foreground">Notes, case studies, and things I've built at zenloop.</p>
          </div>
        </div>
      </header>

      <main className="flex-1 py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl space-y-6">
            {posts.map((post) => (
              <Link
                key={post.path}
                to={post.path}
                className="block rounded-lg border border-border/40 bg-card p-5 hover:shadow-md hover:border-border transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent-foreground">
                    {post.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="text-lg font-semibold">{post.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
