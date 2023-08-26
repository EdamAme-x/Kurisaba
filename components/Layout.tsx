import { Head } from "$fresh/runtime.ts";

import Header from "./Header.tsx"
import Footer from "./Footer.tsx"

export default function Layout(props: { [key: string]: string | number }) {
  return (
    <>
      <Head>
        <title>{props.title ? props.title + " | くり鯖" : "くり鯖！"}</title>
        <meta name="description" content="くり鯖公式サイト" />
      
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="stylesheet" href="/global.css" />
        <link rel="shortcut icon" href="/assets/Kurisaba.png" type="image/x-icon" />

        <script src="/swal/copy.js" defer></script>
      </Head>
      <div>
        <Header />
        {props.children}
        <Footer />
      </div>
    </>
  );
}
