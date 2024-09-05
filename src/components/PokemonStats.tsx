import {
  Card,
  CardContent,
  Grid,
  Grid2,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { DetailPokemon } from "../interface/pokemon.interface";

interface PokemonStatsProps {
  pokemon: DetailPokemon;
}
const PokemonStarts = ({ pokemon }: PokemonStatsProps) => {
  return (
    <Card>
      <CardContent>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            {pokemon ? (
              <Table size="small">
                <TableHead>
                  <TableRow>
                    {pokemon.stats.map((stat) => {
                      return (
                        <TableCell sx={{ textTransform: "uppercase" }}>
                          {stat.stat.name}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pokemon.stats.map((stat) => {
                    return <TableCell>{stat.base_stat}</TableCell>;
                  })}
                </TableBody>
              </Table>
            ) : null}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PokemonStarts;
