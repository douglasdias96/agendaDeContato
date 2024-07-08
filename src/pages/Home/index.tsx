import BotaoAdicionar from '../../Componentes/BotaoAdicionar/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas/ListaDeTarefas'

const Home = () => {
  return (
    <>
      <BarraLateral />
      <ListaDeTarefas />
      <BotaoAdicionar />
    </>
  )
}

export default Home
