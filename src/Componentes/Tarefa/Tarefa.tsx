import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover } from '../../Store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

export type Props = TarefaClass

const Tarefa = ({ nome, email, telefone, id, favorito }: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  return (
    <S.Card>
      <S.Tag favorito="Favorito" prioridade={favorito}>
        {favorito}
      </S.Tag>
      <S.Descricao>
        <S.Info>Nome: {nome}</S.Info>
        <S.Info>Telefone: {telefone}</S.Info>
        <S.Info>Email: {email}</S.Info>
      </S.Descricao>
      <S.BarraAcao>
        {editando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelar onClick={() => setEditando(false)}>
              Cancelar
            </S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelar
              onClick={() => {
                dispatch(remover(id))
              }}
            >
              Remover
            </S.BotaoCancelar>
          </>
        )}
      </S.BarraAcao>
    </S.Card>
  )
}

export default Tarefa
