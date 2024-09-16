import Table from "react-bootstrap/Table";
import useCallApi from "../api/useCallApi";

const ListingProduct = () => {
  const { data, isLoading } = useCallApi(
    "https://qcshp3-8080.csb.app/products"
  );
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name Product</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 &&
          data.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.content}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default ListingProduct;
