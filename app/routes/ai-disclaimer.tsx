import type { Route } from "./+types/ai-disclaimer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Disclaimer | Mindscratch.dev" },
    { name: "description", content: "My AI disclaimer" },
  ];
}

export function headers() {
  return {
    "Cache-Control": "max-age=300, s-maxage=3600, stale-while-revalidate=300",
  };
}

export default function AiDisclaimer() {
  return (
    <div className="flex px-4 py-16 flex-col items-center justify-center">
      <article className="mt-16 space-y-6 md:space-y-8 font-extralight max-w-3xl text-lg">
        <h1 className="text-4xl font-thin">AI Disclaimer</h1>
        <p>
          It got me thinking, as you're reading this blog, that I should
          probably just be straight about something. I use AI to help write a
          good deal of the content here. Yeah, an AI co-worker, helping me
          hammer out the words.
        </p>
        <p>And no, I'm not ashamed of this. Not trying to hide it, either.</p>
        <p>
          It took me a while to decide to just lay it out there, but then it hit
          me: <strong>I'm a developer</strong>. My whole professional life
          revolves around using tools. Smart IDEs that autocomplete like they're
          reading my mind? I lean on them. Heavily. It's just how we get stuff
          done, how we build better.
        </p>
        <p>
          That's exactly how I see AI for my writing. The core ideas, the
          thoughts, the experiences I want to get across,{" "}
          <strong>that's all me</strong>. That stuff is bubbling up in my own
          head. But the actual act of taking those raw thoughts and turning them
          into actual words, something that flows? Well, AI is often much better
          at that specific part than I am. Writing, for me, has always been kind
          of a struggle.
        </p>
        <p>
          The fundamental reason this blog even exists is because I want to
          share. My thoughts, my experiences. Maybe help other developers
          navigate their own stuff. But the writing part? That was always the
          barrier. This blog, these posts, they probably wouldn't exist if AI
          wasn't in the picture. I'd still be in that "someday I'll write it all
          down" phase.
        </p>
        <p>
          It's pretty awesome that we live in a time where these tools can fill
          in those gaps. It helps me take my ideas, my thoughts, and get them
          out there. AI is just really good at putting the words together. So,
          they are absolutely still my thoughts, my perspective. AI just helps
          me articulate them. And I'm perfectly fine with that. It's a tool, and
          I'm going to use it to ship thoughts, help fellow devs, and maybe
          spark the next great refactor.
        </p>
        <p>
          And look, if that whole AI-assisted thing ruins the magic for you, I
          get it. Seriously. Feel free to bail. But if you stick around, know
          you're reading the same brain (my brain) just spell-checked and
          polished up at the speed of light.
        </p>
        <p>Welcome to the future's writer's room. Grab a seat.</p>
      </article>
    </div>
  );
}
