"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { projects } from "@/lib/data/projects";

const PAGES = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

type PaletteContextValue = { open: boolean; setOpen: (open: boolean) => void };
const PaletteContext = createContext<PaletteContextValue | null>(null);

export function CommandPaletteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (!e.key) return;
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function go(href: string) {
    setOpen(false);
    router.push(href);
  }

  return (
    <PaletteContext.Provider value={{ open, setOpen }}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 pt-[15vh]"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-lg border border-black/10 bg-background shadow-2xl dark:border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Command label="Command palette">
              <Command.Input
                autoFocus
                placeholder="Search pages and projects..."
                className="w-full border-b border-black/10 bg-transparent px-4 py-3 text-sm outline-none dark:border-white/10"
              />
              <Command.List className="max-h-80 overflow-y-auto p-2">
                <Command.Empty className="p-4 text-sm text-foreground/60">No results found.</Command.Empty>
                <Command.Group heading="Pages" className="px-2 py-1 text-xs uppercase text-foreground/50">
                  {PAGES.map((page) => (
                    <Command.Item
                      key={page.href}
                      onSelect={() => go(page.href)}
                      className="cursor-pointer rounded-md px-3 py-2 text-sm data-[selected=true]:bg-black/5 dark:data-[selected=true]:bg-white/10"
                    >
                      {page.label}
                    </Command.Item>
                  ))}
                </Command.Group>
                <Command.Group heading="Projects" className="px-2 py-1 text-xs uppercase text-foreground/50">
                  {projects.map((project) => (
                    <Command.Item
                      key={project.slug}
                      onSelect={() => go(`/projects/${project.slug}`)}
                      className="cursor-pointer rounded-md px-3 py-2 text-sm data-[selected=true]:bg-black/5 dark:data-[selected=true]:bg-white/10"
                    >
                      {project.title}
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </div>
        </div>
      )}
    </PaletteContext.Provider>
  );
}

function usePalette() {
  const ctx = useContext(PaletteContext);
  if (!ctx) throw new Error("usePalette must be used within CommandPaletteProvider");
  return ctx;
}

export function CommandPaletteTrigger() {
  const { setOpen } = usePalette();
  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      title="Search (⌘K)"
      className="inline-flex h-9 items-center gap-2 rounded-md border border-black/10 px-3 text-sm text-foreground/70 transition-colors hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
    >
      <Search size={14} />
      <span className="hidden sm:inline">Search</span>
      <kbd className="hidden rounded border border-black/10 px-1 text-xs text-foreground/50 sm:inline dark:border-white/10">
        ⌘K
      </kbd>
    </button>
  );
}
