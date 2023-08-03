export default function Header() {
  return (
    <>
      <header class="text-center header-bg flex flex-col gap-16">
        <div class="flex backdrop-invert w-full fixed z-[100] top-0 left-0 text-sm sm:text-2xl font-medium text-stone-800 items-center justify-center">
          <a class="bg-slate-100/75 mr-2 rounded-lg p-4 mt-1" href="/">
            Home
          </a>
          <a
            class="bg-slate-100/75 mr-2 rounded-lg p-3 mt-1"
            href="https://wiki.kurisaba.com"
          >
            WIKI
          </a>
          <a
            class="bg-slate-100/75 mr-2 rounded-lg p-3 mt-1"
            href="https://discord.gg/M9bsDXZrjK"
          >
            DISCORD
          </a>
          <a
            class="bg-slate-100/75 mr-2 rounded-lg p-3 mt-1"
            href="https://x.com/Kurisaba_MC"
          >
            X
          </a>
          <a
            class="bg-slate-100/75 mr-2 rounded-lg p-3 mt-1 hover:scale-105"
            href="https://www.youtube.com/@Kurisaba_MC"
          >
            YOUTUBE
          </a>
        </div>
      </header>
    </>
  );
}
