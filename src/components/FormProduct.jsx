import React from "react";
import { Button, Form } from "react-bootstrap";

const FormProduct = () => {
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Product Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Product Description" />
      </Form.Group>
      <Button variant="primary" className="mb-4">
        Submit
      </Button>
    </div>
  );
};

export default FormProduct;
