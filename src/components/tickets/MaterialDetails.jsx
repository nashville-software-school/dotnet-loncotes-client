import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getMaterial } from "../../data/materialsData";

export default function MaterialDetails() {
  const { id } = useParams();

  const [material, setMaterial] = useState(null);

  //add useEffect here to get the ticket details from the API
  useEffect(() => {
    getMaterial(id).then(setMaterial);
  }, []);

  if (!material) {
    return null;
  }

  return (
    <div className="container">
      <h2>{material.materialName}</h2>
      <Table>
        <tbody>
          <tr>
            <th scope="row">Type</th>
            <td>{material.materialType.name}</td>
          </tr>
          <tr>
            <th scope="row">Genre</th>
            <td>{material.genre.name}</td>
          </tr>
          <tr>
            <th scope="row">Out Of Circulation?</th>
            <td>
              {material.outOfCirculationSince?.split("T")[0] ||
                "In Circulation"}
            </td>
          </tr>
        </tbody>
      </Table>
      <h5>Checkouts</h5>
      {material.checkouts?.length ? (
        <Table>
          <thead>
            <tr>
              <th>Patron</th>
              <th>Checkout Date</th>
              <th>Return Date</th>
              <th>Late Fee</th>
            </tr>
          </thead>
          <tbody>
            {material.checkouts.map((co) => (
              <tr key={`checkout-${co.id}`}>
                <td>
                  {co.patron.firstName} {co.patron.lastName}
                </td>
                <td>{co.checkoutDate?.split("T")[0]}</td>
                <td>{co.returnDate?.split("T")[0] || "Checked Out"}</td>
                <td>{co.lateFee || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No checkouts for this material</p>
      )}
    </div>
  );
}
