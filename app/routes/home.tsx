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
    <div className="flex py-16 flex-col items-center justify-center">
      <h1 className="text-4xl font-thin">mindscratch.dev</h1>
      <main className="mt-16 space-y-8 font-extralight max-w-prose">
        <p>
          Great developers aren't born. They're forged through countless{" "}
          <strong>"aha" moments</strong>.
        </p>
        <p>
          Those eye-opening insights that change how we think about building
          apps.
        </p>
        <p>Moments like</p>
        <ul className="pl-8 list-disc space-y-4 list-inside -mt-4">
          <li>
            when you discover <strong>prop drilling</strong> isn't a code smell
            rather a sign your component hierarchy doesn't match your data flow.
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
            when you realize that true abstraction opportunities reveal
            themselves through <strong>maintenance pain</strong>, not
            architectural planning.
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
          obvious only in hindsight.
        </p>
        <p>
          The subtle differences between code that works and{" "}
          <strong>code that scales</strong>.
        </p>
        <p>This isn't about "10x developers" or "ninja programmers".</p>
        <p>
          It's about the journey from writing code to understanding systems.
        </p>
        <p>We will explore</p>
        <ul className="-mt-4 pl-8 list-disc space-y-4 list-inside">
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
