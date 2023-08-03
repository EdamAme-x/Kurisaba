import Layout from "../components/Layout.tsx";

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <div class="flex items-center justify-center h-screen">
          <div class="flex flex-col items-center md:items-baseline justify-center">
            <h1 class="text-6xl md:text-8xl font-frank font-extrabold text-stone-900 mb-4 tracking-widest logo-text">
              KURISABA
            </h1>
            <br />
            <p class="text-xl md:text-2xl ml-4 font-medium text-stone-800 slogan-text">
              世界一楽しいサバイバルサーバー
            </p>
            <br />
            <iframe
              style="height: 90px;border:none;display:block;"
              src="https://ja.namemc.com/server/play.kurisaba.com/embed"
              class="w-[350px] sm:w-[444px] md:w-[728px]"
            ></iframe>
          </div>
        </div>
        <Info_InnerComponent />
      </Layout>
    </>
  );
}

function Info_InnerComponent() {
  return (
    <>
      <div class="w-full flex justify-center flex-wrap md:flex-nowrap">
        <iframe
          src="https://discord.com/widget?id=1057956197094920312&theme=dark"
          height="500"
          allowtransparency="true"
          frameborder="0"
          class="w-full w-[95%] md:w-1/3 md:ml-5"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
        <div class="px-5 mt-5 md:mt-0 text-gray-600">
          <h2 class="text-6xl font-extrabold text-gray-800 mb-4 tracking-widest">
            世界一楽しい。
          </h2>
          <h3 class="text-2xl font-extrabold text-gray-600 mb-4 tracking-widest">
            <span class="text-green-600 font-extrabold">友達</span>{" "}
            を作り、楽しい{" "}
            <span class="text-green-600 font-extrabold">経験</span>{" "}
            を共有し、楽しもう。
          </h3>
          <h3 class="text-3xl font-extrabold text-gray-600 mb-4 tracking-widest">
            新しい <span class="text-green-700 font-extrabold">世界</span> へ、
          </h3>
          <h3 class="text-3xl font-extrabold text-gray-600 mb-4 tracking-widest">
            そして <span class="text-red-600 font-extrabold"> 明日 </span>へ、
          </h3>
          <h3 class="text-3xl font-extrabold text-gray-600 mb-4 tracking-widest">
            みんなで <span class="text-blue-600 font-extrabold"> 歴史 </span>
            に刻もう、
          </h3>
          <h3 class="text-4xl font-extrabold text-gray-800 mb-4 tracking-widest">
            この自由な世界に祝福あれ。
          </h3>
        </div>
      </div>
    </>
  );
}
