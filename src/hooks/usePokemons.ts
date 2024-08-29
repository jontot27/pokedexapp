import { useEffect, useState } from "react";
import {
  IndexedPokemon,
  PokemonListResponse,
  ListPokemon,
} from "../interface/pokemon.interface";
import { httpClient } from "../api/httpClient.ts";
import {
  POKEMON_API_BASE_URL,
  POKEMON_API_POKEMON_URL,
  POKEMON_IMAGES_BASE_URL,
} from "../constants.ts";

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<ListPokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(
    POKEMON_API_POKEMON_URL
  );
  useEffect(() => {
    fetchPokemon();
  }, []);

  const IndexedPokemonToListPokemon = (indexedPokemon: IndexedPokemon) => {
    const pokedexNumber = parseInt(
      indexedPokemon.url
        .replace(`${POKEMON_API_POKEMON_URL}/`, "")
        .replace("/", "")
    );
    const listPokemon: ListPokemon = {
      name: indexedPokemon.name,
      url: indexedPokemon.url,
      image: `${POKEMON_IMAGES_BASE_URL}/${pokedexNumber}.png`,
      pokedexNumber,
    };

    return listPokemon;
  };

  const fetchPokemon = async () => {
    if (nextUrl) {
      const result = await httpClient.get<PokemonListResponse>(nextUrl);
      if (result?.data?.results) {
        const listPokemons = result.data.results.map((p) =>
          IndexedPokemonToListPokemon(p)
        );
        setPokemons(listPokemons);
      }
    }
  };

  return {
    pokemons,
  };
};

export default usePokemons;
