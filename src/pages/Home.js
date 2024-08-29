import { Container } from "@mui/material";
import PokemonList from "../components/PokemonList.js";
import usePokemons from "../hooks/usePokemons.ts";

const Home = () => {
  const { pokemons } = usePokemons();

  return (
    <Container>
      <PokemonList pokemons={pokemons}></PokemonList>
    </Container>
  );
};

export default Home;
