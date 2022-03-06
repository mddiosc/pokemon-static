import { Grid } from "@nextui-org/react";
import { SmallPokemon } from "../../interfaces";
import { PokemonCard } from "../pokemon";

interface PokemonListProps {
  pokemons: SmallPokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Grid.Container>
  );
};

export default PokemonList;
