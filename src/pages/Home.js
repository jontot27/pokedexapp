import { Button, Container, Grid } from "@mui/material";
import PokemonList from "../components/PokemonList.js";
import usePokemons from "../hooks/usePokemons.ts";
import { IndexedType } from "../interface/pokemon.interface.ts";

const Home = () => {
  const {
    pokemons,
    hasMorePokemon,
    fetchNextPage,
    pokemonTypes,
    selectedType,
    setSelectedType,
    setPokemons,
  } = usePokemons();

  const handleSelectType = (type: IndexedType | null) => {
    if (type) {
      setSelectedType(type);
    } else {
      setPokemons([]);
      setSelectedType(null);
    }
  };

  return (
    <Container>
      <Grid containe spacing={2} mt={1}>
        <Grid
          container
          item
          sx={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {pokemonTypes.map((type) => (
            <Button
              variant="contained"
              sx={{
                "&.MuiButton-contained": {
                  background: type.color,
                },
                m: 1,
              }}
              onClick={() => handleSelectType(type)}
            >
              {type.name}
            </Button>
          ))}
          <Button
            variant="contained"
            sx={{
              m: 1,
            }}
            onClick={() => handleSelectType(null)}
          >
            ALL
          </Button>
        </Grid>
        <Grid
          container
          item
          sx={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <PokemonList pokemons={pokemons}></PokemonList>
          {hasMorePokemon ? (
            <Button variant="contained" onClick={fetchNextPage}>
              Load More Pokemon
            </Button>
          ) : null}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
