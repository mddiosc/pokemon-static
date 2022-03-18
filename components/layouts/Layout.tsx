import Head from "next/head";
import { Navbar } from "../ui";

interface LayoutProps {
  title?: string;
}

const origin = typeof window !== "undefined" ? window.location : "";

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"} </title>
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/images/banner.png`} />
      </Head>

      <Navbar></Navbar>

      <main
        style={{
          padding: "0px, 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
