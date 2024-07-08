import styled from 'styled-components'

import { Props } from './Tarefa'
import * as enums from '../../utils/enums/tarefas'

type TagProps = {
  prioridade?: enums.Prioridade
  favorito: 'nome' | 'email' | 'telefone' | 'id' | 'Favorito'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.favorito === 'Favorito') {
    if (props.prioridade === enums.Prioridade.FAVORITO) return '#e1a32a'
    if (props.prioridade === enums.Prioridade.CONTATOS) return 'blue'
  }

  return 'blue'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  border-radius: 16px;
`

export const Descricao = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin: 16px 0;
`
export const Info = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-bottom: 16px;
`

export const BarraAcao = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2d3640;
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: green;
`
export const BotaoCancelar = styled(Botao)`
  background-color: #b8020b;
`
