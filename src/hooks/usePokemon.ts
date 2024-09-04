import { useEffect, useState } from "react";
import { POKEMON_API_POKEMON_URL } from "../constants.ts";
import { DetailPokemon } from "../interface/pokemon.interface";
import { httpClient } from "../api/httpClient.ts";

interface UsePokemonProps {
  pokemonName: string | undefined;
}
const usePokemon = ({ pokemonName }: UsePokemonProps) => {
  const [pokemon, setPokemon] = useState<DetailPokemon | null>(null);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    if (pokemonName) {
      fetchPokemon();
    }
  }, [pokemonName]);

  const fetchPokemon = async () => {
    if (pokemonName) {
      setIsLoading(true);
      const url = `${POKEMON_API_POKEMON_URL}/${pokemonName}`;
      const result = await httpClient.get<DetailPokemon>(url);
      if (result?.data) {
        setPokemon(result.data);
      }
      setIsLoading(false);
    }
  };
  return {
    pokemon,
    isloading,
  };
};

export default usePokemon;
