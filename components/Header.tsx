export default function Header() {
  return (
    <>
      <header class="text-center flex flex-col gap-16" style={{ zIndex: 999 }}>
        <div
          class="flex bg-header w-full fixed z-[100] top-0 left-0 text-sm sm:text-2xl font-medium text-white items-center justify-center z-[999]"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        >
          <a class=" mr-2 rounded-lg p-4 mt-1 opacity-100" href="/">
            Home
          </a>
          <a
            class=" mr-2 rounded-lg p-3 mt-1 opacity-100"
            href="https://wiki.kurisaba.com"
          >
            WIKI
          </a>
          <a
            class=" mr-2 rounded-lg p-3 mt-1 opacity-100"
            href="https://discord.gg/M9bsDXZrjK"
          >
            DISCORD
          </a>
          <a
            class=" mr-2 rounded-lg p-3 mt-1 opacity-100"
            href="https://x.com/Kurisaba_MC"
          >
            X
          </a>
          <a
            class=" mr-2 rounded-lg p-3 mt-1 opacity-100"
            href="https://www.youtube.com/@Kurisaba_MC"
          >
            YOUTUBE
          </a>
        </div>
      </header>
    </>
  );
}
