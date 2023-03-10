import { useNavigate } from 'react-router-dom'
import { GetPokemonResponse } from '../../../shared/interfaces/get-pokemon-response'
import { APP_ROUTE } from '../../../shared/constants/app-routes'
import { deletePokemon } from '../../../store/reducers/pokemon-reducer'
import { useAppDispatch } from '../../../store/store-hook'

export interface UseCardPokemon {
  actions: {
    handleUpdate: (pokemonName: string) => void
    handleDelete: () => void
  }
}

export const useCardPokemon = (pokemon: GetPokemonResponse): UseCardPokemon => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleUpdate = (pokemonName: string) => {
    navigate(APP_ROUTE.updatePokemonNavigate(pokemonName))
  }
  const handleDelete = () => {
    dispatch(deletePokemon(pokemon))
  }

  return {
    actions: {
      handleDelete,
      handleUpdate,
    },
  }
}
