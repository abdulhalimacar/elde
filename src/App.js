import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Card from "./components/card";
import { Container } from "react-bootstrap"; //react bootstrap containerini import ettik

function App() {
  return (
    <Container className="text-center mt-4 p-4">
      <Header />
      <Card />
    </Container>
  );
}

export default App;
