import React from "react";
import { useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon.ts";
import { Container, Box } from "@mui/system";
import { Grid } from "@mui/material";
import PokemonAvatar from "./PokemonAvatar.tsx";

const PokemonDetails = () => {
  let { pokemonName } = useParams();

  const { pokemon, isLoading } = usePokemon({ pokemonName });
  return (
    <Container>
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Grid
          item
          container
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          {isLoading ? (
            <Box>Loading...</Box>
          ) : pokemon ? (
            <Grid item sx={12} sm={6}>
              <PokemonAvatar pokemon={pokemon} />
            </Grid>
          ) : (
            <Box>Pokemon Not Found</Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default PokemonDetails;
