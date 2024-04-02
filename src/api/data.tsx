import { RatingEnum } from "../models/rating";
import { Pokemon } from "../models/pokemon";
import { Comment } from "../models/comment";

export const pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'Dracaufeu',
      genre: ['Feu', 'Vol'],
      img: 'Dracaufeu.png',
      description: "Sa capacité à voler plus rapidement qu'un avion à réaction fait toute sa fierté. Des flammes, dont la température atteint les 2 000 °C, dansent à l'intérieur de son corps. Quand il rugit, leur puissance augmente. Grâce au phénomène Gigamax, il a pris la forme d'un Dracaufeu géant doté d'ailes de feu.",
      date: new Date(Date.now()).toUTCString()
    },
    {
      id: 2,
      name: 'Tortank',
      genre: ['Eau'],
      img: 'Tortank.png',
      description: "Tortank est un bipède massif de la famille des tortues. Les extrémités supérieures gauche et droite de sa carapace sont ornées d'un canon à eau pouvant être orienté dans diverses directions. Formé au combat, sa tête s'est endurcie.",
      date: new Date(Date.now()).toUTCString()
    }
  ];

  export const comments: Comment[] = [
    {
      id: 1,
      pokemonId: 1,
      comment: "Faible contre l'eau",
      rating: RatingEnum.bad,
      author: 'Sacha',
      date: new Date(Date.now()).toUTCString()
    },
    {
      id: 2,
      pokemonId: 1,
      comment: 'Terrible en combat',
      rating: RatingEnum.awesome,
      author: 'Grey',
      date: new Date(Date.now()).toUTCString()
    },
    {
      id: 3,
      pokemonId: 1,
      comment: "Est plus fort que l'average des pokémons",
      rating: RatingEnum.good,
      author: 'Stella',
      date: new Date(Date.now()).toUTCString()
    },
    {
      id: 4,
      pokemonId: 2,
      comment: "Un pokémon très solide",
      rating: RatingEnum.awesome,
      author: 'Blaze',
      date: new Date(Date.now()).toUTCString()
    },
    {
      id: 5,
      pokemonId: 2,
      comment: "Très puissant contre les pokémons feu",
      rating: RatingEnum.isOkay,
      author: 'Rox',
      date: new Date(Date.now()).toUTCString()
    }
  ];
  