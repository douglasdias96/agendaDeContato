import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar } from '../../Store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

export type Props = TarefaClass

const Tarefa = ({ nome, email, telefone, id, favorito }: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [novoNome, setNovoNome] = useState(nome)
  const [novoEmail, setNovoEmail] = useState(email)
  const [novoTelefone, setNovoTelefone] = useState(telefone)
  const [novoFavorito, setNovoFavorito] = useState(favorito)

  const handleSave = () => {
    const uptadedTarefa = {
      id,
      nome: novoNome,
      email: novoEmail,
      telefone: novoTelefone,
      favorito: novoFavorito
    }
    dispatch(editar(uptadedTarefa))
    setEditando(false)
  }

  return (
    <S.Card>
      <S.Tag favorito="Favorito" prioridade={favorito}>
        {favorito}
      </S.Tag>
      <S.Descricao>
        {editando ? (
          <>
            <S.Info>
              Nome:{' '}
              <input
                value={novoNome}
                onChange={(e) => setNovoNome(e.target.value)}
              />
            </S.Info>
            <S.Info>
              Telefone:{' '}
              <input
                value={novoTelefone}
                onChange={(e) => setNovoTelefone(e.target.value)}
              />
            </S.Info>
            <S.Info>
              Email:{' '}
              <input
                value={novoEmail}
                onChange={(e) => setNovoEmail(e.target.value)}
              />
            </S.Info>
          </>
        ) : (
          <>
            <S.Info>Nome: {nome}</S.Info>
            <S.Info>Telefone: {telefone}</S.Info>
            <S.Info>Email: {email}</S.Info>
          </>
        )}
      </S.Descricao>
      <S.BarraAcao>
        {editando ? (
          <>
            <S.BotaoSalvar onClick={handleSave}>Salvar</S.BotaoSalvar>
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
