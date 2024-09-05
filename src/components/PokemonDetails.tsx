import React from "react";
import { Link, useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon.ts";
import { Container, Box } from "@mui/system";
import { Button, Grid } from "@mui/material";
import PokemonAvatar from "./PokemonAvatar.tsx";
import PokemonBasicInfo from "./PokemonBasicInfo.tsx";
import PokemonStats from "./PokemonStats.tsx";

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
        mt={1}
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
            <>
              <Grid item sx={12} sm={6}>
                <PokemonAvatar pokemon={pokemon} />
              </Grid>
              <Grid item sx={12} sm={6}>
                <PokemonBasicInfo pokemon={pokemon} />
              </Grid>
              <Grid item sx={12} sm={6}>
                <PokemonStats pokemon={pokemon} />
              </Grid>
            </>
          ) : (
            <Box>Pokemon Not Found</Box>
          )}
        </Grid>
        <Grid>
          <Button component={Link} to={"/"} variant="contained">
            Go To Pokemon List
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PokemonDetails;
