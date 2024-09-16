import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import FormProduct from "./FormProduct";

const AddProduct = ({ ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="mb-4">
        Add Product
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FormProduct />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AddProduct;
