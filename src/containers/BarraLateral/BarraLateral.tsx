import React from 'react'
import FiltroCard from '../../Componentes/FiltroCard'

import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../Store'
import { alteraTermo } from '../../Store/reducers/filtro'
import { FiltroBuscar } from '../../styles'

import * as enums from '../../utils/enums/tarefas'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <FiltroBuscar
          type="text"
          placeholder="buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enums.Prioridade.FAVORITO}
            criterio="Favorito"
            titulo="Favoritos"
          />
          <FiltroCard
            valor={enums.Prioridade.CONTATOS}
            criterio="Contatos"
            titulo="Cont. Normais"
          />
          <FiltroCard criterio="todas" titulo="todos os contatos" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
