import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative overflow-hidden">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Make anything possible with
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Web development
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            VSCodeVim does not directly load your ~/.vimrc file. However, it
            provides its own set of configurations that can mimic many common
            .vimrc settings. You'll need to translate your .vimrc configurations
            into VS Code settings.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My Projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              contact me
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Only Navigation */}
      <div className="absolute bottom-8 right-4 z-[20] flex flex-col md:hidden gap-3 items-end">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-4 py-2 text-sm sm:px-5 sm:py-3 sm:text-base text-white min-w-[140px] text-center transition-all duration-200 ease-in-out"
        >
          Learn more
        </Link>
        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-4 py-2 text-sm sm:px-5 sm:py-3 sm:text-base text-white min-w-[140px] text-center transition-all duration-200 ease-in-out"
        >
          My Projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-4 py-2 text-sm sm:px-5 sm:py-3 sm:text-base text-white min-w-[140px] text-center transition-all duration-200 ease-in-out"
        >
          Contact me
        </Link>
      </div>

      <div className="absolute flex bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-10 left-0 z-[10]"
      />
    </main>
  );
}
