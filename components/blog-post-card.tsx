import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/data/blog-posts";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-lg border border-black/10 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-lg hover:shadow-black/5 dark:border-white/10 dark:hover:border-white/20"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="font-medium transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
          {post.title}
        </p>
        <ArrowUpRight
          size={18}
          className="mt-0.5 shrink-0 text-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-500"
        />
      </div>
      <p className="mt-2 text-sm text-foreground/60">{post.excerpt}</p>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-foreground/50">
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.readingTime}</span>
        <span>·</span>
        <span>Medium</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-black/10 px-2 py-0.5 text-[11px] text-foreground/60 dark:border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
