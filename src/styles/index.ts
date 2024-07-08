import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:sans-serif;
  list-style: none;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 90vh;
  overflow-y: scroll;
`

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 45% 45%;
  grid-gap: 10px;
  margin: 0 auto;
`

export const FiltroBuscar = styled.input`
  padding: 8px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
`

export default EstiloGlobal
