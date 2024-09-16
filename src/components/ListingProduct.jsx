import Table from "react-bootstrap/Table";

const ListingProduct = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name Product</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ListingProduct;
