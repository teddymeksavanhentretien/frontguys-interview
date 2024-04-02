import React from 'react'
// import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { Pokemon } from '../models/pokemon'
import { PokemonType } from '../models/pokemonType'

const styles = {
  cardContainer: {
    backgroundColor: 'white',
    padding: 5,
    margin: 5
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  }
}

interface PokemonCardProps {
  pokemon: Pokemon;
}

export default function PokemonCard ({ pokemon }: PokemonCardProps) {
  return (
    <Link to={`/${pokemon.id}`} style={styles.link}>
      <Card style={styles.cardContainer}>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>{pokemon?.genre?.map((genre: PokemonType) => genre)}</Card.Text>
        <Card.Footer>{pokemon.date}</Card.Footer>
      </Card>
    </Link>
  )
}

// PokemonCard.propTypes = {
//   pokemon: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     genre: PropTypes.arrayOf(PropTypes.string),
//     date: PropTypes.string.isRequired,
//   }).isRequired, 
// }
