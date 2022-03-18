import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";
import FavoritesPokemons from "../../components/ui/FavoritesPokemon";

interface FavoritesPageProps {}

const FavoritesPage: NextPage<FavoritesPageProps> = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons);
  }, []);

  return (
    <Layout title="Pokémons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemons favorites={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
