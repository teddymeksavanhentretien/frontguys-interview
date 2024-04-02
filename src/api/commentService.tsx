import { comments } from './data'
import { Comment } from '../models/comment';

export const commentService = {
  fetchForPokemon : (pokemonId: string) => {
      const commentList: Comment[] = JSON.parse(localStorage.getItem('comments')!) || comments
      return Promise.resolve(commentList.filter(c => c.pokemonId === parseInt(pokemonId)))
    }
  };