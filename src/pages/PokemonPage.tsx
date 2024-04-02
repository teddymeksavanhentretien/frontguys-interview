import React, { useEffect, useState, Fragment } from 'react'
import Card from 'react-bootstrap/Card'
import CommentList from '../components/CommentList'
import { Pokemon } from '../models/pokemon'
import { useParams } from 'react-router-dom'
import { pokemonService } from '../api/pokemonService'
 
export default function PokemonPage () {  
  const [pokemon, setPokemon] = useState<Pokemon|null>(null)
  const { id } = useParams()

  useEffect(() => {
    let isSubscribed = true;

    const fetchPokemon = async () => {
        try {
          if (id) {
            const data = await pokemonService.fetchOne(id)
            if (isSubscribed) {
              setPokemon(data);
            }
          }
        } catch (error) {
            console.error(error);
        }
    };

    fetchPokemon();

    return () => {
        isSubscribed = false;
    };
  }, [])

  return (
    <Fragment>
      {pokemon && 
        <Card>
          <Card.Title>{pokemon.name}</Card.Title>
          <Card.Body>
          <img src={`/images/${pokemon.img}`} width={100}/>
            <div><b>Genre</b> : {pokemon.genre.map(genre => genre)}</div>
            <div><b>Sortie France</b> : {pokemon.date}</div>
            <div><b>Description</b> : {pokemon.description}</div>
            <div>
              <b>Commentaires:</b>
              {id && <CommentList id={id} />}
            </div>
          </Card.Body>
        </Card>
      }
    </Fragment>
  )
}
