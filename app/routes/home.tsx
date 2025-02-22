import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mindscratch" },
    { name: "description", content: "mindscratch.dev" },
  ];
}

export function headers() {
  return {
    "Cache-Control": "max-age=300, s-maxage=3600, stale-while-revalidate=300",
  };
}

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-4xl font-thin">mindscratch.dev</h1>
    </div>
  );
}
