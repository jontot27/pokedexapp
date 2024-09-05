import { useEffect, useState } from "react";
import { DetailPokemon } from "../interface/pokemon.interface";
import { getColorFromUrl } from "../utils/color.ts";
import { Card, CardContent, CardMedia } from "@mui/material";

interface PokemonAvatarProps {
  pokemon: DetailPokemon;
}

const PokemonAvatar = ({ pokemon }: PokemonAvatarProps) => {
  const [pokemonColor, setPokemonColor] = useState<string | null>(null);

  useEffect(() => {
    getPokemonColor();
  }, []);
  const getPokemonColor = async () => {
    if (pokemon?.sprites.other["official-artwork"]?.front_default) {
      const color = await getColorFromUrl(
        pokemon.sprites.other["official-artwork"].front_default
      );
      if (color) setPokemonColor(color);
    }
  };
  return (
    <Card sx={{ backgroundColor: pokemonColor }}>
      <CardContent>
        <CardMedia
          component="img"
          sx={{ height: 100, objectFit: "contain" }}
          image={pokemon.sprites.other["official-artwork"].front_default}
          title={pokemon.name}
        />
      </CardContent>
    </Card>
  );
};

export default PokemonAvatar;
