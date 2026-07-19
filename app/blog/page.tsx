import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { blogPosts } from "@/lib/data/blog-posts";
import { BlogPostCard } from "@/components/blog-post-card";
import { NotifyForm } from "@/components/notify-form";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";

export const metadata: Metadata = {
  title: `Blog — ${site.name}`,
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <Reveal className="text-center">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="mt-3 text-foreground/60">
          Notes on JavaScript, backend systems, and things I&apos;ve learned the hard way. Published on
          Medium.
        </p>
      </Reveal>

      <StaggerGroup className="mt-10 space-y-4">
        {blogPosts.map((post) => (
          <StaggerItem key={post.id}>
            <BlogPostCard post={post} />
          </StaggerItem>
        ))}
      </StaggerGroup>

      <Reveal className="mt-16 text-center" delay={0.1}>
        <p className="text-sm text-foreground/60">More articles coming soon. Want to know when I publish?</p>
        <NotifyForm />
      </Reveal>
    </div>
  );
}
