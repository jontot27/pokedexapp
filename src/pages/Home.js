import { Button, Container } from "@mui/material";
import PokemonList from "../components/PokemonList.js";
import usePokemons from "../hooks/usePokemons.ts";

const Home = () => {
  const { pokemons, hasMorePokemon, fetchNextPage } = usePokemons();

  return (
    <Container>
      <PokemonList pokemons={pokemons}></PokemonList>
      {hasMorePokemon ? (
        <Button variant="contained" onClick={fetchNextPage}>
          Load More Pokemon
        </Button>
      ) : null}
    </Container>
  );
};

export default Home;
