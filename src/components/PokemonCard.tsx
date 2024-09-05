import {
  CardContent,
  Typography,
  CardMedia,
  CardActionArea,
  Card,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { ListPokemon } from "../interface/pokemon.interface.ts";
import { useEffect, useState } from "react";
import { getColorFromUrl } from "../utils/color.ts";
import style from "../components/pokemoncard.module.css";
interface PokemonCardProps {
  pokemon: ListPokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const [pokemonColor, setPokemonColor] = useState<string | null>(null);

  const getPokemonColor = async () => {
    const color = await getColorFromUrl(pokemon.image);
    if (color) setPokemonColor(color);
  };

  useEffect(() => {
    getPokemonColor();
  }, []);

  //
  return (
    <Card sx={{ backgroundColor: pokemonColor }}>
      <CardActionArea>
        <Link
          to={`pokemon/${pokemon.name}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <CardMedia
            component="img"
            image={pokemon.image}
            title={pokemon.name}
          />
          <CardContent>
            <Box className={style.box}>
              <div>{pokemon.name}</div>
              <div>#{pokemon.pokedexNumber}</div>
            </Box>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
