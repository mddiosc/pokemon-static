import { Grid } from "@nextui-org/react";
import { FavoriteCard } from "../pokemon";

interface FavoritesPokemonsProps {
  favorites: number[];
}

const FavoritesPokemons: React.FC<FavoritesPokemonsProps> = ({ favorites }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favorites.map((pokemonId) => (
        <FavoriteCard key={pokemonId} id={pokemonId} />
      ))}
    </Grid.Container>
  );
};

export default FavoritesPokemons;
