import * as enums from '../utils/enums/tarefas'

class Tarefa {
  id: number
  nome: string
  telefone: string
  email: string
  favorito: enums.Prioridade

  constructor(
    id: number,
    nome: string,
    telefone: string,
    email: string,
    favorito: enums.Prioridade
  ) {
    this.id = id
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.favorito = favorito
  }
}

export default Tarefa
