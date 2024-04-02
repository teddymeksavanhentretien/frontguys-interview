import { PokemonType } from "./pokemonType";

export type Pokemon = {
    id: number;
    name: string;
    genre: PokemonType[];
    img: string;
    description: string;
    date: string;
}