import Image from "next/image";
import { Github, Globe } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  websiteUrl: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    title: "Kiki's Restraunt",
    description:
      "A local restaurant aiming to attract more customers by boosting its online presence, showcasing menu items, offering online reservations, and building trust with high-quality photos of food and ambiance.",
    tags: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "OpenTable API",
      "Resend API",
    ],
    githubUrl: "https://github.com/BabyDell/Kikis-Restaurant",
    websiteUrl: "https://kikis-restaurant.vercel.app/",
    imageUrl: "/img/ProjectKiki.jpg",
  },
  {
    title: "Real Estate Agent Website",
    description:
      "Luxury Real Estate website to build online presence and branding, increase client engagement, showcase listings, and educational content",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Spark API"],
    githubUrl: "https://github.com/BabyDell/newMGWebSite",
    websiteUrl: "https://new-mg-website.vercel.app/",
    imageUrl: "/img/ProjectMaria.jpg",
  },
  {
    title: "Personal Blog",
    description:
      "Personal blog to share my thoughts, experiences, and projects. Uses md files to create blog or case studies posts, a template for it,  and Next.js to render them.",
    tags: ["TypeScript", "Next.js", "Tailwind"],
    githubUrl: "https://github.com/BabyDell/personal-blog",
    websiteUrl: "https://andy-felix-personal-blog.vercel.app/",
    imageUrl: "/img/ProjectBlog.jpg",
  },
];

export default function Projects() {
  return (
    <div className="py-16 w-full">
      <section id="Projects">
        <div className="max-w-7xl w-full sm:mx-auto">
          <h2 className="text-4xl tracking-wide text-slate-200 mb-10 font-Playfair_Display font-semibold ml-10">
            Projects
          </h2>
          <div className="space-y-16 mx-5">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-zinc-800/60 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-zinc-900/70"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-Playfair_Display font-semibold tracking-wide text-slate-200 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 mb-4 font-serifx">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-slate-200 hover:text-white transition-colors duration-200"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        GitHub
                      </Link>
                      <Link
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-slate-200 hover:text-white transition-colors duration-200"
                      >
                        <Globe className="w-5 h-5 mr-2" />
                        Website
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
