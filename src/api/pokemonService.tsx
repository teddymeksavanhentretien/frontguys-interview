import { pokemons } from './data'

export const pokemonService = {
    fetchAll: () => {
        return Promise.resolve(pokemons)
    },
    fetchOne: (id: string) => {
        return Promise.resolve(pokemons.filter(p => p.id === parseInt(id))[0])
    },
    filter: (text: string) => {
        return Promise.resolve(pokemons.filter(p => p.name.toLowerCase().includes(text.toLowerCase())))
      }
};