import Head from "next/head";
import { Navbar } from "../ui";

interface LayoutProps {
  title?: string;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"} </title>
        <meta name="author" content="Miguel Ángel de Dios" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
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
