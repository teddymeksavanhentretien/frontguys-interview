import React, { Fragment, useEffect, useState } from 'react'
import PokemonList from '../components/PokemonList'
import { Pokemon } from '../models/pokemon'
import Form from 'react-bootstrap/Form'
import { pokemonService } from '../api/pokemonService'

export default function HomePage () {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    let isSubscribed = true;

    const fetchPokemons = async () => {
        try {
            const data = await pokemonService.fetchAll()
            if (isSubscribed) {
              setPokemons(data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    fetchPokemons();

    return () => {
        isSubscribed = false;
    };
  }, [])

  const filterPokemons = ({ target: { value }}: React.ChangeEvent<HTMLInputElement>) => pokemonService.filter(value).then((res) => setPokemons(res))

  return (
    <Fragment>
      <Form.Group className="mb-3">
        <Form.Label>Chercher un pokémon</Form.Label>
        <Form.Control onChange={filterPokemons} type="text" placeholder="Tapez son nom" />
      </Form.Group>
      <div>{`${pokemons.length || 'No'} pokemon${pokemons.length > 1 ? 's' : ''} found.`}</div>
      <PokemonList pokemons={pokemons} />
    </Fragment>
  )
}
