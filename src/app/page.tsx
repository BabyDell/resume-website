import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      {/* <Meteors number={10}/> */}
      <section id="Home" className="min-h-dvh w-full flex items-center justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row sm:mx-10 mx-5 mt-10">
          <div className=" md:w-[60%] mt-10 ml-10  mx-auto ">
            <div className="w-fit">
              <h2 className="inline-block text-3xl sm:text-4xl md:text-5xl font-serif tracking-wide text-slate-200 mb-2 typewriter">
                Hey, there 👋🏼
              </h2>
            </div>
            <h1 className="inline-block text-4xl sm:text-5xl md:text-6xl font-serif tracking-wider text-zinc-400 mt-2">
              I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-custom-gradient">
                Andy Felix
              </span>
            </h1>
            <h1 className="inline-block text-4xl sm:text-5xl md:text-6xl font-serif tracking-wider text-white mt-2">
              a Software Engineer
            </h1>
            <p className="inline-block text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide text-slate-200 mt-5">
              currently building user experiences
              <br /> that drive growth
            </p>
          </div>
          <div className="md:w-[40%] flex items-center justify-center">
            <Image
              src="/img/HeadShot.png"
              alt="Picture of the author"
              width={350}
              height={350}
              className="rounded-lg transform -rotate-6 transition-transform duration-500 hover:rotate-0 w-[250px] mt-10 md:w-full"
            />
          </div>
        </div>
      </section>
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
