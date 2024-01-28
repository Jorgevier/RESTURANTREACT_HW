import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/esm/Container"

export default function Header(){
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Resturant Review</Navbar.Brand>
            </Container>
        </Navbar>
    )

}