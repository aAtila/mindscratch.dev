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
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-thin">mindscratch.dev</h1>
      <main className="mt-8 space-y-4 font-extralight max-w-prose">
        <p>
          Great developers aren't born. They're forged through countless "aha"
          moments.
        </p>
        <p>It's about the moments</p>
        <ul className="pl-8 list-disc space-y-2 list-inside">
          <li>
            when you discover <strong>prop drilling</strong> isn't a code smell
            rather a sign your component hierarchy doesn't match your data flow.
          </li>
          <li>
            when you realize that true abstraction opportunities reveal
            themselves through <strong>maintenance pain</strong>, not
            architectural planning.
          </li>
          <li>
            when you learn that <strong>deleting code</strong> is often more
            valuable than writing it.
          </li>
          <li>
            when you understand that <strong>"future-proofing"</strong> often
            means "complexifying the present without understanding the future".
          </li>
          <li>
            when you finally understand that your{" "}
            <strong>"universal component"</strong> handling 7 different use
            cases is really just three distinct components struggling to break
            free from premature abstraction.
          </li>
        </ul>
        <p>
          My goal is to explore these transformative insights. The patterns that
          emerge after years of debugging. The architectural decisions that seem
          obvious only in hindsight. The subtle differences between code that
          works and <strong>code that scales</strong>.
        </p>
        <p>This isn't about "10x developers" or "ninja programmers."</p>
        <p>
          It's about the journey from writing code to understanding systems.
        </p>
        <p>Join me as we explore:</p>
        <ul className="pl-8 list-disc space-y-2 list-inside">
          <li>why some React components are more reusable than others</li>
          <li>how TypeScript can shape better architecture</li>
          <li>when performance optimization actually matters</li>
          <li>what makes code truly maintainable</li>
        </ul>
        <p>Let's scratch beneath the surface.</p>
      </main>
    </div>
  );
}
