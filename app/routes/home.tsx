import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mindscratch" },
    { name: "description", content: "mindscratch.dev" },
  ];
}

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-4xl font-thin">mindscratch.dev</h1>
    </div>
  );
}
