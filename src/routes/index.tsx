import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4 text-foreground">
      <h1 className="text-4xl font-bold tracking-tight">Hello, React</h1>
      <p className="text-muted-foreground">
        Projeto em branco com Vite + TypeScript + Tailwind.
      </p>
    </main>
  );
}

