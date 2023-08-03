import Layout from "../components/Layout.tsx";

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <div class="flex items-center justify-center h-screen" style={{backgroundImage: "url(/assets/ss.png)", backgroundSize: "cover"}}>
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

function Info_InnerComponent(props) {
  return (
    <>
    <div class="flex flex-col gap-8 w-11/12 sm:w-2/3 mx-auto my-20">
    <div class="flex items-center gap-8">
      <div class="h-[3px] w-full bg-gray-400"></div>
      <p class="text-3xl sm:text-5xl font-bold text-stone-600 tracking-wider text-center whitespace-nowrap">サーバーへの参加方法は?</p>
      <div class="h-[3px] w-full bg-gray-400"></div>
    </div>
    <div style="text-align: center;">
      <h2 class="text-4xl font-extrabold text-stone-900 mb-4 tracking-widest">対応バージョン</h2>
      <h2 class="text-2xl font-extrabold text-stone-900 mb-4 tracking-widest">1.8.x ~ 1.20.x (JE&BE)</h2>
      <h2 class="text-xl font-extrabold text-stone-900 mb-4 tracking-widest">お好きなバージョンで参加してください！</h2>
    </div>
    <div class="flex mx-auto">
      <span class="bg-gray-200 px-6 py-3 rounded-lg text-gray-800 mr-2 text-xl tracking-wide">play.kurisaba.com</span>
      <button id="copyButton" class="bg-blue-500 px-6 py-3 rounded-lg text-white focus:outline-none text-xl hover:bg-blue-700 transition">Copy</button>
    </div>
    <div style="text-align: center;">
      <h2 class="text-2xl font-extrabold text-stone-900 mb-4 tracking-widest">さぁ、楽しいサバイバルを始めよう。</h2>
    </div>
  </div>
      <div class="flex items-center gap-8">
        <div class="h-[3px] w-full bg-gray-400"></div>
        <p class="text-3xl sm:text-5xl font-bold text-stone-600 tracking-wider text-center whitespace-nowrap">
          なぜクリ鯖？
        </p>
        <div class="h-[3px] w-full bg-gray-400"></div>
      </div>
      <section class="py-16" style={{zIndex: 1}}>
        <div class="container mx-auto flex justify-center relative">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center gap-8">
            <div class="w-full bg-red-400 rounded-lg shadow-lg p-8">
              <div class="text-white text-2xl mb-4">
                <i class="fas fa-fire"></i>
              </div>
              <div class="h-full flex flex-col">
                <p class="text-xl font-bold text-white mb-2">
                  マイクラの楽しさを最大限に
                </p>
                <p class="text-white">
                  普通のサーバーに飽きましたか？このサーバーは百年遊んでも飽きません！
                </p>
              </div>
            </div>
            <div class="w-full bg-yellow-400 rounded-lg shadow-lg p-8">
              <div class="text-white text-2xl mb-4">
                <i class="fas fa-star"></i>
              </div>
              <div class="h-full flex flex-col">
                <p class="text-xl font-bold text-white mb-2">
                  バニラにはない、新しさ。
                </p>
                <p class="text-white">マイクラを更に楽しく、更に愉快に。</p>
              </div>
            </div>
            <div class="w-full bg-green-400 rounded-lg shadow-lg p-8">
              <div class="text-white text-2xl mb-4">
                <i class="fas fa-tree"></i>
              </div>
              <div class="h-full flex flex-col">
                <p class="text-xl font-bold text-white mb-2">平和</p>
                <p class="text-white">
                  荒らしを断固許さぬ姿勢を貫き、平和を維持しています。あなたの物資が取られる心配はありません。
                </p>
              </div>
            </div>
            <div class="w-full bg-blue-400 rounded-lg shadow-lg p-8">
              <div class="text-white text-2xl mb-4">
                <i class="fas fa-globe"></i>
              </div>
              <div class="h-full flex flex-col">
                <p class="text-xl font-bold text-white mb-2">
                  グローバルなコミュニティ
                </p>
                <p class="text-white">世界とコネクトし、つながろう。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="flex items-center gap-8">
        <div class="h-[3px] w-full bg-gray-400"></div>
        <p class="text-3xl sm:text-5xl font-bold text-stone-600 tracking-wider text-center whitespace-nowrap">
          代表の一言
        </p>
        <div class="h-[3px] w-full bg-gray-400"></div>
      </div>
      <div class="flex justify-center gap-4 my-5 mb-10">
        <div class="w-1/3 flex justify-end mx-[5px]">
          <img
            class="w-[90px] h-[90px] rounded-full mt-[-15px]"
            src="/assets/face.png"
          />
        </div>
        <div class="text-center" style={{width: "calc(100vw - 200px)"}}>
          <h2 class="text-md md:text-xl font-extrabold text-stone-900 mb-4 tracking-widest">
            皆さんが楽しく遊び、交流できるサーバー。これが理念です。
          </h2>
          <h2 class="text-md md:text-xl font-extrabold text-stone-900 mb-4 tracking-widest">
            平和であることが全てです
          </h2>
        </div>
      </div>

      <div class="flex items-center gap-8 mb-8">
        <div class="h-[3px] w-full bg-gray-400"></div>
        <p class="text-3xl sm:text-5xl font-bold text-stone-600 tracking-wider text-center whitespace-nowrap">
          Join Discord
        </p>
        <div class="h-[3px] w-full bg-gray-400"></div>
      </div>
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
