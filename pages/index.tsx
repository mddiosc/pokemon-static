import type { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layouts";
import pokeApi from "../api/pokeApi";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { PokemonList } from "../components/pokemon";

interface HomeProps {
  pokemons: SmallPokemon[];
}

const Home: NextPage<HomeProps> = ({ pokemons }) => {
  return (
    <Layout title="Listado de pokémon">
      <PokemonList pokemons={pokemons} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((pokemon) => ({
    ...pokemon,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      pokemon.url.split("/")[6]
    }.svg`,
    id: parseInt(pokemon.url.split("/")[6]),
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
