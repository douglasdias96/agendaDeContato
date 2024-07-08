import { useSelector } from 'react-redux'
import Tarefa from '../../Componentes/Tarefa/Tarefa'
import { RootReducer } from '../../Store'
import { MainContainer, Lista } from '../../styles'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'Favorito') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.favorito === valor
        )
      } else if (criterio === 'Contatos') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.favorito === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const tarefas = filtraTarefas()

  return (
    <MainContainer>
      <p>Categoria de Busca:{termo}</p>
      <ul>
        <li>{criterio}</li>
      </ul>
      <Lista>
        {tarefas.map((t) => (
          <li key={t.id}>
            <Tarefa
              id={t.id}
              nome={t.nome}
              telefone={t.telefone}
              email={t.email}
              favorito={t.favorito}
            />
          </li>
        ))}
      </Lista>
    </MainContainer>
  )
}

export default ListaDeTarefas
