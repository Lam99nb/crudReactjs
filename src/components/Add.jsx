import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';


const Add = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0, 8);
        let a = name, b = age;
        Employees.push({ id: uniqueId, name: a, age: b });
        history('/')
    }

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: '1rem' }}>
                <Form.Group className="mb-3" controlId='formName'>
                    <Form.Control type='text' placeholder='Your name' required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId='formAge'>
                    <Form.Control type='text' placeholder='Your age' required onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button type='submit' onClick={(e) => handleSubmit(e)}>Submit</Button>
            </Form>
        </div>
    )
}

export default Add