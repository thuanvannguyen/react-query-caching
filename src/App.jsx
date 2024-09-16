import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import AddProduct from "./components/AddProduct";
import ListingProduct from "./components/ListingProduct";

const App = () => {
  return (
    <div className="mt-4">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <AddProduct placement="end" />
            <ListingProduct />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
