import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import Card from 'react-bootstrap/Card'
import { Pokemon } from '../models/pokemon'

interface PokemonList {
  pokemons: Pokemon[];
}

export default function PokemonList ({pokemons}: PokemonList) {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])

  useEffect(() => {
    setPokemonList(pokemons)
  }, [pokemons])

  return (
    <Card>
      <Card.Body>
        {pokemonList.map((pokemon, key) => <PokemonCard key={key} pokemon={pokemon} />)}
      </Card.Body>
    </Card>
  )
}
