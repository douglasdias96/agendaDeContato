import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../Store/reducers/filtro'
import * as S from './styles'
import * as enums from '../../utils/enums/tarefas'

import { RootReducer } from '../../Store'

export type Props = {
  titulo: string
  criterio: 'Favorito' | 'Contatos' | 'todas'
  valor?: enums.Prioridade
}

const FiltroCard = ({ titulo, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const verifaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'Favorito') {
      return tarefas.itens.filter((item) => item.favorito === valor).length
    }
    if (criterio === 'Contatos') {
      return tarefas.itens.filter((item) => item.favorito === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const ativo = verifaEstaAtivo()
  const contator = contarTarefas()
  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contator}</S.Contador>
      <S.Label>{titulo}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
