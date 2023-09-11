import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getPatron } from "../../data/patronsData";

export default function PatronDetails() {
    const { id } = useParams();

    const [patron, setPatron] = useState(null);

    //add useEffect here to get the ticket details from the API
    useEffect(() => {
        getPatron(id).then(setPatron);
    }, []);

    if (!patron) {
        return null;
    }

    return (
        <div className="container">
            <h2>{patron.fullName}</h2>
            <Table>
                <tbody>
                    <tr>
                        <th scope="row">First Name</th>
                        <td>{patron.firstName}</td>
                    </tr>
                    <tr>
                        <th scope="row">Last Name</th>
                        <td>{patron.lastName}</td>
                    </tr>
                    <tr>
                        <th scope="row">Address</th>
                        <td>{patron.address}</td>
                    </tr>
                    <tr>
                        <th scope="row">Email</th>
                        <td>{patron.email}</td>
                    </tr>
                </tbody>
            </Table>
            <h5>Checkouts</h5>
            {patron.checkouts?.length ? (
                <Table>
                    <thead>
                        <tr>
                            <th>Checkout Date</th>
                            <th>Return Date</th>
                            <th>Late Fee</th>
                            <th>Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patron.checkouts.map((co) => {
                            return (
                                <tr key={`checkout-${co.id}`}>
                                    <td>{co.checkoutDate?.split("T")[0]}</td>
                                    <td>{co.returnDate?.split("T")[0] || "Checked Out"}</td>
                                    <td>{"$" + co.lateFee || "N/A"}</td>
                                    <td>{co.lateFee !== null ? co.paid ? "Paid" : "Outstanding" : "N/A"}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            ) : (
                <p>No checkouts for this patron</p>
            )}
        </div>
    );
}