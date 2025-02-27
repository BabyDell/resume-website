import Image from "next/image";

export default function About() {
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <section id="About" className="mb-16">
        <h1 className="text-5xl font-serif tracking-wide text-slate-200 mb-12">About Me</h1>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Image
              src="/img/HeadShot.png"
              alt="Andy Felix"
              width={300}
              height={300}
              className="rounded-lg transform rotate-3 transition-transform duration-500 hover:rotate-0"
            />
            <div>
              <h2 className="text-3xl font-serif tracking-wide text-zinc-400 mb-4">Andy Felix</h2>
              <p className="text-lg text-slate-300 mb-4">
                I&apos;m a passionate Software Engineer with a focus on creating engaging user experiences that drive growth. 
                With a strong foundation in both frontend and backend technologies, I specialize in building responsive, 
                scalable web applications using modern frameworks and best practices.
              </p>
              <p className="text-lg text-slate-300">
                My approach combines technical expertise with creative problem-solving, always aiming to deliver 
                solutions that not only meet but exceed client expectations. I&apos;m constantly learning and adapting 
                to new technologies to stay at the forefront of web development.
              </p>
            </div>
          </div>
        </section>

        <section id="Skills">
          <h2 className="text-4xl font-serif tracking-wide text-slate-200 mb-8">Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/50 rounded-lg p-6 transition-all duration-300 hover:bg-zinc-900/70">
              <h3 className="text-2xl font-serif tracking-wide text-zinc-400 mb-4">Frontend Skills</h3>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>HTML5 and CSS3 (flexbox, grid, media queries)</li>
                <li>Responsive design</li>
                <li>Tailwind CSS</li>
                <li>JavaScript (ES6+)</li>
                <li>React (State Managment) </li>
                <li>PhotoShop</li>
                <li>NEXT.JS</li>
              </ul>
            </div>

            <div className="bg-zinc-900/50 rounded-lg p-6 transition-all duration-300 hover:bg-zinc-900/70">
              <h3 className="text-2xl font-serif tracking-wide text-zinc-400 mb-4">Backend Skills</h3>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Node.js</li>
                <li>RESTful API design and implementation</li>
                <li>Server-side rendering</li>
                <li>Authentication and authorization using OAuth 2.0, JWT</li>
                <li>Database Management (Prisma, PostgreSQL)</li>
              </ul>
            </div>

            <div className="bg-zinc-900/50 rounded-lg p-6 transition-all duration-300 hover:bg-zinc-900/70">
              <h3 className="text-2xl font-serif tracking-wide text-zinc-400 mb-4">Tools & DevOps</h3>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Version control (Git, GitHub)</li>
                <li>Package managers (npm, Yarn)</li>
                <li>Build tools and bundlers (Webpack)</li>
                <li>Deployment (Vercel, AWS)</li>
                <li>CI/CD pipelines (GitHub Actions, CircleCI)</li>
              </ul>
            </div>

            <div className="bg-zinc-900/50 rounded-lg p-6 transition-all duration-300 hover:bg-zinc-900/70">
              <h3 className="text-2xl font-serif tracking-wide text-zinc-400 mb-4">Soft Skills</h3>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Strong problem-solving abilities</li>
                <li>Excellent communication skills</li>
                <li>Team collaboration and leadership</li>
                <li>Time management and organization</li>
                <li>If I don&apos;t know I will learn it mentality</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
  );
}

