import { useEffect, useState } from "react";
import { DetailPokemon } from "../interface/pokemon.interface";
import { getColorFromUrl } from "../utils/color.ts";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

interface PokemonAvatarProps {
  pokemon: DetailPokemon;
}

const PokemonAvatar = ({ pokemon }: PokemonAvatarProps) => {
  return (
    <Card sx={{ backgroundColor: pokemon.color }}>
      <CardMedia
        component="img"
        sx={{ height: 100, objectFit: "contain" }}
        image={pokemon.sprites.other["official-artwork"].front_default}
        title={pokemon.name}
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ textTransform: "uppercase" }}>
            {pokemon.name}
          </Typography>
          <Typography sx={{ textTransform: "uppercase" }}>
            ID: {pokemon.id}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PokemonAvatar;
