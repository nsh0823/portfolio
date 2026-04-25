import Image from "next/image";
import {
  BriefcaseBusiness,
  CircleDot,
  Code2,
  Coffee,
  Dumbbell,
  GraduationCap,
  Languages,
  MapPin,
  Music2,
  PawPrint,
  Sparkles,
} from "lucide-react";

const experienceHighlights = [
  {
    title: "Survey & Solutions, DataSpring Korea",
    period: "2022 - 2025",
    detail:
      "Built online surveys with HTML, CSS, and JavaScript, cleaned survey data, supported script reuse, and automated recurring department workflows.",
  },
  {
    title: "Internal quotation system",
    period: "instaQuote",
    detail:
      "Designed and developed an internal quotation web application with Figma, Google Apps Script, HTML, CSS, and JavaScript, reducing manual quote work by about 40%.",
  },
  {
    title: "Automation and team enablement",
    period: "Operations",
    detail:
      "Created JavaScript, Apps Script, and macro-based automation that shortened repetitive work, reduced manual errors, and helped teammates move faster.",
  },
];

const educationItems = [
  "Naver Boostcamp Web/Mobile 10th, full-stack web development",
  "Encore Playdata, AI application software development and data analysis",
  "Furman University, B.A. in Japanese Studies",
  "Seinan Gakuin University, exchange study in Japanese",
];

const skillGroups = [
  "React",
  "Next.js",
  "TypeScript",
  "Vue.js",
  "Node.js",
  "Express",
  "NestJS",
  "MySQL",
  "Docker",
  "AWS",
  "GitHub Actions",
  "Tailwind CSS",
];

const hobbies = [
  { label: "Working out", icon: Dumbbell },
  { label: "Tennis", icon: CircleDot },
  { label: "Violin", icon: Music2 },
  { label: "Coffee", icon: Coffee },
  { label: "Dog walks", icon: PawPrint },
];

export default function AboutPage() {
  return (
    <main className="min-h-svh bg-[radial-gradient(circle_at_12%_0%,rgba(15,118,110,0.16),transparent_30%),radial-gradient(circle_at_86%_12%,rgba(244,211,94,0.22),transparent_26%),linear-gradient(180deg,#f8fbfb,#eef5f6)] px-5 pb-12 pt-28 text-black sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <aside className="lg:sticky lg:top-28">
          <div className="relative">
            <Image
              src="/images/avatars/violin.png"
              alt="Peter Nam playing violin avatar"
              width={1024}
              height={1536}
              priority
              className="h-auto w-full object-contain"
            />
            <div className="mt-4 rounded-lg border border-black/10 bg-white/78 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/45">
                Full-stack developer
              </p>
              <h2 className="mt-2 text-3xl font-semibold leading-tight text-black">
                Peter Nam
              </h2>
              <p className="mt-3 flex items-center gap-2 text-sm text-black/58">
                <MapPin className="size-4" />
                Seoul, South Korea
              </p>
            </div>
          </div>
        </aside>

        <section className="space-y-8">
          <header className="border-b border-black/10 pb-8">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-black/45">
              <Sparkles className="size-4" />
              About
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-[0.94] text-black sm:text-6xl lg:text-7xl">
              About
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-black/64">
              I am an aspiring full-stack web developer who enjoys turning
              complex problems into simple, elegant web solutions. I care about
              seamless user experiences, practical automation, and building
              tools that help people work with less friction.
            </p>
          </header>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-black/10 bg-white/72 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
              <BriefcaseBusiness className="size-5 text-[#0f766e]" />
              <p className="mt-4 text-2xl font-semibold">3+ years</p>
              <p className="mt-1 text-sm leading-6 text-black/56">
                Survey programming, automation, and internal tool development.
              </p>
            </div>
            <div className="rounded-lg border border-black/10 bg-white/72 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
              <GraduationCap className="size-5 text-[#b45309]" />
              <p className="mt-4 text-2xl font-semibold">Full-stack</p>
              <p className="mt-1 text-sm leading-6 text-black/56">
                Naver Boostcamp and Encore Playdata bootcamp training.
              </p>
            </div>
            <div className="rounded-lg border border-black/10 bg-white/72 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
              <Languages className="size-5 text-[#2563eb]" />
              <p className="mt-4 text-2xl font-semibold">EN / JP / KR</p>
              <p className="mt-1 text-sm leading-6 text-black/56">
                Native-level English and business Japanese communication.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-black/10 bg-white/78 p-6 shadow-[0_18px_48px_rgba(15,23,42,0.09)] sm:p-8">
            <h2 className="text-2xl font-semibold">What drives me</h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-black/62">
              <p>
                What I love most about coding is the problem-solving aspect. It
                feels like assembling a complex puzzle, and the moment the final
                piece fits is what keeps me motivated.
              </p>
              <p>
                Before focusing fully on web development, I worked for about
                three years at DataSpring Korea as a survey programmer and
                automation specialist. That experience shaped how I think about
                software: a good tool should remove repetitive work, reduce
                errors, and make the next decision clearer.
              </p>
              <p>
                I approach challenges with a positive mindset and a determined
                attitude. I like learning new domains, working through ambiguity,
                and staying with a problem until the result is useful.
              </p>
            </div>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <div className="grid gap-4">
              {experienceHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-black/10 bg-white/78 p-6 shadow-[0_14px_34px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-lg font-semibold text-black">
                      {item.title}
                    </h3>
                    <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-black/50">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-black/58">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <div className="grid gap-6 lg:grid-cols-2">
            <section className="rounded-lg border border-black/10 bg-white/78 p-6 shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl font-semibold">Education</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-black/62">
                {educationItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#0f766e]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-lg border border-black/10 bg-white/78 p-6 shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
              <h2 className="flex items-center gap-2 text-2xl font-semibold">
                <Code2 className="size-5 text-[#0f766e]" />
                Stack
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {skillGroups.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold text-black/58"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <section className="rounded-lg border border-black/10 bg-white/78 p-6 shadow-[0_14px_34px_rgba(15,23,42,0.08)] sm:p-8">
            <h2 className="text-2xl font-semibold">Outside of code</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {hobbies.map((hobby) => {
                const Icon = hobby.icon;

                return (
                  <div
                    key={hobby.label}
                    className="flex items-center gap-3 rounded-lg border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black/62"
                  >
                    <Icon className="size-4 text-[#0f766e]" />
                    {hobby.label}
                  </div>
                );
              })}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
