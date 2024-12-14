import About from "@/components/About";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      {/* <Meteors number={10}/> */}
      <section className="h-dvh w-full flex items-center justify-center">
        <div className="max-w-6xl w-full flex mx-10 ">
          <div className="w-full md:w-[60%] my-auto mt-10 ">
            <div className="ml-10 md:mx-0">
            <h2 className="text-4xl sm:text-5xl font-serif tracking-wide text-slate-200 mb-2">Hey, there 👋🏼</h2>
            <h1 className="text-5xl sm:text-6xl font-serif tracking-wider text-zinc-400 ml-1">
              I&apos;m <span className="bg-clip-text text-transparent bg-custom-gradient ">Andy Felix</span> <br /><span className="text-white">a Software Engineer</span>
            </h1>
            <p className="text-3xl sm:text-4xl font-serif tracking-wide text-slate-200 mt-5 ">currently building user experiences<br/> that drive growth</p>
          </div>
          </div>
          <Image
            src="/img/HeadShot.png"
            alt="Picture of the author"
            width={350}
            height={350}
            className="rounded-lg m-auto transform -rotate-6 transition-transform duration-500 hover:rotate-0 md:block hidden" 
          />
        </div>
      </section>
      <Projects />
      <About />
    </main>
  );
}
