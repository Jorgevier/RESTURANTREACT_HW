import Container from "react-bootstrap/Container"
import Header from "./components/Header"
import {Reviews} from "./components/Reviews"

export default function App(){

  return (
    <Container fluid data-bs-theme="dark" className='app'>
      <Header/>
      <Reviews/>
    </Container>
  )
}