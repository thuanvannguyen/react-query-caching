import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormProduct = () => {
  const { handleSubmit, register } = useForm();
  const onsubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Product Name"
          {...register("title", { required: true })}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          placeholder="Product Content"
          {...register("content", { required: true })}
        />
      </Form.Group>
      <Button type="submit" variant="primary" className="mb-4">
        Submit
      </Button>
    </form>
  );
};

export default FormProduct;