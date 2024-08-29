import { Card, CardContent, Typography, Box, CardMedia } from "@mui/material";
import { IndexedPokemon } from "../interface/pokemon.interface.ts";
interface PokemonCardProps {
  pokemon: ListPokemon;
}
const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={pokemon.image}
        title={pokemon.name}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography>{pokemon.name}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
