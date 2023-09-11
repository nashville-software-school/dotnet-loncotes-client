import { useEffect, useState } from "react";
import { Button, Modal, ModalBody, Table } from "reactstrap";
import { getPatrons } from "../../data/patronsData";
import { Link } from "react-router-dom";
import UpdatePatron from './UpdatePatron';

export default function PatronList() {
    const [patrons, setPatrons] = useState([]);
    const [selectedPatron, setSelectedPatron] = useState();
    const [isModalOpen, setIsModalOpen] = useState();

    useEffect(() => {
        getPatrons().then(setPatrons);
    }, []);

    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Patrons</h4>
                <Link to="/patrons/create">Add</Link>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Active</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {patrons.map((p) => (
                        <tr key={`patrons-${p.id}`}>
                            <th scope="row">{p.id}</th>
                            <td>{p.fullName}</td>
                            <td>{p.address}</td>
                            <td>{p.email}</td>
                            <td>{p.isActive ? "Online" : "Offline"}</td>
                            <td>
                                <Link to={`${p.id}`}>Details</Link>
                            </td>
                            <td><Button onClick={() => {
                                setIsModalOpen(true);
                                setSelectedPatron(p);
                            }}>Edit</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal id='updatePatronModal' isOpen={isModalOpen} >
                <ModalBody><UpdatePatron patron={selectedPatron} setIsModalOpen={setIsModalOpen} setPatrons={setPatrons} /></ModalBody>
            </Modal>
        </div>
    );
}
