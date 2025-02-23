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
    <div className="flex px-4 py-16 flex-col items-center justify-center">
      <h1 className="text-4xl font-thin">mindscratch.dev</h1>
      <main className="mt-16 space-y-6 md:space-y-8 font-extralight max-w-3xl text-lg">
        <p>
          Great developers aren't born. They're forged through countless{" "}
          <strong>"aha" moments</strong>.
        </p>
        <p>
          Those eye-opening insights that change how we think about building
          apps.
        </p>
        <p>
          Maybe you've been there - staring at a bloated component, wondering
          why something so "reusable" is now impossible to maintain. Or drowning
          in CSS chaos, tweaking styles for the fifth time, questioning if
          there's a better way. Perhaps you're juggling state management
          solutions, wondering if you've overcomplicated what should have been
          simple.
        </p>
        <p>Those are the moments that shaped me.</p>
        <h2 className="text-2xl font-normal">Moments like</h2>
        <ul className="pl-4 md:pl-8 list-disc space-y-4 list-inside -mt-4">
          <li>
            when you understand that{" "}
            <strong>code is read far more often</strong> than it's written.
          </li>
          <li>
            when you learn that <strong>deleting code</strong> is often more
            valuable than writing it.
          </li>
          <li>
            when you discover that shipping to production is{" "}
            <strong>just the start</strong> of the journey.
          </li>
          <li>
            when you accept that <strong>"future-proofing"</strong> often means
            overengineering today for an unpredictable tomorrow.
          </li>
          <li>
            when you realize that true abstraction opportunities reveal
            themselves through <strong>maintenance pain</strong>, not
            architectural planning.
          </li>
          <li>
            when you finally wake up to the fact that your{" "}
            <strong>"universal component"</strong> handling 7 different use
            cases is really just three distinct components struggling to break
            free from premature abstraction.
          </li>
        </ul>
        <p>
          The lessons that only years of debugging, refactoring, and facepalming
          can teach.
        </p>
        <p>
          These aren't textbook theories - they're the patterns I stumbled into,
          the architectural calls that clicked after the damage was done, the
          subtle differences that turn code that works into{" "}
          <strong>code that scales</strong>.
        </p>
        <p>This isn't about "10x developers" or "ninja programmers".</p>
        <p>
          It's about the journey from writing code to understanding systems.
        </p>
        <h2 className="text-2xl font-normal">Why?</h2>
        <p>
          Because I've burned way too many hours fighting bad decisions (mine,
          mostly) and I'd rather you skip the worst of that pain.
        </p>
        <p>
          But let's agree on something for a full disclosure: not every lesson
          can be handed to you on a platter - some insights only sink in when
          you've tripped over your own code, cursed the screen, and figured it
          out the hard way.
        </p>
        <p>
          Those scars? They're yours to earn, and they're what make the good
          stuff click.
        </p>
        <p>
          So, while I can't save you from every stumble, I can share the
          shortcuts I've scraped together along the way.
        </p>
        <h2 className="text-2xl font-normal">Here's what we'll cover</h2>
        <ul className="-mt-4 pl-4 md:pl-8 list-disc space-y-2 md:space-y-4 list-inside">
          <li>when I learned performance isn't about micro-optimizations</li>
          <li>
            why Tailwind's utility classes clicked after I ditched bloated CSS
            messes
          </li>
          <li>
            how Shadcn taught me to own my components instead of wrestling
            library drama
          </li>
          <li>
            when "use the platform" went from buzzword to my secret weapon
          </li>
          <li>how progressive enhancements (Remix ❤️) leveled up my UX game</li>
          <li>
            how the URL quitely became my secret weapon for state management
          </li>
          <li>
            how Angular gave me architectural discipline, but React unlocked
            speed and efficiency
          </li>
          <li>and so much more...</li>
        </ul>
        <p>
          Are you in? Let's scratch beneath the surface. That's where the real
          lessons live.
        </p>
      </main>
    </div>
  );
}
