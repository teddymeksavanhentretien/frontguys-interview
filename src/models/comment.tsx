import { RatingEnum } from "./rating";

export type Comment = {
    id: number;
    pokemonId: number;
    comment: string;
    rating: RatingEnum;
    author: string;
    date: string;
}