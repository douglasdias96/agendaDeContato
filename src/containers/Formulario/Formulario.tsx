import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Lista, MainContainer } from '../../styles'
import { Form, FiltroBuscar, Radio, Btn, Opcao } from './styles'
import * as enums from '../../utils/enums/tarefas'
import { cadastrar } from '../../Store/reducers/tarefas'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [favorito, setFavorito] = useState(enums.Prioridade.CONTATOS)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        telefone,
        email,
        favorito
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Lista>Nova tarefa</Lista>
      <Form onSubmit={cadastrarTarefa}>
        <div>
          <FiltroBuscar
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            type="text"
            placeholder="Nome:"
          />
          <FiltroBuscar
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            type="text"
            placeholder="Email:"
          />
          <FiltroBuscar
            type="number"
            value={telefone}
            onChange={(evento) => setTelefone(evento.target.value)}
            placeholder="Telefone:"
          />
        </div>
        {/* radio */}
        <Radio>
          <p>Prioridade:</p>

          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(e) =>
                  setFavorito(e.target.value as enums.Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.CONTATOS}
              />

              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Radio>
        <Btn type="submit">Cadastrar</Btn>
      </Form>
    </MainContainer>
  )
}

export default Formulario
