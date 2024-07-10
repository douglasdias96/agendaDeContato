import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import TarefaClass from '../../models/Tarefa'

import * as enums from '../../utils/enums/tarefas'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      nome: 'Leticia Fern',
      telefone: '99999999',
      email: 'ddc_cc@sfsfsfsfsfs',
      favorito: enums.Prioridade.FAVORITO
    },
    {
      id: 2,
      nome: 'Douglas Diass',
      telefone: '99999999',
      email: 'ddc_cc@sfsfdsffsfsfsfs',
      favorito: enums.Prioridade.FAVORITO
    },
    {
      id: 3,
      nome: 'Douglasa Dias',
      telefone: '99999999',
      email: 'ddc_cc@sfsfsfsfsfs',
      favorito: enums.Prioridade.CONTATOS
    },
    {
      id: 4,
      nome: 'Douglas Dias',
      telefone: '9999999',
      email: 'ddc_cc@sfsfsfsfsf',
      favorito: enums.Prioridade.CONTATOS
    }
  ]
}

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    cadastrar: (state, action: PayloadAction<Omit<TarefaClass, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.nome.toLocaleLowerCase() ===
          action.payload.favorito.toLocaleLowerCase()
      )
      if (tarefaJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    editar: (state, action: PayloadAction<TarefaClass>) => {
      const index = state.itens.findIndex(
        (tarefa) => tarefa.id === action.payload.id
      )
      if (index !== -1) {
        state.itens[index] = action.payload
      }
    }
  }
})

export const { remover, cadastrar, editar } = tarefaSlice.actions

export default tarefaSlice.reducer
