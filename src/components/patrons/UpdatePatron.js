import { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { getPatrons, updatePatron } from '../../data/patronsData';

export default function UpdatePatron({ patron, setIsModalOpen, setPatrons }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const submit = () => {
        const newPatron = {
            id: patron.id,
            firstName,
            lastName,
            email,
        };

        updatePatron(newPatron).then(() => {
            getPatrons().then(setPatrons);
            setIsModalOpen(false);
        });
    };

    useEffect(() => {
        setFirstName(patron.firstName);
        setLastName(patron.lastName);
        setEmail(patron.email);
    }, [patron])

    return (
        <div className='container'>
            <div className='container' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <h4>Edit Selected Patron</h4>
                <Button onClick={() => {
                    setIsModalOpen(false);
                }}>X</Button>
            </div>

            <Form>
                <FormGroup>
                    <Label htmlFor='firstName'>First Name</Label>
                    <Input
                        type='text'
                        placeholder='First Name'
                        name='firstName'
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='lastName'>Last Name</Label>
                    <Input
                        type='text'
                        placeholder='Last Name'
                        name='lastName'
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                        type='text'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </FormGroup>
                <Button onClick={submit}>
                    Save
                </Button>
            </Form>
        </div>
    )
};